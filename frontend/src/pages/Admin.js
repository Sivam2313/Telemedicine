import { Box, List, ListItem, Toolbar, Drawer, ListItemText, ListItemButton, CssBaseline, AppBar, Button, IconButton, ListItemIcon} from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import DoctorRegister from '../components/DoctorRegister';
import HwRegister from '../components/HwRegister';
import LogRecord from '../components/LogRecord';
import Medicine from '../components/Medicine';
import SearchFamilyCards from '../components/SearchFamilyCards';
import SearchPrescription from '../components/SearchPrescription';
import mainImg from '../images/Logo.png';
const Admin = () => {
  const [isOpen, setisOpen] = useState(false);
  const [show,setshow] = useState(0);
  const history = useHistory();

  function selectComp(){
    switch(show){
      case 0:
          return <Dashboard />
      case 1:
          return <HwRegister setshow={setshow} />
      case 2:
          return <DoctorRegister />
      case 3:
          return <SearchFamilyCards />
      case 4:
          return <SearchPrescription />
      case 6:
          return <LogRecord />
      case 7:
          return <Medicine user={'admin'} />
    }
  }

  const logoutHandler=async ()=>{
      const logId = JSON.parse(localStorage.getItem("AdminOnline")).logId;
      try{
        const config={
            headers: {
                "Content-type":"application/json"
            },
        }
        const {data} = await axios.post('/api/logs/logout',{logId},config)
      }
      catch (error){
        console.log(error);
        return;
      }
    localStorage.setItem('isAuth', false);
    localStorage.setItem("AdminOnline",false);
    history.push('/')
  }

  return (
    <Box sx={{width:'100%',height:'150vh',backgroundColor:'#DEF2F1'}}>
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
        <Drawer variant='permanent' open={isOpen} onMouseOver={(e)=>{setisOpen(true)}} onMouseOut={(e)=>{setisOpen(false)}} 
        sx={{width: isOpen? '20vw': '6vw',
        '& .MuiDrawer-paper': {
            width: isOpen? '20vw': '60px',
            boxSizing: 'border-box',
            top:'8vh',
            transition:'width 0.3s',
            backgroundColor:'#DEDEDE'
          }}}>
          <List>
            {['Dashboard','Health Worker Registration','Doctor Registration','Search Family Cards','Search Prescription','Issue Medicine','View Logs','Issue Medicine'].map((text,idx)=>(
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={()=>setshow(idx)} sx={{
                  height:'8vh',
                  justifyContent: isOpen ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover':{
                    color:'#FEFFFF',
                    backgroundColor:'#193D47'
                  }
                }}>
                  <ListItemIcon sx={{
                    minWidth: 0,
                    mr: isOpen ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <i class="material-icons" style={{fontSize:'1.5rem'}}>{(idx%2===0)? 'mouse' : 'colorize'}</i>
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: isOpen? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {selectComp()}
    </Box>
  )
}

export default Admin