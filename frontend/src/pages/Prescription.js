import React, { useEffect, useRef, useState } from 'react'
import { AppBar, Box, Button,Typography, Autocomplete, TextField } from '@mui/material'
import mainImg from '../images/Logo.png'
import './style.css'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const Prescription = () => {
  const [showButton, setShowButton] = useState([]);
  const [symptoms, setSymptoms] = useState();
  const [instructions, setInstructions] = useState();
  const [diagnosis, setDiagnosis] = useState();
  const [medicines, setMedicines] = useState([]);
  const [array,setArray] = useState([]);
  const [name, setName] = useState();
  const [duration, setDuration] = useState();
  const [dose, setDose] = useState();
  const [total, setTotal] = useState();
  const [number, setNumber] = useState();
  const [date, setDate] = useState();
  const [tests, setTests] = useState();
  const [other, setOther] = useState();
  const para = useParams();
  const [id, setId] = useState(para.id);
  const [allMed,setAllMed]=useState([])
  const history = useHistory();
  const [selectedMed,setSelectedMed]=useState("")
  const [currTID,setCurrTID]=useState(0)
  const [fee, setFee] = useState();
  const [schedule, setSchedule] = useState();
  const [upname, setUpname] = useState();
  const [upDuration, setUpDuration] = useState();
  const [upSchedule, setUpSchedule] = useState();
  const [upDose, setUpDose] = useState();
  const [upTotal, setUpTotal] = useState();
  const [upFee, setUpFee] = useState();
  const medVal = useRef(null);
  const durationVal = useRef(null);
  const totalVal = useRef(null); 
  const feeVal = useRef(null);
  const symptomsVal = useRef(null);
  const scheduleVal  = useRef(null);
  const [patient, setPatient] = useState({
    patientData:{
      name:"afhajf;la",
      id:'afhesdfhs',
    },
    DOB:"1235",
    medical:{
      height:'35',
      weight:'35',
      sbp:"43",
      dbp:'35',
      temperature:'13',
      spo2:"23",
    }

  })

 
  const handleSelectChange = (event, value) => {
    setSelectedMed(event.target.innerText)
    setName(event.target.innerText)
  };
  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) =>
      option.name2.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  async function getMedicines(){
    try{
        const res = await fetch('/api/med/Medicine', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        const dat = await res.json()
        console.log(dat);
        setAllMed(dat)
        
    }
    catch(e){
        console.log(e)
    }
}
  const currDate = new Date();
  const today = currDate.getDate()+'/'+(currDate.getMonth()+1)+'/'+currDate.getFullYear();

  useEffect(() => {
    const room=localStorage.getItem('room')
    setCurrTID(room)
    async function fetch (){
      try{
        const config = {
          headers: {
              "Content-type":"application/json"
          },
        }
        const {data} = await axios.post('/api/patient/ticketFetch',{id},config);
        setPatient(data);
        var str = "";
        data.reason.map((item,idx)=>{
          str+=item+",";
        })
        setSymptoms(str)
        console.log(str);
        symptomsVal.current.value = str;
      }
      catch(error){
        console.log(error);
      }
    }
    fetch();
    
    getMedicines();
  }, [])
  
 
  const addHandler = ()=>{
    if(!name){
      console.log("error");
      return;
    }
    var data = {
      name,
      duration,
      schedule,
      dose,
      total,
      fee,
    }
    var arr = [];
    arr = [...showButton];
    arr.push('0');
    setShowButton(arr);
    setSelectedMed("");
    arr = [];
    durationVal.current.value = "";
    totalVal.current.value = "";
    feeVal.current.value = "";
    scheduleVal.current.value = "";
    arr = [...array];
    arr.push(data);
    setArray(arr);
    console.log(arr); 
  }
  const getQ = async() => {
    try{
      const config = {
        headers: {
            "Content-type":"application/json"
        },
      }
      const doc_name=patient.doctor
      const {data}=await axios.post('/api/doctor/getQ',{doc_name},config)
      console.log(data.patientData.ticketId)
      const path = '/prescription/'+data.patientData.ticketId;
      setCurrTID(data.patientData.ticketId)
      history.push(path)
      window.location.reload()
    }catch(e){
      console.log(e)
    }
  }
  const popQ = async()=> {
    try{
      const config = {
        headers: {
            "Content-type":"application/json"
        },
      }
      const doc_name=patient.doctor
      console.log(doc_name)
      const {data}=await axios.post('/api/doctor/popQ',{doc_name},config)
    }catch(e){
      console.log(e)
    }
  } 
  const submitHandler = async ()=>{
    console.log(array)
    var arr = [...array]
    
    try{
      const config = {
          headers: {
              "Content-type":"application/json"
          },
      }
      const dateMade = currDate;
      console.log(date);
      const {data} = await axios.post('/api/prescription/add',{id,dateMade,symptoms,instructions,diagnosis,arr,number,date,tests,other},config);
      history.goBack();
    }catch(error){
        console.log(error);
      }
      
    // popQ()
    // getQ()
  }

  function showBtn(idx){
    var arr = [...showButton];
    arr[idx] = '100';
    setShowButton(arr);
  }

  function hideBtn(idx){
    var arr = [...showButton];
    arr[idx] = '0';
    setShowButton(arr);
  }

  
  
  function medicineChangeHandler (idx,val){

    var arr = [...array];
    arr[idx] = val;
  }

  function deleteHandler (idx){
    var arr = [...array];
    arr = arr.filter((item,i)=>{
      return i!=idx;
    })
    setArray(arr);
  }
  
  return (
    <Box backgroundColor='#FEFFFF' sx={{height:'fit-content',minHeight:'115vh',paddingBottom:'4vh',paddingTop:'2vh'}}>
      <Box display='flex' justifyContent='center' alignItems='center' sx={{margin:'8px', padding:'30px'}}>
        <img src={mainImg} alt='img goes here' style={{width:'6vw',margin:'0px'}}></img>
      </Box>
      <Button onClick={()=>{history.push('/doctor')}} sx={{position:'absolute',top:'6vh',left:'2vw',backgroundColor:'#CF823A',color:'#FEFFFF',padding:'1rem',borderRadius:'50px','&:hover':{backgroundColor:'#CF9D6E'}}}>
        <i className="material-icons" sx={{fontSize:'1rem'}}>keyboard_backspace</i>
      </Button>
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
          <input id='name' disabled value={patient.patientData.registrationNumber} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh',marginTop:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Doctor Id:
          </Typography>
          <input id='name' disabled value={JSON.parse(localStorage.getItem('DoctorOnline')).ssfID} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
        </Box>
        <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
          <Typography sx={{fontSize:'0.8rem'}}>
            Doctor Name:
          </Typography>
          <input id='name' disabled value={JSON.parse(localStorage.getItem('DoctorOnline')).name} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
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
        <textarea id='name' ref={symptomsVal} onChange={(e)=>{setSymptoms(e.target.value)}} style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Instructions:
        </Typography>
        <textarea id='name' onChange={(e)=>{setInstructions(e.target.value)}}  style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Diagnosis:
        </Typography>
        <textarea id='name' onChange={(e)=>{setDiagnosis(e.target.value)}} style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          No of Medicines:
        </Typography>
        <input id='name' onChange={(e)=>{setNumber(e.target.value)}} placeholder='Total Medicine' style={{width:'70vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'8px',outline:'none'}}/>
      </Box>
      <Button onClick={()=>{history.push('/conference')}} className='btn' sx={{backgroundColor:'#19414D',color:'#FEFFFF',height:'6vh',width:'8vw',padding:'2vh',marginLeft:'4vw',fontSize:'0.8rem',borderRadius:'15px'}}>
        Start Meeting
      </Button>
      <Box sx={{marginTop:'5vh',marginLeft:'4vw'}}> 
        <Typography>
          MEDICINES | DURATION | FREQUENCY | NO OF MEDICINE:
        </Typography>
        <Box sx={{width:'80%'}}>
       < Autocomplete
           options={allMed}
           getOptionLabel={(option) => option.name2}
           onChange={handleSelectChange}
           filterOptions={filterOptions}
           renderInput={(params) => (
             <TextField
                 {...params}
                 label="Search for available medicine"
                 variant="outlined"
            />
        )}
        />
        </Box>
        <Button className='btn' onClick={addHandler} sx={{position:'relative',top:'5vh',left:'75vw',height:'5vh',width:'5vh',borderRadius:'15px',backgroundColor:'#19414D',color:'#FEFFFF'}}>
          Add
        </Button>
        <Box style={{width:'100%'}}>
          
                <Box sx={{paddingTop:'1vh',width:'70vw',padding:'20px',borderRadius:'8px',marginBottom:'3vh',border:'1px solid rgb(170, 170, 170)'}}>
                  <Box display='flex' style={{width:'90%',marginBottom:'2vh',justifyContent:'space-between'}}>
                    <input type='text' onChange={(e)=>{setName(e.target.value)}} value={selectedMed}  placeholder='Medicine Name' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <div style={{display:'flex',flexDirection:'column',width:'35%'}}>
                      <textarea ref={scheduleVal} placeholder='Schedule for Medicine' style={{borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'8px',outline:'none'}} type = 'text' onChange={(e)=>{setSchedule(e.target.value)}}/>
                    </div>
                  </Box>
                  <Box display='flex' style={{width:'90%',justifyContent:'space-between'}}>
                    <input type='text' ref={durationVal} onChange={(e)=>{setDose(e.target.value)}} placeholder='Duration' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <input type='text' ref={totalVal} onChange={(e)=>{setTotal(e.target.value)}} placeholder='Total Number of Medicine' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <input type='text' ref={feeVal} onChange={(e)=>{setFee(e.target.value)}} placeholder='fee' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                  </Box>
                </Box>
                {
            array.map((item,idx)=>{
              return(
                <Box onMouseOver={()=>{showBtn(idx)}} onMouseOut={()=>{hideBtn(idx)}} sx={{paddingTop:'1vh',width:'70vw',padding:'20px',borderRadius:'8px',marginBottom:'3vh',border:'1px solid rgb(170, 170, 170)'}}>
                  <Box display='flex' style={{width:'90%',marginBottom:'2vh',justifyContent:'space-between'}}>
                    <input type='text' value={item.name} placeholder='Medicine Name' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <div style={{display:'flex',flexDirection:'column',width:'35%'}}>
                      <textarea  placeholder='Schedule for Medicine' style={{borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'8px',outline:'none'}} type = 'text' value={item.schedule}/>
                    </div>
                  </Box>
                  <Box display='flex' style={{width:'90%',justifyContent:'space-between'}}>
                    <Box sx = {{display:'flex',width:'40%',alignItems:'center'}}>  
                      <Box sx={{fontSize:'0.8rem',height:'5vh',display:'flex',paddingRight:'1vw',alignItems:'center'}}>Dose:</Box>
                      <input type='text' value={item.dose} placeholder='Frequency' style={{height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    </Box>
                    <Box sx = {{display:'flex',width:'40%',alignItems:'center'}}>  
                      <Box sx={{fontSize:'0.8rem',height:'5vh',display:'flex',paddingRight:'1vw',alignItems:'center'}}>Total Medicines:</Box>
                      <input type='text' value={item.total} placeholder='Total Number of Medicine' style={{height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    </Box>
                    <Box sx = {{display:'flex',width:'40%',alignItems:'center'}}>  
                      <Box sx={{fontSize:'0.8rem',height:'5vh',display:'flex',paddingRight:'1vw',alignItems:'center'}}>Fee:</Box>
                      <input type='text' value={item.fee} placeholder='fee' style={{height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    </Box>
                  </Box>
                  <Button className='btn' onClick={()=>{deleteHandler(idx)}} sx={{backgroundColor:'#19414D',color:'#FEFFFF',width:'4vw',height:'4vh',marginLeft:'7vh',position:'relative',left:'59vw',transition:'all 0.1s',opacity:showButton[idx]}}>
                    Delete
                  </Button>
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
        <textarea id='name' onChange={(e)=>{setTests(e.target.value)}} placeholder='test' style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Any Other Instructions:
        </Typography>
        <textarea id='name' onChange={(e)=>{setOther(e.target.value)}} placeholder='info' style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Next Recommended Visit:
        </Typography>
        <input id='name' type='date' onChange={(e)=>{setDate(e.target.value)}} style={{width:'70vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'8px',outline:'none'}}/>
      </Box>
      <Button className='btn' onClick={submitHandler} sx={{backgroundColor:'#19414D',color:'#FEFFFF',width:'7vw',height:'4vh',marginLeft:'7vh'}}>
        Submit
      </Button>
    </Box>
  )
}

export default Prescription