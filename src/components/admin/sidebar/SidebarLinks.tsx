import { MdOutlineDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { PiUsersThreeBold } from "react-icons/pi";
import { RiListCheck3 } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiStamper } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";

const SidebarLinks = () => {
  const location = useLocation();

  const isActive = location.pathname;
  const links = [
    {
      label: "Dashboard",
      link: "/admin",
      icon: <MdOutlineDashboard />,
    },
    {
      label: "Brands",
      link: "/admin/brand",
      icon: <GiStamper />,
    },
    {
      label: "Category",
      link: "/admin/category",
      icon: <IoPricetagsOutline />,
    },
    {
      label: "Products",
      link: "/admin/product",
      icon: <MdOutlineShoppingBag />,
    },
    {
      label: "Orders",
      link: "/admin/orders",
      icon: <RiListCheck3 />,
    },
    {
      label: "Users",
      link: "/admin/user",
      icon: <PiUsersThreeBold />,
    },
  ];
  return (
    <div>
      {links.map((items) => (
        <Link
          to={items.link}
          key={items.link}
          className={`flex items-center mt-2 p-2 gap-2 mx-3 font-semibold text-lg rounded hover:bg-violet-500 hover:text-white transition-all duration-200 ${
            isActive === items.link ? "bg-violet-600 text-white" : ""
          }`}
        >
          <div>{items.icon}</div>
          <div>{items.label}</div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
