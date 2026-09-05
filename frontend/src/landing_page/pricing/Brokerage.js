import React from 'react';

function Brokerage() {
  return (
    <div className='container'>
      <div className='row border-top text-center' style={{margin:"5px"}}>
        <div className='col-8 p-5'>
          <a href='' className='zerodha-link'><h3 className='fs-5'>Brokerage calculator</h3></a>
          <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"14px"}} className='text-muted  p-4'>
            <li>Equity Delivery: ₹20 per executed order or 0.1% of turnover, whichever is lower</li>
            <li>Equity Intraday: ₹20 per executed order or 0.03% of turnover, whichever is lower</li>
            <li>Equity Futures: ₹20 per executed order or 0.03% of turnover, whichever is lower</li>
            <li>Equity Options: ₹20 per executed order</li>
            <li>Currency Futures: ₹20 per executed order or 0.03% of turnover, whichever is lower</li>
            <li>Currency Options: ₹20 per executed order</li>
            <li>Call & Trade: ₹50 per order</li>
          </ul>
        </div>
        <div className='col-4 p-5'>
          <a href='' className='zerodha-link'><h3 className='fs-5'>List of Charges</h3></a>
          <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"14px"}} className='text-muted p-4\'>
            <li>STT/CTT</li>
            <li>Exchange transaction charges</li>
            <li>Service tax/GST</li>
            <li>SEBI turnover fees</li>
            <li>Stamp duty</li>
            <li>Education cess / higher education cess in older versions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;