import React from 'react'
import { AppBar, Box, Button, FormControl, InputLabel, OutlinedInput, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import mainImg from '../images/Logo.png'
import '../pages/style.css'


const PrescriptionDetails = ({data}) => {
  return (
    <Box backgroundColor='#FEFFFF' sx={{minHeight:'160vh',height:'fit-content',paddingLeft:'5vw',paddingBottom:'4vh',paddingTop:'8vh'}}>
      <Box display='flex' justifyContent='center' alignItems='center' sx={{margin:'8px', padding:'30px'}}>
        <img src={mainImg} alt='img goes here' style={{width:'6vw',margin:'0px'}}></img>
      </Box>
      <Box display='flex' alignItems='center' sx={{flexFlow:'column'}}>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Patient Name:
          </Typography>
          <input id='name' disabled value={data.patientData.name} style={{width:'50vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
      </Box>
      <Box display='flex' sx={{flexWrap:'wrap',width:'100vw'}}>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh',marginTop:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Date:
          </Typography>
          <input id='name' disabled value={data.dateMade} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh',marginTop:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Patient Id:
          </Typography>
          <input id='name' disabled value={data.id} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh',marginTop:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Doctor Id:
          </Typography>
          <input id='name' disabled value="" placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Doctor Name:
          </Typography>
          <input id='name' disabled value="" placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Age:
          </Typography>
          <input id='name' value="" disabled placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            weight:
          </Typography>
          <input id='name' value="" disabled placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Height:
          </Typography>
          <input id='name' value="" disabled placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Systolic Blood Pressure:
          </Typography>
          <input id='name' disabled value="" placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Diastolic Blood Pressure:
          </Typography>
          <input id='name' disabled value="" placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Temperature:
          </Typography>
          <input id='name' disabled value="" placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            SPO2:
          </Typography>
          <input id='name' disabled value="" placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Symptoms Summary:
        </Typography>
        <textarea id='name' disabled value={data.symptoms} style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Instructions:
        </Typography>
        <textarea id='name' disabled value={data.instructions}  style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Diagnosis:
        </Typography>
        <textarea id='name' disabled value={data.diagnosis} style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          No of Medicines:
        </Typography>
        <input id='name' disabled vvalue={data.number} placeholder='Total Medicine' style={{width:'70vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'8px',outline:'none'}}/>
      </Box>
      <Box sx={{marginTop:'5vh',marginLeft:'4vw'}}> 
        <Typography>
          MEDICINES | DURATION | FREQUENCY | NO OF MEDICINE:
        </Typography>
        <Box style={{width:'100%'}}>
          {
            data.medicines.map((item,idx)=>{
              return(
                <Box sx={{paddingTop:'1vh',width:'70vw',padding:'20px',borderRadius:'8px',marginBottom:'3vh',border:'1px solid rgb(170, 170, 170)'}}>
                  <Box display='flex' style={{width:'90%',marginBottom:'2vh',justifyContent:'space-between'}}>
                    <input type='text' value={item.name} placeholder='Medicine Name' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <input type='text' value={item.dose} placeholder='Duration' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                  </Box>
                  <Box display='flex' style={{width:'90%',justifyContent:'space-between'}}>
                    <input type='text' value={item.duration} placeholder='Frequency' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <input type='text' value={item.total} placeholder='Total Number of Medicine' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                  </Box>
                </Box>
              )
            })
          }
        </Box>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Tests:
        </Typography>
        <textarea id='name' disabled value={data.tests} placeholder='name' style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Any Other Instructions:
        </Typography>
        <textarea id='name' disabled value={data.others} placeholder='name' style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
    </Box>
  )
}

export default PrescriptionDetails