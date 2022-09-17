import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, OutlinedInput, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import {motion} from 'framer-motion';
import './sty.css';
import Success from './stepperComponents/Success';
import Personal from './stepperComponents/Patient/Personal';
import Basic from './stepperComponents/Patient/Basic';
import Medical from './stepperComponents/Patient/Medical';
const PatientForm = () => {
    const steps = ['Basic Info','Personal Profile', 'Medical Profile', 'Past Medical History','प्रसूति / स्त्री रोग संबंधी इतिहास (महिलाओं के लिए)'];
    const [active, setActive] = useState(0);
    const [result, setResult] = useState('Successful')
    const [registrationNo, setRegistrationNo] = useState();
    const [name, setName] = useState();
    const [registrationP, setRegistrationP] = useState();
    const [mobile, setMobile] = useState();
    const [DOB, setDOB] = useState();
    const [education, setEducation] = useState();
    const [profession, setProfession] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [temperature, setTemperature] = useState();
    const [pusle, setPulse] = useState();
    const [sbp, setSbp] = useState();
    const [dbp, setDbp] = useState();
    const [alcohol, setAlcohol] = useState();
    const [smoking, setSmoking] = useState();
    const [asthama, setAsthama] = useState();
    const [Diabetes, setDiabetes] = useState();
    const [familyIll, setFamilyIll] = useState();
    const [spo2, setSpo2] = useState();
    const [others, setOthers] = useState();
    function activeStep(){
        switch(active){
            case 1:
                return <Personal setRegistrationNo={setRegistrationNo} setName={setName} setRegistrationP={setRegistrationP} setMobile={setMobile}/>
            case 0:
                return <Basic setDOB={setDOB} setEducation={setEducation} setProfession={setProfession} />
            case 2:
                return <Medical setHeight={setHeight} setWeight={setWeight} setTemperature={setTemperature} setPulse={setPulse} setSbp={setSbp} setDbp={setDbp} setAlcohol={setAlcohol} setAsthama={setAsthama} setDiabetes={setDiabetes} setFamilyIll={setFamilyIll} setSmoking={setSmoking} setSpo2={setSpo2} setOthers={setOthers}/>
            case 3:
                return <Success result={result}/>
        }
    }
    async function submitHandler (){
    }
    const backHandler = ()=>{
        if(active>0){
            var newActive = active - 1;
            setActive(newActive)
        }
    }
    const stepperHandler = ()=>{
        if(active===6){
            submitHandler()
        }
        if(active===1){
        }
        if(active<6){
            var newActive = active + 1
            setActive(newActive);
        }
        else{
            setActive(0)
        }
    }
  return (
    <Box sx={{
        width: '98vw',
        height:'34vh',
        position:'absolute',
        right:'0px',
        top:'12vh'
    }} display='flex' justifyContent='center'>
        <motion.div layout animate={{opacity:1}} layoutId='main'>
            <Paper elevation={3} sx={{backgroundColor:'#C7C7C7',borderRadius:'25px',width:'60vw',height:'fit-content',paddingBottom:'10vh',minHeight:'90vh'}}>
                <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{delay:0.4}}>
                    <Box display='flex' alignItems='center' sx={{flexFlow:'column'}}>
                        <Typography variant='h2' component='div' sx={{fontFamily:'Roboto Slab',color:'#17252A',marginTop:'5vh'}}>
                            Patient Registration
                        </Typography>
                        <Stepper activeStep={active} sx={{width:'50vw'}}>
                            {steps.map((label,idx)=>{
                                return (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                )
                            })}
                        </Stepper>
                        {activeStep()}
                        
                    </Box>
                </motion.div>
                <motion.div style={{marginTop:'30px',marginLeft:'6vw',width:'56vw',display:'flex',justifyContent:'space-between'}} animate={{opacity:1}} initial={{opacity:0}} transition={{delay:0.4}}>
                    <Button onClick={backHandler} sx={{backgroundColor:'#CF823A', color:'#FEFFFF',width:'8vw',height:'5vh',borderRadius:'25px',alignSelf:'end',marginRight:'8vw','&:hover':{backgroundColor:'#CF9D6E'}}}>
                        Back
                    </Button>
                    <Button onClick={stepperHandler} sx={{backgroundColor:'#CF823A', color:'#FEFFFF',width:'8vw',height:'5vh',borderRadius:'25px',alignSelf:'end',marginRight:'8vw','&:hover':{backgroundColor:'#CF9D6E'}}}>
                        {(active===6)? 'Register' : (active===7)? 'Reset' : 'Next'}
                    </Button>
                </motion.div>
            </Paper>
        </motion.div>
    </Box>    
  )
}

export default PatientForm