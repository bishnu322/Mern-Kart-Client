import { Link, useLocation } from "react-router";
import logo from "../../assets/mernKart.png";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const links: { label: string; link: string }[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Product",
    link: "/products",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between px-4 md:px-8 lg:px-36 items-center py-3">
        {/* logo */}
        <LogoSection />

        {/* navLink - Desktop */}
        <NavLinks className="hidden md:flex" />

        {/* icon section */}
        <IconSection />

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 border-t border-gray-200">
          <NavLinksMobile setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;

//! Logo section

const LogoSection = () => {
  return (
    <Link to="/" className="w-12 md:w-16 lg:w-[70px]">
      <img src={logo} alt="MERN Kart Logo" className="w-full" />
    </Link>
  );
};

//! NavLink section - Desktop

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

//! NavLink section - Mobile

const NavLinksMobile = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (isOpen: boolean) => void;
}) => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="flex flex-col space-y-3 mt-2">
      {links.map((items) => (
        <Link
          key={items.label}
          to={items.link}
          onClick={() => setIsMenuOpen(false)}
        >
          <span
            className={`block py-2 px-4 rounded-md text-md hover:bg-violet-50 transition-colors ${
              activePath === items.link
                ? "text-violet-600 bg-violet-50 font-semibold"
                : "text-gray-700"
            }`}
          >
            {items.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

//! icon section

const IconSection = () => {
  return (
    <div className="flex justify-between gap-4 md:gap-5 items-center">
      <Link
        to="/cart"
        className="p-2 text-gray-700 hover:text-violet-600 transition-colors"
      >
        <FaShoppingCart size={"20px"} />
      </Link>
      <Link
        to="/wishlist"
        className="p-2 text-gray-700 hover:text-violet-600 transition-colors"
      >
        <FaHeart size={"20px"} />
      </Link>
      <Link
        to="/profile"
        className="flex items-center gap-2 p-2 text-gray-700 hover:text-violet-600 transition-colors"
      >
        <FaUser size={"20px"} />
        <span className="hidden md:block font-semibold text-violet-700 text-md">
          Username
        </span>
      </Link>
    </div>
  );
};
