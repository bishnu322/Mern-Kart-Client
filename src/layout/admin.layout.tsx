import { Outlet } from "react-router";
import Sidebar from "../components/admin/sidebar";
import AdminHeader from "../components/admin/header/AdminHeader";
import { useState, useEffect } from "react";
import { withAuth } from "../hoc/with.auth.hoc";
import { allAdmin } from "../types/global.types";

const AdminLayout = () => {
  const [toggleMenuBar, setToggleMenuBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // auto-toggle sidebar based on viewport width: show on desktop (>=768px), hide on smaller screens
  useEffect(() => {
    if (typeof window === "undefined") return;

    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // default: show sidebar on desktop, hide on mobile
      setToggleMenuBar(!mobile);
    };

    // run once to set initial state
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main className="h-screen flex">
      {/* sidebar */}
      {/* On mobile: when sidebar is open we render it as a fixed overlay and hide the outlet */}
      {isMobile && toggleMenuBar ? (
        <>
          {/* full-screen sidebar overlay on mobile */}
          <div className="fixed inset-0 z-50 bg-white overflow-auto">
            <Sidebar setToggleMenuBar={setToggleMenuBar} />
          </div>
          {/* backdrop (kept for accessibility/fade; clicking it closes the menu) */}
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setToggleMenuBar(false)}
          />
        </>
      ) : (
        // Desktop layout (or mobile when closed)
        <>
          {toggleMenuBar && (
            <div className="w-[250px] border-r border-gray-300">
              <Sidebar setToggleMenuBar={setToggleMenuBar} />
            </div>
          )}

          {/* nav & outlet */}
          <div className="flex-1 flex-col overflow-auto">
            <div className="border-b  mb-3 shadow border-gray-300 ">
              <AdminHeader setToggleMenuBar={setToggleMenuBar} />
            </div>

            <div className="px-4 py-2 flex-1">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

const AdminLayoutWithAuth = withAuth(AdminLayout, allAdmin);

export default AdminLayoutWithAuth;
