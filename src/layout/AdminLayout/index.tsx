import React, { useState } from "react";
import SideBar from "./partLeft/sidebar.js";
import { Outlet } from "react-router";
import Header from "./Header.js";
import Footer from "./Footer.js";

const AdminLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleSidebar = () => {
    setIsOpen((previousValue)=>!previousValue);
  }

  return (
    <div className="flex flex-row w-full">
      <SideBar isOpen={isOpen} />
      <div className={`flex flex-col overflow-y-auto ${isOpen ? "w-[80%]" : "w-full"} h-screen`}>
          <Header toggleSidebar = {handleToggleSidebar}/>
          <div className=" w-full p-4 bg-gray-100 ">
            <Outlet context={{isOpen}} />
          </div>
          <Footer/>
         </div>
    </div>
  );
};

export default AdminLayout
