import { Box, List, ListItem, Toolbar, Drawer, ListItemText, ListItemButton, CssBaseline, AppBar, Button, IconButton, ListItemIcon, Typography, Paper} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const DoctorDash = ({setShow}) => {
  const [patientArr, setPatientArr] = useState(["None Found"]);
  const history = useHistory();

    useEffect(()=>{
      async function fetch (){
        try{
          const config={
              headers: {
                  "Content-type":"application/json"
              },
          }
          var today = new Date();
          var from = new Date(2022,9,9);
          var to = new Date(today.getFullYear(),today.getMonth(),parseInt(today.getDate())+1);
          console.log(from);
          const {data} = await axios.post('/api/patient/appointed',{from,to},config);
          if(data.length===0){
            setPatientArr(['None Found'])
          }
          else{
            setPatientArr(data)
          }
        }
        catch (error){
          console.log(error);
        }
      }
      fetch()
    },[])

    function roomHandler(idx){
      localStorage.setItem('room',patientArr[idx].patientData.ticketId)
      const path = '/prescription/'+patientArr[idx].patientData.ticketId;
      history.push(path);
    }

    return (
    <Box sx={{height:'150vh',position:'absolute'}}>
      <Box sx={{height:'13vh',width:'35vw',borderRadius:'15px',background:'linear-gradient(135deg, #2B7A78 10%, #3AAFA9 100%)',marginTop:'14vh',marginLeft:'8vw'}}>
        <Typography variant='h4' fontFamily='Roboto Slab' sx={{color:'#FEFFFF',marginLeft:'3vw',paddingTop:'2vh'}}>
          Number of Patients Today :
        </Typography>        
        <Typography variant='h4' fontFamily='Sans Sherif' sx={{color:'#FEFFFF',marginLeft:'3vw',paddingTop:'1vh'}}>
          {patientArr.length} 
        </Typography> 
      </Box>
      <Box display='flex' alignItems='center' sx={{backgroundColor:'#D1D1D1',width:'80vw',height:'5vh',borderRadius:'8px 8px 0px 0px',marginTop:'4vh',marginLeft:'8vw'}}>
        <Typography variant='h7' component='div' sx={{fontFamily:'Sans Serif',display:'flex',alignItems:'center',width:'20vw',height:'9vh',paddingLeft:'30px'}}>
          Sl No
        </Typography>
        <Typography variant='h7' component='div' sx={{justifyContent:'center',fontFamily:'Sans Serif',display:'flex',alignItems:'center',width:'20vw',height:'5vh',paddingLeft:'30px'}}>
          Name
        </Typography>
        <Typography variant='h7' component='div' sx={{justifyContent:'center',fontFamily:'Sans Serif',display:'flex',alignItems:'center',width:'20vw',height:'5vh',paddingLeft:'30px'}}>
          Next Appointed Date
        </Typography>
        <Typography variant='h7' component='div' sx={{justifyContent:'center',fontFamily:'Sans Serif',display:'flex',alignItems:'center',width:'20vw',height:'5vh',paddingLeft:'52px'}}>
          Details
        </Typography>
      </Box>
      <Box display='flex' justifyContent='space-around' alignItems='center' sx={{flexFlow:'column'}}>
        {
          patientArr.map((item,idx)=>{
            if(item==="None Found"){
              return(
                  <Box>
                    <Typography sx={{textAlign:'center',width:'80vw',marginTop:'40px'}}>
                      No Patients Today!
                    </Typography>
                  </Box>
              )
            }
            return(
              <Box sx={{backgroundColor:'#FEFFFF',height:'8vh',width:'80vw',marginLeft:'8vw',borderBottom:'1.5px solid grey'}}>
                  <Box display='flex' alignItems='center' sx={{height:'8vh',width:'80vw'}}>
                    <Typography variant='h7' display='flex' alignItems='center'  sx={{height:'8vh',fontFamily:'Sans Sherif',width:'20vw',paddingLeft:'4vw'}}>
                      {idx+1}
                    </Typography>
                    <Typography variant='h7' display='flex' justifyContent='center' alignItems='center'  sx={{height:'8vh',fontFamily:'Sans Sherif',width:'20vw',paddingLeft:'4vw'}}>
                      {item.Name}
                    </Typography>
                    <Typography variant='h7' display='flex' justifyContent='center' alignItems='center'  sx={{height:'8vh',fontFamily:'Sans Sherif',width:'20vw',paddingLeft:'4vw'}}>
                      {item.Consultation_Date}
                    </Typography>
                    <Box display='flex' justifyContent='center' alignItems='center' sx={{height:'8vh',fontFamily:'Sans Sherif',width:'20vw',paddingLeft:'4vw'}}>
                      <Button onClick={()=>roomHandler(idx)} className='btn' sx={{backgroundColor:'#19414D',color:'#FEFFFF',height:'5vh',width:'8vw',borderRadius:'15px'}}>
                        See Details
                      </Button>
                    </Box>
                  </Box>
              </Box>
            )

          })
        }
      </Box>
    </Box>
  )
}

export default DoctorDash