import { FaTimes } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({
  setToggleMenuBar,
}: {
  setToggleMenuBar?: (v: boolean) => void;
}) => {
  return (
    <div className="w-full h-full ">
      <div className="flex items-center justify-between p-2  gap-1">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="text-xl font-semibold text-red-600">
            Welcome Shringar
          </h1>
        </div>

        {/* close button visible on small screens */}
        <button
          onClick={() => setToggleMenuBar && setToggleMenuBar(false)}
          className="p-2 text-gray-600 md:hidden hover:text-gray-800"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
      </div>
      <SidebarLinks />
    </div>
  );
};

export default Sidebar;
