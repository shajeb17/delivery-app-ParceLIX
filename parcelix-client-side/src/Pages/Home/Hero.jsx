import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import hero1 from "../../assets/banner/banner1.png";
import hero2 from "../../assets/banner/banner2.png";
import hero3 from "../../assets/banner/banner3.png";
import WorkCard from "./HowWorkCard/WorkCard";
import Services from "./Services/Services";
const Hero = () => {
  return (
    <div>

    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={hero1} />
      </div>
      <div>
        <img src={hero2} />
      </div>
      <div>
        <img src={hero3} />
      </div>
    </Carousel>

    <WorkCard></WorkCard>
    <Services></Services>
    </div>
  );
};

export default Hero;
