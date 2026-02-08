import { useState, useRef, useEffect, useCallback } from "react"

interface UseSpeechRecognitionProps {
    onResult: (transcript: string) => void
    onError?: (error: any) => void
}

export const useSpeechRecognition = ({ onResult, onError }: UseSpeechRecognitionProps) => {
    const [isListening, setIsListening] = useState(false)
    const [isPermissionDenied, setIsPermissionDenied] = useState(false) // New state
    const recognitionRef = useRef<any>(null)

    // Use refs to keep callbacks stable
    const onResultRef = useRef(onResult)
    const onErrorRef = useRef(onError)

    useEffect(() => {
        onResultRef.current = onResult
        onErrorRef.current = onError
    }, [onResult, onError])

    const startListening = useCallback(() => {
        setIsPermissionDenied(false) // Reset on retry
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
        if (!SpeechRecognition) {
            console.error("Voice input not supported")
            alert("Voice input not supported in this browser.")
            return
        }

        // Initialize on demand if not already or if previous instance had issues
        let recognition = recognitionRef.current

        if (!recognition) {
            recognition = new SpeechRecognition()
            recognition.lang = 'en-US'
            recognition.interimResults = false
            recognition.maxAlternatives = 1

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript
                if (onResultRef.current) onResultRef.current(transcript)
                setIsListening(false)
            }

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error", event.error)
                setIsListening(false)
                
                if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                    setIsPermissionDenied(true)
                }

                if (onErrorRef.current) onErrorRef.current(event.error)
            }

            recognition.onend = () => {
                setIsListening(false)
            }
            
            recognitionRef.current = recognition
        }

        try {
            recognition.start()
            setIsListening(true)
        } catch (e) {
            console.error("Failed to start recognition", e)
             // Sometimes it throws if already started
             if (onErrorRef.current) onErrorRef.current(e)
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
        isPermissionDenied, // Expose this
        toggleListening,
        startListening,
        stopListening
    }
}
