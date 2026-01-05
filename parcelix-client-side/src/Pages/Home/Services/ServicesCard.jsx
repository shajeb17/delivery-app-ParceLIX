import React from "react";

const ServicesCard = ({ service, isActive, onHover, onLeave }) => {
  const { title, desc, icons } = service;
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`rounded-2xl p-6 text-center  transition-all duration-1000 ease-out
  transform 
        ${
          isActive
            ? "gradient-background scale-105 -translate-y-2 shadow-2xl opacity-100"
            : "bg-white"
        }
      `}
    >
      <div className="w-14 text-4xl h-14 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
        {icons}
      </div>

      <h3
        className={`text-lg font-semibold text-gray-800 mb-2 ${
          isActive && "text-white"
        }`}
      >
        {title}
      </h3>

      <p className={`text-sm text-gray-600  ${isActive && "text-white"}`}>
        {desc}
      </p>
    </div>
  );
};

export default ServicesCard;
