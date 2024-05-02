import { useState } from "react";
import { IoSearch, IoAddSharp, IoCheckmarkSharp } from "react-icons/io5";
import Loader from "../../Components/Loader/Loader";
import AssignBadgeModal from "../../Components/modals/AssignBadgeModal";
import SubscriberTable from "../../Components/SubscriberTable";
import BadgeCard from "../../Components/BadgeCard";
import data from "../../Components/userData/subscriberData";
import { ToastContainer } from "react-toastify";

const Badges = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [toggleBox, setToggleBox] = useState(true);
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleModal1 = async () => {
    document.getElementById("my_modal").showModal();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full ">
      {/*top Heading */}
      <div className="flex w-full items-center justify-between ">
        <p className=" text-[40px] md:text-[60px] font-normal font-bebas text-black">
          Badges
        </p>
        <div className="relative flex items-center gap-[8px]">
          <p className="text-[12px] md:text-[18px] text-black font-semibold font-sans">
            Monthly
          </p>
          <input
            type="checkbox"
            className="toggle [--tglbg:#3669C9] bg-white hover:opacity-[0.5] border-[#3669C9]"
            checked={toggleBox}
            onChange={() => setToggleBox(!toggleBox)}
          />
          <p className="text-[12px] md:text-[18px]  text-black font-semibold font-sans">
            Yearly
          </p>
        </div>
        <div className="flex hover:opacity-[0.8]">
          <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
          <button
            className="h-[42px] w-[100px] sm:w-[142px] bg-primary text-[14px] sm:text-[20px] font-normal font-bebas text-white flex items-center justify-center gap-2 "
            style={{ transition: "0.3s" }}
            onClick={handleModal1}
          >
            ASSIGN BADGES
            <IoAddSharp size={26} color="white" />
          </button>
          <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#3669C9]" />
        </div>
      </div>

      {/* Cards */}
      <div className="my-[24px] sm:flex gap-[24px] justify-center">
        <BadgeCard id={0} />
        <BadgeCard id={1} />
        <BadgeCard id={2} />
      </div>

      <div className="relative mt-[48px] w-full items-center md:flex">
        {/* Heading*/}
        <div className="relative flex w-full">
          <p className=" text-[40px] font-normal font-bebas text-black">
            SUBSCRIBERS
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
        <SubscriberTable data={data} />
      </div>
      <AssignBadgeModal showModal={handleModal1} />
      <ToastContainer />
    </div>
  );
};

export default Badges;
