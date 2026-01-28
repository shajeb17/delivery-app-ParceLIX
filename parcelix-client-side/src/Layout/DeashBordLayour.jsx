import React from "react";
import Deashbord from "../Pages/Deashbord/Deashbord";
import DeshbordNav from "../Pages/Deashbord/DeshbordNav";
import { Outlet } from "react-router";

const DeashBordLayour = () => {
  return (
    <div className="bg-transparent">
      <DeshbordNav></DeshbordNav>
      <div className="flex">
        <div className="flex relative z-10">
          <Deashbord></Deashbord>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DeashBordLayour;
