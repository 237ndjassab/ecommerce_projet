import React from "react";
import SideBar from "./partLeft/sidebar";
import PartRightContent from "./partRight/PartRightContent.jsx";

const AdminLayout = () => {
  return (
    <div className="flex flex-row w-full">
      <SideBar />
      <PartRightContent />
    </div>
  );
};

export default AdminLayout;
