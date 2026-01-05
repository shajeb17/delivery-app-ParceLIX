import React from "react";
import WorkInfo from "./WorkInfo";
import Container from "../../../Component/Container/Container";
import { CiDeliveryTruck } from "react-icons/ci";
import pickIcon from "../../../assets/bookingicon.png";
import cashDel from "../../../assets/cash-on-delivery_5578467.png";
import delivery from "../../../assets/express-delivery.png";
import booking from "../../../assets/booking.png";
const WorkCard = () => {
let card = [
  {
    image: pickIcon,
    title: "Booking Pick & Drop",
    info: "Easily book pick-up and drop-off services from your location with fast and reliable delivery support.",
  },
  {
    image: cashDel,
    title: "Cash On Delivery",
    info: "Offer cash on delivery service to your customers and collect payments securely at the time of delivery.",
  },
  {
    image: delivery,
    title: "Delivery Hub",
    info: "Manage and track parcels efficiently through our smart delivery hubs for faster processing.",
  },
  {
    image: booking,
    title: "Booking SME & Corporate",
    info: "Special delivery solutions designed for SME and corporate businesses with flexible and scalable services.",
  },
];

  
  return (
    <Container className=" my-10">
      <h1 className="text-[22px] font-semibold text-black/70">How it Works</h1>
      <div className="flex gap-3 my-2">
      {card?.map((data,index)=>(
        <WorkInfo key={index} data={data}></WorkInfo>
      ))}
      </div>
    </Container>
  );
};

export default WorkCard;
