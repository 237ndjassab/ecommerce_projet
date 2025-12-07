import React from "react";
import { Link } from "react-router";
import logo from "../../assets/entryThemepreview.png";
import imgfin from "../../assets/imgfin.png";
import { FaLocationArrow } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
const Footer = () => {
  const information = [
    "Privacy Policy",
    "Delivery time",
    "Shipping",
    "Taxes",
    "Terms of service",
  ];
  const customer = ["About us", "Galery", "Account", "Wishlist"];
  const contact = ["Contact us", "Faq", "Store Location", "Support 24/7"];
  return (
    <div>
      <div className="flex flex-row justify-between bg-gray-950 text-white py-14 px-8 border-b-1 border-gray-300">
        <div className="flex flex-col gap-5">
          <div className="flex items-center">
            <img src={logo} alt="logo du site web de ecommerce" />{" "}
          </div>
          <p className="text-[14px] text-gray-400">
            5611 Wellington Road, Suite 115, Gainesville
          </p>
          <h2 className="text-white text-2xl">(84) 943 446 000</h2>
          <p className="text-[14px] text-gray-400">
            <Link to="goeasyappvn@gmail.com">goeasyappvn@gmail.com</Link>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[18px]">Information</h1>
          <ul>
            {information.map((info, index) => (
              <li
                key={index}
                className="text-[14px] text-gray-400 my-3 hover:text-white cursor-pointer hover:translate-x-2 transition-all duration-500 ease-in-out "
              >
                {" "}
                <Link to={info}>{info}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[18px]">Customer services</h1>
          <ul>
            {customer.map((info, index) => (
              <li
                key={index}
                className="text-[14px] text-gray-400 my-3 hover:text-white cursor-pointer hover:translate-x-2 transition-all duration-500 ease-in-out "
              >
                {" "}
                <Link to={info}>{info}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[18px]">Contact us</h1>
          <ul>
            {contact.map((info, index) => (
              <li
                key={index}
                className="text-[14px] text-gray-400 my-3 hover:text-white cursor-pointer hover:translate-x-2 transition-all duration-500 ease-in-out "
              >
                {" "}
                <Link to={info}>{info}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[18px]">
            Join our newsletter and get $50 <br /> discount for your first order
          </h1>
          <form
            action=""
            className="flex flex-row gap-2 border border-gray-400 rounded-full px-2 py-1 items-center"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md outline-none text-white"
            />
            <button className="rounded-full border-0 p-1.5 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              <FaLocationArrow />
            </button>
          </form>
          <div className="flex flex-row gap-3">
            <button className="rounded-full border-0 p-3 text-black bg-white hover:bg-black hover:text-white transition-all duration-200 ease-in-out">
              <FiFacebook />
            </button>
            <button className="rounded-full border-0 p-3 text-black bg-white hover:bg-black hover:text-white transition-all duration-200 ease-in-out">
              <PiTiktokLogo />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 bg-gray-950 text-white py-14 px-8">
        <p className="text-[14px] text-gray-400">
          <Link to="#">Sl Entry Theme</Link> © 2025 Demo Store. All Rights
          Reserved. Designed by <Link to="Smartaddons">Smartaddons</Link>
        </p>
        <div>
          <img src={imgfin} alt="image de fin de page" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
import { MdArrowOutward } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import logo from "../../assets/images/logo.png";
import img1 from "../../assets/images/img-1.png";

const Footer =()=> {
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    target.classList.remove("bg-white", "text-black");
    target.classList.add("bg-black", "text-white");
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    target.classList.remove("bg-black", "text-white");
    target.classList.add("bg-white", "text-black");

    setTimeout(() => {
      target.classList.remove("text-pink-500");
      target.classList.add("text-black");
    }, 200);
  };

  return (
    <section className="bg-[#1f2329] ">
        <div className="bg-[#15181c] grid grid-cols-4 gap-8 px-8 py-16">
            <div className="flex flex-col gap-4 col-span-1">
                <div><img src={logo} alt="" className="mb-6" /></div>
                <p className="text-[#878787] text-sm">5611 Wellington Road, Suite 115, Gainesville</p>
                <p className="text-2xl text-white font-medium tracking-wider">(84) 943 446 000</p>
                <a href="#" className="text-[#878787] text-sm underline">goeasyappvn@gmail.com</a>
            </div>
            <div className="flex justify-between gap-16 col-span-2 mr-20">
                <div className="flex flex-col text-sm gap-1.5">
                    <p className="text-white font-medium text-lg mb-8">Information</p>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Privacy Policy</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Delivery time</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Shipping</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Taxes</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Terms of service</a>
                </div>
                <div className="flex flex-col text-sm gap-1.5">
                    <p className="text-white font-medium text-lg mb-8">Customer Services</p>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">About us</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Galery</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Account</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Wishlist</a>
                </div>
                <div className="flex flex-col text-sm gap-1.5">
                    <p className="text-white font-medium text-lg mb-8">Contact Us</p>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Contact us</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Faq</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Store Location</a>
                    <a href="#" className="text-[#878787] hover:text-white hover:translate-x-2 transition-all duration-150">Support 24/7</a>
                </div>
            </div>
            <div className="col-span-1">
                <p className="text-white font-medium text-lg mb-8">Join our newsletter and get $50 Discount for your first order</p>
                <div className="flex items-center justify-between px-6 py-3 border border-[#373a3d] rounded-full">
                    <input type="text" placeholder="Enter your email" name="" id="" className="outline-none placeholder:text-[#878787] placeholder:text-sm"/>
                    <MdArrowOutward className="text-white"/>
                </div>
                <div className="mt-4 flex gap-3">
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-150"><FiFacebook /></div>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-150"><PiTiktokLogo /></div>
                </div>
            </div>
        </div>
        <div className="bg-[#15181c] border border-[#373a3d] flex flex-col justify-center items-center gap-6 py-8">
            <p className="text-[#878787] text-sm">Sl Entry Theme © 2025 Demo Store. All Rights Reserved. Designed by Smartaddons</p>
            <div>
                <div><img src={img1} alt="" /></div>
            </div>
        </div>       
    </section>
  );
} 


export default Footer;
