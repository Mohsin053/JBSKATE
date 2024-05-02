import { useState } from "react";
import RemoveProductModal from "./modals/RemoveProductModal";
import { IoTrashOutline } from "react-icons/io5";
import UserOne from "../assets/img1.png";

export default function StoreTable({ data }) {
  const [selectedUser, setSelectedUser] = useState("");
  const handleClick = async (user) => {
    setSelectedUser(user);
    handleModal();
  };
  const handleModal = async () => {
    document.getElementById("my_modal").showModal();
  };
  return (
    <>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-b-[3px] border-[#DFDFDF] text-black text-[14px] font-bold font-sans">
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>In Stock</th>
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
              <td>
                <div className="w-[350px] overflow-x-auto h-[50px]">
                  {user.descrp}
                </div>
              </td>
              <td>{user.price}</td>
              <td>{user.inStock}</td>
              <td>
                <div className="tooltip" data-tip="Remove">
                  <IoTrashOutline
                    size={19}
                    color="#48525B"
                    onClick={() => handleClick(user)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RemoveProductModal showModal={handleModal} user={selectedUser} />
    </>
  );
}
