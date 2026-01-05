import React, { useState } from "react";
import ServicesCard from "./ServicesCard";
import Container from "../../../Component/Container/Container";
import { CiDeliveryTruck } from "react-icons/ci";
import gloImg from "../../../assets/global-distribution.png";
import clipboard from "../../../assets/clipboard_2953966.png";
import cashOn from "../../../assets/cash-on-delivery_5578467.png";
import corporate from "../../../assets/contract_16820246.png";
import parcelRet from "../../../assets/parcel_2066599.png";
import expressDel from "../../../assets/express-delivery.png";
const services = [
  {
    id: 1,
    icons: <img src={expressDel} alt="" className="w-7.5" />,
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi.",
  },
  {
    id: 2,
    icons: <img src={gloImg} alt="" className="w-7.5" />,
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district within 48–72 hours.",
  },
  {
    id: 3,
    icons: <img src={clipboard} alt="" className="w-7.5" />,
    title: "Fulfillment Solution",
    desc: "Customized service with inventory management, order processing, packaging and after sales support.",
  },

  {
    id: 4,
    icons: <img src={cashOn} alt="" className="w-7.5" />,
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    id: 5,
    icons: <img src={corporate} alt="" className="w-7.5" />,
    title: "Corporate Service / Contract in Logistics",
    desc: "Customized corporate services including warehouse and inventory management support.",
  },
  {
    id: 6,
    icons: <img src={parcelRet} alt="" className="w-7.5" />,
    title: "Parcel Return",
    desc: "Reverse logistics facility allowing customers to return or exchange products easily.",
  },
];
const Services = () => {
  const [activeId, setActiveId] = useState(2);

  return (
    <div>
      <section className="bg-[#083c40] py-16">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="text-gray-300 text-sm mt-3 max-w-xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle.
          </p>

          <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <ServicesCard
                key={service.id}
                service={service}
                isActive={service.id === activeId}
                onHover={() => setActiveId(service.id)}
                onLeave={() => setActiveId(2)}
              />
            ))}
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Services;
