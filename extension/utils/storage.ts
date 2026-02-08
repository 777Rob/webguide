import { Storage } from "@plasmohq/storage"

const storage = new Storage()

export const API_KEY_STORAGE_KEY = "gemini-api-key"
export const AUTO_PROGRESS_KEY = "auto-progress-check"

/**
 * Retrieves the stored Gemini API key.
 */
export const getApiKey = async (): Promise<string | undefined> => {
  return await storage.get<string>(API_KEY_STORAGE_KEY)
}

/**
 * Sets the Gemini API key in storage.
 */
export const setApiKey = async (key: string): Promise<void> => {
  await storage.set(API_KEY_STORAGE_KEY, key)
}

/**
 * Retrieves the auto-progress setting.
 * Defaults to false if not set.
 */
export const getAutoProgress = async (): Promise<boolean> => {
  const val = await storage.get(AUTO_PROGRESS_KEY)
  // Default to true if not set
  return val === undefined || val === true || val === "true"
}

/**
 * Enable or disable auto-progress.
 */
export const setAutoProgress = async (enabled: boolean): Promise<void> => {
  await storage.set(AUTO_PROGRESS_KEY, enabled)
}
