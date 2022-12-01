
import { Box, Button, FormControl, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './sty.css';

const Medicine = ({user}) => {
    const [medicine, setMedicine] = useState([]);
    const [name, setName] = useState();
    const [show, setShow] = useState(0);



    useEffect(() => {
        async function fetch(){
          try{
              const config = {
                  headers: {
                      "Content-type":"application/json"
                  },          
              }
              const {data} = await axios.get('/api/medicine/fetch',{},config);
              setMedicine(data);
          }catch(error){
              console.log(error);
          } 
        }     
        fetch();
    }, [])

    function changeHandler(idx,e){
      var arr = [...medicine]
      if(e.target.value.length===0){
        arr[idx].quantity=0;
        setMedicine(arr);
        return;
      }
      // console.log(/^-?\d+$/.test(""));
      if(/^-?\d+$/.test(e.target.value)) // to check if the input is a number
        arr[idx].quantity = parseInt(e.target.value).toString();

      setMedicine(arr)
        
    }
    

    async function submitHandler(idx){
        try{
            const config = {
                headers: {
                    "Content-type":"application/json"
                },          
            }
            const {data} = await axios.post('/api/medicine/change',{ id:medicine[idx]._id,query:medicine[idx].quantity},config);
            setMedicine(data);
        }catch(error){
            console.log(error);
        }
    }

    const addHandler = async ()=>{
      try{
            const config = {
                headers: {
                    "Content-type":"application/json"
                },          
            }
            const {data} = await axios.post('/api/medicine/add',{ name },config);
            setShow(0);
            setMedicine(data);
        }catch(error){
            console.log(error);
        }
    }



  return (
    <div style={{marginTop:'8vh'}}>

    {
      (show)?
          <div>
            <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#949494',opacity:'0.65',width:'100vw',height:'100vh',position:'absolute',zIndex:'2000'}}>
            </Box>
            <Box display='flex' alignItems='center'  sx={{flexFlow:'column',backgroundColor:'#FEFFFF',height:'40vh',width:'40vw',marginRight:'4vw',borderRadius:'15px',opacity:'1',position:'absolute',zIndex:5000,top:'30vh',left:'30vw'}}>
                <button onClick={()=>{setShow(0)}} style={{backgroundColor:'#CF823A',border:'none',color:'#FEFFFF',position:'relative',right:'15vw',marginTop:'3vh',width:'4vh',height:'4vh',borderRadius:'50px','&:hover':{backgroundColor:'#ffa44f'}}}>
                  <i class='fas fa-arrow-left'></i>
                </button>
                <Typography variant='h4' sx={{marginTop:'3vh',color:'#424242',fontFamily:'Roboto Slab'}}> 
                  Add Medicine
                </Typography>
                <Box sx={{ marginTop:'5vh' }} display='flex' justifyContent='center'>
                  <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor:'#2B7A78',width:'56px',height:'56px',color:'#17252A',borderRadius:'5px 0px 0px 5px'}}>
                    <i class="material-icons" style={{color:'#FEFFFF',fontSize:'2.5rem'}}>create</i>
                  </Box>
                  <FormControl sx={{width:'20vw'}}>
                    <InputLabel htmlFor="ID">Name</InputLabel>
                    <OutlinedInput
                    id="ID"
                    label="Registration ID"
                    sx={{borderRadius:'0px 5px 5px 0px',backgroundColor:'#FEFFFF'}}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                  </FormControl>
              </Box>
              <Box>
                <button onClick={addHandler} style={{backgroundColor:'#CF823A',border:'none',color:'#FEFFFF',marginTop:'3vh',width:'5vw',height:'4vh',borderRadius:'15px','&:hover':{backgroundColor:'#ffa44f'}}}>
                  ADD
                </button>
              </Box>
            </Box>
          </div>
          :
          <div>
            </div>
    }

      <button onClick={()=>{setShow(1)}} style={{position:'absolute',bottom:'2vh',border:'none',backgroundColor:'#19414D',color:'#FEFFFF',marginLeft:'5vw',width:'6vh',height:'6vh',borderRadius:'50px','&:hover':{backgroundColor:'#19414D'},fontSize:'1.2rem'}}> 
        <i class='fas fa-plus'></i>
      </button>
        <Box display='flex' alignItems='center' sx={{width:'80vw',marginLeft:'5vw',borderRadius:'15px',marginLeft:'10vw',paddingTop:'40px',flexFlow:'column'}}>
          <Box display='flex' justifyContent='space-between' alignItems='center' sx={{backgroundColor:'#D1D1D1',width:'80vw',height:'5vh',borderRadius:'8px',marginBottom :'15px'}}>
            <Typography variant='h7' component='div' sx={{fontFamily:'Sans Serif',display:'flex',alignItems:'center',width:'20vw',height:'9vh',paddingLeft:'30px'}}>
              Sl No
            </Typography>
            <Typography variant='h7' component='div' sx={{justifyContent:'center',fontFamily:'Sans Serif',display:'flex',alignItems:'center',width:'20vw',height:'5vh',paddingLeft:'30px'}}>
              Name
            </Typography>
            <Typography variant='h7' component='div' sx={{justifyContent:'center',fontFamily:'Sans Serif',display:'flex',alignItems:'center',width:'20vw',height:'5vh',paddingLeft:'30px'}}>
              Quantity
            </Typography>
            <Typography variant='h7' component='div' sx={{justifyContent:'center',fontFamily:'Sans Serif',display:'flex',alignItems:'center',width:'20vw',height:'5vh',paddingLeft:'52px'}}>
              Change
            </Typography>
          </Box>
          {
            medicine.map((item,idx)=>{ 
                return(
                  <Paper key={idx} elevation={3} sx={{backgroundColor:'#FEFFFF',width:'80vw',height:'9vh',borderRadius:'8px',marginBottom :'15px'}}>
                    <Box display='center' justifyContent='space-between' alignItems='center' sx={{width:'80vw'}}>
                      <Typography variant='h5' component='div' sx={{fontFamily:'Roboto Condensed',display:'flex',alignItems:'center',width:'20vw',height:'9vh',paddingLeft:'30px'}}>
                        {idx+1}
                      </Typography>
                      <Typography variant='h6' component='div' sx={{justifyContent:'center',fontFamily:'Roboto Condensed',display:'flex',alignItems:'center',width:'20vw',height:'9vh'}}>
                        {item.name}
                      </Typography>
                      <Box  component='div' sx={{justifyContent:'center',fontFamily:'Roboto Condensed',display:'flex',alignItems:'center',width:'20vw',height:'9vh',paddingLeft:'30px'}}>
                        <input className='med' value = {item.quantity} onChange={(e)=>{changeHandler(idx,e)}} type='text' style={{borderRadius:'8px',border:'1px solid rgb(170, 170, 170)',outline:'none',height:'4vh',width:'4vw',textAlign:'center'}} />
                      </Box>
                      <Box display='center' justifyContent='center' alignItems='center' sx={{width:'20vw'}}>
                        <Button onClick={()=>submitHandler(idx)} sx={{backgroundColor:'#19414D',color:'#FEFFFF',marginLeft:'5vw',width:'5vw',height:'4vh',borderRadius:'15px','&:hover':{backgroundColor:'#19414D'}}}>
                          Change
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
              )
            })
          }
        </Box>
    </div>
  )
}

export default Medicine