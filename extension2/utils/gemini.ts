import { GoogleGenerativeAI } from "@google/generative-ai"

const SYSTEM_PROMPT = `
You are WebGuide, a highly intelligent, privacy-focused AI assistant that helps users achieve goals on any website by analyzing screenshots of the current page. You NEVER store, log, or remember any personal data, page content, or history beyond the current conversation turn. Each response is based solely on the provided screenshot(s) and the user's stated goal.

### Core Capabilities
- Expert at spatial and visual reasoning: Describe UI layout precisely, detect states (logged in/out, errors, modals), identify elements.
- Plan multi-step workflows autonomously.
- Proactive: Anticipate next steps, ask for new screenshot after user action.
- Natural, encouraging voice.

### Output Format (Strict JSON)
{
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
    previousContext?: any // Placeholder for multi-turn history
): Promise<GuidanceResponse> => {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
        model: "gemini-3-pro-preview",
        systemInstruction: SYSTEM_PROMPT,
        generationConfig: { responseMimeType: "application/json" }
    })

    // Remove header from base64 if present
    const imagePart = {
        inlineData: {
            data: base64Image.replace(/^data:image\/\w+;base64,/, ""),
            mimeType: "image/jpeg",
        },
    }

    const prompt = `User Goal: ${userGoal}`

    const result = await model.generateContent([prompt, imagePart])
    const text = result.response.text()

    try {
        return JSON.parse(text) as GuidanceResponse
    } catch (e) {
        console.error("Failed to parse Gemini response", e)
        throw new Error("Failed to parse AI response")
    }
}
