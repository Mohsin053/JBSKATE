import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { IoLogOutOutline, IoArrowBack } from "react-icons/io5";
import { MdOutlineInsertChart } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiStorefront } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

import Pic from ".././assets/skateLogoWhite.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleSignOut = async () => {
    window.location.replace("/login");
  };

  return (
    <aside
      ref={sidebar}
      className={` absolute left-0 top-0 z-[40000]  flex h-screen w-[255px] flex-col overflow-y-hidden bg-sidebar duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="py-5.5 lg:py-6.5 mt-[25px] flex items-center justify-between gap-2 px-6 lg:justify-center">
        <NavLink to="/" className="flex flex-row items-center justify-center">
          <img src={Pic} alt="My Image" />
          <p className="text-[white] ml-[4px] text-[22px] font-sans">JBSKATE</p>
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <IoArrowBack size={26} color="white" />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-3">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/"
                  className={`group relative flex items-center gap-2.5 rounded-[10px] px-4 py-2 text-[20px] font-medium font-bebas duration-300 ease-in-out hover:bg-hover hover:text-[#3669C9] ${
                    pathname === "/" || pathname.includes("players")
                      ? "bg-hover text-[#3669C9]"
                      : "text-white"
                  }`}
                >
                  <MdOutlineInsertChart size={24} color="currentColor" />
                  PLAYERS
                </NavLink>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Search --> */}
              <li>
                <NavLink
                  to="/users"
                  className={`group relative flex items-center gap-2.5 rounded-[10px] px-4 py-2 text-[20px] font-medium font-bebas font-bebas duration-300 ease-in-out hover:bg-hover hover:text-[#3669C9] ${
                    pathname.includes("users")
                      ? "bg-hover text-[#3669C9]"
                      : "text-[white]"
                  }`}
                >
                  <HiOutlineUsers size={24} color="currentColor" />
                  USERS
                </NavLink>
              </li>
              {/* <!-- Menu Item Search --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/store"
                  className={`group relative flex items-center gap-2.5 rounded-[10px] px-4 py-2 text-[20px] font-medium font-bebas duration-300 ease-in-out hover:bg-hover hover:text-[#3669C9] ${
                    pathname.includes("store")
                      ? "bg-hover text-[#3669C9]"
                      : "text-[white]"
                  }`}
                >
                  <PiStorefront size={24} color="currentColor" />
                  STORE
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/badges"
                  className={`group relative flex items-center gap-2.5 rounded-[10px] px-4 py-2 text-[20px] font-medium font-bebas duration-300 ease-in-out hover:bg-hover hover:text-[#3669C9] ${
                    pathname.includes("badges")
                      ? "bg-hover text-[#3669C9]"
                      : "text-[white]"
                  }`}
                >
                  <SlBadge size={24} color="currentColor" />
                  BADGES
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}
            </ul>
          </div>
        </nav>
      </div>

      <div className="absolute bottom-0 w-full px-6">
        <ul className="mb-6 flex flex-col gap-1.5">
          {/* <!-- Menu Item Chart --> */}
          <li
            className={`group relative flex cursor-pointer items-center gap-2.5 rounded-[10px] px-4 py-2 text-[20px] font-medium font-bebas text-[white] duration-300 ease-in-out hover:bg-hover hover:text-[#3669C9]`}
            onClick={handleSignOut}
          >
            <IoLogOutOutline
              size={24}
              color="currentColor"
              onClick={handleSignOut}
            />
            LOGOUT
          </li>
          {/* <!-- Menu Item Chart --> */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
