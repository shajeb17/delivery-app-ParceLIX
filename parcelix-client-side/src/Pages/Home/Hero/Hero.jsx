import heroImg from "../../../assets/big-deliveryman.png"; // right side image
import Container from "../../../Component/Container/Container";

const Hero = () => {
  return (
    <section className="bg-white">
      <Container className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[50px] lg:text-5xl font-bold text-[#083c40] leading-tight">
            We Make Sure Your <br />
            <span className="gradient-text">Parcel Arrives</span> On Time
            <br />— No Fuss.
          </h1>

          <p className="text-gray-500 mt-6 max-w-lg">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-full gradient-background text-white font-semibold hover:bg-lime-500 transition">
              Track Your Parcel →
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-300 font-semibold hover:bg-gray-100 transition">
              Be A Rider
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Delivery Illustration"
            className="max-w-md w-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
