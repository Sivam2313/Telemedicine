import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import {motion} from 'framer-motion';

const Dashboard = () => {
  const [hwCount,setHwCount] = useState(0);
  const [doctorCount,setDoctorCount] = useState(0);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [patientArr, setpatientArr] = useState(['None Found']);
  const [expanded, setExpanded] = useState();
  const [date, setDate] = useState();
  const [doctor, setDoctor] = useState()
  const [docNames, setDocNames] = useState([]);
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

  useEffect(() => {
    async function fetch(){
      const config = {
          headers: {
            "Content-type":"application/json"
          },
      }
      var {data}= await axios.get('/api/doctor/Doctor',config);
      const Temp=[];
      data.map((item) => {
        Temp.push(item.doc_name)
      })
      setDocNames(Temp)
      console.log(Temp);
    }
    fetch();
  }, [])
  
  const submitHandler = async ()=>{
    if(!from || !to){
      return;
    }
    try{
      
      const config={
        headers: {
          "Content-type":"application/json"
        }, 
      }
      const {data} = await axios.post('/api/patient/appointed',{from,to},config);
      setpatientArr(data)

      console.log(data);

    }catch(error){
      console.log(error);
    }
  }

  const fetchAll = async()=>{
      const config={
        headers: {
          "Content-type":"application/json"
        }, 
      }
      const {data} = await axios.get('/api/patient/fetchall',config)
      if(data.length==0){
        setpatientArr(["None Found"])
      }
      else{
        setpatientArr(data);
      }
  }


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


  async function addHandler (item){
    if(!date ||!doctor){
      return;
    }
    try{
      const config={
        headers: {
          "Content-type":"application/json"
        }, 
      }
      const id = item.patientData.ticketId;
      var {data} = await axios.post('/api/patient/setDate',{id,date,doctor},config)
      const items = await axios.get('/api/patient/fetchAll',config)
      if(items.data.length==0){
        setpatientArr(["None Found"])
      }
      else{
        setpatientArr(items.data);
      }
      document.getElementById("ID").value = "";
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }

  return (
      <motion.div animate={{opacity:1}} initial={{opacity:0}} style={{padding:'12vh'}}>
        <Box display='flex' alignItems='center' sx={{height:'8vh',width:'80vw',marginLeft:'5vw',backgroundColor:'#3AAFA9',borderRadius:'15px',marginLeft:'5vw'}}>
          <Typography variant='h6' component='div' sx={{marginLeft:'4vw',display:'flex',alignItems:'center',justifyContent:'center',height:'12vh',fontFamily:'Roboto Slab',color:'#19414D'}}>
            From
          </Typography>
          <Box sx={{alignSelf:'start',marginLeft:'1vw',marginTop:'1vh' }} display='flex' justifyContent='center'>
            <FormControl sx={{width:'10vw'}}>
              <OutlinedInput
                id="ID"
                type='date'
                placeholder='DD/MM/YYYY'
                sx={{borderRadius:'5px',height:'5vh',marginTop:'5px'}}
                onChange={(e)=>{setFrom(e.target.value)}}
              />
            </FormControl>
          </Box>
          <Typography variant='h6' component='div' sx={{marginLeft:'4vw',display:'flex',alignItems:'center',justifyContent:'center',height:'12vh',fontFamily:'Roboto Slab',color:'#19414D'}}>
            To
          </Typography>
          <Box sx={{alignSelf:'start',marginLeft:'1vw',marginTop:'1vh' }} display='flex' justifyContent='center'>
            <FormControl sx={{width:'10vw'}}>
              <OutlinedInput
                id="ID"
                type='date'
                placeholder='DD/MM/YYYY'
                sx={{borderRadius:'5px',height:'5vh',marginTop:'5px'}}
                onChange={(e)=>{setTo(e.target.value)}}
              />
            </FormControl>
          </Box>
          <Button onClick={submitHandler} sx={{backgroundColor:'#19414D',color:'#FEFFFF',marginLeft:'5vw',width:'8vw',height:'4vh',borderRadius:'15px','&:hover':{backgroundColor:'#19414D'}}}>
            Fetch
          </Button>
          <Button onClick={fetchAll} sx={{backgroundColor:'#19414D',color:'#FEFFFF',marginLeft:'23vw',width:'8vw',height:'4vh',borderRadius:'15px','&:hover':{backgroundColor:'#19414D'}}}>
            Fetch New 
          </Button>
        </Box>
        <Box display='flex' alignItems='center' sx={{width:'80vw',borderRadius:'15px',marginLeft:'5vw',paddingTop:'40px',flexFlow:'column',height:'75vh',overflow:'scroll'}}>
          {
            patientArr.map((item,idx)=>{
              if(item==='None Found'){
                return (
                  <Box>
                    <Typography sx={{textAlign:'center',width:'80vw',marginTop:'40px'}}>
                      {item}
                    </Typography>
                  </Box>
                )
              }  
                return(
                    <Accordion key={idx} expanded={expanded === idx}  onChange={handleChange(idx)} sx={{marginBottom:'10px'}}>
                          <AccordionSummary
                          expandIcon={<i class="material-icons">arrow_drop_down</i>}
                          aria-controls="panel1bh-content"
                          id={idx}
                          sx={{height:'8vh',width:'80vw',borderBottom:'1.5px solid grey',borderRadius:'5px 5px 0px 0px'}}
                          >
                              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                                  {idx+1}
                              </Typography>
                              <Typography sx={{ color: 'text.secondary' }}>
                                  {item.patientData.name}
                              </Typography>
                          </AccordionSummary>
                          <AccordionDetails id={idx} sx={{display:'flex',alignItems:'flex-start',justifyContent:'center',flexFlow:'column'}}>
                              <Box sx={{ marginTop:'2vh',marginLeft:'2vw'}} display='flex' justifyContent='center'>
                                  <FormControl sx={{width:'20vw',minWidth:'350px'}}>
                                      <OutlinedInput
                                      id="ID"
                                      label='Date to be Appointed'
                                      default = {(item.appointedTime)?item.appointedTime:""}
                                      sx={{borderRadius:'5px 0px 0px 5px',backgroundColor:'#FEFFFF'}}
                                      type='date'
                                      onChange={(e)=>{setDate(e.target.value)}}
                                      />
                                  </FormControl>
                                  {/* <FormControl sx={{width:'20vw',minWidth:'350px',marginLeft:'10vw'}}>
                                      <InputLabel htmlFor="ID">Doctor</InputLabel>
                                      <OutlinedInput
                                      id="ID"
                                      label='Date to be Appointed'
                                      default = {(item.doctor==='0')?"":item.doctor}
                                      sx={{borderRadius:'5px 0px 0px 5px',backgroundColor:'#FEFFFF'}}
                                      onChange={(e)=>{setDoctor(e.target.value)}}
                                      />
                                  </FormControl> */}
                                  <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        sx={{borderRadius:'5px',height:'5vh',width:'20vw',minWidth:'350px',marginLeft:'2vw'}}
                                        displayEmpty
                                        label="Doctor"
                                        onChange={(e) => setDoctor(e.target.value)}
                                    >
                                    <MenuItem value="" disabled>
                                      Select a doctor
                                    </MenuItem>
                                    {docNames.map((item,idx) => {
                                      return (
                                        <MenuItem value={item} key={idx}>{item}</MenuItem>
                                      )
                                    })}
                                  </Select>
                                  <Button onClick={()=>{addHandler(item)}} sx={{backgroundColor:'#19414D',color:'#FEFFFF',marginLeft:'12vw',width:'8vw',borderRadius:'15px','&:hover':{backgroundColor:'#19414D'}}}>
                                    Change
                                  </Button>
                              </Box>
                          </AccordionDetails>
                      </Accordion>
              )
            })
          }
        </Box>
      </motion.div>
  )
}

export default Dashboard