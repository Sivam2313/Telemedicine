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
        <div style={{margin:'30%'}}>
            <h1>Hello You are in DoctorPortal</h1>
            <button onClick={()=> redirect()}>Registration</button>
            <button>Block</button>
            <button onClick={() => redirectSearch()}>Info</button>
        </div>
    );
}

export default DoctorPortal