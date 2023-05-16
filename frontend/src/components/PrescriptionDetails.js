import React, { useEffect, useRef, useState } from 'react'
import { AppBar, Box, Button, FormControl, InputLabel, OutlinedInput, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import mainImg from '../images/Logo.png'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import '../pages/style.css'
import axios from 'axios'


const PrescriptionDetails = ({data,patient}) => {

  const printRef = useRef();
  

  const currDate = new Date();
  const today = currDate.getDate()+'/'+(currDate.getMonth()+1)+'/'+currDate.getFullYear();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.height*1.2;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

  return (
    <Box backgroundColor='#FEFFFF' sx={{height:'fit-content',minHeight:'100vh',paddingBottom:'4vh',paddingTop:'2vh',marginLeft:'5vw'}}>

    <Box ref={printRef} backgroundColor='#FEFFFF' sx={{height:'fit-content',minHeight:'100vh',paddingBottom:'4vh',paddingTop:'2vh',marginLeft:'5vw'}}>
      <Box display='flex' justifyContent='center' alignItems='center' sx={{margin:'8px', padding:'30px'}}>
        <img src={mainImg} alt='img goes here' style={{width:'6vw',margin:'0px'}}></img>
      </Box>
      <Box display='flex' alignItems='center' sx={{flexFlow:'column'}}>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Patient Name:
          </Typography>
          <input id='name' disabled value={patient.patientData.name} style={{width:'50vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
      </Box>
      <Box display='flex' sx={{flexWrap:'wrap',width:'100vw'}}>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh',marginTop:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Date:
          </Typography>
          <input id='name' disabled value={today} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh',marginTop:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Patient Id:
          </Typography>
          <input id='name' disabled value={data.patientData.ticketId} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh',marginTop:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Doctor Id:
          </Typography>
          <input id='name' disabled placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Doctor Name:
          </Typography>
          <input id='name' disabled value={patient.doctor} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Age:
          </Typography>
          <input id='name' value={currDate.getFullYear() - patient.DOB.substring(6)} disabled placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            weight:
          </Typography>
          <input id='name' value={patient.medical.weight} disabled placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Height:
          </Typography>
          <input id='name' value={patient.medical.height} disabled placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Systolic Blood Pressure:
          </Typography>
          <input id='name' disabled value={patient.medical.sbp} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Diastolic Blood Pressure:
          </Typography>
          <input id='name' disabled value={patient.medical.dbp} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Temperature:
          </Typography>
          <input id='name' disabled value={patient.medical.temperature} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            SPO2:
          </Typography>
          <input id='name' disabled value={patient.medical.spo2} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Symptoms Summary:
        </Typography>
        <textarea id='name' disabled value={data.symptoms} style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px',fontSize:'1.2rem'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Instructions:
        </Typography>
        <textarea id='name' disabled value={data.instructions}  style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px',fontSize:'1.2rem'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Diagnosis:
        </Typography>
        <textarea id='name' disabled value={data.diagnosis} style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px',fontSize:'1.2rem'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          No of Medicines:
        </Typography>
        <input id='name' disabled value={data.number} placeholder='Total Medicine' style={{width:'70vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'8px',outline:'none',fontSize:'1.2rem'}}/>
      </Box>
      <Box sx={{marginTop:'5vh',marginLeft:'4vw'}}> 
        <Typography>
          MEDICINES | DURATION | FREQUENCY | NO OF MEDICINE:
        </Typography>
        <Box sx={{width:'80%'}}>
                {
            data.medicines.map((item,idx)=>{
              return(
                <Box sx={{paddingTop:'1vh',width:'70vw',padding:'20px',borderRadius:'8px',marginBottom:'3vh',border:'1px solid rgb(170, 170, 170)'}}>
                  <Box display='flex' style={{width:'90%',marginBottom:'2vh',justifyContent:'space-between'}}>
                    <input type='text' value={item.name} placeholder='Medicine Name' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)',fontSize:'1.2rem'}}/>
                    <div style={{display:'flex',flexDirection:'column',width:'35%'}}>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span  style={{width:'30%',fontSize:'1.2rem'}}>Breakfast:</span>
                          <span  style={{width:'30%',fontSize:'1.2rem'}}>{item.breakFast}</span>
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span style={{width:'30%',fontSize:'1.2rem'}}>Lunch:</span>
                          <span  style={{width:'30%',fontSize:'1.2rem'}}>{item.lunch}</span>
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                           <span style={{width:'30%',fontSize:'1.2rem'}}>Evening:</span>
                          <span  style={{width:'30%',fontSize:'1.2rem'}}>{item.evening}</span>
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span style={{width:'30%',fontSize:'1.2rem'}}> Dinner:</span>
                          <span  style={{width:'30%',fontSize:'1.2rem'}}>{item.dinner}</span>
                      </div>
                    </div>
                  </Box>
                  <Box display='flex' style={{width:'90%',justifyContent:'space-between'}}>
                    <input type='text' value={item.dose} placeholder='Frequency' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)',fontSize:'1.2rem'}}/>
                    <input type='text' value={item.total} placeholder='Total Number of Medicine' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)',fontSize:'1.2rem'}}/>
                    <input type='text' value={item.fee} placeholder='Fee' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)',fontSize:'1.2rem'}}/>
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
        <textarea id='name' disabled value={data.tests} placeholder='name' style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px',fontSize:'1.2rem'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Any Other Instructions:
        </Typography>
        <textarea id='name' disabled value={data.other} placeholder='name' style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px',fontSize:'1.2rem'}}/>
      </Box>
    </Box>
    <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
      <Button type="button" className='btn' sx={{backgroundColor:'#19414D',color:'#FEFFFF',height:'5vh',width:'10vw',borderRadius:'15px',marginTop:'2vh'}} onClick={handleDownloadPdf}>
        Download as PDF
      </Button>
    </Box>
    </Box>
  )
}

export default PrescriptionDetails