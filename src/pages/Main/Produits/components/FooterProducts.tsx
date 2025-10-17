import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FooterProducts = () => {
  const [state, setState] = useState<string>("description");
  return (
    <div className="w-full bg-gray-100/50 px-8 pt-20 pb-22">
      <ul className="w-full flex flex-row justify-center gap-8">
        <div onClick={() => setState("description")}>
          <li className="text-2xl font-normal cursor-pointer">
            Product description
          </li>
          <div
            className={`mt-7 h-0.5 ${
              state == "description" ? "w-full" : "w-0"
            } rounded-md bg-gray-900`}
          ></div>
        </div>
        <div onClick={() => setState("shipping")}>
          <li className="text-2xl font-normal cursor-pointer ">
            Shipping & returns
          </li>
          <div
            className={`mt-7 h-0.5 ${
              state == "shipping" ? "w-full" : "w-0"
            } rounded-md bg-gray-900`}
          ></div>
        </div>
        <div onClick={() => setState("review")}>
          <li className="text-2xl font-normal cursor-pointer ">Review</li>
          <div
            className={`mt-7 h-0.5 ${
              state == "review" ? "w-full" : "w-0"
            } rounded-md bg-gray-900`}
          ></div>
        </div>
      </ul>
      <div className="w-full bg-white">
        {state == "description" && (
          <div className="py-12 px-22">
            <p className="text-gray-600 font-normal text-[15px] leading-8">
              Creator of the first Polo shirt in 1933, Lacoste has established
              itself as the only casual wear brand combining French elegance and
              freedom of movement, inherited from its sporting origins. The
              Crocodile brand is one of the most famous brands in the world and
              has established itself as the reference of Polo, constantly
              reinventing it combining elegance with French and freedom of
              movement, inherited from its sporting origins. The Crocodile brand
              in several forms, materials and styles. Present in 120 countries,
              it offers a complete universe: Clothing, leather goods, perfumes,
              shoes, glasses, linen, watches and underwear, the elaboration of
              which meets its high demands for quality and responsibility.
            </p>
            <p className="text-gray-600 font-normal text-[15px] leading-8">
              The timeless Lacoste tee gets an update in a super-comfortable
              mid-weight fabric. A versatile essential that goes with
              everything, finished with an iconic crocodile.
            </p>
            <p className="text-gray-600 font-normal text-[15px] leading-8">
              Weight: 180g/m² <br />
              Crew neck with hood <br />
              Classic, comfortable fit
              <br />
              Embroidered crocodile on chest
              <br />
              Cotton (100%)
            </p>
          </div>
        )}
        {state == "shipping" && (
          <div className="py-12 px-22 flex flex-col gap-10">
            <h1 className="font-semibold text-2xl">Shipping and delivery</h1>
            <ol className=" flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-1 font-normal text-2xl">
                  <span>1.</span>
                  <li>Scope of delivery</li>
                </div>
                <p className="text-gray-600 font-normal text-[15px] leading-8">
                  We deliver world-wide. Particularly within the European Union,
                  delivery is fast and straightforward. Please take note of the
                  information regarding methods of payment, delivery costs and
                  delivery times for international orders. For additional
                  questions, please use our contact form.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-1 font-normal text-2xl">
                  <span>2.</span>
                  <li>Delivery time</li>
                </div>
                <p className="text-gray-600 font-normal text-[15px] leading-8">
                  Distributors deliver products: 3 days/week (except Sunday, Tet
                  and National Holiday) <br /> Retailers deliver products: 4
                  days/ week (except Tet and national holiday)
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-1 font-normal text-2xl">
                  <span>3.</span>
                  <li>Shipping cost</li>
                </div>
                <p className="text-gray-600 font-normal text-[15px] leading-8">
                  Order minimum 10$ or more: free delivery.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-1 font-normal text-2xl">
                  <span>4.</span>
                  <li>The delivery charges cost</li>
                </div>
                <p className="text-gray-600 font-normal text-[15px] leading-8">
                  The delivery charges depend on the number and weight of the
                  packages as well as the country to which they are to be sent.
                  The details of weight- and country-dependent delivery costs
                  are listed in a table on our website.
                </p>
              </div>
            </ol>
          </div>
        )}
        {state == "review" && (
          <div className="py-12 px-22">
            <div className="flex flex-row w-full">
              <div className="flex flex-col items-center w-[20%] justify-center">
                <div>0</div>
                <div className="flex flex-row gap-1.5">
                  <FaStar className="inline-block text-yellow-400" />
                  <FaStar className="inline-block text-yellow-400" />
                  <FaStar className="inline-block text-yellow-400" />
                  <FaStar className="inline-block text-yellow-400" />
                  <FaStar className="inline-block text-yellow-400" />
                </div>
                <div>(0 Ratings)</div>
              </div>
              <div className="w-[40%] flex flex-col gap-2 px-8">
                <div className="flex flex-row gap-x-1 justify-center items-center">
                  <div className=" flex justify-center items-center">5</div>
                  <div className=" flex justify-center items-center">
                    <FaStar className="inline-block text-yellow-400" />
                  </div>
                  <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                  <div className=" flex flex-row justify-center items-center">0</div>
                </div>
                <div className="flex flex-row gap-x-1 justify-center items-center">
                  <div className="flex justify-center items-center">4</div>
                  <div className="flex justify-center items-center">
                    <FaStar className="inline-block text-yellow-400" />
                  </div>
                  <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                  <div className="flex justify-center items-center">0</div>
                </div>
                <div className="flex flex-row gap-x-1 justify-center items-center">
                  <div className="flex justify-center items-center">3</div>
                  <div className="flex justify-center items-center">
                    <FaStar className="inline-block text-yellow-400" />
                  </div>
                  <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                  <div className="flex justify-center items-center">0</div>
                </div>
                <div className="flex flex-row gap-x-1 justify-center items-center">
                  <div className="flex justify-center items-center">2</div>
                  <div className="flex justify-center items-center">
                    <FaStar className="inline-block text-yellow-400" />
                  </div>
                  <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                  <div className="flex justify-center items-center">0</div>
                </div>
                <div className="flex flex-row gap-x-1 justify-center items-center">
                  <div className="flex justify-center items-center">1</div>
                  <div className="flex justify-center items-center">
                    <FaStar className="inline-block text-yellow-400" />
                  </div>
                  <div className="w-[300px] h-2 rounded-full bg-gray-300 flex justify-center items-center"></div>
                  <div className="flex justify-center items-center">0</div>
                </div>
              </div>
              <div className=" w-[40%] flex justify-end items-center">
                <button className="px-3.5 py-2 border border-black rounded-[4px] text-[14px] font-normal">
                  write a review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterProducts;
