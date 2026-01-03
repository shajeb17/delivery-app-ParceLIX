import React from "react";

const WorkInfo = ({data}) => {
  let {image,title,info}=data;
  return (
    <div className="bg-white p-6  rounded-xl shadow hover:shadow-lg transition duration-300">
      <div className="text-blue-700 mb-4 w-full">
        <img src={image} alt="card_icons" width={35} className="m-auto"/>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">
        {info}
      </p>
    </div>
  );
};

export default WorkInfo;
