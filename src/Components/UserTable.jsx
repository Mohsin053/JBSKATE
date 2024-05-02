import { useState } from "react";
import RemoveUserModal from "./modals/RemoveUserModal";
import { IoTrashOutline } from "react-icons/io5";
import UserOne from "../assets/img1.png";

export default function UserTable({ data }) {
  const [selectedUser, setSelectedUser] = useState("");

  const handleClick = (user) => {
    setSelectedUser(user);
    handleModal();
  };

  const handleModal = () => {
    document.getElementById("my_modal").showModal();
  };

  return (
    <>
      <table className="table">
        {/* Table header */}
        <thead>
          <tr className="border-b-[3px] border-[#DFDFDF] text-black text-[14px] font-bold font-sans">
            <th>Name</th>
            <th>Email</th>
            <th>Joined On</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table body */}
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
                      <img src={UserOne} alt={user.name} />
                    </div>
                  </div>
                  <p>{user.name}</p>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.joinedOn}</td>
              <td onClick={() => handleClick(user)}>
                <div className="tooltip" data-tip="Remove">
                  <IoTrashOutline size={19} color="#48525B" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination controls */}

      <RemoveUserModal showModal={handleModal} user={selectedUser} />
    </>
  );
}
