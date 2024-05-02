import { useState } from "react";
import { IoSearch, IoAddSharp } from "react-icons/io5";
import Loader from "../../Components/Loader/Loader";
import data from "../../Components/userData/storeData";
import StoreTable from "../../Components/StoreTable";
import { ToastContainer } from "react-toastify";

const Store = () => {
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
        <div className="relative flex flex-row w-full items-center gap-[24px]">
          <p className=" text-[40px] md:text-[60px] font-normal font-bebas text-black">
            STORE
          </p>
          <div className="flex hover:opacity-[0.8]">
            <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
            <button
              className="h-[42px] w-[142px] bg-primary text-[20px] font-normal font-bebas text-white flex items-center justify-center gap-2"
              style={{ transition: "0.3s" }}
            >
              ADD PRODUCT
              <IoAddSharp size={26} color="white" />
            </button>
            <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#3669C9]" />
          </div>
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
        <StoreTable data={data} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Store;
