import { AppBar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = ( {drawerWidth=240} ) => {
  return (
    <AppBar position='fixed'>
        <Typography>
            NavBar
        </Typography>
    </AppBar>
)
}
