/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation, useNavigate } from "react-router";
import { links } from "./links";
import { useAuth } from "../../context/auth.context";
import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../api/auth.api";
import toast from "react-hot-toast";

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
    // tightened spacing for mobile menu: smaller gaps and margins
    <div className="flex flex-col space-y-1 mt-1">
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

      {/* Cart & Wishlist - mobile menu (stacked, no icons on mobile) */}
      <div className="flex flex-col space-y-1 pt-1">
        <Link
          to="/cart"
          onClick={() => setIsMenuOpen(false)}
          className="block py-2 px-4 rounded-md text-md text-gray-700 hover:bg-violet-50 hover:text-violet-600"
        >
          Cart
        </Link>

        <Link
          to="/wishlist"
          onClick={() => setIsMenuOpen(false)}
          className="block py-2 px-4 rounded-md text-md text-gray-700 hover:bg-violet-50 hover:text-violet-600"
        >
          Wishlist
        </Link>
      </div>

      {/* Auth area for mobile: show profile + logout or login */}
      <div className="pt-1 border-t mt-2">
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

export default NavLinksMobile;
