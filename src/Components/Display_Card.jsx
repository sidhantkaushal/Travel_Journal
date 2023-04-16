import React from "react";

function Display_Card({ img, country, loc, locLink, time, desc }) {
  return (
    <>
      <div className="Card">
        <div className="div-image">
          <img className="place-img" src={img} alt="" />
        </div>

        <div className="place-desc">
          <img
            className="location-icon"
            src="https://freepngimg.com/download/symbol/69580-symbol-computer-location-icons-hq-image-free-png.png"
            alt="location icon"
          />
          <span className="Countryname">{country}</span>
          <span className="map-link">
            <a href={locLink} target="_blank">
              View on Google Maps
            </a>
          </span>
          <h1 className="location">{loc}</h1>
          <p className="timeline">{time}</p>
          <p className="desc">{desc}</p>
          <a href=""></a>
        </div>
      </div>
    </>
  );
}

export default Display_Card;
