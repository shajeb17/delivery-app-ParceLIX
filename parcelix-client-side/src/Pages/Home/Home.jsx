import React from "react";
import Hero from "./Hero/Hero";
import WorkCard from "./HowWorkCard/WorkCard";
import Services from "./Services/Services";
import MarqueDiv from "./MarqueDiv/MarqueDiv";
import FeatureHome from "./FeatureHome/FeatureHome";
import HeroBanner from "./HeroBanner/HeroBanner";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <WorkCard></WorkCard>
      <Services></Services>
      <MarqueDiv></MarqueDiv>
      <FeatureHome></FeatureHome>
      <HeroBanner></HeroBanner>
    </div>
  );
};

export default Home;
