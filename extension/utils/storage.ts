import { Storage } from "@plasmohq/storage"

const storage = new Storage()

export const API_KEY_STORAGE_KEY = "gemini-api-key"

export const getApiKey = async (): Promise<string | undefined> => {
    return await storage.get(API_KEY_STORAGE_KEY)
}

export const setApiKey = async (key: string): Promise<void> => {
    await storage.set(API_KEY_STORAGE_KEY, key)
}

export const AUTO_PROGRESS_KEY = "auto-progress-check"

export const getAutoProgress = async (): Promise<boolean> => {
    const val = await storage.get(AUTO_PROGRESS_KEY)
    return String(val) === "true" || val === true
}

export const setAutoProgress = async (enabled: boolean): Promise<void> => {
    await storage.set(AUTO_PROGRESS_KEY, enabled)
}
