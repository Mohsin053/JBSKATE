import { useState } from "react";
import {
  IoIosWalk,
  IoMdArrowRoundBack,
  IoMdMail,
  IoMdPerson,
} from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import PlayerImg from "../../assets/player.png";
import SkateBackward from "../../assets/svg/SkateBackward";
import Speed from "../../assets/svg/Speed";
import SkateForward from "../../assets/svg/SkateForward";
import Dance from "../../assets/svg/Dance";
import Jump from "../../assets/svg/Jump";

const UserProfile = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const player = location.state;
  const [loading, setLoading] = useState(false);
  const [isContentVisible, setContentVisible] = useState(true);

  if (loading) {
    return <Loader />;
  }

  const switchingView = () => {
    if (isContentVisible) {
      return (
        <div className="relative w-full sm:px-[24px]">
          <div className="border-b-[1px] border-b-black py-[5px] ">
            <h3 className="font-medium font-sans text-[23px] text-black">
              Profile Details
            </h3>
          </div>
          <div className="sm:flex py-[24px] ">
            <div className="w-full">
              <div>
                <p className="text-[12px]  text-[#525252] font-sans">Email</p>
                <div className="relative mt-[8px] h-[48px] w-full bg-input px-[16px] flex items-center justify-between   text-[black] font-sans  ">
                  {player.email}
                  <IoMdMail size={24} color="#727272" />
                </div>
              </div>
              <div className="mt-[24px]">
                <p className="text-[12px]  text-[#525252] font-sans">
                  {player.username}
                </p>
                <div className="relative mt-[8px] h-[48px] w-full bg-input px-[16px] flex items-center justify-between   text-[black] font-sans  ">
                  {player.name}
                  <IoMdPerson size={24} color="#727272" />
                </div>
              </div>
              <div className="mt-[24px]">
                <p className="text-[12px]  text-[#525252] font-sans">Sport</p>
                <div className="relative mt-[8px] h-[48px] w-full bg-input px-[16px] flex items-center justify-between   text-[black] font-sans  ">
                  {player.sports}
                  <IoIosWalk size={24} color="#727272" />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center ">
              <div className="avatar">
                <div className="w-[200px] rounded-full">
                  <img src={PlayerImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full sm:px-[24px]">
          <div className="border-b-[1px] border-b-black py-[5px] ">
            <h3 className="font-medium font-sans text-[23px] text-black">
              Athlete Stats
            </h3>
          </div>
          <div className="py-[24px] ">
            {/* Input Div */}
            <div className="w-full sm:flex gap-[15px]">
              <div className="w-full">
                <div className="flex gap-2 items-center">
                  <Speed />
                  <p className="text-[18px] font-bebas font-normal text-black ">
                    TOP SPEED
                  </p>
                </div>
                <input
                  type="text"
                  className="h-[38px] mt-[8px] w-full bg-white border border-black border-opacity-[0.2] p-[16px] text-black font-sans focus:border-[#3669C9] focus:outline-none "
                  placeholder={player.speed}
                />
              </div>
              <div className="w-full">
                <div className="flex gap-2 items-center">
                  <Jump />
                  <p className="text-[18px] font-bebas font-normal text-black ">
                    LONG JUMP
                  </p>
                </div>
                <input
                  type="text"
                  className="h-[38px] mt-[8px] w-full bg-white border border-black border-opacity-[0.2] p-[16px] text-[black] font-sans focus:border-[#3669C9] focus:outline-none "
                  placeholder={player.jump}
                />
              </div>
              <div className="w-full">
                <div className="flex gap-2 items-center">
                  <Dance />
                  <p className="text-[18px] font-bebas font-normal text-black ">
                    SPINS
                  </p>
                </div>
                <input
                  type="text"
                  className="h-[38px] mt-[8px] w-full bg-white border border-black border-opacity-[0.2] p-[16px] text-[black] font-sans focus:border-[#3669C9] focus:outline-none"
                  placeholder={player.dance}
                />
              </div>
            </div>

            <div className="w-full mt-[15px]  sm:flex gap-[15px]">
              <div className="w-full">
                <div className="flex gap-2 items-center">
                  <SkateForward />
                  <p className="text-[18px] font-bebas font-normal text-black ">
                    SKATING FORWARD
                  </p>
                </div>
                <input
                  type="text"
                  className="h-[38px] mt-[8px] w-full bg-white border border-black border-opacity-[0.2] p-[16px] text-black font-sans focus:border-[#3669C9] focus:outline-none "
                  placeholder={player.forwardSkate}
                />
              </div>
              <div className="w-full">
                <div className="flex gap-2 items-center">
                  <SkateBackward />
                  <p className="text-[18px] font-bebas font-normal text-black ">
                    SKATING BACKWARD
                  </p>
                </div>
                <input
                  type="text"
                  className="h-[38px] mt-[8px] w-full bg-white border border-black border-opacity-[0.2] p-[16px] text-[black] font-sans focus:border-[#3669C9] focus:outline-none "
                  placeholder={player.backwardSkate}
                />
              </div>
              <div className="w-full hidden sm:block">
                <div className="h-[28px]" />
                <div className="h-[38px] mt-[8px] w-full bg-transparent" />
              </div>
            </div>
          </div>
          <div className=" w-full mt-[24px] justify-center gap-[15px] sm:flex ">
            <div className="flex w-full hover:opacity-[0.8]">
              <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#D6D5D5]" />
              <button
                className="h-[42px] w-full bg-[#D6D5D5] text-[20px] font-normal font-bebas text-black "
                style={{ transition: "0.3s" }}
              >
                DECLINE
              </button>
              <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#D6D5D5]" />
            </div>
            <div className="flex w-full hover:opacity-[0.8]">
              <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
              <button
                className="h-[42px] w-full bg-primary text-[20px] font-normal font-bebas text-white "
                style={{ transition: "0.3s" }}
              >
                APPROVE
              </button>
              <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#3669C9]" />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      {/*top Heading */}
      <div className="relative w-full flex items-center gap-2">
        <IoMdArrowRoundBack
          size={26}
          color="black"
          className="hover:bg-[#EBEBEB] cursor-pointer"
          onClick={() => navigate(`/`)}
        />
        <p className=" text-[24px] font-bold font-sans text-black">
          User Profile
        </p>
      </div>

      {/* Players View */}
      <div className="relative my-[24px] w-full sm:flex ">
        {/* Side Bar*/}
        <div className="relative w-full sm:w-[300px]">
          <div
            className="flex items-center hover:opacity-[0.8] cursor-pointer"
            onClick={() => setContentVisible(true)}
          >
            <div
              className={`${
                isContentVisible ? "bg-[#2396F3]" : "bg-white"
              } h-[24px] w-[4px] mr-[4px]`}
            />
            <div
              className={`${
                isContentVisible
                  ? "text-white bg-primary"
                  : "text-black bg-white"
              } h-[34px] w-full flex items-center px-3 rounded-sm text-[14px] font-medium font-sans  `}
              style={{ transition: "0.3s" }}
            >
              Profile Details
            </div>
          </div>

          <div
            className="flex items-center hover:opacity-[0.8] cursor-pointer"
            onClick={() => setContentVisible(false)}
          >
            <div
              className={`${
                isContentVisible ? "bg-white" : "bg-[#2396F3]"
              } h-[24px] w-[4px] mr-[4px]`}
            />
            <div
              className={`${
                isContentVisible
                  ? "text-black bg-white"
                  : "text-white bg-primary"
              } h-[34px] w-full flex items-center px-3 rounded-sm text-[14px] font-medium font-sans  `}
              style={{ transition: "0.3s" }}
            >
              Athlete Stats
            </div>
          </div>
        </div>

        {/* Content */}

        {switchingView()}
      </div>
    </div>
  );
};

export default UserProfile;
