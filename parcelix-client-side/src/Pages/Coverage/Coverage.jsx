import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Container from "../../Component/Container/Container";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const Coverage = () => {
  let position = [23.8103, 90.4125];
  let [serviceCenter, setServiceCenter] = useState();
  let mapRef = useRef("");
  useEffect(() => {
    axios.get("/serviceCenter.json").then((res) => setServiceCenter(res?.data));
  }, []);
  let handleClick = (e) => {
    e.preventDefault();
    let searchRes = e.target.text.value;
    let district = serviceCenter.find((res) =>
      res.district.toLowerCase().includes(searchRes.toLowerCase()),
    );
    if (district) {
      let cord = [district.latitude, district.longitude];
      mapRef.current.flyTo(cord, 10);
    }
  };

  return (
    <Container className="z-0">
      <h1 className="text-2xl mt-6 capitalize font-semibold text-black/70">
        we are available in 64 districts
      </h1>

      <form className="relative" onSubmit={handleClick}>
        <input
          type="text"
          name="text"
          required
          placeholder="Wright your district name"
          className="outline-none border-none text-[17px] bg-white/90 px-1.5 py-[7px] rounded"
        />
        <button className="absolute left-50 border border-white/80 font-semibold text-[15px]  rounded px-5 py-2 gradient-background">
          click me
        </button>
      </form>

      <div className="my-9 relative z-0">
        <MapContainer
          center={position}
          zoom={6.5}
          scrollWheelZoom={false}
          className="w-full h-125"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter?.map((res, index) => (
            <Marker
              key={index}
              position={[Number(res.latitude), Number(res.longitude)]}
            >
              <Popup>
                <h1>
                  <strong>District:{res.district}</strong>
                </h1>{" "}
                <br /> {res.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Container>
  );
};

export default Coverage;
