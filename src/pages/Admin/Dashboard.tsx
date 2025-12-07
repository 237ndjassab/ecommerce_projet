import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { Link, useOutletContext } from "react-router";
type OutletContext = {
  isOpen?: boolean;
};
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

type DataItem = { name: string; users: number };

const Dashboard = () => {
  const data: DataItem[] = [
    { name: "Jan", users: 300 },
    { name: "Feb", users: 500 },
    { name: "Mar", users: 400 },
    { name: "Apr", users: 600 },
    { name: "May", users: 700 },
    { name: "Jun", users: 500 },
    { name: "Jul", users: 800 },
    { name: "Aug", users: 600 },
    { name: "Sep", users: 700 },
    { name: "Oct", users: 900 },
    { name: "Nov", users: 800 },
    { name: "Dec", users: 1000 },
  ];

  const { isOpen } = useOutletContext<OutletContext>();
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-full w-full">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="font-medium text-2xl ">Dashboard</h1>
          <div className="flex flex-row gap-2">
            <div className=" bg-white border-[1px] border-gray-300 cursor-pointer px-2.5 py-1.5  hover:shadow-md text-base rounded-xs flex flex-row justify-center items-center">
              <p>{date}</p>
            </div>
            <div className="text-gray-100 border-[1px] border-gray-300 bg-[#d62243] px-3.5 py-2 text-base rounded-xs cursor-pointer hover:bg-[#d62243]/70 hover:shadow-md transition-all duration-300 ease-in-out">
              <p>Export</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4">
          <div className="w-full cursor-pointer flex flex-col gap-3.5 items-center p-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-[#d62243] text-[14px]">Total sells</p>
              <div className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <SlOptionsVertical />
              </div>
            </div>
            <div
              className={`flex ${
                isOpen ? "flex-col h-full" : "flex-row h-fit"
              } justify-between w-full `}
            >
              <div className="flex flex-col items-center">
                <p className="font-semibold text-3xl">$3799.00</p>
              </div>
              <div
                className={`w-full flex flex-col ${
                  isOpen
                    ? " justify-between items-center h-full gap-3 "
                    : "items-end "
                } `}
              >
                <div className="flex flex-row gap-1 items-center text-green-600">
                  <FaArrowTrendUp />
                  <p>34.7%</p>
                </div>
                <p className="text-[#d62243] text-[14px]">
                  Compared to April 2021
                </p>
              </div>
            </div>
          </div>
          <div className="w-full cursor-pointer flex flex-col gap-3.5 items-center p-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-[#d62243] text-[14px]">Average order value</p>
              <div className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <SlOptionsVertical />
              </div>
            </div>
            <div
              className={`flex ${
                isOpen ? "flex-col h-full" : "flex-row h-fit"
              } justify-between w-full `}
            >
              <div className="flex flex-col items-center">
                <p className="font-semibold text-3xl">$272.98</p>
              </div>
              <div
                className={`w-full flex flex-col ${
                  isOpen
                    ? " justify-between items-center h-full gap-3 "
                    : "items-end "
                } `}
              >
                <div className="flex flex-row gap-1 items-center text-red-600">
                  <FaArrowTrendDown />
                  <p>12.0%</p>
                </div>
                <p className="text-[#d62243] text-[14px]">
                  Compared to April 2021
                </p>
              </div>
            </div>
          </div>
          <div className="w-full cursor-pointer flex flex-col gap-3.5 items-center p-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-[#d62243] text-[14px]">Total orders</p>
              <div className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <SlOptionsVertical />
              </div>
            </div>
            <div
              className={`flex ${
                isOpen ? "flex-col h-full" : "flex-row h-fit"
              } justify-between w-full `}
            >
              <div className="flex flex-col items-center">
                <p className="font-semibold text-3xl">$578</p>
              </div>
              <div
                className={`w-full flex flex-col ${
                  isOpen
                    ? " justify-between items-center h-full gap-3 "
                    : "items-end "
                } `}
              >
                <div className="flex flex-row gap-1 items-center text-green-600">
                  <FaArrowTrendUp />
                  <p>27.9%</p>
                </div>
                <p className="text-[#d62243] text-[14px]">
                  Compared to April 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4">
          <div className="w-[32.5%]  cursor-pointer flex flex-col gap-3.5 p-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-[#d62243] text-[14px]">Active users</p>
              <div className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <SlOptionsVertical />
              </div>
            </div>
            <div className="flex flex-row justify-center shadow-md items-center bg-gray-100 rounded-xs h-16">
              <span className="text-gray-700 text-2xl">146</span>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
              <p className="text-gray-400 text-[12px]">Active pages</p>
              <div className="text-gray-400 cursor-pointer">
                <p className="text-gray-400 text-[12px]">Users</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
              <p className="text-gray-700 text-[12px]">
                <Link to={"/product"}>/products</Link>
              </p>
              <div className="text-gray-400 cursor-pointer">
                <p className="text-gray-400 text-[12px]">15</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
              <p className="text-gray-700 text-[12px]">
                <Link to={"/categorie"}>/categories/phone</Link>
              </p>
              <div className="text-gray-400 cursor-pointer">
                <p className="text-gray-400 text-[12px]">11</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
              <p className="text-gray-700 text-[12px]">
                <Link to={"/categorie"}>/categories/desktop</Link>
              </p>
              <div className="text-gray-400 cursor-pointer">
                <p className="text-gray-400 text-[12px]">7</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
              <p className="text-gray-700 text-[12px]">
                <Link to={"/blog"}>/blog</Link>
              </p>
              <div className="text-gray-400 cursor-pointer">
                <p className="text-gray-400 text-[12px]">4</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
              <p className="text-gray-700 text-[12px]">
                <Link to={"/checkout"}>/checkout</Link>
              </p>
              <div className="text-gray-400 cursor-pointer">
                <p className="text-gray-400 text-[12px]">3</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
              <p className="text-gray-700 text-[12px]">
                <Link to={"/about"}>/about-us</Link>
              </p>
              <div className="text-gray-400 cursor-pointer">
                <p className="text-gray-400 text-[12px]">3</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
              <p className="text-gray-700 text-[12px]">
                <Link to={"/contact"}>/contact</Link>
              </p>
              <div className="text-gray-400 cursor-pointer">
                <p className="text-gray-400 text-[12px]">3</p>
              </div>
            </div>
          </div>
          <div className="w-[67.5%] bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">Sales Overview</h2>

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  bottom: 50, // Le padding bottom
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  angle={0}
                />
                <YAxis tick={{ fontSize: 12 }} tickLine={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-[100%]  cursor-pointer flex flex-col gap-3.5 p-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-[#d62243] text-[14px]">Recent orders</p>
            <div className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
              <SlOptionsVertical />
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%]">
              <p className="text-gray-600 font-semibold text-[12px]">No.</p>
            </div>
            <div className="cursor-pointer w-[15%]">
              <p className="text-gray-600 font-semibold text-[12px]">Status</p>
            </div>
            <div className="cursor-pointer w-[5%]">
              <p className="text-gray-600 font-semibold text-[12px]">Co.</p>
            </div>
            <div className="cursor-pointer w-[35%]">
              <p className="text-gray-600 font-semibold text-[12px]">
                Customer
              </p>
            </div>
            <div className="cursor-pointer w-[15%]">
              <p className="text-gray-600 font-semibold text-[12px]">Date</p>
            </div>
            <div className="cursor-pointer w-[15%]">
              <p className="text-gray-600 font-semibold text-[12px]">Total</p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-900 font-medium text-[13px]">#00745</p>
            </div>
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-blue-600 font-medium text-[12px] bg-blue-300 rounded-md p-0.5 w-fit">
                Pending
              </p>
            </div>
            {/* le pays du users si besoin */}
            <div className="cursor-pointer w-[5%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Italy
              </p>
            </div>
            {/* les informations sur les users :
               la premiere div p contient les intiales du firstName et LastName du user
                la deuxieme div p contient le fullName du user */}
            <div className="cursor-pointer w-[35%] flex flex-row items-center gap-2">
              <p className="text-gray-600 font-medium text-[12px] bg-gray-300 rounded-full p-1 w-fit">
                CB
              </p>
              <p className="text-gray-600 font-medium text-[14px] hover:underline">
                Giordano Bruno
              </p>
            </div>
            {/* dans cette div, on aura la date de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                2020-11-02
              </p>
            </div>
            {/* ici on aura le total du prix a payer de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">$2,742.00</p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-900 font-medium text-[13px]">#00513</p>
            </div>
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-orange-600 font-medium text-[12px] bg-orange-300 rounded-md p-0.5 w-fit">
                Hold
              </p>
            </div>
            {/* le pays du users si besoin */}
            <div className="cursor-pointer w-[5%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Italy
              </p>
            </div>
            {/* les informations sur les users :
               la premiere div p contient les intiales du firstName et LastName du user
                la deuxieme div p contient le fullName du user */}
            <div className="cursor-pointer w-[35%] flex flex-row items-center gap-2">
              <p className="text-gray-600 font-medium text-[12px] bg-gray-300 rounded-full p-1 w-fit">
                HW
              </p>
              <p className="text-gray-600 font-medium text-[14px] hover:underline">
                Hans Weber
              </p>
            </div>
            {/* dans cette div, on aura la date de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                2020-09-05
              </p>
            </div>
            {/* ici on aura le total du prix a payer de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">$204.00</p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-900 font-medium text-[13px]">#00507</p>
            </div>
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-blue-600 font-medium text-[12px] bg-blue-300 rounded-md p-0.5 w-fit">
                Pending
              </p>
            </div>
            {/* le pays du users si besoin */}
            <div className="cursor-pointer w-[5%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Italy
              </p>
            </div>
            {/* les informations sur les users :
               la premiere div p contient les intiales du firstName et LastName du user
                la deuxieme div p contient le fullName du user */}
            <div className="cursor-pointer w-[35%] flex flex-row items-center gap-2">
              <p className="text-gray-600 font-medium text-[12px] bg-gray-300 rounded-full p-1 w-fit">
                AR
              </p>
              <p className="text-gray-600 font-medium text-[14px] hover:underline">
                Andrea Rossi
              </p>
            </div>
            {/* dans cette div, on aura la date de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                {" "}
                2020-08-21
              </p>
            </div>
            {/* ici on aura le total du prix a payer de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">$5,039.00</p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-900 font-medium text-[13px]">#00104</p>
            </div>
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-red-600 font-medium text-[12px] bg-red-300 rounded-md p-0.5 w-fit">
                Canceled
              </p>
            </div>
            {/* le pays du users si besoin */}
            <div className="cursor-pointer w-[5%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Italy
              </p>
            </div>
            {/* les informations sur les users :
               la premiere div p contient les intiales du firstName et LastName du user
                la deuxieme div p contient le fullName du user */}
            <div className="cursor-pointer w-[35%] flex flex-row items-center gap-2">
              <p className="text-gray-600 font-medium text-[12px] bg-gray-300 rounded-full p-1 w-fit">
                RF
              </p>
              <p className="text-gray-600 font-medium text-[14px] hover:underline">
                Richard Feynman
              </p>
            </div>
            {/* dans cette div, on aura la date de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                {" "}
                2020-06-22
              </p>
            </div>
            {/* ici on aura le total du prix a payer de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">$79.00</p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-900 font-medium text-[13px]">#00097</p>
            </div>
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Completed
              </p>
            </div>
            {/* le pays du users si besoin */}
            <div className="cursor-pointer w-[5%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Italy
              </p>
            </div>
            {/* les informations sur les users :
               la premiere div p contient les intiales du firstName et LastName du user
                la deuxieme div p contient le fullName du user */}
            <div className="cursor-pointer w-[35%] flex flex-row items-center gap-2">
              <p className="text-gray-600 font-medium text-[12px] bg-gray-300 rounded-full p-1 w-fit">
                LG
              </p>
              <p className="text-gray-600 font-medium text-[14px] hover:underline">
                Leonardo Garcia
              </p>
            </div>
            {/* dans cette div, on aura la date de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                {" "}
                2020-05-09
              </p>
            </div>
            {/* ici on aura le total du prix a payer de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]"> $826.00</p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-900 font-medium text-[13px]">#00082</p>
            </div>
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Completed
              </p>
            </div>
            {/* le pays du users si besoin */}
            <div className="cursor-pointer w-[5%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Italy
              </p>
            </div>
            {/* les informations sur les users :
               la premiere div p contient les intiales du firstName et LastName du user
                la deuxieme div p contient le fullName du user */}
            <div className="cursor-pointer w-[35%] flex flex-row items-center gap-2">
              <p className="text-gray-600 font-medium text-[12px] bg-gray-300 rounded-full p-1 w-fit">
                NT
              </p>
              <p className="text-gray-600 font-medium text-[14px] hover:underline">
                Nikola Tesla
              </p>
            </div>
            {/* dans cette div, on aura la date de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                {" "}
                2020-04-27
              </p>
            </div>
            {/* ici on aura le total du prix a payer de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                {" "}
                $1,052.00
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-900 font-medium text-[13px]">#00063</p>
            </div>
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-blue-600 font-medium text-[12px] bg-blue-300 rounded-md p-0.5 w-fit">
                Pending
              </p>
            </div>
            {/* le pays du users si besoin */}
            <div className="cursor-pointer w-[5%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Italy
              </p>
            </div>
            {/* les informations sur les users :
               la premiere div p contient les intiales du firstName et LastName du user
                la deuxieme div p contient le fullName du user */}
            <div className="cursor-pointer w-[35%] flex flex-row items-center gap-2">
              <p className="text-gray-600 font-medium text-[12px] bg-gray-300 rounded-full p-1 w-fit">
                MC
              </p>
              <p className="text-gray-600 font-medium text-[14px] hover:underline">
                Marie Curie
              </p>
            </div>
            {/* dans cette div, on aura la date de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                {" "}
                2020-02-09
              </p>
            </div>
            {/* ici on aura le total du prix a payer de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]"> $441.00</p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between py-2 border-b-[1px] border-b-gray-200">
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-900 font-medium text-[13px]">#00012</p>
            </div>
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Completed
              </p>
            </div>
            {/* le pays du users si besoin */}
            <div className="cursor-pointer w-[5%] flex flex-row items-center">
              <p className="text-green-600 font-medium text-[12px] bg-green-300 rounded-md p-0.5 w-fit">
                Italy
              </p>
            </div>
            {/* les informations sur les users :
               la premiere div p contient les intiales du firstName et LastName du user
                la deuxieme div p contient le fullName du user */}
            <div className="cursor-pointer w-[35%] flex flex-row items-center gap-2">
              <p className="text-gray-600 font-medium text-[12px] bg-gray-300 rounded-full p-1 w-fit">
                KT
              </p>
              <p className="text-gray-600 font-medium text-[14px] hover:underline">
                Konstantin Tsiolkovsky
              </p>
            </div>
            {/* dans cette div, on aura la date de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                {" "}
                2020-01-01
              </p>
            </div>
            {/* ici on aura le total du prix a payer de la commande */}
            <div className="cursor-pointer w-[15%] flex flex-row items-center">
              <p className="text-gray-600 font-medium text-[14px]">
                {" "}
                $12,961.00
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row gap-4">
          <div className="w-full cursor-pointer flex flex-col gap-3.5 items-center p-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-[#d62243] text-[14px]">Recent activity</p>
              <div className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <SlOptionsVertical />
              </div>
            </div>
            <div className="flex flex-row  gap-4 w-full">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#1a1a2b]"></div>
                <div className="h-full w-0.25 bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 text-[14px]">Yesterday</p>
                <p className="text-[15px]">
                  Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae
                  sodales in, maximus ut lectus. Vivamus commodo scelerisque
                  lacus, at porttitor dui iaculis id.{" "}
                  <Link to="/" className="text-[#d62243] hover:underline">
                    Curabitur imperdiet ultrices fermentum.
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-row  gap-4 w-full">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#1a1a2b]"></div>
                <div className="h-full w-0.25 bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 text-[14px]">5 days ago</p>
                <p className="text-[15px]">
                  Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula{" "}
                  <Link to="/" className="text-[#d62243] hover:underline">
                    Curabitur imperdiet ultrices fermentum.
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-row  gap-4 w-full">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#1a1a2b]"></div>
                <div className="h-full w-0.25 bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 text-[14px]">March 27</p>
                <p className="text-[15px]">
                  Donec tempor sapien et fringilla facilisis. Nam maximus
                  consectetur diam.
                </p>
              </div>
            </div>
            <div className="flex flex-row  gap-4 w-full">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#1a1a2b]"></div>
                <div className="h-full w-0.25 bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 text-[14px]">November 30</p>
                <p className="text-[15px]">
                  Many philosophical debates that began in ancient times are
                  still debated today. In one general sense, philosophy is
                  associated with wisdom, intellectual culture and a search for
                  knowledge.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full cursor-pointer flex flex-col gap-3.5 items-center p-5 border-[1px] border-gray-100 shadow-md rounded-xs bg-white hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="w-full border-b-[1px] border-b-gray-300 pb-3 flex flex-row items-center justify-between">
              <p className="text-[#d62243] text-[14px]">Recent reviews</p>
              <div className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <SlOptionsVertical />
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-[10%]"></div>
              <div className="flex flex-col gap-2 w-[65%]">
                <p className="text-[#1a1a2b] text-[14px] hover:underline">Wiper Blades Brandix WL2</p>
                <p className="text-gray-400 text-[12px]">Reviewed by Ryan Ford</p>
              </div>
              <div className="w-[25%] flex flex-row gap-1 text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-gray-200" />
                <FaStar className="inline-block text-gray-200" />
                <FaStar className="inline-block text-gray-200" />
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-[10%]"></div>
              <div className="flex flex-col gap-2 w-[65%]">
                <p className="text-[#1a1a2b] text-[14px] hover:underline">Electric Planer Brandix KL370090G 300 Watts</p>
                <p className="text-gray-400 text-[12px]">Reviewed by Adam Taylor</p>
              </div>
              <div className="w-[25%] flex flex-row gap-1 text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-gray-200" />
                <FaStar className="inline-block text-gray-200" />
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-[10%]"></div>
              <div className="flex flex-col gap-2 w-[65%]">
                <p className="text-[#1a1a2b] text-[14px] hover:underline">Water Tap</p>
                <p className="text-gray-400 text-[12px]">Reviewed by Jessica Moore</p>
              </div>
              <div className="w-[25%] flex flex-row gap-1 text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-gray-200" />
                <FaStar className="inline-block text-gray-200" />
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-[10%]"></div>
              <div className="flex flex-col gap-2 w-[65%]">
                <p className="text-[#1a1a2b] text-[14px] hover:underline">Brandix Router Power Tool 2017ERXPK</p>
                <p className="text-gray-400 text-[12px]">Reviewed by Helena Garcia</p>
              </div>
              <div className="w-[25%] flex flex-row gap-1 text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-gray-200" />
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-[10%]"></div>
              <div className="flex flex-col gap-2 w-[65%]">
                <p className="text-[#1a1a2b] text-[14px] hover:underline">Undefined Tool IRadix DPS3000SY 2700 Watts</p>
                <p className="text-gray-400 text-[12px]">Reviewed by Ryan Ford</p>
              </div>
              <div className="w-[25%] flex flex-row gap-1 text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-gray-200" />
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-[10%]"></div>
              <div className="flex flex-col gap-2 w-[65%]">
                <p className="text-[#1a1a2b] text-[14px] hover:underline">Brandix Screwdriver SCREW150</p>
                <p className="text-gray-400 text-[12px]">Reviewed by Charlotte Jones</p>
              </div>
              <div className="w-[25%] flex flex-row gap-1 text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2">
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-yellow-400" />
                <FaStar className="inline-block text-gray-200" />
                <FaStar className="inline-block text-gray-200" />
                <FaStar className="inline-block text-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
