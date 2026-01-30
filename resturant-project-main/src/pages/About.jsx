import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:10,
        textAlign:"center",
        p:3,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem" 
        },
        "& p":{
          textAlign:"justify"
        },
       "@media (max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:"1.1rem",
        }
       } 
      }}>
 <Typography variant='h4'>
  Welcome To My Resturant
 </Typography>
 <p>My Restuenmt is more than just a place to eat—it’s a space where people come together to enjoy flavorful food and memorable moments. Our menu is thoughtfully crafted to offer a wide variety of dishes, all prepared fresh with high-quality ingredients and a passion for great taste. From comforting classics to modern favorites, every meal is made with care and attention to detail.</p>
 <br/>
 <p>We focus on creating a warm and friendly atmosphere where guests feel relaxed and welcomed. Whether you’re dining with family, meeting friends, or celebrating a special occasion, My Restuenmt is committed to excellent service, consistent quality, and an enjoyable dining experience that keeps you coming back.</p>
      </Box>
    </Layout>
  )
}

export default About