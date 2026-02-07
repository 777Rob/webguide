import { generateGuidance } from "../utils/gemini"
import { getApiKey } from "../utils/storage"

export { }

console.log("WebGuide Extension 2 Background Service Started")

interface AnalyzePageRequest {
    action: "ANALYZE_PAGE"
    userGoal: string
    previousContext?: any
}

interface AnalyzePageResponse {
    success?: boolean
    data?: any
    error?: string
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request && typeof request === "object" && request.action === "ANALYZE_PAGE") {
        handleAnalyzePage(request as AnalyzePageRequest, sendResponse)
        return true // Keep channel open for async response
    }
    return false
})

// Open Side Panel on Icon Click
chrome.action.onClicked.addListener((tab) => {
    if (tab.id) {
        chrome.sidePanel.setOptions({
            tabId: tab.id,
            path: 'sidepanel.html',
            enabled: true
        });
        if (tab.windowId) {
            chrome.sidePanel.open({ windowId: tab.windowId });
        }
    }
});

// Detect Page Navigation for Smart Auto-Progress
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        // Broadcast to sidepanel (and other parts) that a navigation occurred
        chrome.runtime.sendMessage({
            action: "PAGE_CHANGED",
            tabId,
            url: tab.url
        }).catch(() => {
            // Ignore error if no receivers (sidepanel closed)
        })
    }
})

async function handleAnalyzePage(request: AnalyzePageRequest, sendResponse: (response: AnalyzePageResponse) => void) {
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
        const screenshotDataUrl = await chrome.tabs.captureVisibleTab(undefined, { format: "jpeg", quality: 60 })

        // 3. Call Gemini API
        const { previousContext } = request
        const guidance = await generateGuidance(apiKey, screenshotDataUrl, userGoal, previousContext)

        // 4. Send Response
        sendResponse({ success: true, data: guidance })

    } catch (error: any) {
        console.error("Analysis failed:", error)
        sendResponse({ error: error.message || "Unknown error occurred" })
    }
}
