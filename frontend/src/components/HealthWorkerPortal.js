import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
const HealthWorkerPortal = () =>{
    
    const history=useHistory()
   
    const redirect = () =>{
        history.push('HealthWorker/registration')
    }
  
    const redirectSearch = () => {
        history.push('/HealthWorker/search')
    }
    return(
        <div style={{margin:'30%'}}>
            <h1>Hello You are in HealthWorkerPortal</h1>
            <button onClick={()=> redirect()}>Registration</button>
            <button>Block</button>
            <button onClick={() => redirectSearch()}>Info</button>
            
            
        </div>
    );
}

export default HealthWorkerPortal