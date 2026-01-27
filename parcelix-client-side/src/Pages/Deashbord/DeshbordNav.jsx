import React, { useContext } from "react";
import { AuthContext } from "../../Component/Context/FormContext/AuthContext";
import { IoIosMenu } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const DeshbordNav = () => {
      let { loading, useInfo, signoutUser } = useContext(AuthContext);
      let { displayName, email, photoURL } = useInfo || {};
        const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className="flex justify-between flex-1 bg-white w-full h-15">
      <main style={{ padding: 10 }}>
        <div className="text-3xl">
          <button
            className="sb-button"
            onClick={() => setCollapsed(!collapsed)}
          >
            <IoIosMenu />
          </button>
        </div>
      </main>
      <div className="">
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
    </div>
  );
};

export default DeshbordNav;
