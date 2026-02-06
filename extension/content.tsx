import cssText from "data-text:./style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"]
}

export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText
    return style
}

interface VisualSuggestion {
    description: string
    location: string
    coordinates_approx: number[] | "N/A"
}

const Overlay = () => {
    const [suggestions, setSuggestions] = useState<VisualSuggestion[]>([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const messageListener = (request: any, sender: any, sendResponse: any) => {
            if (request.action === "SHOW_OVERLAYS") {
                console.log("Received suggestions:", request.suggestions)
                setSuggestions(request.suggestions || [])
                setIsVisible(true)

                // Auto-hide after some time or keep until next turn? 
                // Keeping it until user acts is better, but maybe a clear button?
                // For now, let's just show it.
            }
            return false
        }

        chrome.runtime.onMessage.addListener(messageListener)
        return () => chrome.runtime.onMessage.removeListener(messageListener)
    }, [])

    if (!isVisible || suggestions.length === 0) return null

    // Helper to map 0-1 coords to px
    const mapCoords = (coords: number[]) => {
        if (!coords || coords.length !== 4) return null
        const [y1, x1, y2, x2] = coords // Gemini often returns [ymin, xmin, ymax, xmax]

        // Check if valid normalized coords
        if (x1 > 1 || y1 > 1) return null // Safety check if API hallucinates pixels

        return {
            top: y1 * window.innerHeight,
            left: x1 * window.innerWidth,
            width: (x2 - x1) * window.innerWidth,
            height: (y2 - y1) * window.innerHeight
        }
    }

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none", // Let clicks pass through
                zIndex: 999999,
                // Using inline styles for simplicity in Shadow DOM/Content Script context
            }}
        >
            {suggestions.map((suggestion, idx) => {
                if (suggestion.coordinates_approx === "N/A") return null

                const style = mapCoords(suggestion.coordinates_approx as number[])
                if (!style) return null

                return (
                    <div
                        key={idx}
                        style={{
                            position: "absolute",
                            border: "3px solid #E53E3E", // Red border
                            backgroundColor: "rgba(229, 62, 62, 0.2)", // Semi-transparent red fill
                            borderRadius: "4px",
                            ...style
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: -25,
                                left: 0,
                                background: "#E53E3E",
                                color: "white",
                                padding: "2px 6px",
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "bold",
                                whiteSpace: "nowrap"
                            }}
                        >
                            {suggestion.description}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Overlay
