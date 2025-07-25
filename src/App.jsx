import React, { useState } from "react";
import Gallery from "./components/Gallery/Gallery.jsx";
import Timeline from "./components/Timeline/Timeline.jsx";
import Intro from "./components/Intro/Intro.jsx";
import "./assets/styles.css";
import SurpriseBox from "./components/SurpriseBox/SurpriseBox.jsx";

export default function App() {
  
  return (
    <div className="app">
          <Intro/>
      <div>
          <Timeline />
          <Gallery />
      </div>
         <SurpriseBox/>
     
  </div>
    
  );
}
