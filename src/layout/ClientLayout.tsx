import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header";

const ClientLayout = () => {
  return (
    <main className="h-screen w-full flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Optional Footer (fixed at bottom) */}
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </main>
  );
};

export default ClientLayout;
