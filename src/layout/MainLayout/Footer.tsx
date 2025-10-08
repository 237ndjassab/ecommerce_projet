import React from 'react'
import { Link } from 'react-router';
import logo from '../../assets/entryThemepreview.png';
import imgfin from '../../assets/imgfin.png';
import { FaLocationArrow } from 'react-icons/fa6';
import { FiFacebook } from 'react-icons/fi';
import { PiTiktokLogo } from 'react-icons/pi';
const Footer = () => {
  const information = ["Privacy Policy","Delivery time","Shipping","Taxes","Terms of service"];
  const customer = ["About us","Galery","Account","Wishlist"];
  const contact = ["Contact us","Faq","Store Location","Support 24/7"];
  return (
    <div>
      <div className='flex flex-row justify-between bg-gray-950 text-white py-14 px-8 border-b-1 border-gray-300'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center'><img src={logo} alt="logo du site web de ecommerce" /> </div>
          <p className='text-[14px] text-gray-400'>5611 Wellington Road, Suite 115, Gainesville</p>
          <h2 className='text-white text-2xl'>(84) 943 446 000</h2>
          <p className='text-[14px] text-gray-400'><Link to="goeasyappvn@gmail.com">goeasyappvn@gmail.com</Link></p>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-[18px]'>Information</h1>
          <ul>
            {information.map((info,index)=>(
              <li key={index} className='text-[14px] text-gray-400 my-3 hover:text-white cursor-pointer hover:translate-x-2 transition-all duration-500 ease-in-out '> <Link to = {info}>{info}</Link> </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-[18px]'>Customer services</h1>
          <ul>
            {customer.map((info,index)=>(
              <li key={index} className='text-[14px] text-gray-400 my-3 hover:text-white cursor-pointer hover:translate-x-2 transition-all duration-500 ease-in-out '> <Link to = {info}>{info}</Link> </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-[18px]'>Contact us</h1>
          <ul>
            {contact.map((info,index)=>(
              <li key={index} className='text-[14px] text-gray-400 my-3 hover:text-white cursor-pointer hover:translate-x-2 transition-all duration-500 ease-in-out '> <Link to = {info}>{info}</Link> </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-[18px]'>Join our newsletter and get $50 <br/> discount for your first order</h1>
          <form action="" className='flex flex-row gap-2 border border-gray-400 rounded-full px-2 py-1 items-center'>
            <input type="text" placeholder='Enter your email' className='px-4 py-2 rounded-md outline-none text-white'/>
            <button className='rounded-full border-0 p-1.5 hover:bg-white hover:text-black transition-all duration-300 ease-in-out'><FaLocationArrow/></button>
          </form>
          <div className="flex flex-row gap-3">
            <button className='rounded-full border-0 p-3 text-black bg-white hover:bg-black hover:text-white transition-all duration-200 ease-in-out'><FiFacebook /></button>
            <button className='rounded-full border-0 p-3 text-black bg-white hover:bg-black hover:text-white transition-all duration-200 ease-in-out'><PiTiktokLogo /></button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-7 bg-gray-950 text-white py-14 px-8'>
          <p className='text-[14px] text-gray-400'><Link to="#">Sl Entry Theme</Link> © 2025 Demo Store. All Rights Reserved. Designed by <Link to="Smartaddons">Smartaddons</Link></p>
          <div>
            <img src={imgfin} alt="image de fin de page" />
          </div>
      </div>
    </div>
  )
}

export default Footer