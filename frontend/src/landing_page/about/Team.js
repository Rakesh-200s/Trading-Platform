import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5">
          <h2 className="fs-3 text-center">People</h2>
        </div>
        <div className="row p-5 text-muted "style={{lineHeight:"1.8",fontSize:"1.2em"}}>
          <div className="col-5 people text-center p-5 ">
            <img src="/media/images/nithinKamath.jpg" style={{borderRadius:"100%",width:"60%"}}/>
            <h5 className="mt-3">Nithin Kamath</h5>
            <p className="text-grey">Founder, CEO</p>
          </div>
          <div className="col-7">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href="" style={{textDecoration:"none"}}>HomePage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA </a> / <a href=""style={{textDecoration:"none"}}>Twitter</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
