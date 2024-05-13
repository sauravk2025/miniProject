import React from "react";
import "./rentalstyle.css";
import { Link } from "react-router-dom";
import bkg from "./back3.jpg";
function Rental() {
  return (
    <div className="fullpage">
      <div className="fullpagetext">
        <h1 className="heading">WATCHWISE</h1>
        <div className="para1">
          Start your <b>OTT</b> platform now.
        </div>
        <div className="para2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nisi
            voluptatem odio minima sunt harum debitis molestiae consequatur,
            rerum reiciendis itaque quod mollitia nesciunt enim molestias ex
            facere nulla a.
          </p>
        </div>
        <div className="btns">
          <Link to="/home">
            {/* Navigate to "/home" when clicked */}
            <button className="rentbt" id="bt1">
              Give Rent
            </button>
          </Link>
          <Link to="/home">
            {/* Navigate to "/home" when clicked */}
            <button className="rentbt" id="bt2">
              Take Rent
            </button>
          </Link>
        </div>
      </div>
      <div className="verticalline2"></div>

      <div
        className="movieimage"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ),url(${bkg})`,
        }}
      >
        <h1 className="bannerhead">
          Lend Or Rent Your OTT<br></br>
        </h1>
        <p className="bannertext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae
          impedit maxime molestias accusamus commodi harum corrupti eum minima
          fuga.
        </p>
      </div>
    </div>
  );
}

export default Rental;
