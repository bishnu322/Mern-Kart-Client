import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header";

const ClientLayout = () => {
  return (
    <main className="h-full w-full">
      {/* header section */}
      <Header />

      {/* page content section */}
      <Outlet />

      {/* Footer section  */}
      <Footer />
    </main>
  );
};

export default ClientLayout;
