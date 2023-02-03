import React from 'react'
import {useHistory} from 'react-router-dom'
const DoctorPortal = () =>{
    const history=useHistory()
    const redirect = () =>{
        history.push('Doctor/registration')
    }
    const redirectSearch = () =>{
        history.push('Doctor/search')
    }
    return(
        <div style={{width:'100vw',height:'100vh'}}>
            
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:"100%"}}>
            
            <button style={{margin:"5%",padding:" 10px 40px"}}onClick={()=> redirect()}>Registration</button>
           
            <button style={{margin:"5%",padding:" 10px 40px"}}onClick={() => redirectSearch()}>Info</button>
            </div>
            
        </div>
    );
}

export default DoctorPortal