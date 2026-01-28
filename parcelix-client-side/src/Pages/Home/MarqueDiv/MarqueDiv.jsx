import React from "react";
import Container from "../../../Component/Container/Container";
import amazonvec from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starpeople from "../../../assets/brands/start_people.png";
import Marquee from "react-fast-marquee";

const MarqueDiv = () => {
  return (
    <Container className="my-6">
      <h1 className="text-center text-[22px] font-semibold capitalize text-black/70">
        We've helped thousands of sales teams
      </h1>

      <div className="relative overflow-hidden mt-4">
        <Marquee pauseOnHover={true}>
          <div className="flex items-center justify-center h-10 gap-7 max-[500px]:gap-3">
            <img src={amazonvec} alt="" className="w-22  max-[500px]:w-18" />
            <img src={casio} alt="" className="w-22 max-[500px]:w-18" />
            <img src={moonstar} alt="" className="w-22 max-[500px]:w-18" />
            <img src={randstad} alt="" className="w-22 max-[500px]:w-18" />
            <img src={star} alt="" className="w-22 max-[500px]:w-18" />
            <img src={starpeople} alt="" className="w-22 max-[500px]:w-18" />
            <img src={amazonvec} alt="" className="w-22 max-[500px]:w-18" />
            <img src={casio} alt="" className="w-22 max-[500px]:w-18" />
            <img src={moonstar} alt="" className="w-22 max-[500px]:w-18" />
          </div>
        </Marquee>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white/50 to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white/50 to-transparent"></div>
      </div>
    </Container>
  );
};

export default MarqueDiv;
