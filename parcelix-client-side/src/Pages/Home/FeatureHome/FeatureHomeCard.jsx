import React from "react";

const FeatureHomeCard = ({ feature }) => {
  const { img, title, desc } = feature;
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm
      hover:shadow-lg transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="w-32 ">
        <img src={img} alt={title} />
      </div>

      {/* DIVIDER */}
      <div className="hidden md:block h-24 border-l-2 border-dashed border-[#FFB044]"></div>

      {/* CONTENT */}
      <div>
        <h3 className="text-lg font-semibold text-[#083c40]">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mt-2 max-w-2xl">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FeatureHomeCard;
