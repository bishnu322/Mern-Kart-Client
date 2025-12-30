/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../api/auth.api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth.context";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";

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
      <div className="flex justify-between px-4 md:px-8 lg:px-20 items-center py-3">
        {/* logo */}
        <LogoSection />

        {/* navLink - Desktop */}
        <NavLinks className="hidden md:flex" />

        {/* icon section (hidden on small screens; mobile auth will live in the menu) */}
        <IconSection className="hidden md:flex" />

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

  // local auth + logout handling for mobile menu
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (response: any) => {
      localStorage.removeItem("user");
      toast.success(response?.message ?? "logout successful");
      setUser(null);
      setIsMenuOpen(false);
      navigate("/");
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "logout failed");
    },
    mutationKey: ["logout_mutation_mobile"],
  });

  const get_user_data = (user: any) => `${user?.first_name} ${user?.last_name}`;

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

      {/* Auth area for mobile: show profile + logout or login */}
      <div className="pt-2 border-t mt-2">
        {user ? (
          <div className="flex items-center justify-between">
            <Link
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 px-4 block font-semibold text-violet-600"
            >
              {get_user_data(user)}
            </Link>

            <button
              onClick={() => mutate()}
              className="py-2 px-4 text-left text-gray-700 hover:text-violet-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 px-4 rounded-md text-md hover:bg-violet-50 text-gray-700 font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

//! icon section

const IconSection = ({ className }: { className?: string }) => {
  const { user } = useAuth();
  const { setUser } = useAuth();

  const get_user_data = (user: any) => {
    return `${user?.first_name} ${user?.last_name}`;
  };

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (response: any) => {
      localStorage.removeItem("user");

      toast.success(response?.message ?? "logout successful");
      setUser(null);

      navigate("/");
    },

    onError: (error) => {
      toast.error(error?.message ?? "logout failed");
    },
    mutationKey: ["logout_mutation"],
  });

  const logoutHandler = () => {
    mutate();
  };

  return (
    <div
      className={`flex justify-between gap-4 md:gap-2 items-center ${
        className ?? ""
      }`}
    >
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

      {user ? (
        <div className="flex items-center">
          <Link
            to="/profile"
            className="p-2 hover:text-violet-600 transition-colors text-lg font-semibold text-violet-500"
          >
            <span>{get_user_data(user)}</span>
          </Link>

          <button
            onClick={logoutHandler}
            className="p-1 text-2xl font-bold rounded  cursor-pointer transition-all duration-500 "
          >
            <RiLogoutBoxRFill />
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="p-1 text-2xl font-bold rounded  cursor-pointer transition-all duration-500 ">
              <RiLoginBoxFill />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
