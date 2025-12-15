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
