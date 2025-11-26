import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import "../index.css";
import { Link } from "react-router";
const SideBar = () => {
  return (
    <section className="min-w-[20%] h-screen bg-purple-900 text-white sidebar overflow-y-auto">
      <div className="flex flex-col shrink-0 w-full">
        <div className="flex flex-col items-center w-full py-4 sticky shadow top-0 bg-purple-900">
          <h1 className="text-2xl text-white uppercase font-bold font-mono">
            velzon
          </h1>
        </div>
        <ul className="px-4 flex flex-col gap-5">
          <li className="font-sans font-semibold text-white capitalize text-[12px] flex flex-col gap-3">
            <span className="text-[15px]">menu</span>
            <ul className="flex flex-col">
              <li className=" flex flex-col gap-3 ">
                <span className="text-[15px] cursor-pointer hover:text-white transition-all duration-300 ease-in-out"><Link to={"/tableaudeboard"}>Dashboard</Link></span>
                <ul className="ml-2 flex flex-col gap-3 ">
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Analytics</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>CRM</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Ecommerce</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Crypto</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Projets</span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li className=" flex flex-col gap-3 ">
                Apps
                {/* <ul className="ml-2 flex flex-col gap-3 ">
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Analytics</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>CRM</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Ecommerce</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Crypto</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Projets</span>
                  </li>
                </ul> */}
              </li>
            </ul>
            <ul className="flex flex-col">
              <li className=" flex flex-col gap-3 ">
                Layout
                {/* <ul className="ml-2 flex flex-col gap-3 ">
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Analytics</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>CRM</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Ecommerce</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Crypto</span>
                  </li>
                  <li className="flex gap-3 items-center text-white/60 capitalize">
                    <TfiLayoutLineSolid className="w-1.5 text-2xl h-7" />
                    <span>Projets</span>
                  </li>
                </ul> */}
              </li>
            </ul>
          </li>
          <li className="font-sans font-semibold capitalize text-[12px] flex flex-col gap-3 text-white/60">
            <span className="text-[15px]">Pages</span>
            <ul className="flex flex-col gap-5">
              <li className="cursor-pointer hover:text-white transition-all duration-300 ease-in-out"><Link to={"/authentification"}>Authentification</Link></li>
              <li>Pages</li>
              <li>Landing</li>
            </ul>
          </li>
          <li className="font-sans font-semibold capitalize text-[12px] flex flex-col gap-6 text-white/60">
           <span className="text-[15px]">Components</span>
            <ul className="flex flex-col gap-5">
              <li>Base UI</li>
              <li>Advance UI</li>
              <li>Widgets</li>
              <li>Forms</li>
              <li>Table</li>
              <li>Charts</li>
              <li>Icons</li>
              <li>Multi Levels</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
