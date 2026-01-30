import React from 'react'
import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center",bgcolor:"black",p:3,color:"white"}}>
        <Box sx={{my:3,"& svg":{
            fontSize:"40px",
            cursor:"pointer",
            mr:2,
        },
        "& svg:hover":{
            color:"goldenrod",
            transform:"translateX(5px)",
            transition:"all 400ms ",
        }
        
        }}>
<InstagramIcon />
<TwitterIcon/>
<FacebookIcon/>
<LinkedInIcon />     
        </Box>
        <Typography variant="h5" sx={{ "@media (max-width:600px)":{
   fontSize:"1rem"

        }}}>
            All Rights Reserved &copy; My Resturent 
        </Typography>
    </Box>
    </>
  )
}

export default Footer