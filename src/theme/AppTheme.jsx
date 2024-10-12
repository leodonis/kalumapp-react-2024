import { CssBaseline } from '@mui/material'
import { purpleTheme } from './'
import { ThemeProvider } from '@emotion/react'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline>
            { children }
        </CssBaseline>
    </ThemeProvider>
  )
}
