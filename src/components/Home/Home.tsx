import React from "react";
import img from "../../Assets/baglamukhi-devi-ki-photo-1920x1080.jpg";
import classes from "./Home.module.scss";
const Home = () => {
  return (
    <div>
      <img src={img} className={classes.img} />
    </div>
  );
};

export default Home;
