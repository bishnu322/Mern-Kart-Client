import logo from "../../../assets/logo.png";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div className="h-full w-full ">
      <div className="flex items-center p-2  gap-1 ">
        <img src={logo} alt="logo" className="w-10" />
        <h1 className="text-xl font-semibold text-red-600">Welcome Shringar</h1>
      </div>
      <SidebarLinks />
    </div>
  );
};

export default Sidebar;
