import React, { useContext } from "react";
import { AuthContext } from "../../Component/Context/FormContext/AuthContext";
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const DeshbordNav = () => {
  let { loading, useInfo, signoutUser } = useContext(AuthContext);
  let { displayName, email, photoURL } = useInfo || {};
  return (
    <div className="flex justify-between bg-white w-full h-15 border-b border-b-black/10 px-3.5">
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="" width={50} height={50} />
        <div className="font-extrabold text-[25px] gradient-text">ParceLIX</div>
      </Link>

      <div className="flex items-center">
        <div className="text-[21px]">
          <FiBell />
        </div>
        <div className="text-[21px]">
          <CiSearch />
        </div>
        <div className="flex items-center">
          <summary className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center hover:scale-105 transition-transform">
            <img
              src={photoURL}
              alt="user photo"
              className="w-full h-full object-cover rounded-full"
            />
          </summary>
          <div className="capitalize">{displayName}</div>
        </div>
      </div>
    </div>
  );
};

export default DeshbordNav;
