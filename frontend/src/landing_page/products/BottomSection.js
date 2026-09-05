import React from "react";
import { useNavigate } from "react-router-dom";
function BottomSection() {
 const navigate=useNavigate();
 const handleSignupClick=()=>{
  navigate('/signup');
 }
  return (
    <div className="container">
      <div className=" mb-5 mt-5">
        <h1 className="fs-5 text-center fw-normal ">
          Want to know more about our technology stack? Check out the{" "}
          <a href="" className="zerodha-link">
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>
      </div>
      <div className=" p-5 mt-5 mb-5 text-center">
        <h1 className="fs-3 fw-semibold" style={{ color: "" }}>
          The Zerodha Universe
        </h1>
        <p className="text-muted mt-2 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
        <div className="row mt-5 p-3">
          <div className="col-4 p-4">
            <img
              src="/media/images/zerodhaFundhouse.png"
              style={{ width: "50%" }}
            />
            <p className="small text-muted " style={{ fontSize: "0.85rem" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "50%" }}
            />
            <p className="small text-muted" style={{ fontSize: "0.85rem" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/images/goldenpiLogo.png" style={{ width: "50%" }} />
            <p className="small text-muted" style={{ fontSize: "0.85rem" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="/media/images/streakLogo.png" style={{ width: "50%" }} />
            <p className="small text-muted " style={{ fontSize: "0.85rem" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "50%" }}
            />
            <p className="small text-muted" style={{ fontSize: "0.85rem" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/images/dittoLogo.png" style={{ width: "50%" }} />
            <p className="small text-muted" style={{ fontSize: "0.85rem" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <button
          className="pt-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default BottomSection;
