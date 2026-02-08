import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

import type { GuidanceResponse } from "./utils/gemini"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

type OverlayItem = GuidanceResponse["visual_suggestions"][0]

const OVERLAY_TIMEOUT_MS = 10000

// --- Hooks ---

const useOverlays = () => {
  const [overlays, setOverlays] = useState<OverlayItem[]>([])

  useEffect(() => {
    const handleMessage = (
      request: any,
      _sender: chrome.runtime.MessageSender,
      _sendResponse: (response?: any) => void
    ) => {
      if (request.action === "SHOW_OVERLAYS") {
        console.log("WebGuide: Showing overlays", request.suggestions)
        setOverlays(request.suggestions || [])

        // Auto-clear after timeout to not annoy user
        const timer = setTimeout(() => setOverlays([]), OVERLAY_TIMEOUT_MS)
        return () => clearTimeout(timer) // clear timeout if effect re-runs or component unmounts (though unlikely here)
      }
    }

    chrome.runtime.onMessage.addListener(handleMessage)
    return () => chrome.runtime.onMessage.removeListener(handleMessage)
  }, [])

  return overlays
}

// --- Components ---

const HighlightBox = ({ item }: { item: OverlayItem }) => {
  if (!item.coordinates_approx || !Array.isArray(item.coordinates_approx))
    return null

  // Gemini returns [ymin, xmin, ymax, xmax] usually
  const [ymin, xmin, ymax, xmax] = item.coordinates_approx

  if (
    typeof ymin !== "number" ||
    typeof xmin !== "number" ||
    typeof ymax !== "number" ||
    typeof xmax !== "number"
  ) {
    return null
  }

  return (
    <div
      style={{
        position: "absolute",
        top: `${ymin * 100}%`,
        left: `${xmin * 100}%`,
        width: `${(xmax - xmin) * 100}%`,
        height: `${(ymax - ymin) * 100}%`,
        border: "3px solid #f44336",
        borderRadius: "4px",
        boxShadow: "0 0 10px rgba(244, 67, 54, 0.5)",
        backgroundColor: "rgba(244, 67, 54, 0.1)",
        display: "flex", // For the label positioning
        alignItems: "flex-start",
        pointerEvents: "auto" // Allow clicking through? No, wait. The container has pointerEvents: none. This box might need it if we want interaction later.
      }}>
      <span
        style={{
          backgroundColor: "#f44336",
          color: "white",
          padding: "2px 6px",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "0 0 4px 0",
          marginTop: "-1px", // Adjust for border
          marginLeft: "-1px"
        }}>
        {item.description}
      </span>
    </div>
  )
}

const Overlay = () => {
  const overlays = useOverlays()

  if (overlays.length === 0) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Let clicks pass through to the page
        zIndex: 999999,
        overflow: "hidden"
      }}>
      {overlays.map((item, index) => (
        <HighlightBox key={`${index}-${item.description}`} item={item} />
      ))}
    </div>
  )
}

export default Overlay
