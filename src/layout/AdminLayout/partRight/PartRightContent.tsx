import React from 'react'
import Header from './Header.js'
import { Outlet } from 'react-router'
import Footer from './Footer.js'

const PartRightContent = () => {
  return (
   <div className='flex flex-col overflow-y-auto w-full h-screen'>
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default PartRightContent