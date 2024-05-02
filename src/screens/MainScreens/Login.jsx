import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pic from "../.././assets/skateLogo.png";
import { ToastContainer, toast } from "react-toastify";
import { IoMdEye, IoMdEyeOff, IoMdMail } from "react-icons/io";

const Login = () => {
  // States
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle Login
  const handleLogin = async () => {
    if (email === "" || password === "") {
      return toast.warn("Please fill all the fields!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setLoading(true);
    navigate("/", { replace: true });
    setLoading(false);
  };

  return (
    <div className=" flex h-screen w-full bg-white relative">
      {/*Main View */}
      <div className="flex w-full my-[50px] flex-col items-center justify-center bg-[#ffffff]">
        {/* Logo Image */}

        <div>
          <img src={Pic} alt="My Image" />
        </div>
        <p className="mt-[7px] text-[48px] font-medium text-primary font-sans">
          JBSKATE
        </p>
        <p className="mt-[17px] text-[36px] font-bold font-sans text-[black]">
          Welcome Admin!
        </p>
        <p className="mt-[2px] text-[20px] font-medium font-sans text-[black] opacity-[0.5]">
          Please login to continue
        </p>

        {/* Email */}
        <div className="mt-[48px] w-[80%] md:w-[60%] lg:w-[40%] justify-center ">
          <p className="text-[12px]  text-[#525252] font-sans">Email</p>
          <div className="relative mt-[8px] w-full">
            <input
              type="text"
              className="h-[48px] w-full bg-input p-[16px] text-[black] font-sans focus:border border-[#3669C9] focus:outline-none "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="absolute right-0 top-0 flex h-full cursor-pointer items-center justify-center pr-[22px]">
              <IoMdMail size={24} color="#727272" />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="mt-[21px] w-[80%] md:w-[60%] lg:w-[40%] justify-center ">
          <p className="text-[12px]  text-[#525252] font-sans">Password</p>
          <div className="relative mt-[8px] w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="h-[48px]  w-full bg-input p-[16px] text-[black] font-sans focus:border border-[#3669C9] focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              hidden={false}
            />
            <div
              className="absolute right-0 top-0 flex h-full cursor-pointer items-center justify-center pr-[22px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <IoMdEye size={30} color="#727272" />
              ) : (
                <IoMdEyeOff size={30} color="#727272" />
              )}
            </div>
          </div>
        </div>

        {/* Login Button */}
        <div
          className="flex mt-[40px] w-[70%] md:w-[50%] lg:w-[30%] justify-center hover:opacity-[0.8]"
          onClick={handleLogin}
        >
          <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
          <button
            className="h-[42px]  w-full bg-primary text-[20px] font-normal font-bebas text-white flex items-center justify-center gap-2"
            style={{ transition: "0.3s" }}
          >
            LOGIN
          </button>
          <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#3669C9]" />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
