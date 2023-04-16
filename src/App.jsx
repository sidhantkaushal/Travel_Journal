import React from "react";
import Navbar from "./Components/Navbar";
import Display_Card from "./Components/Display_Card";
import data from "./data";
function App() {
  const cards = data.map((item) => {
    return (
      <Display_Card
        img={item.displayImg}
        country={item.countryName}
        loc={item.locationName}
        time={item.timeline}
        desc={item.description}
        locLink={item.coordinates}
      />
    );
  });

  return (
    <>
      <Navbar />
      <div className="Main-container">{cards}</div>
    </>
  );
}

export default App;
