import React, { useContext } from "react";
import { useParams } from "react-router";
import useAxious from "../../../Utils/CustomHook/useAxious";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Component/Context/FormContext/AuthContext";

const Payment = () => {
  const { id } = useParams();
  const { useInfo } = useContext(AuthContext);
  
  const axiousLink = useAxious();
  const { data } = useQuery({
    queryKey: ["singelUser", id],
    queryFn: async () => {
      const data = await axiousLink.get(`/users/${id}`);
      return data;
    },
  });
  const {
    receiverAddress,
    reciverRegion,
    reciverDistrict,
    deliveryPrice,
    receiverPhone,
    parcelName,
    weight,
    senderName,
    senderAddress,
    senderPhone,
    sendRegion,
    senderDistrict,
    receiverName,
    OrderDate,
    _id,
  } = data?.data || {};
  const handlePayment = async () => {
    let info = {
      parcelName,
      deliveryPrice,
      email: useInfo?.email,
      _id,
    };
    const payInfo = await axiousLink.post("/payment-checkout", info);
    window.location.href = payInfo?.data?.url;
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Parcel Payment
          </h2>

          {/* Parcel Info */}
          <div className="border rounded-xl p-4 mb-5">
            <h3 className="font-semibold text-lg mb-2">📦 Parcel Details</h3>
            <p>
              <b>Name:</b> {parcelName}
            </p>
            <p>
              <b>Weight:</b> {weight} kg
            </p>
            <p>
              <b>Order Date:</b> {OrderDate}
            </p>
          </div>

          {/* Sender & Receiver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-2">🚚 Sender</h3>
              <p>{senderName}</p>
              <p>{senderAddress}</p>
              <p>
                {senderDistrict}, {sendRegion}
              </p>
              <p>{senderPhone}</p>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-2">🧾 Receiver</h3>
              <p>{receiverName}</p>
              <p>{receiverAddress}</p>
              <p>
                {reciverDistrict}, {reciverRegion}
              </p>
              <p>{receiverPhone}</p>
            </div>
          </div>

          {/* Price */}
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl mb-6">
            <span className="text-lg font-semibold">Total Payable</span>
            <span className="text-2xl font-bold text-indigo-600">
              ৳{deliveryPrice}
            </span>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="w-full gradient-background  text-white py-3 rounded-xl font-semibold transition"
          >
            Pay Now
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Secure payment • Powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
