import { Outlet } from "react-router";
import Sidebar from "../components/admin/sidebar";
import AdminHeader from "../components/admin/header/AdminHeader";

const AdminLayout = () => {
  return (
    <main className="h-screen flex">
      {/* sidebar */}
      <div className="w-[250px] border-r border-gray-300">
        <Sidebar />
      </div>

      {/* nav & outlet */}
      <div className="flex-1 h-full flex-col overflow-auto">
        <div className="border-b  mb-3 shadow border-gray-300">
          <AdminHeader />
        </div>

        <div className="h-full  px-4 py-2 flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
