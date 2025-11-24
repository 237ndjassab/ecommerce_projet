import React from 'react'
import { FaAngleRight } from 'react-icons/fa6';
import type { navProductsProps } from './typeProducts';
import { Link } from 'react-router';

const NavProducts = ({lien,souslien,product}:navProductsProps) => {
    const tabs = [lien,souslien];
  return (
    <div className='w-full flex flex-row justify-center items-center bg-gray-100/50 py-8 '>
        <ul className='flex flex-row gap-3 text-[14px] '>
            {tabs.map((tab,index)=>(
                <li key={index} className='text-black cursor-pointer'>{index == 0 ? <Link to={`/${tab.toLowerCase()}`}>{tab}</Link> : <Link to={`/${tab.toLowerCase()}`}>{tab}</Link>} <FaAngleRight className='inline-block mx-2'/></li>
            ))}
            <li className='text-gray-400'>{product}</li>
        </ul>
    </div>
  )
}

export default NavProducts