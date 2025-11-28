import React from "react";
import { TfiDashboard } from "react-icons/tfi";
import "../index.css";
import { Link } from "react-router";
import { FaDatabase, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdSecurity } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";
import { LuUserRound } from "react-icons/lu";
import { GrSecure } from "react-icons/gr";
import { IoChatbubbleEllipsesOutline, IoSettings } from "react-icons/io5";
import { FaQ } from "react-icons/fa6";
import { FiHelpCircle } from "react-icons/fi";
type Props = {
  isOpen: boolean;
};
const SideBar = ({ isOpen }: Props) => {
  const [derouler, setDerouler] = React.useState<boolean>(false);
  const [deroulerUser, setderoulerUser] = React.useState<boolean>(false);
  const [deroulerOrder, setderoulerOrder] = React.useState<boolean>(false);
  const [deroulerComment, setderoulerComment] = React.useState<boolean>(false);
  const [DeroulerAuthentify, setDeroulerAuthentify] = React.useState<boolean>(false);
  return (
    <section
      className={`${
        isOpen ? "w-[20%]" : "w-0 "
      } h-screen  bg-[#1a1a2b] text-white sidebar overflow-y-auto`}
    >
      <div className="flex flex-col shrink-0 w-full">
        <div className="flex flex-col items-center w-full mb-10 py-4 sticky shadow top-0 bg-[#d62243]">
          <h1 className="text-2xl text-white uppercase font-bold font-mono">
            E-commerce
          </h1>
        </div>
        <ul className="flex flex-col gap-3.5">
          <div className="px-4 flex flex-col gap-4 border-b-[1px] border-gray-700 pb-6">
            <li className="font-sans font-semibold text-white capitalize text-[12px] flex flex-col gap-5">
            <div className="text-[14px] text-gray-500 "> Application</div>
            <ul className="flex flex-col">
              <li className=" flex flex-col gap-3 ">
                <div className="flex flex-row gap-2.5 items-center w-full">
                  {" "}
                  <span>
                    <TfiDashboard className="text-xl" />
                  </span>{" "}
                  <span className="text-[15px] cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/admin/dashboard"}>Dashboard</Link>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li className="font-sans font-semibold capitalize text-[14px] flex flex-col gap-4 text-white">
            <div
              className="flex flex-row justify-between items-center w-full cursor-pointer"
              onClick={() => setDerouler(!derouler)}
            >
              <div className="flex flex-row gap-2.5 items-center w-full">
                <span className="text-[19px] text-white">
                  <FaDatabase />
                </span>
                <span className="text-[15px]">Catalog</span>
              </div>
              <div>
                {derouler ? (
                  <MdKeyboardArrowUp className="text-xl" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl" />
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
              {derouler && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 overflow-hidden"
                >
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Product List</Link>
                  </li>
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Product</Link>
                  </li>
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Category List</Link>
                  </li>
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Category</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className="font-sans font-semibold capitalize text-[14px] flex flex-col gap-4 text-white">
            <div
              className="flex flex-row justify-between items-center w-full cursor-pointer"
              onClick={() => setderoulerUser(!deroulerUser)}
            >
              <div className="flex flex-row gap-2.5 items-center w-full">
                <span className="text-[19px] text-white">
                  <LuUserRound />
                </span>
                <span className="text-[15px]">Customers</span>
              </div>
              <div>
                {deroulerUser ? (
                  <MdKeyboardArrowUp className="text-xl" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl" />
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
              {deroulerUser && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 overflow-hidden"
                >
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Customers List</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className="font-sans font-semibold capitalize text-[14px] flex flex-col gap-4 text-white">
            <div
              className="flex flex-row justify-between items-center w-full cursor-pointer"
              onClick={() => setderoulerOrder(!deroulerOrder)}
            >
              <div className="flex flex-row gap-2.5 items-center w-full">
                <span className="text-[19px] text-white">
                  <FaShoppingCart />
                </span>
                <span className="text-[15px]">Order</span>
              </div>
              <div>
                {deroulerOrder ? (
                  <MdKeyboardArrowUp className="text-xl" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl" />
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
              {deroulerOrder && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 overflow-hidden"
                >
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Order List</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className="font-sans font-semibold capitalize text-[14px] flex flex-col gap-4 text-white">
            <div
              className="flex flex-row justify-between items-center w-full cursor-pointer"
              onClick={() => setderoulerComment(!deroulerComment)}
            >
              <div className="flex flex-row gap-2.5 items-center w-full">
                <span className="text-[19px] text-white">
                  <IoChatbubbleEllipsesOutline />
                </span>
                <span className="text-[15px]">Comments</span>
              </div>
              <div>
                {deroulerComment ? (
                  <MdKeyboardArrowUp className="text-xl" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl" />
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
              {deroulerComment && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 overflow-hidden"
                >
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Comments List</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          </div>
          <div className="px-4 flex flex-col gap-4 border-b-[1px] border-gray-700 pb-6">
          <li className="font-sans font-semibold capitalize text-[14px] flex flex-col gap-4 text-white">
            <div
              className="flex flex-row justify-between items-center w-full cursor-pointer"
              onClick={() => setDeroulerAuthentify(!DeroulerAuthentify)}
            >
              <div className="flex flex-row gap-2.5 items-center w-full">
                <span className="text-[19px] text-white">
                  <GrSecure />
                </span>
                <span className="text-[15px]">Authentification</span>
              </div>
              <div>
                {DeroulerAuthentify ? (
                  <MdKeyboardArrowUp className="text-xl" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl" />
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
              {DeroulerAuthentify && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4 overflow-hidden"
                >
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Sign In</Link>
                  </li>
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Sign Up</Link>
                  </li>
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Forgot Password</Link>
                  </li>
                  <li className="ml-7 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/"}>Reset Password</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className="font-sans font-semibold text-white capitalize text-[12px] flex flex-col gap-5">
            <ul className="flex flex-col">
              <li className=" flex flex-col gap-3 ">
                <div className="flex flex-row gap-2.5 items-center w-full">
                  {" "}
                  <span>
                    <FaQ  className="text-xl" />
                  </span>{" "}
                  <span className="text-[15px] cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/tableaudeboard"}>FAQs</Link>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li className="font-sans font-semibold text-white capitalize text-[12px] flex flex-col gap-5">
            <ul className="flex flex-col">
              <li className=" flex flex-col gap-3 ">
                <div className="flex flex-row gap-2.5 items-center w-full">
                  {" "}
                  <span>
                    <MdSecurity className="text-xl"  />
                  </span>{" "}
                  <span className="text-[15px] cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/tableaudeboard"}>Terms And Conditions</Link>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li className="font-sans font-semibold text-white capitalize text-[12px] flex flex-col gap-5">
            <ul className="flex flex-col">
              <li className=" flex flex-col gap-3 ">
                <div className="flex flex-row gap-2.5 items-center w-full">
                  {" "}
                  <span>
                    <FiHelpCircle className="text-xl"  />
                  </span>{" "}
                  <span className="text-[15px] cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/tableaudeboard"}>Help Center</Link>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li className="font-sans font-semibold text-white capitalize text-[12px] flex flex-col gap-5">
            <ul className="flex flex-col">
              <li className=" flex flex-col gap-3 ">
                <div className="flex flex-row gap-2.5 items-center w-full">
                  {" "}
                  <span>
                    <IoSettings className="text-xl"  />
                  </span>{" "}
                  <span className="text-[15px] cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                    <Link to={"/tableaudeboard"}>Setting</Link>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
