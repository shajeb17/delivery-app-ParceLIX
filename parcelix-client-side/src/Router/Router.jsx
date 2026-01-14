import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import SignUp from "../Pages/Registation/SignUp/SignUp";
import Signin from "../Pages/Registation/Login/Login";
import ParcelSend from "../Pages/ParcelSend/ParcelSend";
import PrivateRouter from "../Component/Privaterouter/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/coverage", Component: Coverage },
      { path: "/signup", Component: SignUp },
      {path :"/login",Component:Signin},
      {path:"/sendParcel", element: <PrivateRouter><ParcelSend></ParcelSend></PrivateRouter>}
    ],
  },
]);
