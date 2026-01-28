import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { IoIosSearch } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useAxious from "../../../Utils/CustomHook/useAxious";
import Swal from "sweetalert2";
import { Link } from "react-router";
const ParcelDetails = () => {
  const axiousLink = useAxious();
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axiousLink.get("/users"),
  });

  const handleParcelDel = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiousLink.delete(`/users/${id}`);
        await refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="my-10 flex items-center justify-center w-full  ">
      <div className="space-y-5">
        {data?.data.map((item) => (
          <div
            key={item._id}
            className="border border-black/10 shadow-2xl   rounded-lg p-4 bg-base-100 "
          >
            {/* Main Box */}
            <div className="flex justify-between items-center pb-3">
              <h2 className="font-bold mb-3">Parcel Name: {item.parcelName}</h2>
              <div className="flex justify-center items-center gap-2.5 text-[22px]">
                <IoIosSearch />
                <div className="bg-[#EAECED] p-2 rounded-full text-center flex items-center">
                  <FaRegEdit />
                </div>

                <div
                  onClick={() => handleParcelDel(item?._id)}
                  className="bg-[#EAECED] p-2 rounded-full text-center flex items-center"
                >
                  <MdDeleteOutline />
                </div>
              </div>
            </div>
            {/* Two Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Box - Sender */}
              <div className="border rounded p-3 bg-gray-50">
                <h3 className="font-semibold mb-2">Sender Info</h3>
                <p>Name: {item.senderName}</p>
                <p>Phone: {item.senderPhone}</p>
                <p>Address: {item.senderAddress}</p>
                <p>District: {item.senderDistrict}</p>
              </div>

              {/* Right Box - Receiver */}
              <div className="border rounded p-3 bg-gray-50">
                <h3 className="font-semibold mb-2">Receiver Info</h3>
                <p>Name: {item.receiverName}</p>
                <p>Phone: {item.receiverPhone}</p>
                <p>Address: {item.receiverAddress}</p>
                <p>District: {item.reciverDistrict}</p>
              </div>
            </div>

            {/* Extra Info */}
            <div className="mt-3 text-sm">
              <p>Type: {item.docType}</p>
              <p>Weight: {item.weight} kg</p>
              <div className="flex gap-2.5 items-center">
                <p>Delivery Price: ৳{item.deliveryPrice}</p>
                <Link
                  to={"/deashbord/Payment"}
                  className="gradient-background px-4.5 py-1.5 text-white font-bold rounded-md cursor-pointer"
                >
                  Pays
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParcelDetails;
