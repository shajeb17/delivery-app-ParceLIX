import React from "react";

const ServicesCard = ({ service }) => {
  const { title, desc, active } = service;
  return (
    <div
      className={`rounded-2xl p-6 text-center transition
        ${active ? "bg-lime-300" : "bg-white"}
      `}
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
        📦
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
};

export default ServicesCard;
