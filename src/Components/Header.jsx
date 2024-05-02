import { Link } from "react-router-dom";
import UserOne from "../assets/img1.png";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="drop-shadow-1 sticky top-0 z-[30000] flex w-full bg-white shadow-lg">
      <div className="flex flex-grow items-center justify-between p-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 border-stroke block rounded-sm border border-gray-300 bg-white p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-[22px] w-[22px] cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>

              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* <!--  Greeting Message --> */}
        <div className="2xsm:gap-7 flex  items-center">
          {/* <!-- User Area --> */}
          <div className="relative">
            <Link className="flex items-center gap-3" to="#">
              <span className="hidden lg:block">
                <span className="block text-[40px] font-regular font-bebas text-black">
                  HELLO ADMIN,{" "}
                  <span className="text-primary">GOOD MORNING</span>
                </span>
              </span>
            </Link>
          </div>
          {/* <!-- User Area --> */}
        </div>

        {/* <!--  Menu Area --> */}
        <div className="2xsm:gap-7 flex ml-[auto] items-center">
          {/* <!-- User Area --> */}
          <div className="relative">
            <Link className="flex items-center gap-3" to="#">
              <span className="hidden text-right lg:block">
                <span className="block text-[24px] font-regular font-bebas text-black">
                  TETIANA
                </span>
              </span>
              <span className="h-[45px] w-[45px] overflow-hidden rounded-full">
                <img src={UserOne} alt="User" />
              </span>
            </Link>
          </div>
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
