import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/admin/sidebar";

const AdminLayout = () => {
  return (
    <main className="h-screen flex">
      {/* sidebar */}
      <div className="w-[250px] border-r border-gray-400">
        <Sidebar />
      </div>

      {/* nav & outlet */}
      <div className="flex-1 h-full flex-col overflow-auto">
        <div className="border-b h-15 mb-3 shadow border-gray-400">nav</div>

        <div className="h-full  p-2 flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
