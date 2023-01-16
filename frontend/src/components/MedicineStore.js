import React,{useEffect,useState} from 'react'
import '../app.css'
const MedicineStore = () => {
    const [data,setData]=useState(['hello'])
    const [disability,setDisabled]=useState('false')
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
            console.log(dat)
                setData(dat)
            
        }
        catch(e){
            console.log(e)
        }
    }
    const UpdateEnable=() =>{
        if(disability=='true')
            setDisabled('false')
        else
            setDisabled('true')
        
    }
    useEffect(() => {
       
        getMedicines();
        // setTimeout(5000)
    },[])

    return(
        <>
            <div style={{marginLeft:'20%',marginTop:'4%',height:'60%',width:'60%',overflowY:'scroll',borderRadius:'2%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            {/* <h1>Hello you are in medicine storage</h1> */}
            <table style={{width:'100%'}}>
                <tr><th>slno</th><th>Product_name</th><th>Price</th><th>Quantity</th><th>Update</th></tr>
                {data.map((item,idx) => {
                    return (<tr><td>{item.slno}</td><td>{item.Product_name}</td><td><input value={item.Price} disabled={disability} style={{borderRadius:'5%'}}/></td><td> <input value={item.Quantity} disabled={disability}/> </td>
                    <td> <button onClick={UpdateEnable}>Save</button></td></tr>)
                })
                }
            </table>
            </div>
        </>
    )
}

export default MedicineStore