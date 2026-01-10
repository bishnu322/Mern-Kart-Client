/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { RiLogoutBoxRFill, RiLoginBoxFill } from "react-icons/ri";
import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../api/auth.api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth.context";

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
            className="p-2 text-lg font-semibold hover:text-violet-600 transition-colors text-violet-500"
          >
            <span>{get_user_data(user)}</span>
          </Link>

          <button
            onClick={logoutHandler}
            className="p-1 text-2xl font-bold rounded cursor-pointer  transition-all duration-500"
          >
            <RiLogoutBoxRFill />
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="p-1 text-2xl font-bold rounded cursor-pointer  transition-all duration-500">
              <RiLoginBoxFill />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default IconSection;
