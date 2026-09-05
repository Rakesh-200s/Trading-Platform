import React from 'react';

function Hero() {
  return ( 
    <div className='container p-5  border-bottom mt-5 mb-5 '>
      <div className='row text-center '>
        <h3>Zerodha Products</h3>
        <p className='text-muted mt-2 mb-5' style={{fontSize:"1.2rem"}}>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our  <a href='' className='zerodha-link '>investment offerings
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a></p>
      </div>
    </div> 
   );
}

export default Hero;