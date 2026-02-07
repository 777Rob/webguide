import { createTheme, ThemeProvider, CssBaseline, type ThemeOptions } from "@mui/material"
import { useStorage } from "@plasmohq/storage/hook"
import { useMemo, type ReactNode } from "react"

export const useThemeMode = () => {
    const [mode, setMode] = useStorage<"light" | "dark">("themeMode", "light")

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
    }

    return { mode, toggleTheme }
}

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const { mode } = useThemeMode()

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: mode === "dark" ? "#90caf9" : "#1976d2",
                    },
                    background: {
                        default: mode === "dark" ? "#121212" : "#ffffff",
                        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
                    },
                },
            }),
        [mode]
    )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
