import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import SignUp from "../Pages/Registation/SignUp/SignUp";
import Signin from "../Pages/Registation/Login/Login";
import ParcelSend from "../Pages/ParcelSend/ParcelSend";
import PrivateRouter from "../Component/Privaterouter/PrivateRouter";
import DeashBordLayour from "../Layout/DeashBordLayour";
import ParcelAdd from "../Pages/Deashbord/ParcelAdd/ParcelAdd";
import ParcelDetails from "../Pages/Deashbord/ParcelDetails/ParcelDetails";
import Payment from "../Pages/Deashbord/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/coverage", Component: Coverage },
      { path: "/signup", Component: SignUp },
      { path: "/login", Component: Signin },
      {
        path: "/sendParcel",
        element: (
          <PrivateRouter>
            <ParcelSend></ParcelSend>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/deashbord",
    element: <DeashBordLayour></DeashBordLayour>,
    children: [
      { path: "parcelAdd", Component: ParcelAdd },
      { path: "ParcelDetails", Component: ParcelDetails },
      { path: "Payment", Component: Payment },
    ],
  },
]);
