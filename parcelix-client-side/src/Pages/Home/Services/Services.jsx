import React from "react";
import ServicesCard from "./ServicesCard";
import Container from "../../../Component/Container/Container";
const services = [
  {
    id: 1,
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi.",
    active: false,
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district within 48–72 hours.",
    active: true,
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    desc: "Customized service with inventory management, order processing, packaging and after sales support.",
    active: false,
  },

  {
    id: 4,
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    active: false,
  },
  {
    id: 5,
    title: "Corporate Service / Contract in Logistics",
    desc: "Customized corporate services including warehouse and inventory management support.",
    active: false,
  },
  {
    id: 6,
    title: "Parcel Return",
    desc: "Reverse logistics facility allowing customers to return or exchange products easily.",
    active: false,
  },
];
const Services = () => {
  return <div>
    <section className="bg-[#083c40] py-16">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <p className="text-gray-300 text-sm mt-3 max-w-xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        </p>

        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map(service => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </Container>
      </div>
    </section>
  </div>
    ;
};

export default Services;
