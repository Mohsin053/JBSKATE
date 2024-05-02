import { toast } from "react-toastify";
import img from "../../assets/WarnSign.png";

const RemoveProductModal = ({ showModal, user }) => {
  const handleDelete = async () => {
    document.getElementById("my_modal").close();
    toast.success("Product deleted successfully.", {
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
            Remove Product
          </h3>
          <button className="btn btn-ghost btn-sm shadow-xl">✕</button>
        </form>
        <div className="p-[15px] flex flex-col items-center justify-center gap-[15px] ">
          <img src={img} alt="My Image" />
          <p className=" w-[50%] text-[18px] text-black text-center font-normal font-sans">
            Are you sure you want to Remove the Product “{user.name}”
          </p>
          <div className="flex hover:opacity-[0.8]">
            <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-r-[8px] border-t-[transparent] border-b-[transparent] border-r-[#3669C9]" />
            <button
              className="h-[42px] w-[300px] bg-primary text-[20px] font-normal font-bebas text-white "
              style={{ transition: "0.3s" }}
              onClick={handleDelete}
            >
              YES
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
                NO
              </button>
              <div className="w-0 h-0 border-t-[21px] border-b-[21px] border-l-[8px] border-t-[transparent] border-b-[transparent] border-l-[#D6D5D5]" />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default RemoveProductModal;
