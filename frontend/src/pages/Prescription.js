import React, { useEffect, useState ,useRef} from 'react'
import { AppBar, Box, Button,Typography, Autocomplete, TextField } from '@mui/material'
import mainImg from '../images/Logo.png'
import './style.css'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'
const Prescription = () => {
  const compoRef=useRef()
  const [symptoms, setSymptoms] = useState();
  const [instructions, setInstructions] = useState();
  const [diagnosis, setDiagnosis] = useState();
  const [medicines, setMedicines] = useState([]);
  const [array,setArray] = useState([]);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [dose, setDose] = useState("");
  const [total, setTotal] = useState(0);
  const [number, setNumber] = useState();
  const [date, setDate] = useState();
  const [tests, setTests] = useState();
  const [other, setOther] = useState();
  const para = useParams();
  const [id, setId] = useState(para.id);
  const [allMed,setAllMed]=useState([])
  const history = useHistory();
  const [breakFast,setBreakFast]=useState("None")
  const [lunch,setLunch]=useState("None")
  const [evening,setEvening]=useState("None")
  const [dinner,setDinner]=useState("None")
  const [selectedMed,setSelectedMed]=useState("")
  const [currTID,setCurrTID]=useState(0)
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
  const sysRef=useRef()
  const handleTextArea =  (e) =>{
    const textareaLineHeight=parseInt(getComputedStyle(sysRef.current).lineHeight)
    const currentRows = Math.ceil(e.target.scrollHeight /14);
    console.log(e.target.scrollHeight)
    console.log(textareaLineHeight)
    e.target.rows = currentRows;
    console.log(currentRows)
  }
  const handleBreakfastChange=(e) => {
    console.log(e.target.value)
    setBreakFast(e.target.value)
  }
  const handleLunchChange = (e) => {
    setLunch(e.target.value)
  }
  const handleEveChange = (e) => {
    setEvening(e.target.value)
  }
  const handleDinnerChange = (e) => {
    setDinner(e.target.value)
  }
  const handleSelectChange = (event, value) => {
    setSelectedMed(event.target.innerText)
  };
  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) =>
      option.Product_name.toLowerCase().includes(inputValue.toLowerCase())
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
        const {data} = await axios.post('/api/patient/truefetch',{id},config);
        setPatient(data);
      }
      catch(error){
        console.log(error);
      }
    }
    fetch();
    
    getMedicines();
  }, [])
  
 
  const addHandler = ()=>{
    // console.log(medicines)
    if(!selectedMed){
      return;
    }
    var arr = [...medicines]
    var data = {
      selectedMed,
      duration,
      dose,
      total,
      breakFast,
      lunch,
      evening,
      dinner
    }
    arr.push(data);
    setMedicines(arr);
    arr = [...array];
    arr.push(array.length);
    console.log(arr)
    setArray(arr);
    setName("");
    setSelectedMed("")
    setBreakFast("None")
    setLunch("None")
    setEvening("None")
    setDinner("None")
    setDose("")
    setTotal("")
  }
  const getQ = async() => {
    console.log('Inside getQ'+currTID)
    try{
      const config = {
        headers: {
            "Content-type":"application/json"
        },
      }
      const doc_name=patient.doctor
      console.log(doc_name)
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
  const printHandler = useReactToPrint(
    {
      content: () => compoRef.current,
      documentTitle:'Prescription'
    }
  );
  const submitHandler = async ()=>{
    // if(!symptoms){
    //   console.log("??");
    //   return;
    // }
    // console.log(medicines)
    // var arr = [...medicines]
    // if(!(name==="")){
    //   var data = {
    //     name,
    //     duration,
    //     dose,
    //     total
    //   }
    //   console.log(medicines);
    //   arr.push(data);
    //   setMedicines(arr);
    // }
    popQ()
    
    // try{
    //   const config = {
    //       headers: {
    //           "Content-type":"application/json"
    //       },
    //   }
    //   const dateMade = currDate;
    //   const {data} = await axios.post('/api/prescription/add',{id,dateMade,symptoms,instructions,diagnosis,arr,number,date,tests,other},config);
    //   history.goBack();
    // }catch(error){
    //   console.log(error);
    // }

    getQ()
  }
  useEffect(() => {
    console.log(array)
  },[array])
  return (
    <div ref={compoRef}>
    
    <Box backgroundColor='#FEFFFF' sx={{height:'fit-content',minHeight:'115vh',paddingBottom:'4vh',paddingTop:'2vh'}}>
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
          <input id='name' disabled value={id} placeholder='name' style={{width:'25vw',height:'3vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px'}}/>
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
      <div style={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Symptoms Summary:
        </Typography>
        <textarea ref={sysRef} onInput={handleTextArea} id='name' onChange={(e)=>{setSymptoms(e.target.value)}} style={{width:'70vw',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </div>
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
           getOptionLabel={(option) => option.Product_name}
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
          <i class='fas fa-plus'></i>
        </Button>
        <Box sx={{paddingTop:'1vh',width:'70vw',padding:'20px',borderRadius:'8px',marginBottom:'3vh',border:'1px solid rgb(170, 170, 170)'}}>
                  <Box display='flex' style={{width:'90%',marginBottom:'2vh',justifyContent:'space-between'}}>
                    <input type='text' onChange={(e)=>{setName(e.target.value)}} value={selectedMed} placeholder='Medicine Name' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <div style={{display:'flex',flexDirection:'column',width:'35%'}}>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span  style={{width:'30%'}}>Breakfast</span>
                          <input type="radio" value="Before" checked={breakFast==='Before'}  onChange={handleBreakfastChange} /> Before
                          <input type="radio" value="After" checked={breakFast==='After'}  onChange={handleBreakfastChange} />   After
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span style={{width:'30%'}}>Lunch</span>
                          <input type="radio" value="Before" checked={lunch==='Before'} onChange={handleLunchChange} /> Before
                          <input type="radio" value="After" checked={lunch==='After'} onChange={handleLunchChange} />   After
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                           <span style={{width:'30%'}}>Evening</span>
                          <input type="radio" value="Before" checked={evening==='Before'} onChange={handleEveChange} /> Before
                          <input type="radio" value="After" checked={evening==='After'} onChange={handleEveChange} />   After
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span style={{width:'30%'}}> Dinner</span>
                          <input type="radio" value="Before" checked={dinner==='Before'} onChange={handleDinnerChange} /> Before
                          <input type="radio" value="After" checked={dinner==='After'} onChange={handleDinnerChange} />   After
                      </div>
                    </div>
                  </Box>
                  <Box display='flex' style={{width:'90%',justifyContent:'space-between'}}>
                    <input type='text' onChange={(e)=>{setDose(e.target.value)}} placeholder='Frequency' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <input type='text' onChange={(e)=>{setTotal(e.target.value)}} placeholder='Total Number of Medicine' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                  </Box>
                </Box>
        <Box style={{width:'100%'}}>
          {
            medicines.map((item,idx)=>{
              console.log(item)
              return(
                <Box sx={{paddingTop:'1vh',width:'70vw',padding:'20px',borderRadius:'8px',marginBottom:'3vh',border:'1px solid rgb(170, 170, 170)'}}>
                  <Box display='flex' style={{width:'90%',marginBottom:'2vh',justifyContent:'space-between'}}>
                    <input type='text' onChange={(e)=>{setName(e.target.value)}} value={item.selectedMed} placeholder='Medicine Name' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <div style={{display:'flex',flexDirection:'column',width:'35%'}}>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span  style={{width:'30%'}}>Breakfast</span>
                          <input type="radio" value="Before" checked={item.breakFast==='Before'}  onChange={handleBreakfastChange} /> Before
                          <input type="radio" value="After" checked={item.breakFast==='After'}  onChange={handleBreakfastChange} />   After
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span style={{width:'30%'}}>Lunch</span>
                          <input type="radio" value="Before" checked={item.lunch==='Before'} onChange={handleLunchChange} /> Before
                          <input type="radio" value="After" checked={item.lunch==='After'} onChange={handleLunchChange} />   After
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                           <span style={{width:'30%'}}>Evening</span>
                          <input type="radio" value="Before" checked={item.evening==='Before'} onChange={handleEveChange} /> Before
                          <input type="radio" value="After" checked={item.evening==='After'} onChange={handleEveChange} />   After
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:'space-between'}}>
                          <span style={{width:'30%'}}> Dinner</span>
                          <input type="radio" value="Before" checked={item.dinner==='Before'} onChange={handleDinnerChange} /> Before
                          <input type="radio" value="After" checked={item.dinner==='After'} onChange={handleDinnerChange} />   After
                      </div>
                    </div>
                  </Box>
                  <Box display='flex' style={{width:'90%',justifyContent:'space-between'}}>
                    <input type='text' onChange={(e)=>{setDose(e.target.value)}} value={item.dose}placeholder='Frequency' style={{width:'60%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
                    <input type='text' onChange={(e)=>{setTotal(e.target.value)}} value={item.total} placeholder='Total Number of Medicine' style={{width:'30%',height:'3vh',paddingLeft:'12px',borderRadius:'8px',outline:'none',border:'1px solid rgb(170, 170, 170)'}}/>
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
        <textarea id='name' onChange={(e)=>{setTests(e.target.value)}} placeholder='name' style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
      </Box>
      <Box sx={{alignSelf:'flex-start',marginLeft:'4vw',marginBottom:'2vh'}}>
        <Typography sx={{fontSize:'0.8rem'}}>
          Any Other Instructions:
        </Typography>
        <textarea id='name' onChange={(e)=>{setOther(e.target.value)}} placeholder='name' style={{width:'70vw',height:'8vh',borderRadius:'5px',border:'1px solid rgb(170, 170, 170)',paddingLeft:'5px',color:'black',outline:'none',padding:'8px'}}/>
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
      <Button onClick={printHandler}>Print</Button>
    </Box>
    </div>
  )
}

export default Prescription