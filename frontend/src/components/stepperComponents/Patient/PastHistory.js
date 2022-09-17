import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, Step, StepLabel, Stepper, Typography } from '@mui/material'
const PastHistory = ({setDOB,setEducation,setProfession}) => {
  return (
    <Box sx={{flexFlow:'column'}} display='flex' justifyContent='center'>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>work</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
          <InputLabel id="demo-simple-select-label">Profession</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Profession"
            sx={{backgroundColor:'#FEFFFF'}}
            onChange={(e)=>{setProfession(e.target.value)}}
            defaultValue=''
          >
            <MenuItem value='किसान'>किसान</MenuItem>
            <MenuItem value='नौकरी'>नौकरी</MenuItem>
            <MenuItem value='घरेलू कार्यकर्ता'>घरेलू कार्यकर्ता</MenuItem>
            <MenuItem value='दैनिक दांव'>दैनिक दांव</MenuItem>
            <MenuItem value='विद्यार्थी'>विद्यार्थी</MenuItem>
            <MenuItem value='भइया/ Brother'>भइया/ Brother</MenuItem>
            <MenuItem value='समाज सेवक'>समाज सेवक</MenuItem>
            <MenuItem value='बेरोजगार'>बेरोजगार</MenuItem>
            <MenuItem value='सेवातनवृत'>सेवातनवृत</MenuItem>
            <MenuItem value='कुशल कामगार (राजमिस्त्री, दर्जी, बढ़ई, बिजली मिस्त्री, नर्स आदि)'>कुशल कामगार (राजमिस्त्री, दर्जी, बढ़ई, बिजली मिस्त्री, नर्स आदि)</MenuItem>
          </Select>
        </FormControl>
      </Box>  
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">Other (अन्य)</InputLabel>
        <OutlinedInput
            id="Name"
            label="Other (अन्य)"
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            onChange={(e)=>{setOtherHistory(e.target.value)}}
        />
        </FormControl>                
      </Box>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>work</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
          <InputLabel id="demo-simple-select-label">अस्पताल में भर्ती</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="अस्पताल में भर्ती"
            sx={{backgroundColor:'#FEFFFF'}}
            onChange={(e)=>{setIDK(e.target.value)}}
            defaultValue=''
          >
            <MenuItem value='बच्चे का जन्म'>बच्चे का जन्म</MenuItem>
            <MenuItem value='चिकित्सा'>चिकित्सा</MenuItem>
            <MenuItem value='घरेलू शल्य चिकित्सा'>घरेलू शल्य चिकित्सा</MenuItem>
          </Select>
        </FormControl>
      </Box> 
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>work</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
          <InputLabel id="demo-simple-select-label">स्वास्थ्य की स्थिति</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="अस्पताल में भर्ती"
            sx={{backgroundColor:'#FEFFFF'}}
            onChange={(e)=>{setIDK(e.target.value)}}
            defaultValue=''
          >
            <MenuItem value='उत्कृष्ट'>उत्कृष्ट</MenuItem>
            <MenuItem value='अच्छा'>अच्छा</MenuItem>
            <MenuItem value='निष्पक्ष'>निष्पक्ष</MenuItem>
            <MenuItem value='बुरा'>बुरा</MenuItem>
            <MenuItem value='बहुत बुरा'>बहुत बुरा</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">चोट या दुर्घटनाएं</InputLabel>
        <OutlinedInput
            id="Name"
            label="चोट या दुर्घटनाएं"
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            onChange={(e)=>{setIDK2(e.target.value)}}
        />
        </FormControl>                
      </Box>
      <Box sx={{ marginTop:'25px',alignSelf:'start',marginLeft:'-4vw' }} display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
            <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
        </Box>
        <FormControl sx={{width:'40vw'}}>
        <InputLabel htmlFor="Name">वर्तमान दवाएं</InputLabel>
        <OutlinedInput
            id="Name"
            label="वर्तमान दवाएं"
            sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
            onChange={(e)=>{setIDK3(e.target.value)}}
        />
        </FormControl>                
      </Box> 
    </Box>
  )
}

export default PastHistory