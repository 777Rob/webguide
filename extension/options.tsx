import { useState, useEffect } from "react"
import { getApiKey, setApiKey } from "./utils/storage"
import "./style.css"

function Options() {
    const [apiKey, setApiKeyValue] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        const loadKey = async () => {
            const key = await getApiKey()
            if (key) setApiKeyValue(key)
        }
        loadKey()
    }, [])

    const handleSave = async () => {
        if (!apiKey) {
            setStatus("Please enter a valid API Key")
            return
        }
        await setApiKey(apiKey)
        setStatus("Saved!")
        setTimeout(() => setStatus(""), 2000)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 rounded shadow space-y-6">
                <h1 className="text-2xl font-bold">WebGuide Settings</h1>
                <p className="text-sm text-gray-500">
                    Enter your Google Gemini API Key to enable the assistant.
                </p>

                <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium">Gemini API Key</label>
                    <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKeyValue(e.target.value)}
                        placeholder="Enter your API Key"
                        className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <button
                    onClick={handleSave}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Save Key
                </button>

                {status && (
                    <p className={`text-sm text-center ${status === 'Saved!' ? 'text-green-600' : 'text-red-600'}`}>
                        {status}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Options
