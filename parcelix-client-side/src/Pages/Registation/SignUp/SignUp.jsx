import React, { use, useState } from "react";
import Container from "../../../Component/Container/Container";
import authImg from "../../../assets/authImage.png";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Component/Context/FormContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const SignUp = () => {
  let { googleSignIn, createUser } = use(AuthContext);
  let [eyeOpen, setEyeOpen] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    let { email, password, fullName, image } = data;
    try {
      const img = image[0];
      const fomrData = new FormData();
      fomrData.append("image", img);
      const myImage = await axios.post(
        `${import.meta.env.VITE_IMAGEBD_API}`,
        fomrData
      );
      if (!myImage.data?.data?.display_url) {
        toast.error("Image upload failed");
        return;
      }
      let fullUrl = myImage?.data?.data?.display_url;
      let result = await createUser(email, password);
      let profile = {
        displayName: fullName,
        photoURL: fullUrl,
      };
      await updateProfile(result.user, profile);
      navigate(location?.state || "/", { replace: true });
      toast.success("user created successfully");
      reset();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already exists");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password must be at least 6 characters");
      } else if (error.response) {
        toast.error("Image upload error");
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  let googleLogin = async () => {
    await googleSignIn();
    navigate(location?.state || "/", { replace: true });
  };
  return (
    <Container className="min-h-screen flex my-11">
      {/* LEFT SIDE - FORM */}
      <div className="w-full md:w-1/2 rounded-[80px] flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-1 mt-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Create an Account
          </h2>
          <p className="text-gray-500 mb-6 text-center">
            Join us and start your journey
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Please enter your full name"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500 capitalize">
                  please enter your name
                </span>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Add your email"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 capitalize">
                  please enter your email
                </span>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600">Your Image</label>
              <input
                type="file"
                className="file-input w-full rounded-xl border border-amber-950"
                {...register("image")}
              />
            </div>
            <div className="relative">
              <label className="text-sm text-gray-600">Password</label>
              <input
                type={eyeOpen ? "text" : "password"}
                placeholder="Create a strong password"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("password", { required: true, minLength: 6 })}
              />
              <div
                className="absolute right-4 top-10"
                onClick={() => setEyeOpen(!eyeOpen)}
              >
                {eyeOpen ? <FaRegEye /> : <FaRegEyeSlash></FaRegEyeSlash>}
              </div>
              {errors.password && (
                <span className="text-red-500 capitalize">
                  password must be at least 6 characters
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full gradient-background font-bold text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex justify-between items-center mt-4">
            <div className="w-full border border-black/10 mr-3"></div>
            <p className="capitalize w-full ml-2">or register with</p>
            <div className="w-full border border-black/10"></div>
          </div>
          <div className="flex  gap-2.5 items-center justify-center mt-6">
            <button
              onClick={googleLogin}
              className="btn bg-white  text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <button className="btn bg-black text-white border-black">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              Login with GitHub
            </button>
          </div>
          <p className="text-sm text-center text-gray-500 mt-4 mb-2.5">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="gradient-text font-bold cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="hidden md:block flex items-center mx-auto my-auto ">
        <div className="w-[500px]">
          <img
            src={authImg}
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
