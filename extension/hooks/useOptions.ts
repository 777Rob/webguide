import { useState, useEffect, useCallback } from "react"
import { getApiKey, setApiKey as setStorageApiKey, getAutoProgress, setAutoProgress as setStorageAutoProgress } from "../utils/storage"

export const useOptions = () => {
    const [apiKey, setApiKeyValue] = useState("")
    const [autoProgress, setAutoProgressValue] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const key = await getApiKey()
                if (key) setApiKeyValue(key)

                const auto = await getAutoProgress()
                setAutoProgressValue(auto)
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
            await setStorageAutoProgress(autoProgress)
            setSnackbarOpen(true)
        } catch (error) {
            console.error("Failed to save settings", error)
            alert("Failed to save settings")
        }
    }, [apiKey, autoProgress])

    const closeSnackbar = useCallback(() => {
        setSnackbarOpen(false)
    }, [])

    return {
        apiKey,
        setApiKey: setApiKeyValue,
        autoProgress,
        setAutoProgress: setAutoProgressValue,
        snackbarOpen,
        closeSnackbar,
        saveSettings,
        isLoading
    }
}
