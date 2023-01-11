import React,{useEffect,useState} from 'react'
import '../app.css'
const MedicineStore = () => {
    const [data,setData]=useState(['hello'])
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
    useEffect(() => {
       
        getMedicines();
        // setTimeout(5000)
    },[])

    return(
        <>
            <div style={{marginLeft:'20%',marginTop:'4%'}}>
            {/* <h1>Hello you are in medicine storage</h1> */}
            <table >
                <tr><th>slno</th><th>Product_name</th><th>Price</th><th>Quantity</th><th>Update</th></tr>
                {data.map((item,idx) => {
                    return (<tr><td>{item.slno}</td><td>{item.Product_name}</td><td> {item.Price}</td><td>  {item.Quantity}</td>
                    <td> <button>Save</button></td></tr>)
                })
                }
            </table>
            </div>
        </>
    )
}

export default MedicineStore