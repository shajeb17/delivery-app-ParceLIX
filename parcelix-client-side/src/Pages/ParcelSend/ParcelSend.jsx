import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Container from "../../Component/Container/Container";
import axios from "axios";
import { data } from "react-router";

const ParcelSend = () => {
  let [region, setRegion] = useState([]);
  const [allData, setAllData] = useState([]);
  const [districts, setDistricts] = useState([]);
  let [reciver,setReciverDist]=useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const selectedRegion = watch("sendRegion");
  const reciverRegion = watch("reciverRegion");
  
  
  const onSubmit = (data) => {
    console.log("Parcel Data:", data);
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
    if(selectedRegion){
      let allDistrict=allData?.filter(reg=>reg.region===selectedRegion)
      let selectDistrict=allDistrict.map(dis=>dis.district)
       setDistricts(selectDistrict)
    }
  }, [selectedRegion, allData]);

  useEffect(() => {
    if(reciverRegion){
      let allDistrict=allData?.filter(reg=>reg.region===reciverRegion)
      let selectDistrict=allDistrict.map(dis=>dis.district)
       setReciverDist(selectDistrict)
    }
  }, [reciverRegion, allData]);

  return (
    <Container className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6">
        <h1 className="text-center text-3xl font-extrabold pb-9 text-black/70">
          Send A Parcel
        </h1>

        <h2 className="capitalize font-bold text-[17px] pb-5 border-b border-b-black/10">
          enter your parcel details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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
                  <option disabled={true}>Sender Region</option>
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
                  <option disabled={true}>Sender District</option>
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
                  <option disabled={true}>Reciver District</option>
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
    </Container>
  );
};

export default ParcelSend;
