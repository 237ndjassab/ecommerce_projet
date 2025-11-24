import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { PiDotsSixBold } from "react-icons/pi";
import { BsGripHorizontal } from "react-icons/bs";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import { RxDragHandleDots2 } from "react-icons/rx";

const Category: React.FC = () => {
  return (
    <>
      {/* Home categories */}
      <div className="flex bg-gray-100 p-6 justify-center items-center gap-2">
        <p>Home</p>
        <FaAngleRight className="size-3 text-gray-500" />
        <p>Category</p>
      </div>
      

      <div className="flex gap-6 mt-12 mx-10 min-h-screen">
        {/* Categories links */}
        <aside className="flex flex-col gap-2 max-h-60 overflow-scroll w-[15%] overflow-x-hidden mt-4">
          <h1 className="text-2xl mb-4 sticky top-0 bg-white">Categories</h1>

          <a href="#" className="hover:text-red-500 transition-all">
            Smartphone(8)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Electronics(8)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Fashion(12)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Furniture(7)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Jewelry(7)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Cosmetics(7)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Handbags(8)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Game & Console(7)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Cars & Motorbikes(0)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Sneakers(7)
          </a>
          <a href="#" className="hover:text-red-500 transition-all">
            Health & Beauty(7)
          </a>
          <div className="border border-gray-300 mt-10"></div>
        </aside>

        {/* burger icon */}
        <div className="flex-1">
          <div className="flex justify-end mr-15">
            <h1 className="border border-gray-300 px-4 hover:border-gray-700 flex gap-2 p-1.5">
              All
              <FaAngleDown/>
            </h1>
          </div>

          <div className="flex gap-4">
            <RxDragHandleDots2 className="size-7 text-gray-300 cursor-pointer hover:text-gray-900" />
            <PiDotsSixBold className="size-7 text-gray-300 cursor-pointer hover:text-gray-900" />
            <BsGripHorizontal className="size-7 text-gray-300 cursor-pointer hover:text-gray-900" />
            <PiSlidersHorizontalFill className="size-7 text-gray-300 cursor-pointer hover:text-gray-900" />
          </div>

          {/* special card hover */}
          <div className="flex gap-8">
            <div className="border w-60 h-auto border-gray-200 mt-8 rounded-md">
            <button
              title="sale"
              className="rounded-xl text-white p-1 text-md bg-red-600 w-14 m-4 absolute z-10"
            >
              SALE
            </button>
            <div className="bg-gray-300 h-56"></div>
            <div className="m-4">
              <h4 className="text-gray-400 text-sm mb-2 hover:text-gray-800 cursor-pointer">Fashion</h4>
              <h2 className="mb-2 hover:text-red-500 cursor-pointer transition-all">Dress GELLER NEW...</h2>
              <p className="text-red-500 flex gap-2">$30 <span className="text-black">$80</span></p>
            </div>
          </div>
            <div className="border w-60 h-auto border-gray-200 mt-8 rounded-md">
            <div className="bg-gray-300 h-56"></div>
            <div className="m-4">
              <h4 className="text-gray-400 text-sm mb-2 hover:text-gray-800 cursor-pointer">Handbags</h4>
              <h2 className="mb-2 hover:text-red-500 cursor-pointer transition-all">BS-MALL Makeup...</h2>
              <p className="text-red-500 flex gap-2">$200 <span className="text-black"></span></p>
            </div>
          </div>
            <div className="border w-60 h-auto border-gray-200 mt-8 rounded-md">
            <div className="bg-gray-300 h-56"></div>
            <div className="m-4">
              <h4 className="text-gray-400 text-sm mb-2 hover:text-gray-800 cursor-pointer">Fashion , Sneakers</h4>
              <h2 className="mb-2 hover:text-red-500 cursor-pointer transition-all">Calf High Leather...</h2>
              <p className="text-red-500 flex gap-2">$100 <span className="text-black"></span></p>
            </div>
          </div>
            <div className="border w-60 h-auto border-gray-200 mt-8 rounded-md">
            <div className="bg-gray-300 h-56"></div>
            <div className="m-4">
              <h4 className="text-gray-400 text-sm mb-2 hover:text-gray-800 cursor-pointer">Handbags</h4>
              <h2 className="mb-2 hover:text-red-500 cursor-pointer transition-all">Casual Watch...</h2>
              <p className="text-red-500 flex gap-2">$90 <span className="text-black"></span></p>
            </div>
          </div>
          </div>
          <div className="flex gap-8 mb-8">
            <div className="border w-60 h-auto border-gray-200 mt-8 rounded-md">
            <button
              title="sale"
              className="rounded-xl text-white p-1 text-md bg-red-600 w-14 m-4 absolute z-10"
            >
              SALE
            </button>
            <div className="bg-gray-300 h-56"></div>
            <div className="m-4">
              <h4 className="text-gray-400 text-sm mb-2 hover:text-gray-800 cursor-pointer">Health & Beauty</h4>
              <h2 className="mb-2 hover:text-red-500 cursor-pointer transition-all">Medicube Zero Pore...</h2>
              <p className="text-red-500 flex gap-2">$95 <span className="text-black">$100</span></p>
            </div>
          </div>
            <div className="border w-60 h-auto border-gray-200 mt-8 rounded-md">
            <div className="bg-gray-300 h-56"></div>
            <div className="m-4">
              <h4 className="text-gray-400 text-sm mb-2 hover:text-gray-800 cursor-pointer">Fashion</h4>
              <h2 className="mb-2 hover:text-red-500 cursor-pointer transition-all">Womens Sweaters...</h2>
              <p className="text-red-500 flex gap-2">$30 <span className="text-black"></span></p>
            </div>
          </div>
            <div className="border w-60 h-auto border-gray-200 mt-8 rounded-md">
            <div className="bg-gray-300 h-56"></div>
            <div className="m-4">
              <h4 className="text-gray-400 text-sm mb-2 hover:text-gray-800 cursor-pointer">Fashion</h4>
              <h2 className="mb-2 hover:text-red-500 cursor-pointer transition-all">Babydoll Mini Dress...</h2>
              <p className="text-red-500 flex gap-2">$95 <span className="text-black"></span></p>
            </div>
          </div>
            <div className="border w-60 h-auto border-gray-200 mt-8 rounded-md">
              <button
              title="sale"
              className="rounded-xl text-white p-1 text-md bg-red-600 w-14 m-4 absolute z-10"
            >
              SALE
            </button>
            <div className="bg-gray-300 h-56"></div>
            <div className="m-4">
              <h4 className="text-gray-400 text-sm mb-2 hover:text-gray-800 cursor-pointer">Fashion , Sneakers</h4>
              <h2 className="mb-2 hover:text-red-500 cursor-pointer transition-all">Knee High Boots For...</h2>
              <p className="text-red-500 flex gap-2">$130 <span className="text-black underline">$145</span></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
