import React from "react";
import Container from "../../../Component/Container/Container";
import locaHero from "../../../assets/location-merchant.png"
import beaMerchant from '../../../assets/be-a-merchant-bg.png'
const HeroBanner = () => {
  return (
    <section className=" mx-auto mt-10 bg-[#063c3f]">
      <Container className="relative overflow-hidden  py-14 flex items-center justify-between text-white">

    
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">
            Merchant and Customer Satisfaction <br />
            is Our First Priority
          </h1>

          <p className="mt-5 text-sm text-gray-200">
            We offer the lowest delivery charge with the highest value along with
            100% safety of your product. Pathao courier delivers your parcels in
            every corner of Bangladesh right on time.
          </p>

        
          <div className="mt-8 flex gap-4">
            <button className="rounded-full gradient-background text-white px-6 py-3 text-sm font-semibold ">
              Become a Merchant
            </button>

            <button className="rounded-full border border-lime-400 px-6 py-3 text-sm font-semibold text-lime-400 hover:bg-lime-400 hover:text-black transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src={locaHero}
            alt="Delivery Box"
            className="w-120 opacity-80"
          />
        </div>

     
        <div className="absolute top-0 left-0 right-0 h-20 to-transparent">
            <img src={beaMerchant} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
