import { Outlet } from "react-router";
import Sidebar from "../components/admin/sidebar";
import AdminHeader from "../components/admin/header/AdminHeader";
import { useState } from "react";

const AdminLayout = () => {
  const [toggleMenuBar, setToggleMenuBar] = useState(true);

  return (
    <main className="h-screen flex">
      {/* sidebar */}
      {toggleMenuBar && (
        <div className="w-[250px] border-r border-gray-300">
          <Sidebar />
        </div>
      )}

      {/* nav & outlet */}
      <div className="flex-1 h-full flex-col overflow-auto">
        <div className="border-b  mb-3 shadow border-gray-300">
          <AdminHeader setToggleMenuBar={setToggleMenuBar} />
        </div>

        <div className="h-full  px-4 py-2 flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
