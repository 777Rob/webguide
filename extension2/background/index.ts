import { generateGuidance } from "../utils/gemini"
import { getApiKey } from "../utils/storage"

export { }

console.log("WebGuide Extension 2 Background Service Started")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "ANALYZE_PAGE") {
        handleAnalyzePage(request, sendResponse)
        return true // Keep channel open for async response
    }
})

async function handleAnalyzePage(request: any, sendResponse: (response: any) => void) {
    try {
        const { userGoal } = request

        // 1. Get API Key
        const apiKey = await getApiKey()
        if (!apiKey) {
            sendResponse({ error: "API Key not found. Please set it in options." })
            return
        }

        // 2. Capture Screenshot
        // Note: This requires <all_urls> and activeTab permissions
        // We target the current window's active tab
        const screenshotDataUrl = await chrome.tabs.captureVisibleTab(null, { format: "jpeg", quality: 60 })

        // 3. Call Gemini API
        const { previousContext } = request
        const guidance = await generateGuidance(apiKey, screenshotDataUrl, userGoal, previousContext)

        // 4. Send Response
        sendResponse({ success: true, data: guidance })

    } catch (error) {
        console.error("Analysis failed:", error)
        sendResponse({ error: error.message || "Unknown error occurred" })
    }
}
