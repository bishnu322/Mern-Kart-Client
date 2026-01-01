import { Link, useLocation } from "react-router";
import { links } from "./links";

const NavLinks = ({ className }: { className?: string }) => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className={`gap-5 font-semibold ${className}`}>
      {links.map((items) => (
        <Link key={items.label} to={items.link}>
          <span
            className={`text-md hover:text-violet-600 transition-colors ${
              activePath === items.link ? "text-violet-600" : "text-gray-700"
            }`}
          >
            {items.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
