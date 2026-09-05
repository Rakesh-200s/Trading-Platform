import React from "react";

function Education() {
  return (
    <div className="container p-3 mb-5 mt-3">
      <div className="row">
        <div className="col">
          <img src="media/images/education.svg" />
        </div>
        <div className="col mt-3 p-2">
          <h2 className="fs-2 fw-normal">Free and open market education</h2>
          <p className=" text-muted mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>{" "}
          <br></br>
          <a href="" className="zerodha-link">
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <br></br>
          <p className="text-muted mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries
          </p>
          <br></br>
          <a href="" className="zerodha-link">
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
