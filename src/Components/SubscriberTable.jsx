import { useState } from "react";
import CancelSubscriptionModal from "./modals/CancelSubscriptionModal";
import { IoClose } from "react-icons/io5";
import UserOne from "../assets/img1.png";

export default function SubscriberTable({ data }) {
  const [selectedUser, setSelectedUser] = useState("");
  const handleClick = async (user) => {
    setSelectedUser(user);
    handleModal();
  };
  const handleModal = async () => {
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-b-[3px] border-[#DFDFDF] text-black text-[14px] font-bold font-sans">
            <th>Name</th>
            <th>Package Type</th>
            <th>Duration</th>
            <th>Subscribed on</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
              className="border-b-[1px] border-[#DFDFDF] bg-white hover:bg-[#EBEBEB] cursor-pointer text-table text-[14px] font-medium font-sans"
            >
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-[36px] rounded-full">
                      <img src={UserOne} />
                    </div>
                  </div>
                  <p>{user.name}</p>
                </div>
              </td>
              <td>{user.type}</td>
              <td>{user.duration}</td>
              <td>{user.subscribed}</td>
              <td>
                <div
                  className={`flex w-[70px] h-[27px] bg-opacity-10 items-center justify-center ${
                    user.status ? "bg-[#28A745] " : "bg-[#FFC107]"
                  }`}
                >
                  <p
                    className={` ${
                      user.status ? "text-[#28A745]" : "text-[#FFC107] "
                    }`}
                  >
                    {user.status ? "Paid" : "Not Paid"}
                  </p>
                </div>
              </td>
              <td>
                <div
                  className="tooltip"
                  data-tip="Remove"
                  onClick={() => handleClick(user)}
                >
                  <IoClose size={19} color="#48525B" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CancelSubscriptionModal showModal={handleModal} user={selectedUser} />
    </>
  );
}
