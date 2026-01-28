import React, { useContext, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/FormContext/AuthContext";
import { FadeLoader, PulseLoader } from "react-spinners";
import { CiLogin } from "react-icons/ci";
import { toast } from "react-toastify";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import { Twirl as Hamburger, Squash } from "hamburger-react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const NabBar = () => {
  let { loading, useInfo, signoutUser } = useContext(AuthContext);
  let { displayName, email, photoURL } = useInfo || {};
  const dropdownRef = useRef(null);

  const navlink = (
    <div className="flex  gap-3.5 text-[17px] font-medium">
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
  const [toggled, setToggled] = React.useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm">
     
        <Link to={"/"} className="navbar-start flex gap-[-10px]">
          <img src={logo} alt="" width={60} height={60} />
          <div className="font-extrabold text-[33px] gradient-text">
            ParceLIX
          </div>
        </Link>
   
      <div className="navbar-center   max-[1000px]:hidden  ">{navlink}</div>
      <div className="navbar-end flex gap-3">
        {loading ? (
          <PulseLoader color="#2a11bc" size={8} />
        ) : useInfo ? (
          <div className="flex items-center justify-center gap-4">
            <details
              className="dropdown relative border border-black/10 rounded-full"
              ref={dropdownRef}
            >
              <summary className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center hover:scale-105 transition-transform">
                <div className="absolute font-bold text-[13px] bottom-0.5 right-2 text-black">
                  <FaAngleDown />
                </div>
                <img
                  src={photoURL}
                  alt="user photo"
                  className="w-full h-full object-cover rounded-full"
                />
              </summary>
              <div className="menu dropdown-content bg-base-100 rounded-box z-600 absolute w-3xs right-0 top-16 p-2 shadow-sm">
                <div className="flex items-end justify-end ">
                  <div
                    className="inline-flex cursor-pointer rotate-45  w-6 h-6 rounded-full items-center text-center bg-black/5 text-black/80 justify-center "
                    onClick={() => dropdownRef.current.removeAttribute("open")}
                  >
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
                <Link
                  to={"deashbord"}
                  className="text-center text-[18px] font-bold bg-black/10 my-2 py-1.5 rounded"
                >
                  Deashbord
                </Link>
                <button
                  onClick={hendleClick}
                  className="capitalize border flex items-center justify-center gap-3.5 border-white/80 font-semibold text-[15px]  rounded px-5 py-2 gradient-background"
                >
                  <CiLogin className="text-[22px] font-bold" /> sign out
                </button>
              </div>
            </details>
            <div className="hidden max-[1000px]:block ">
              <div>
                <Sidebar
                  onBackdropClick={() => setToggled(false)}
                  toggled={toggled}
                  breakPoint="all"
                  backgroundColor="#231e1e"
                  className="text-white "
                >
                  <Menu backgroundColor="black">
                    <div className="flex items-center border-b border-b-white/20">
                      <img src={logo} alt="" width={60} height={60} />
                      <div className="font-extrabold text-[33px] gradient-text">
                        ParceLIX
                      </div>
                    </div>
                    <Menu className="">
                      <MenuItem className="hover:text-black">Home</MenuItem>
                      <MenuItem className="hover:text-black">Services</MenuItem>
                      <MenuItem className="hover:text-black">Coverage</MenuItem>
                      <MenuItem className="hover:text-black">
                        Send Parcel
                      </MenuItem>
                      <MenuItem className="hover:text-black">About Us</MenuItem>
                      <MenuItem className="hover:text-black">Pricing</MenuItem>
                      <MenuItem className="hover:text-black">Blog</MenuItem>
                      <MenuItem className="hover:text-black">Contact</MenuItem>
                    </Menu>
                  </Menu>
                </Sidebar>
                <main>
                  <div>
                    <button className="sb-button">
                      <Hamburger
                        toggled={toggled}
                        toggle={setToggled}
                        type="Squash"
                      />
                    </button>
                  </div>
                </main>
              </div>
            </div>
          </div>
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
