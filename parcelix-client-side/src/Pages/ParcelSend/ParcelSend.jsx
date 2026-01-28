import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Container from "../../Component/Container/Container";
import axios from "axios";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import DeliveryPriceTooltip from "../../Utils/DeliveryPriceTooltip";
import Swal from "sweetalert2";
import useAxious from "../../Utils/CustomHook/useAxious";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ParcelSend = () => {
  let [region, setRegion] = useState([]);
  const [allData, setAllData] = useState([]);
  const [districts, setDistricts] = useState([]);
  let [reciver, setReciverDist] = useState([]);
  const axiousLink = useAxious();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm();

  const queryClient = useQueryClient();

  const parcelMutation = useMutation({
    mutationFn: (parcelData) => axiousLink.post("/users", parcelData),

    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "Your all details successfully deploy",
        icon: "success",
      });

      reset();
      queryClient.invalidateQueries(["users"]);
    },

    onError: () => {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error",
      });
    },
  });

  const selectedRegion = watch("sendRegion");
  const reciverRegion = watch("reciverRegion");

  const onSubmit = (data) => {
    const {
      docType,
      parcelName,
      receiverAddress,
      receiverName,
      receiverPhone,
      reciverDistrict,
      reciverRegion,
      sendRegion,
      senderAddress,
      senderDistrict,
      senderName,
      senderPhone,
      weight,
    } = data;
    let districtCheck = senderDistrict === reciverDistrict;
    let Parcelweight = parseFloat(weight);
    let price = 0;
    if (docType === "document") {
      price = districtCheck ? 60 : 80;
    } else {
      if (Parcelweight <= 3) {
        price = districtCheck ? 110 : 150;
      } else {
        price = districtCheck
          ? 110 + (Parcelweight - 3) * 40
          : 150 + (Parcelweight - 3) * 40 + 40;
      }
    }
    data.deliveryPrice = price;
    Swal.fire({
      title: "Are you sure?",
      text: `Your Parcel delivery Money ${price} TK`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "i agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        // axiousLink.post("/users", data)
        // .then(res=>console.log(res)
        // ).catch(e=>console.log(e)
        // )
        // Swal.fire({
        //   title: "Success!",
        //   text: "Your all details successfully deploy",
        //   icon: "success",
        // });

        parcelMutation.mutate(data);
      }
    });
  };
  useEffect(() => {
    axios.get("/serviceCenter.json").then((res) => {
      setAllData(res.data);
      let mydata = res?.data.map((dis) => dis?.region);
      let allRegion = [...new Set(mydata)];
      setRegion(allRegion);
    });
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      let allDistrict = allData?.filter((reg) => reg.region === selectedRegion);
      let selectDistrict = allDistrict.map((dis) => dis.district);
      setDistricts(selectDistrict);
      setValue("senderDistrict", "");
    }
  }, [selectedRegion, allData, setValue]);

  useEffect(() => {
    if (reciverRegion) {
      let allDistrict = allData?.filter((reg) => reg.region === reciverRegion);
      let selectDistrict = allDistrict.map((dis) => dis.district);
      setReciverDist(selectDistrict);
      setValue("reciverDistrict", "");
    }
  }, [reciverRegion, allData, setValue]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 my-10 mx-20 max-[1000px]:mx-4">
      <div className="bg-white w-full  rounded-2xl shadow-lg p-6">
        <h1 className="text-center text-3xl font-extrabold pb-9 text-black/70">
          Send A Parcel
        </h1>

        <h2 className="capitalize font-bold text-[17px] pb-5 border-b border-b-black/10">
          enter your parcel details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* {radion info} */}

            <div className="flex items-center justify-between mt-5 max-[625px]:flex-col-reverse max-[625px]:items-start max-[625px]:gap-6">
              <div className="flex items-center gap-7 font-bold text-black/50  max-[780px]:flex-col max-[780px]:gap-1.5 max-[780px]:items-start">
                <div className="flex items-center gap-1.5">
                  <label htmlFor="document">Document</label>
                  <input
                    id="document"
                    name="docType"
                    value="document"
                    type="radio"
                    {...register("docType", { required: true })}
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <label htmlFor="non-document">Non Document</label>
                  <input
                    id="non-document"
                    name="docType"
                    type="radio"
                    value="non-document"
                    {...register("docType", { required: true })}
                  />
                </div>
              </div>
              <div className="relative z-50">
                <DeliveryPriceTooltip></DeliveryPriceTooltip>
              </div>
            </div>

          {/* PARCEL INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col">
              <label className="font-semibold text-black/50">Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                className="input"
                {...register("parcelName", {
                  required: "Parcel name is required",
                })}
              />
              {errors.parcelName && (
                <span className="text-red-500 text-sm">
                  {errors.parcelName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-black/50">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                placeholder="Weight"
                className="input"
                {...register("weight", {
                  required: "Weight is required",
                })}
              />
            </div>
          </div>

          {/* SENDER & RECEIVER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* SENDER */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-[#FFB044]/60">
                Sender Details
              </h2>

              <div className="space-y-3">
                <input
                  placeholder="Sender Name"
                  className="input"
                  {...register("senderName", { required: true })}
                />

                <input
                  placeholder="Sender Address"
                  className="input"
                  {...register("senderAddress", { required: true })}
                />

                <input
                  placeholder="Sender Phone"
                  className="input"
                  {...register("senderPhone", {
                    required: true,
                    minLength: 11,
                  })}
                />

                <select
                  defaultValue="Sender Region"
                  className="select"
                  {...register("sendRegion", { required: true })}
                >
                  <option disabled>Sender Region</option>
                  {region?.map((dis) => (
                    <option key={dis} value={dis}>
                      {dis}
                    </option>
                  ))}
                </select>

                <select
                  defaultValue="Sender District"
                  className="select"
                  {...register("senderDistrict", { required: true })}
                >
                  <option value="" disabled>
                    Sender District
                  </option>
                  {districts?.map((dis) => (
                    <option key={dis} value={dis}>
                      {dis}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* RECEIVER */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-[#165CB8]/60">
                Receiver Details
              </h2>

              <div className="space-y-3">
                <input
                  placeholder="Receiver Name"
                  className="input"
                  {...register("receiverName", { required: true })}
                />

                <input
                  placeholder="Receiver Address"
                  className="input"
                  {...register("receiverAddress", { required: true })}
                />

                <input
                  placeholder="Receiver Phone"
                  className="input"
                  {...register("receiverPhone", {
                    required: true,
                    minLength: 11,
                  })}
                />

                <select
                  defaultValue="Reciver Region"
                  className="select"
                  {...register("reciverRegion", { required: true })}
                >
                  <option disabled={true}>Reciver Region</option>
                  {region?.map((dis) => (
                    <option key={dis} value={dis}>
                      {dis}
                    </option>
                  ))}
                </select>

                <select
                  defaultValue="Reciver District"
                  className="select"
                  {...register("reciverDistrict", { required: true })}
                >
                  <option value="" disabled>
                    Reciver District
                  </option>
                  {reciver?.map((dis) => (
                    <option key={dis} value={dis}>
                      {dis}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-8 gradient-background py-3 rounded-xl font-semibold text-white"
          >
            Send Parcel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParcelSend;
