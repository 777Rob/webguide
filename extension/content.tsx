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
    // Debug log to confirm injection
    console.log("WebGuide: Content Script Mounted & Listening")

    const handleMessage = (
      request: any,
      _sender: chrome.runtime.MessageSender,
      sendResponse: (response?: any) => void
    ) => {
      // Ping pong for health check
      if (request.action === "PING") {
        sendResponse({ status: "alive" })
        return
      }

      if (request.action === "SHOW_OVERLAYS") {
        console.log("WebGuide: Showing overlays", request.suggestions)
        setOverlays(request.suggestions || [])

        // Auto-clear after timeout to not annoy user
        const timer = setTimeout(() => setOverlays([]), OVERLAY_TIMEOUT_MS)
        return () => clearTimeout(timer)
      }
    }

    chrome.runtime.onMessage.addListener(handleMessage)
    return () => chrome.runtime.onMessage.removeListener(handleMessage)
  }, [])

  return overlays
}

// --- Components ---

const ArrowPointer = () => (
  <div
    style={{
      position: "absolute",
      top: "-42px",
      left: "50%",
      transform: "translateX(-50%)",
      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
      animation: "wg-bounce 1s infinite",
      pointerEvents: "none",
      zIndex: 2147483647
    }}>
    <style>
      {`
        @keyframes wg-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}
    </style>
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21L12 3M12 21L5 14M12 21L19 14"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21L12 3M12 21L5 14M12 21L19 14"
        stroke="#f44336"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="21" r="3" fill="#f44336" />
    </svg>
  </div>
)

const HighlightBox = ({ item }: { item: OverlayItem }) => {
  let coords = item.coordinates_approx

  if (typeof coords === "string") {
    try {
      coords = JSON.parse(coords)
    } catch (e) {
      return null
    }
  }

  if (!Array.isArray(coords) || coords.length !== 4) return null

  let [ymin, xmin, ymax, xmax] = coords as number[]

  // Handle Gemini's 0-1000 scaling
  if (ymin > 1 || xmin > 1 || ymax > 1 || xmax > 1) {
    ymin /= 1000
    xmin /= 1000
    ymax /= 1000
    xmax /= 1000
  }

  if (
    typeof ymin !== "number" ||
    typeof xmin !== "number" ||
    typeof ymax !== "number" ||
    typeof xmax !== "number"
  ) {
    return null
  }

  // --- Add Padding ---
  // Expand the box by ~1% (0.01) on each side for breathing room
  // Clamp values to stay within 0-1 range
  const PADDING = 0.008
  const pYmin = Math.max(0, ymin - PADDING)
  const pXmin = Math.max(0, xmin - PADDING)
  const pYmax = Math.min(1, ymax + PADDING)
  const pXmax = Math.min(1, xmax + PADDING)

  return (
    <div
      style={{
        position: "absolute",
        top: `${pYmin * 100}%`,
        left: `${pXmin * 100}%`,
        width: `${(pXmax - pXmin) * 100}%`,
        height: `${(pYmax - pYmin) * 100}%`,
        border: "3px solid #f44336",
        borderRadius: "8px", // More rounded for nicer look
        boxShadow:
          "0 0 0 9999px rgba(0, 0, 0, 0.3), 0 0 15px rgba(244, 67, 54, 0.8)", // Dim background effect + glow
        backgroundColor: "rgba(255, 255, 255, 0.05)", // Slight highlight
        zIndex: 2147483646,
        pointerEvents: "none",
        clipPath: `inset(0 0 0 0)` // Helps with the big shadow
      }}>
      {/* Arrow Indicator */}
      <ArrowPointer />

      {/* Label */}
      <div
        style={{
          position: "absolute",
          top: "-64px", // Above arrow
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "6px 12px",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "8px",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          border: "1px solid #333",
          zIndex: 2147483647
        }}>
        {item.description}
      </div>
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
        pointerEvents: "none",
        zIndex: 2147483647, // Max Z-Index
        overflow: "hidden"
      }}>
      {overlays.map((item, index) => (
        <HighlightBox key={`${index}-${item.description}`} item={item} />
      ))}
    </div>
  )
}

export default Overlay
