import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";

type Change = {
  toggleSidebar: () => void;
}
const Header: React.FC<Change> = ({toggleSidebar}) => {
  return (
    <>
      <header className="w-[100%] sticky top-0 h-fit px-2 py-0 bg-white border border-x-0 border-y-gray-200">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row items-center gap-2 w-1/2">
            <div onClick={toggleSidebar}>
              <HiMenuAlt1 className="text-2xl text-gray-500 cursor-pointer hover:text-3xl transition-all duration-300 ease-in-out" />
            </div>
            <div className="w-[80%] flex cursor-pointer items-center gap-2 py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-md transition-all duration-300 ease-in-out">
              <div>
                <MdSearch className="text-xl text-gray-400"/>
              </div>
              <form action="#" className="w-[100%]">
                <input type="text" placeholder="Recherche ..." className="placeholder:text-gray-400 outline-0 px-2.5 w-full" />
              </form>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <div>
              <IoNotifications  className="text-xl" />
            </div>
            <div className="flex flex-row gap-3 items-center py-2 px-3 rounded-md hover:bg-gray-100 hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out">
              <div>
                <FaUserTie className="text-2xl" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-normal">Ndjassab Willy </p>
                <p className="font-light text-gray-300 text-[14px]">ndjassabwilly@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
