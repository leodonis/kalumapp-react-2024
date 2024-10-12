import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar"

export const HomeLayout = () => {
  return (
    <Box sx={{display: 'flex'}}>
        <NavBar drawerWidth={drawerWidth}></NavBar>
    </Box>
  )
}
