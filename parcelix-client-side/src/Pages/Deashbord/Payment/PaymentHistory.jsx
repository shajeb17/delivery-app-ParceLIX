import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Component/Context/FormContext/AuthContext";
import useAxious from "../../../Utils/CustomHook/useAxious";

const PaymentHistory = () => {
  const { userInfo } = useContext(AuthContext);
  const axiousLink = useAxious();

  const { data: payment = [], isLoading } = useQuery({
    queryKey: ["PaymentHistory"],
    queryFn: async () => {
      const res = await axiousLink.get("/paymentHistory");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading payment history...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Payment History</h2>

      {payment.length === 0 && (
        <p className="text-gray-500">No payment history found</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {payment?.map((item) => (
          <div
            key={item._id}
            className="bg-white border border-black/20 rounded-xl shadow-sm p-5 hover:shadow-md transition"
          >
            {/* Status */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-500">Status</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    item.paymentStatus === "paid"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
              >
                {item.paymentStatus.toUpperCase()}
              </span>
            </div>

            {/* Amount */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {item.paymentAmount / 100}
              <span className="text-sm text-gray-500 ml-1">
                 Taka
              </span>
            </h3>

            {/* Info */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Email:</span> {item.customerEmail}
              </p>
              <p>
                <span className="font-medium">Transaction:</span>{" "}
                {item.transactionId}
              </p>
              <p>
                <span className="font-medium">Tracking ID:</span>{" "}
                {item.trackingId}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {new Date(item.paymentDate).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
