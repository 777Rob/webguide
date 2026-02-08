import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  type ThemeOptions
} from "@mui/material"
import { useMemo, type ReactNode } from "react"

import { useStorage } from "@plasmohq/storage/hook"

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
            main: mode === "dark" ? "#90caf9" : "#1976d2"
          },
          background: {
            default: mode === "dark" ? "#121212" : "#ffffff",
            paper: mode === "dark" ? "#1e1e1e" : "#ffffff"
          }
        }
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { height: "100%", width: "100%", margin: 0, padding: 0 },
          body: {
            height: "100%",
            width: "100%",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column"
          },
          "#__plasmo": {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1
          } // Plasmo default root
        }}
      />
      {children}
    </ThemeProvider>
  )
}
