import { Storage } from "@plasmohq/storage"

const storage = new Storage()

export const API_KEY_STORAGE_KEY = "gemini-api-key"

export const getApiKey = async () => {
    return await storage.get(API_KEY_STORAGE_KEY)
}

export const setApiKey = async (key: string) => {
    await storage.set(API_KEY_STORAGE_KEY, key)
}
