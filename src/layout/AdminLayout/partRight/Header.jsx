import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import { GiUsaFlag } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import Authentification from "../../pages/Authentification.jsx";
const Header = () => {
  return (
    <>
      <header className="w-[100%] sticky top-0 h-fit px-3 py-3 bg-white border border-x-0 border-y-gray-200">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <div>
              <HiMenuAlt1 className="text-2xl text-gray-500 cursor-pointer hover:text-3xl transition-all duration-300 ease-in-out" />
            </div>
            <div className="flex cursor-pointer items-center gap-2 py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-md transition-all duration-300 ease-in-out">
              <div>
                <MdSearch className="text-xl text-gray-400"/>
              </div>
              <form action="#">
                <input type="text" placeholder="Recherche ..." className="placeholder:text-gray-400 outline-0" />
              </form>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div>
              <GiUsaFlag />
            </div>
            <div>
              <IoBag />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
