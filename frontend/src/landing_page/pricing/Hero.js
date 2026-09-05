import React from 'react';
function Hero() {
  return ( 
    <div className='container '>
      <div className='row text-center mt-5'>
        <h2 className='mt-5' style={{color:"#424242"}}> Charges</h2>
        <p className='text-muted fs-4'>List of all charges and taxes</p>
      </div>
      <div className='row mt-4 text-center between p-5'>
        <div className='col-4  '>
          <img src='media/images/pricing0.svg' style={{width:"70%"}}/>
          <h2 className='' style={{color:"#424242"}}>Free equity delivery</h2> 
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 '>
          <img src='media/images/intradayTrades.svg' style={{width:"70%"}}/>
          <h2 style={{color:"#424242"}}>Intraday and F&O trades</h2>
          <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div> 
        <div className='col-4'>
          <img src='media/images/pricing0.svg' style={{width:"70%"}}/>
          <h2 style={{color:"#424242"}}>Free direct MF</h2>
          <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;