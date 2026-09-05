import React from 'react';
import {useNavigate} from 'react-router-dom';


function OppenAccount() {
  const navigate=useNavigate();
  const handleSignupClick=()=>{
    navigate('/signup');
  }
  return (
    <div className='container  mt-5 p-5 text-center'>
      <h2 className='fs-3 fw-normal mb-4'>Open a Zerodha account</h2>
      <p className='text-muted mt-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <button className='pt-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}} onClick={handleSignupClick}>Signup for free</button>
    </div>
  );
}

export default OppenAccount;