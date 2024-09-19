import React,{useState} from 'react'

function Calculator() {

    let pamount=0
    let rate=0
    let t =0
    const [res,setRes]=useState(0);

    const getAmount=(e)=>{
        pamount=e.target.value
        console.log(pamount);
    }

    const getRate=(e)=>{
        rate=e.target.value
        console.log(rate);
    }

    const getTime=(e)=>{
        t=e.target.value
        console.log(t);
    }

    const calculate=()=>{
        // const res=pamount*rate*(t/100)
        // alert(res)
        setRes(pamount*rate*(t/100))
        console.log(res);
    }

  return (
    
    <div className='d-flex justify-content-center align-items-center' style={{height:'60vh'}}>
        
        <div className='w-50 border shadow p-4 '>
            <input type="number" onChange={(e)=>{getAmount(e)}} className='form-control my-3' placeholder='Enter Principal Amount' />
            <input type="number" onChange={(e)=>{getRate(e)}} className='form-control mb-3' placeholder='Enter Rate per Annum' />
            <input type="number" onChange={(e)=>{getTime(e)}} className='form-control mb-3' placeholder='Enter Time in Years ' />
            <button onClick={calculate} className='btn btn-success '>Calculate</button>
            <h3>{res}</h3>

        </div>
      
    </div>
  )
}

export default Calculator
