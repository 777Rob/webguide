import { useState, useEffect } from "react"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"]
}

const Overlay = () => {
    const [overlays, setOverlays] = useState<any[]>([])

    useEffect(() => {
        const handleMessage = (request: any, sender: any, sendResponse: any) => {
            if (request.action === "SHOW_OVERLAYS") {
                console.log("WebGuide: Showing overlays", request.suggestions)
                setOverlays(request.suggestions || [])

                // Auto-clear after 10 seconds to not annoy user
                setTimeout(() => setOverlays([]), 10000)
            }
        }

        chrome.runtime.onMessage.addListener(handleMessage)
        return () => chrome.runtime.onMessage.removeListener(handleMessage)
    }, [])

    if (overlays.length === 0) return null

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 999999,
            overflow: "hidden"
        }}>
            {overlays.map((item, index) => {
                if (!item.coordinates_approx || !Array.isArray(item.coordinates_approx)) return null

                // Coordinates are [y1, x1, y2, x2] normalized 0-1 from Gemini usually
                // But let's assume standard [ymin, xmin, ymax, xmax] 
                // We need to double check Gemini's output format. Usually it's [ymin, xmin, ymax, xmax].
                const [ymin, xmin, ymax, xmax] = item.coordinates_approx

                return (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: `${ymin * 100}%`,
                            left: `${xmin * 100}%`,
                            width: `${(xmax - xmin) * 100}%`,
                            height: `${(ymax - ymin) * 100}%`,
                            border: "3px solid #f44336", // Red border
                            borderRadius: "4px",
                            boxShadow: "0 0 10px rgba(244, 67, 54, 0.5)",
                            backgroundColor: "rgba(244, 67, 54, 0.1)",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start"
                        }}
                    >
                        <span style={{
                            backgroundColor: "#f44336",
                            color: "white",
                            padding: "2px 6px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            borderRadius: "0 0 4px 0",
                            marginTop: "-1px",
                            marginLeft: "-1px"
                        }}>
                            {item.description}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Overlay
