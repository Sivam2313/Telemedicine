import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, Step, StepLabel, Stepper, Typography } from '@mui/material'
const Basic = ({setRegistrationNo,setName,setRegistrationP,setMobile}) => {
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  return (
    <Box sx={{flexFlow:'column'}} display='flex' justifyContent='center'>
      <Box sx={{ marginTop:'5vh',alignSelf:'start',marginLeft:'-4vw' }} display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">Family Registration Number</InputLabel>
        <OutlinedInput
            id="Name"
            label="Family Registration Number"
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            onChange={(e)=>{setRegistrationNo(e.target.value)}}
        />
        </FormControl>                
      </Box>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">Patient Registration Id</InputLabel>
        <OutlinedInput
            id="Name"
            label="Patient Registration Id"
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            onChange = {(e)=>{setRegistrationP(e.target.value)}}
        />
        </FormControl>                
      </Box>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">Name</InputLabel>
        <OutlinedInput
            id="Name"
            label="Name"
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            onChange={(e)=>{setName(e.target.value)}}
        />
        </FormControl>                
      </Box>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">Patient Ticket Id</InputLabel>
        <OutlinedInput
            id="Name"
            label="Patient Ticket Id"
            value='123456'
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            disabled
        />
        </FormControl>                
      </Box>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">Date</InputLabel>
        <OutlinedInput
            id="Name"
            label="Date"
            value={date}
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            disabled
        />
        </FormControl>                
      </Box>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">Mobile No</InputLabel>
        <OutlinedInput
            id="Name"
            label="Mobile No"
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            onChange = {(e)=>{setMobile(e.target.value)}}
        />
        </FormControl>                
      </Box>
      
    </Box>
  )
}

export default Basic