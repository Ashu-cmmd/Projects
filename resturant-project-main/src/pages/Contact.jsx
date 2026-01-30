import React from 'react'
import Layout from '../components/Layout'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
                <Typography variant='h4'>
                    Contact My Resturant
                </Typography>
                <p>We’d love to hear from you! Whether you have questions about our menu, want to make a reservation, or are planning a special event, our team is here to help. You can reach us by phone, email, or by visiting us in person at My Restaurant . Our doors are always open to welcome food lovers and ensure you have an exceptional dining experience.</p>
            </Box>
            <Box sx={{m:3,width:"600px",ml:10,"@media (max-width:600px)":{
                width:"250px"
            }}}>
                <TableContainer >
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{bgcolor:"black",color:"white"}} align="center"
                                >Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{color:"red",pt:1}}/> 1234567890 tollfree()
                                </TableCell>
                               
                            </TableRow>
                            <TableRow><TableCell>
                                    <EmailIcon sx={{color:"skyblue",pt:1}}/> help@gmail.com 
                                </TableCell></TableRow>
                                <TableRow><TableCell>
                                    <CallIcon sx={{color:"green",pt:1}}/> 1234567890 
                                </TableCell></TableRow>
                        </TableBody>
                    </Table>

                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact