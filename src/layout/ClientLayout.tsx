import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header";

const ClientLayout = () => {
  return (
    <main className="flex flex-col w-full h-screen">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default ClientLayout;
