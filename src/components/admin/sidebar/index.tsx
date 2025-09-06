import logo from "../../../assets/mernKart.png";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div className="h-full w-full ">
      <div className="flex items-center p-2  gap-1 ">
        <img src={logo} alt="logo" className="w-20" />
        <h1 className="text-xl font-semibold text-violet-600">Mern-Kart</h1>
      </div>
      <SidebarLinks />
    </div>
  );
};

export default Sidebar;
