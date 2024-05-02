import { useState } from "react";
import { toast } from "react-toastify";

const AssignBadgeModal = ({ showModal }) => {
  const [email, setEmail] = useState("");
  const [toggleBox, setToggleBox] = useState(true);
  const handleDelete = async () => {
    document.getElementById("my_modal").close();
    toast.success("Badge assigned successfully.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box bg-white p-0">
        <form
          method="dialog"
          className="flex border-b-[1px] border-b-black  justify-between items-center p-[15px]"
        >
          {/* if there is a button in form, it will close the modal */}
          <h3 className="font-medium text-sans text-[18px] text-black">
            Assign Badge
          </h3>
          <button className="btn btn-ghost btn-sm shadow-xl">✕</button>
        </form>
        <div className="p-[15px] flex flex-col items-center justify-center gap-[15px] ">
          <div className="w-full">
            <p className="text-[16px] text-black font-medium font-sans">
              User Email
            </p>
            <div className="relative mt-[8px] w-full">
              <input
                type="text"
                className="h-[48px] w-full bg-input p-[16px] text-black font-sans focus:border border-[#3669C9] focus:outline-none "
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-[16px] text-black font-medium font-sans">
              Subscription Type
            </p>
            <div className="mt-[8px] w-full flex gap-[12px]">
              <div className="flex hover:opacity-[0.8]">
                <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
                <button
                  className="h-[30px] px-[15px] bg-primary text-[16px] font-normal font-bebas text-white "
                  style={{ transition: "0.3s" }}
                  onClick={handleDelete}
                >
                  BUSINESS
                </button>
                <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#3669C9]" />
              </div>
              <div className="flex hover:opacity-[0.8]">
                <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
                <button
                  className="h-[30px] px-[15px] bg-primary text-[16px] font-normal font-bebas text-white "
                  style={{ transition: "0.3s" }}
                  onClick={handleDelete}
                >
                  VIDEOGRAPHER
                </button>
                <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#3669C9]" />
              </div>
              <div className="flex hover:opacity-[0.8]">
                <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
                <button
                  className="h-[30px] px-[15px] bg-primary text-[16px] font-normal font-bebas text-white "
                  style={{ transition: "0.3s" }}
                  onClick={handleDelete}
                >
                  ORGANIZARTION
                </button>
                <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#3669C9]" />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-[16px] text-black font-medium font-sans">
              Duration
            </p>
            <div className="relative flex items-center gap-[8px]">
              <p className="text-[10px] text-black font-semibold font-sans">
                Monthly
              </p>
              <input
                type="checkbox"
                className="toggle [--tglbg:#3669C9] bg-white hover:opacity-[0.5] border-[#3669C9]"
                checked={toggleBox}
                onChange={() => setToggleBox(!toggleBox)}
              />
              <p className="text-[10px] text-black font-semibold font-sans">
                Yearly
              </p>
            </div>
          </div>

          <div className="flex hover:opacity-[0.8]">
            <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
            <button
              className="h-[42px] w-[300px] bg-primary text-[20px] font-normal font-bebas text-white "
              style={{ transition: "0.3s" }}
              onClick={handleDelete}
            >
              APPROVE
            </button>
            <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#3669C9]" />
          </div>
          <form method="dialog">
            <div className="flex hover:opacity-[0.8]">
              <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#D6D5D5]" />
              <button
                className="h-[42px] w-[300px] bg-[#D6D5D5] text-[20px] font-normal font-bebas text-black "
                style={{ transition: "0.3s" }}
              >
                DECLINE
              </button>
              <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#D6D5D5]" />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AssignBadgeModal;
