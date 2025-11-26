import React from "react";
import SideBar from "./partLeft/sidebar.js";
import PartRightContent from "./partRight/PartRightContent.js";

const AdminLayout = () => {
  return (
    <div className="flex flex-row w-full">
      <SideBar />
      <PartRightContent />
    </div>
  );
};

export default AdminLayout
