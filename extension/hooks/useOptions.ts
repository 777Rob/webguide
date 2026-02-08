import { useState, useEffect, useCallback } from "react"
import { getApiKey, setApiKey as setStorageApiKey, getAutoProgress, setAutoProgress as setStorageAutoProgress } from "../utils/storage"

export const useOptions = () => {
    const [apiKey, setApiKeyValue] = useState("")

    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const key = await getApiKey()
                if (key) setApiKeyValue(key)
            } catch (error) {
                console.error("Failed to load settings", error)
            } finally {
                setIsLoading(false)
            }
        }
        loadSettings()
    }, [])

    const saveSettings = useCallback(async () => {
        if (!apiKey.trim()) return

        try {
            await setStorageApiKey(apiKey)
            setSnackbarOpen(true)
        } catch (error) {
            console.error("Failed to save settings", error)
            alert("Failed to save settings")
        }
    }, [apiKey])

    const closeSnackbar = useCallback(() => {
        setSnackbarOpen(false)
    }, [])

    return {
        apiKey,
        setApiKey: setApiKeyValue,
        snackbarOpen,
        closeSnackbar,
        saveSettings,
        isLoading
    }
}
