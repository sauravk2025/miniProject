import React from "react";
import "./featurestyle.css";
import { Link } from "react-router-dom";
import Navbar from "../homepage/Navbar/Navbar";
function Feauture() {
  return (
    <>
      <Navbar></Navbar>
      <div className="feauturepage">
        <center>
          <div className="feauturelink">
            <h1>Choose Your WISE-WATCH !</h1>
          </div>
          <div className="feauturepara">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium neque similique quia dolorem nobis maiores? Iure
              adipisci numquam quasi! Ad minima nulla iste expedita deleniti,
              iusto nobis voluptatem nam ipsa?
            </p>
          </div>
        </center>

        <div className="feauturebox">
          <div id="box1" className="boxeffect">
            <h2>Recommender</h2>
            <div className="ftparabox">
              <p className="ftpara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus harum quae, porro vitae ducimus eaque.
              </p>
            </div>
            <Link to="/home">
              {/* Navigate to "/home" when clicked */}
              <button className="ftbt bt1">Recommend</button>
            </Link>
          </div>
          <div id="box1" className="boxeffect">
            <h2>Find Me </h2>
            <div className="ftparabox">
              <p className="ftpara">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore odio aperiam reiciendis, earum molestias eveniet.
              </p>
            </div>
            <Link to="/home">
              {/* Navigate to "/home" when clicked */}
              <button className="ftbt bt2">Find Me</button>
            </Link>
          </div>
          <div id="box1" className="boxeffect">
            <h2>Rental</h2>
            <div className="ftparabox">
              <p className="ftpara">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                veritatis voluptatum. Quaerat dolor saepe distinctio.
              </p>
            </div>
            <Link to="/rental">
              {/* Navigate to "/home" when clicked */}
              <button className="ftbt bt3">Rental</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feauture;
