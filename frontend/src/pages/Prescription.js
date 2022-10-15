import React from 'react'
import { AppBar, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import mainImg from '../images/Logo.png'

const Prescription = () => {
  return (
    <Box >
      <AppBar sx={{backgroundColor:'#FEFFFF'}}>
        <Box sx={{margin:'-4px', padding:'5px'}}>
          <img src={mainImg} alt='img goes here' style={{width:'4vw',margin:'0px'}}></img>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Prescription