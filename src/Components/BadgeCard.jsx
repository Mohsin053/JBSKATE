import { IoCheckmarkSharp } from "react-icons/io5";

const data = [
  {
    id: 1,
    name: "Business",
    price: "$120",
    note1: "Employee Notifications",
    note2: "Marketing and Promotion",
    note3: "Employee Verification",
    note4: "Subscriber Notifications",
  },
  {
    id: 2,
    name: "Videographer",
    price: "$12",
    note1: "Video Requests",
    note2: "Photo Requests",
    note3: "Event Calendar",
    note4: "Subscriber Notifications",
  },
  {
    id: 3,
    name: "Organization",
    price: "$40",
    note1: "Build Skate Groups",
    note2: "Group Logos",
    note3: "Group Verification",
    note4: "Event Calendar",
  },
];
export default function BadgeCard({ id }) {
  const element = data[id];
  return (
    <div
      className={`${
        id === 2 ? "bg-primary" : "bg-white"
      } card  w-full mb-[24px] sm:mb-0 sm:w-[320px] p-[40px] gap-[40px] shadow-xl`}
    >
      <div>
        <p
          className={`${
            id === 2 ? "text-white" : "text-black"
          } text-[20px] font-sans font-semibold `}
        >
          {element.name}
        </p>
        <p
          className={`${
            id === 2 ? "text-white" : "text-black"
          } text-[44px] font-sans font-medium `}
        >
          {element.price}
          <span
            className={`${
              id === 2 ? "text-white" : "text-[#656565]"
            } text-[14px] font-sans font-semibold  ml-3`}
          >
            / month
          </span>
        </p>
      </div>
      <div className="gap-4 flex flex-col">
        <div className="flex items-center">
          <IoCheckmarkSharp size={20} color={id === 2 ? "white" : "#3669C9"} />
          <p
            className={`${
              id === 2 ? "text-white" : "text-[#454545]"
            } text-[14px] font-sans font-bold ml-3`}
          >
            {element.note1}
          </p>
        </div>
        <div className="flex items-center">
          <IoCheckmarkSharp size={20} color={id === 2 ? "white" : "#3669C9"} />
          <p
            className={`${
              id === 2 ? "text-white" : "text-[#454545]"
            } text-[14px] font-sans font-bold ml-3`}
          >
            {element.note2}
          </p>
        </div>
        <div className="flex items-center">
          <IoCheckmarkSharp size={20} color={id === 2 ? "white" : "#3669C9"} />
          <p
            className={`${
              id === 2 ? "text-white" : "text-[#454545]"
            } text-[14px] font-sans font-bold ml-3`}
          >
            {element.note3}
          </p>
        </div>
        <div className="flex items-center">
          <IoCheckmarkSharp size={20} color={id === 2 ? "white" : "#3669C9"} />
          <p
            className={`${
              id === 2 ? "text-white" : "text-[#454545]"
            } text-[14px] font-sans font-bold ml-3`}
          >
            {element.note4}
          </p>
        </div>
      </div>
      <button
        className="h-[50px] bg-white border border-black border-opacity-[0.2] rounded-xl text-[14px] font-semibold font-sans text-black  cursor-pointer hover:bg-[#EBEBEB] "
        style={{ transition: "0.3s" }}
      >
        Edit
      </button>
    </div>
  );
}
