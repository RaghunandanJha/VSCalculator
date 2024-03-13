import logo from './logo.svg';
import React from 'react';
import Provider from './context';
import { context } from './context';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Calculator=()=>{
  const Context=useContext(context);
  const {burden, setBurden, sec, setSec, alf, setAlf}=Context;
  const navigate=useNavigate();


  return (
    <div className="container-fluid">
      <div className='row justify-content-center mt-2'>
         <div className='col-10' style={{width: '350px'}}>
              <div className='h6 text-center fw-bold mb-3'>VS & Composite Error Calculator</div>

              <div>
                <label style={{fontSize: '20px', marginTop: '20px'}} >Burden:</label>
                <input type='text' style={{outline: 'none', height: '25px', marginLeft: '46px'}} onChange={(e)=> setBurden(e.target.value)}  placeholder='VA'/>
              </div>

              <div>
                <label style={{fontSize: '20px'}} >Sec-Current:</label>
                <input type='text' className='ms-1' style={{outline: 'none', height: '25px'}} onChange={(e)=> setSec(e.target.value)}  placeholder='1/5A'/>
              </div>

              <div>
                <label style={{fontSize: '20px'}} >ALF:</label>
                <input type='text' style={{outline: 'none', height: '25px', marginLeft: '75px'}} onChange={(e)=> setAlf(e.target.value)} />
              </div>

              <div className='row justify-content-center mt-3'>
                <div className='col-6 align-items-center'>
                <Link to='result'>  
                <button type="button" className="btn btn-info ps-5 pe-5 pt-1 pb-1" style={{width: '100%', fontSize: '12px'}}>Next</button>
                </Link>  
                </div>
              
              </div>
               

         </div>
      </div>
    </div>
    );
}

export default Calculator;