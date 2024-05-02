import { useNavigate } from "react-router-dom";
import PlayerImg from "../assets/player.png";
import SkateBackward from "../assets/svg/SkateBackward";
import Speed from "../assets/svg/Speed";
import SkateForward from "../assets/svg/SkateForward";
import Dance from "../assets/svg/Dance";
import Jump from "../assets/svg/Jump";

export default function PlayerCards({ data }) {
  const navigate = useNavigate();

  return (
    <>
      {data.map((player, index) => (
        <div
          key={index}
          className="card w-full bg-white p-[13px] gap-[10px] shadow-xl sm:w-[250px] cursor-pointer hover:bg-[#EBEBEB] "
          onClick={() =>
            navigate(`/userProfile`, {
              state: player,
            })
          }
        >
          <img
            src={PlayerImg}
            alt="Player"
            className="h-[180px] object-cover"
          />
          <div className="flex w-[70px] h-[27px] bg-input items-center justify-center">
            <p className="text-[16px] font-manrope font-medium text-black">
              {player.sports}
            </p>
          </div>
          <p className="text-[28px] font-bebas font-normal text-black">
            {player.name}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Speed />
              <p className="text-[18px] font-bebas font-normal text-black opacity-[0.7]">
                {player.speed} KM/H
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Jump />
              <p className="text-[18px] font-bebas font-normal text-black opacity-[0.7]">
                {player.jump} M
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Dance />
              <p className="text-[18px] font-bebas font-normal text-black opacity-[0.7]">
                {player.dance}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <SkateForward />
              <p className="text-[18px] font-bebas font-normal text-black opacity-[0.7]">
                {player.forwardSkate}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <SkateBackward />
              <p className="text-[18px] font-bebas font-normal text-black opacity-[0.7]">
                {player.backwardSkate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
