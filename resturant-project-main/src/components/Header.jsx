import { Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import "../styles/HeaderStyles.css"
import DragHandleIcon from '@mui/icons-material/DragHandle';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 , my:2}}>
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Divider/>
            <ul className="mobile-navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
    </Box>
  )
  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color='inherit' aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" } }}    onClick={handleDrawerToggle}>
           
              <DragHandleIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>

          </Toolbar>


        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"240px"
          }}}>
           {drawer}
          </Drawer>
        </Box>
        <Box sx={{p:1}}>
        <Toolbar/>
        </Box>
       
      </Box>
    </div>
  )
}

export default Header