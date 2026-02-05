import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxious from "../../../Utils/CustomHook/useAxious";

const PaymentSuccess = () => {
  const [getParams] = useSearchParams();
  const axiousLink = useAxious();
  const fullParams = getParams.get("session_id");


  useEffect(() => {
    if (fullParams) {
      axiousLink.patch(`/payment-success?session_id=${fullParams}`)
        .then((res) => console.log(res));
    }
  }, [fullParams, axiousLink]);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
          {/* Icon */}
          {/* <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" /> */}

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">
            Payment Successful 🎉
          </h1>

          {/* Message */}
          <p className="text-gray-600 mt-2">
            Thank you! Your payment has been completed successfully.
          </p>

          {/* Optional info */}
          <div className="bg-green-100 text-green-700 mt-4 p-3 rounded-md text-sm">
            Your parcel is now being processed 🚚
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3 justify-center">
            <Link
              to="/deashbord"
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/"
              className="px-5 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
