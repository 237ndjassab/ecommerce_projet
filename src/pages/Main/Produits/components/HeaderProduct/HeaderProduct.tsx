import React from "react";
import { FaEye } from "react-icons/fa";
import fire from "../../../../../assets/fire.png";
import imgfin from "../../../../../assets/imgfin.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows, MdOutlineLocalShipping } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const HeaderProduct = () => {
    const [qty, setQty] = React.useState<number>(1);
  return (
    <div className="flex flex-row w-full gap-8 py-14">
      <div className="flex flex-col w-1/2"></div>
      <div className="flex flex-col w-1/2 gap-5  pr-10">
        <div className="w-full flex flex-col gap-6 pb-6 border-0 border-b-1 border-gray-200">
          <h1 className="text-4xl font-medium">OPPO Reno13 F 8GB 256GB New</h1>
          <div className="flex flex-row items-center gap-2">
            <FaEye className="animate-eyeInfinite"/>
            <div className="flex flex-row items-center gap-2 font-light text-black/90 text-[15px]">
              <p>50</p>
              <p>People are viewing this right now.</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <img src={fire} alt="image de fin de page" className="w-5" />
            </div>
            <div className="flex flex-row gap-2 font-normal text-black/60 text-[14px]">
              <p>37</p>
              <p>Sold in 24 hour.</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <h3 className=" font-medium text-gray-500 text-[15px]">Availability:</h3>
            <p className=" text-[15px]">In stock</p>
          </div>
          <div className="flex flex-row gap-2">
            <h3 className=" font-medium text-gray-500 text-[15px]">Product code:</h3>
            <p className=" text-[15px]">Smartphone105</p>
          </div>
          <div className="flex flex-row gap-2">
            <h3 className=" font-medium text-gray-500 text-[15px]">Category:</h3>
            <p className=" text-[15px]">Smartphone, Cell Phones, Camera & Photo</p>
          </div>
          <div className="flex flex-row gap-2">
            <h3 className=" font-medium text-gray-500 text-[15px]">Tag:</h3>
            <p className=" text-[15px]"> mobile</p>
          </div>
          <div>
            <p className=" font-light text-gray-600 text-[14px]">
              Creator of the first Polo shirt in 1933, Lacoste has established
              itself as the only casual wear brand combining French elegance and
              freedom of movement
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 pb-6 border-0 border-b-1 border-gray-200">
          <h2 className="text-[25px] font-normal text-pink-600">$599</h2>
          <div>
            <p className="font-light text-[15px]">Quantity :</p>
            <div className="w-full flex flex-row justify-between gap-2 mt-2">
              <div className="w-[20%] flex flex-row justify-center items-center rounded-[4px] bg-gray-100/50">
                <div>
                  <button className="text-[18px] cursor-pointer hover:text-pink-600"
                  onClick={()=>setQty((prev)=> (prev > 1 ? prev - 1 : 1)) }
                  >-</button>
                </div>
                <div>
                  <input
                    type="text"
                    value={qty}
                    readOnly
                    className="w-16 text-center outline-none"
                  />
                </div>
                <div>
                  <button className="text-[18px] cursor-pointer hover:text-pink-600"
                  onClick={() => setQty((prev) => (prev !== 0 ? prev + 1 : 1))}
                  >+</button>
                </div>
              </div>
              <div className="w-[60%]">
                <button className="w-full flex flex-row justify-center items-center gap-3 bg-white text-black px-5 py-3 rounded-[4px] hover:bg-black hover:text-white border-1 border-black transition-all duration-300 ease-in-out cursor-pointer">
                  <div>
                    <AiOutlineShoppingCart className="text-[18px]"/>
                  </div>{" "}
                  <div>Add to cart</div>
                </button>
              </div>
              <div className="w-[20%] flex flex-row gap-2">
                <div className="w-full flex flex-row justify-center items-center bg-white text-black px-5 py-3 rounded-[4px] hover:bg-black hover:text-white border-1 border-gray-100 transition-all duration-300 ease-in-out"  data-tooltip-id="tt" data-tooltip-content="Add To Wishlist"><FaRegHeart /></div>
                <Tooltip
                 id="tt"
                 delayShow={300}
                 style={{
                    fontSize: "10px"
                 }}
                 />
                <div className="w-full flex flex-row justify-center items-center bg-white text-black px-5 py-3 rounded-[4px] hover:bg-black hover:text-white border-1 border-gray-100 transition-all duration-300 ease-in-out"  data-tooltip-id="ts" data-tooltip-content="Add To Compare"><MdCompareArrows /></div>
                <Tooltip
                 id="ts"
                 delayShow={300}
                 style={{
                    fontSize: "10px"
                 }}
                 />
              </div>
            </div>
            <div className="w-full flex flex-row mt-4 gap-6 ">
                <div className="flex flex-row items-center gap-2 ">
                    <div>
                        <GoQuestion className="text-[22px]" />
                    </div>
                    <p className="text-[14px] font-medium">Ask A Question</p>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                    <div>
                        <MdOutlineLocalShipping className="text-[32px]" />
                    </div>
                    <p className="text-[14px] font-medium">Shipping & return</p>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                    <div>
                        <FiShare2 className="text-[22px]" />
                    </div>
                    <p className="text-[14px] font-medium">Share</p>
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
            <p className="font-medium text-[14px]">Delivery: <span className="text-pink-600">24th November - 26th November</span></p>
            <p className="font-medium text-[14px]">Free shipping and returns on all orders over $450</p>
            <div className="bg-gray-100 rounded-[4px] flex flex-col gap-2.5 items-center justify-center py-6 px-10">
                <p className="font-medium text-[14px]">Guaranteed safe checkout:</p>
                <img src={imgfin} alt="image de fin de page" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProduct;
