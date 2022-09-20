import { Box, List, ListItem, Toolbar, Drawer, ListItemText, ListItemButton, CssBaseline, AppBar, Button, IconButton, ListItemIcon, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import mainImg from '../images/Logo.png';

const Doctor = () => {
  const [patientArr, setPatientArr] = useState(["None Found"]);
  const history = useHistory();
    useEffect(() => {
      if(localStorage.getItem('isAuth')==='false' ){
        history.push('/');
      }
    }, [])
  const logoutHandler=()=>{
    localStorage.setItem('isAuth', false);
    localStorage.setItem("DoctorOnline",false);
    history.push('/')
  }
  return (
    <Box sx={{width:'100%',height:'150vh',backgroundColor:'#DEF2F1',position:'absolute'}}>
      <CssBaseline/>
      <AppBar position='fixed' sx={{backgroundColor:'#FEFFFF',boxShadow:'none',height:'8vh'}}> 
        <Toolbar sx={{justifyContent:'space-between'}}>
          <IconButton>
            <img src={mainImg} alt='Not available' style={{width:'6vh',height:'6vh',margin:'4px'}}></img>
          </IconButton>
          <Button onClick={logoutHandler} sx={{backgroundColor:'#071114',width:'6vw',height:'4.5vh',borderRadius:'20px',color:'#FEFFFF','&:hover':{backgroundColor:'#193D47'}}}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{height:'13vh',width:'30vw',borderRadius:'15px',background:'linear-gradient(135deg, #2B7A78 10%, #3AAFA9 100%)',marginTop:'14vh',marginLeft:'8vw'}}>
        <Typography variant='h4' fontFamily='Roboto Slab' sx={{color:'#FEFFFF',marginLeft:'3vw',paddingTop:'2vh'}}>
          Number of Patients Today :
        </Typography>        
        <Typography variant='h4' fontFamily='Sans Sherif' sx={{color:'#FEFFFF',marginLeft:'3vw',paddingTop:'1vh'}}>
          3  
        </Typography> 
      </Box>
      <Box display='flex' justifyContent='space-between' alignItems='center' sx={{backgroundColor:'#D1D1D1',width:'80vw',height:'5vh',borderRadius:'8px 8px 0px 0px',marginBottom :'15px',marginTop:'4vh',marginLeft:'8vw'}}>
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
          Visited
        </Typography>
      </Box>
      <Box display='flex' justifyContent='space-between' alignItems='center' sx={{flexFlow:'column'}}>
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

          })
        }
      </Box>
    </Box>
  )
}

export default Doctor