import React from "react";
import Deashbord from "../Pages/Deashbord/Deashbord";
import DeshbordNav from "../Pages/Deashbord/DeshbordNav";
import { Outlet } from "react-router";

const DeashBordLayour = () => {
  return (
    <div className="bg-transparent">
      <div className="flex flex-row-reverse justify-between">
        <DeshbordNav></DeshbordNav>
        <div className="flex relative z-10">
          <div className="z-40 ">
            {" "}
            <Deashbord></Deashbord>
          </div>
          <div className="absolute top-20 left-60 w-250  z-0">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeashBordLayour;
