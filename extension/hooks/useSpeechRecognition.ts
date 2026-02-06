import { useState, useRef, useEffect, useCallback } from "react"

interface UseSpeechRecognitionProps {
    onResult: (transcript: string) => void
    onError?: (error: any) => void
}

export const useSpeechRecognition = ({ onResult, onError }: UseSpeechRecognitionProps) => {
    const [isListening, setIsListening] = useState(false)
    const recognitionRef = useRef<any>(null)

    // Use refs to keep callbacks stable in the effect
    const onResultRef = useRef(onResult)
    const onErrorRef = useRef(onError)

    useEffect(() => {
        onResultRef.current = onResult
        onErrorRef.current = onError
    }, [onResult, onError])

    useEffect(() => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition()
            recognition.lang = 'en-US'
            recognition.interimResults = false
            recognition.maxAlternatives = 1

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript
                if (onResultRef.current) onResultRef.current(transcript)
                setIsListening(false)
            }

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error", event && event.error)
                setIsListening(false)
                if (onErrorRef.current) onErrorRef.current(event && event.error)
            }

            recognition.onend = () => {
                setIsListening(false)
            }

            recognitionRef.current = recognition
        }
    }, []) // Empty dependency array ensures initialization only happens once

    const startListening = useCallback(() => {
        if (!recognitionRef.current) {
            // Try re-initializing if it failed or wasn't supported initially? 
            // For now, just alert.
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
            if (!SpeechRecognition) {
                console.error("Voice input not supported")
                alert("Voice input not supported in this browser")
                return
            }
        }

        try {
            if (recognitionRef.current) {
                recognitionRef.current.start()
                setIsListening(true)
            }
        } catch (e) {
            console.error("Failed to start recognition", e)
        }
    }, [])

    const stopListening = useCallback(() => {
        if (recognitionRef.current) {
            recognitionRef.current.stop()
            setIsListening(false)
        }
    }, [])

    const toggleListening = useCallback(() => {
        if (isListening) {
            stopListening()
        } else {
            startListening()
        }
    }, [isListening, startListening, stopListening])

    return {
        isListening,
        toggleListening,
        startListening,
        stopListening
    }
}
