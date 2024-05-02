import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Loader from "../../Components/Loader/Loader";
import data from "../../Components/userData/userTabledata";
import UserTable from "../../Components/UserTable";
import { ToastContainer } from "react-toastify";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      {/*top Heading */}
      <div className="relative w-full items-center md:flex">
        {/* Heading*/}
        <div className="relative flex w-full">
          <p className=" text-[40px] md:text-[60px] font-normal font-bebas text-black">
            USERS
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full">
          <label className="input flex h-[48px] w-full rounded-xl bg-white shadow-lg items-center gap-2 lg:w-[400px] lg:ml-auto">
            <IoSearch size={26} color="#AEB6CF" />
            <input
              type="text"
              id="searchInput"
              value={search}
              onChange={handleInputChange}
              className="w-full bg-white font-sans font-normal text-[#AEB6CF] placeholder:text-[#AEB6CF] focus:outline-none"
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      {/* Players View */}
      <div className=" my-[24px] w-full overflow-x-auto">
        <UserTable data={data} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Users;
