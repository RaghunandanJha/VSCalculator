import React, { useEffect, useState } from "react";
import { context } from './context';
import { useContext } from 'react';

const Result= ()=> {
    const Context=useContext(context);
    const {burden, setBurden, sec, setSec, alf, setAlf, rct, setRct}=Context;
    
    const [root, setRoot]=useState();
    const [rb, setRb]=useState();
    const [xb, setXb]=useState();
    const [ma, setMa]=useState();

    
    const rctValue = parseFloat(rct);
    const secValue = parseFloat(sec);
    const burdenValue = parseFloat(burden);
    const alfValue = parseFloat(alf);
    const maValue = parseFloat(ma);

    const rbValue = burdenValue / (secValue * secValue) * 0.6;
    const xbValue = burdenValue / (secValue * secValue) * 0.8;
    
    // const calculateVs=()=>{
        
    // setRoot(Math.sqrt(((rctValue + xbValue) * (rctValue + xbValue)) + (rbValue * rbValue)));
    
    // }
    const Root=Math.sqrt(((rctValue + xbValue) * (rctValue + xbValue)) + (rbValue * rbValue));
    const vs=alfValue*secValue*Root;

    const ce=((maValue*100)/(secValue*alfValue));
    return (
        <div className="container-fluid">
      <div className='row justify-content-center mt-2'>
         <div className='col-10' style={{width: '350px'}}>
              <div className='h6 text-center fw-bold mb-3'>VS & Composite Error Calculator</div>

              <div>
                <label style={{fontSize: '20px', marginTop: '20px'}} >Rct75:</label>
                <input type='text' style={{outline: 'none', height: '25px', marginLeft: '46px'}} onChange={(e)=> setRct(e.target.value)}  placeholder='Celcius'/>
              </div>

              
              <div className="mt-3" style={{marginLeft: '97px'}}>
                <div>VS={vs}</div>
              </div>

              <div>
                <label style={{fontSize: '20px', marginTop: '20px'}} >Current:</label>
                <input type='text' style={{outline: 'none', height: '25px', marginLeft: '27px'}} onChange={(e)=> setMa(e.target.value)}  placeholder='Measured Current'/>
              </div>


              <div className="mt-3" style={{marginLeft: '97px'}}>
                <div>C.E%={ce}</div>
              </div>

         </div>
      </div>
    </div>
    )

}
export default Result;