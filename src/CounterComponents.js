import React, { useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './CounterComponents.css';
    const CounterComponents = () => {
    const [count, setCount] = useState(0)
    
    const increment = ()=>{
        setCount(count+1);
    }
     
    const decrement = ()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            setCount(0);
            alert("Number can't be less than 0")
        }
    }
    const reset = ()=>{
        setCount(0);
    }
       
    useEffect(()=>{
        console.log(count)
    })
    
  return (
    <div className='container my-5 w-50 h-50'>
        <div className=' text-center my-5'>
            <div className="card-body">
               <h1 className='heading mt-0' id='header'>Counter<span> App</span></h1>
                
                <div className='my-5'>
                    <h2 id='zero'>{count}</h2> <br/><br/> 
                    <button className='btn btn-success mx-3' id='button' onClick={increment}>Increment</button>
                    <button className='btn btn-danger mx-3' id='button' onClick={decrement}>Decrement</button>
                    {count>=10 && <><br /><br /><button className='btn btn-primary mx-3 my-3' id='button' onClick={reset}>Go To 0</button></>}

                </div>
            </div>
        </div>
    </div>
  )
}

export  default  CounterComponents