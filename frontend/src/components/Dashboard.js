import { Box, Typography} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import {motion} from 'framer-motion';

const Dashboard = () => {
  const [hwCount,setHwCount] = useState(0);
  const [doctorCount,setDoctorCount] = useState(0);
  const history = useHistory();
  useEffect(() => {
    async function fetch(){
      const config = {
          headers: {
            "Content-type":"application/json"
          },
      }
      var {data} = await axios.get('/api/hw/countHw',config);
      setHwCount(data.count);
      var {data} = await  axios.get('/api/doctor/countDoctor',config);
      setDoctorCount(data.count);
    }
    fetch();
    const isAuth = localStorage.getItem('isAuth');
    if(isAuth=='false'){
      history.push('/')
    }
  }, [])
  


  return (
      <motion.div animate={{opacity:1}} initial={{opacity:0}}>
        <Box sx={{
          width: '98vw',
          height:'34vh',
          position:'absolute',
          right:'0px',
          top:'12vh'
        }} display='flex' justifyContent='center'>
            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{backgroundColor:'#3A94AF',width:'40%',marginLeft:'30px',height:'10vh',borderRadius:'5px'}}>
              <Box display='flex' justifyContent='center' sx={{flexFlow:'column',paddingLeft:'20px'}}>
                <Typography variant='h5' component='div' sx={{fontFamily:'Roboto Slab',color:'#19414D'}}>
                  Total Health Worker
                </Typography>
                <Typography variant='h6' component='div' sx={{fontFamily:'Sans Sherif',color:'#'}}>
                  SSF Health Worker
                </Typography>
              </Box>
              <Box display='flex' justifyContent='center' alignItems='center' paddingRight='20px'>
                <Typography variant='h3' component='div' sx={{fontFamily:'Roboto Slab',color:'#FEFFFF'}}>
                  {hwCount}
                </Typography>
              </Box>
            </Box >
            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{backgroundColor:'#E5B436',width:'40%',marginLeft:'30px',height:'10vh',borderRadius:'5px'}}>
              <Box display='flex' justifyContent='center' sx={{flexFlow:'column',paddingLeft:'20px'}}>
                <Typography variant='h5' component='div' sx={{fontFamily:'Roboto Slab',color:'#985E1A'}}>
                  Total Doctors
                </Typography>
                <Typography variant='h6' component='div' sx={{fontFamily:'Sans Sherif',color:'#'}}>
                  SSF Doctors
                </Typography>
              </Box>
              <Box display='flex' justifyContent='center' alignItems='center' paddingRight='20px'>
                <Typography variant='h3' component='div' sx={{fontFamily:'Roboto Slab',color:'#FEFFFF'}}>
                  {doctorCount}
                </Typography>
              </Box>
            </Box >
        </Box>
      </motion.div>
  )
}

export default Dashboard