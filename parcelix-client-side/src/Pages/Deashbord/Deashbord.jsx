import React, { useContext } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { AuthContext } from "../../Component/Context/FormContext/AuthContext";
import { CiDeliveryTruck, CiFlag1, CiSearch } from "react-icons/ci";
import { FiBell, FiLogOut } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import logo from "../../assets/logo.png";
import {
  MdOutlineAddShoppingCart,
  MdOutlineLiveHelp,
  MdOutlinePayments,
} from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { SiGoogletagmanager } from "react-icons/si";
import { RiAccountCircle2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router";
const Deashbord = () => {
  // let { loading, useInfo, signoutUser } = useContext(AuthContext);
  // let { displayName, email, photoURL } = useInfo || {};
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className="flex bg-white h-full">
      <Sidebar collapsed={collapsed}>
        <Menu>
          <div className=" h-15.25 border-b-2 border-b-[#EAECED]">
            <div className="flex items-center w-full">
              <img src={logo} alt="" width={50} height={50} />
              <div className="font-extrabold text-[25px] gradient-text">
                ParceLIX
              </div>
            </div>
          </div>
          <div className="uppercase text-[12px] font-bold  text-black/60 ml-3 mt-3.5">
            main menu
          </div>

          <MenuItem icon={<FiGrid />} component={<NavLink to="/dashboard" />}>
            Dashboard
          </MenuItem>

          <MenuItem
            icon={<MdOutlineAddShoppingCart />}
            component={<NavLink to="parcelAdd" />}
          >
            Parcel Add
          </MenuItem>

          <MenuItem icon={<BiDetail />} component={<NavLink to="ParcelDetails" />}>
            Parcel Details
          </MenuItem>

          <MenuItem
            icon={<CiDeliveryTruck className="text-[20px]" />}
            component={<NavLink to="/all-deliveries" />}
          >
            All Deliveries
          </MenuItem>

          <MenuItem
            icon={<SiGoogletagmanager />}
            component={<NavLink to="/manage-parcel" />}
          >
            Manage Parcel
          </MenuItem>

          <MenuItem
            icon={<MdOutlinePayments />}
            component={<NavLink to="/payment-history" />}
          >
            Payment History
          </MenuItem>
        </Menu>

        <Menu>
          <div className="uppercase text-[12px] mr-4 font-bold text-black/60 ml-3 mt-3.5 border-t-2 border-t-[#EAECED]">
            <p className="mt-3">General</p>
          </div>

          <MenuItem icon={<CiFlag1 />} component={<NavLink to="/report" />}>
            Report
          </MenuItem>

          <MenuItem
            icon={<MdOutlineLiveHelp />}
            component={<NavLink to="/support" />}
          >
            Support
          </MenuItem>

          <MenuItem
            icon={<RiAccountCircle2Line />}
            component={<NavLink to="/account" />}
          >
            Account
          </MenuItem>

          <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Deashbord;
