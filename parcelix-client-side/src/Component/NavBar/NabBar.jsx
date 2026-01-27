import React, { useContext, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/FormContext/AuthContext";
import { FadeLoader, PulseLoader } from "react-spinners";
import { CiLogin } from "react-icons/ci";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
const NabBar = () => {
  let { loading, useInfo, signoutUser } = useContext(AuthContext);
  let { displayName, email, photoURL } = useInfo || {};
  const dropdownRef = useRef(null);
  
  const navlink = (
    <div className="flex gap-3.5 text-[17px] font-medium ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Services</NavLink>
      <NavLink to="/coverage">Coverage</NavLink>
      <NavLink to="/sendParcel">Send Parcel</NavLink>
      <NavLink to="/">About Us</NavLink>
      <NavLink to="/">Pricing</NavLink>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
  let hendleClick = () => {
    signoutUser().then(() => {
      toast.success("Sign out successfully");
    });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start flex gap-[-10px]">
        <img src={logo} alt="" width={60} height={60} />
        <div className="font-extrabold text-[33px] gradient-text">ParceLIX</div>
      </div>
      <div className="navbar-center hidden lg:flex">{navlink}</div>
      <div className="navbar-end flex gap-3">
        {loading ? (
          <PulseLoader color="#2a11bc" size={8} />
        ) : useInfo ? (
          <details className="dropdown relative"  ref={dropdownRef} >
            <summary className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center hover:scale-105 transition-transform">
              <img
                src={photoURL}
                alt="user photo"
                className="w-full h-full object-cover rounded-full"
              />
            </summary>
            <div className="menu dropdown-content bg-base-100 rounded-box z-600 absolute w-3xs right-0 top-16 p-2 shadow-sm">
             <div className="flex items-end justify-end " >
               <div className="inline-flex cursor-pointer rotate-45  w-6 h-6 rounded-full items-center text-center bg-black/5 text-black/80 justify-center " onClick={() => dropdownRef.current.removeAttribute("open")}>
                <FaPlus />{" "}
              </div>
             </div>
              <h1 className="text-center text-[19px]">{email}</h1>
              <summary className="w-12 h-12 rounded-full m-auto mt-3.5 text-white font-bold flex items-center justify-center hover:scale-105 transition-transform">
                <img
                  src={photoURL}
                  alt="user photo"
                  className="w-full h-full object-cover rounded-full"
                />
              </summary>
              <h1 className="text-center text-[21px] font-semibold">
                Hello ,{displayName}
              </h1>
              <Link to={"deashbord"} className="text-center text-[18px] font-bold bg-black/10 my-2 py-1.5 rounded">Deashbord</Link>
              <button
                onClick={hendleClick}
                className="capitalize border flex items-center justify-center gap-3.5 border-white/80 font-semibold text-[15px]  rounded px-5 py-2 gradient-background"
              >
                <CiLogin className="text-[22px] font-bold" /> sign out
              </button>
            </div>
          </details>
        ) : (
          <Link
            to={"login"}
            className="border  gradient-background rounded px-5 py-2 font-semibold text-[15px] text-black/90]"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default NabBar;
