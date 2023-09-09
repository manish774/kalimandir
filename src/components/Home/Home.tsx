import React from "react";
import img from "../../Assets/baglamukhi-devi-ki-photo-1920x1080.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax-content">
          <h1>Welcome to My Parallax Website</h1>
          <p>Scroll down to see the parallax effect</p>
        </div>
        <div className="parallax-image">
          <img src={img} alt="Background" />
        </div>
        <div className="parallax-overlay">
          <img src={img} alt="Overlay" />
        </div>
      </div>
    </div>
  );
};

export default Home;
