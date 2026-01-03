import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const NabBar = () => {
  const navlink = (
    <div className="flex gap-3.5 text-[17px] font-medium ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Services</NavLink>
      <NavLink to="/coverage">Coverage</NavLink>
      <NavLink to="/">About Us</NavLink>
      <NavLink to="/">Pricing</NavLink>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start flex gap-[-10px]">
        <img src={logo} alt="" width={60} height={60} />
        <div className="font-extrabold text-[33px] gradient-text">
          ParceLIX
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">{navlink}</div>
      <div className="navbar-end flex gap-3">
        <div className="border border-black/10 rounded px-5 py-2 font-semibold text-[15px] text-black/90]">Sign In</div>
        <div className="border border-white/80 font-semibold text-[15px]  rounded px-5 py-2 gradient-background">Sign Up</div>
      </div>
    </div>
  );
};

export default NabBar;
