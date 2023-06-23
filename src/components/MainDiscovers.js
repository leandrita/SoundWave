import React from "react";
import "../css/MainDiscovers.css";
import "../css/DiscoversTablet.css";
import "../css/DiscoversMobile.css";
import Footer from "../components/Footer";
import Microphone from "../assets/microphone.svg";
import Albums from "../assets/albums.svg";
import More from "../assets/more.svg";
import Covers from "../assets/covers.jpg";

export default function MainDiscovers() {
  return (
    <>
    <div className="discovers">
      <div className="info">
        <h3 className="subtitle">Discover new music</h3>

        <section className="section">
          <div className="box-info">
            <img className="box-img" src={Microphone} />
            <p className="box-text">Charts</p>
          </div>
          <div className="box-info">
            <img className="box-img" src={Albums} />
            <p className="box-text">Albums</p>
          </div>
          <div className="box-info">
            <img className="box-img" src={More} />
            <p className="box-text">More</p>
          </div>
        </section>

        <p className="info-text">
          By joining you can benefit by listening to the latest albums
          realeased.
        </p>
      </div>
      
      <div className="covers">
              <img src={Covers} className="image" />
      </div>

    
        <div className='covers'>
            <img src={Covers} className='image'/>
        </div>
        <Footer/>
    </div>
    </>
  );
}
