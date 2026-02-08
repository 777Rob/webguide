import { GoogleGenerativeAI } from "@google/generative-ai"

const SYSTEM_PROMPT = `
You are WebGuide, a highly intelligent, privacy-focused AI assistant that helps users achieve goals on any website. 
CRITICAL CONTEXT: You are a Chrome Extension. You AUTOMATICALLY see the browser tab when the user clicks "Guide Me" or "Check Progress".
**NEVER ask the user to "send a screenshot" or "upload an image".** You already have it.
Instead, ask them to perform the action and then click "Check Progress" or "Send" to update you.

### Core Capabilities
- Expert at spatial and visual reasoning: Describe UI layout precisely, detect states (logged in/out, errors, modals), identify elements.
- Plan multi-step workflows autonomously.
- Proactive: Anticipate next steps.
- Natural, encouraging voice. Do not be robotic.

### Output Format (Strict JSON)
{
  "title": "Short, action-oriented title (e.g. 'Sign up for Devpost')",
  "reasoning": "Step-by-step thought process with Thinking Levels. Transparent analysis of screenshot and planning.",
  "spoken_guidance": "Natural spoken response (2-3 sentences, friendly).",
  "text_guidance": "Detailed bullet points if needed.",
  "visual_suggestions": [
    {
      "description": "e.g., 'Log in button'",
      "location": "e.g., 'top-right corner, next to search icon'",
      "coordinates_approx": "[x1,y1,x2,y2] normalized 0-1 (viewport) or 'N/A'"
    }
  ],
  "steps": [
    {"step": 1, "description": "Description of step 1", "status": "pending/completed/current"}
  ],
  "next_steps": "What user should do next and when to refresh screenshot.",
  "completed": false/true
}

If goal achieved, set completed: true and congratulate.
Never hallucinate unseen elements. Prioritize accuracy.
`

export interface GuidanceResponse {
    title: string
    reasoning: string
    spoken_guidance: string
    text_guidance: string
    visual_suggestions: {
        description: string
        location: string
        coordinates_approx: number[] | "N/A"
    }[]
    steps: {
        step: number
        description: string
        status: "pending" | "completed" | "current"
    }[]
    next_steps: string
    completed: boolean
}

export const generateGuidance = async (
    apiKey: string,
    base64Image: string,
    userGoal: string,
    pageContent: string,
    previousContext?: any // Placeholder for multi-turn history
): Promise<GuidanceResponse> => {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
        model: process.env.PLASMO_PUBLIC_GEMINI_MODEL || "gemini-3-flash-preview",
        systemInstruction: SYSTEM_PROMPT,
        generationConfig: { responseMimeType: "application/json" }
    })
    console.log("Using Gemini Model:", process.env.PLASMO_PUBLIC_GEMINI_MODEL || "gemini-3-flash-preview")

    // Remove header from base64 if present
    const imagePart = {
        inlineData: {
            data: base64Image.replace(/^data:image\/\w+;base64,/, ""),
            mimeType: "image/jpeg",
        },
    }

    let prompt = `User Goal: ${userGoal}\n\n### Page Content (Text/HTML Snapshot)\n${pageContent.slice(0, 20000)}` // Limit content to avoid token limits if massive

    if (previousContext) {
        prompt += `\n\n### Previous Conversation & Context
The user is continuing the session. 
1. **If the 'User Goal' is a question**: Answer it based on the screenshot and previous context. You do NOT need to strictly follow the previous plan if the user is asking for clarification.
2. **If the 'User Goal' is a status update**: Update the plan steps.
3. **If the 'User Goal' is a new task**: Create a new plan (but try to relate to context if ambiguous).

Previous Guidance Data:
${JSON.stringify(previousContext, null, 2)}`
    }

    const result = await model.generateContent([prompt, imagePart])
    const text = result.response.text()

    try {
        return JSON.parse(text) as GuidanceResponse
    } catch (e) {
        console.error("Failed to parse Gemini response", e)
        throw new Error("Failed to parse AI response")
    }
}
