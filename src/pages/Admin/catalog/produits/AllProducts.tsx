import React from "react";
import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const AllProducts = () => {
  return (
    <div className="w-full min-h-screen px-6 py-4 ">
      <div className="w-full flex flex-col mb-2">
        <div className="w-full flex flex-row justify-start items-center bg-gray-100/50 py-3 ">
          <ul className="flex flex-row gap-3 text-[14px] ">
            <li className="text-gray-500 cursor-pointer">
              <Link to={"/Admin"}>Admin</Link>
              <FaAngleRight className="inline-block mx-2" />
            </li>
            <li className="text-gray-500 cursor-pointer">
              <Link to={"/admin/allproducts"}>AllProducts</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between items-center mb-6 mt-2">
          <h1 className="font-semibold text-3xl text-[#1a1a2b]">
            All Products
          </h1>
          <button
            type="submit"
            className=" bg-yellow-600 hover:bg-yellow-400 transition-all duration-300 ease-in-out border-[1px] border-gray-200 rounded-md cursor-pointer px-2.5 py-1.5  hover:shadow-md text-base flex flex-row justify-center items-center"
          >
            New Products
          </button>
        </div>
        <div className="w-full flex flex-col gap-2 py-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
          <div className="flex flex-row items-center gap-2 px-3 w-full">
            <div className="w-[100%] flex cursor-pointer items-center gap-2 py-2 px-4 border-[1px] border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 hover:shadow-md transition-all duration-300 ease-in-out">
              <div>
                <MdSearch className="text-xl text-gray-400" />
              </div>
              <form action="#" className="w-[100%]">
                <input
                  type="text"
                  placeholder="Recherche ..."
                  className="placeholder:text-gray-400 outline-0 px-2.5 w-full"
                />
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 px-3 shadow-md rounded-xs bg-white">
            <div className="w-full flex flex-row justify-between border-y-[1px] border-y-gray-300">
              <div className="w-[5%] py-3 px-2">
                <input type="checkbox" className="border-gray-100" />
              </div>
              <div className="w-[55%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Product</p>
              </div>
              <div className="w-[15%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Category</p>
              </div>
              <div className="w-[15%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Stocks</p>
              </div>
              <div className="w-[10%] py-3 px-2 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                <p className="text-gray-600 font-medium">Price</p>
              </div>
            </div>
            <div className="w-full flex flex-row border-y-[1px] border-y-gray-300">
              <div>
                <input type="checkbox" className="border-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
