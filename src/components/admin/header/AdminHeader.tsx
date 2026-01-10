import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../context/auth.context";
import { logoutApi } from "../../../api/auth.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { type Dispatch, type SetStateAction } from "react";

interface Props {
  setToggleMenuBar: Dispatch<SetStateAction<boolean>>;
}

const AdminHeader = ({ setToggleMenuBar }: Props) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const { mutate } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (response) => {
      localStorage.removeItem("user");

      toast.success(response?.message ?? "logout successful");
      setUser(null);

      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message ?? "something went wrong while logout");
    },
    mutationKey: ["logout_mutation"],
  });

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex items-center font-bold gap-2">
          <span>
            <IoMdMenu
              size={30}
              onClick={() => setToggleMenuBar((prev) => !prev)}
              className="cursor-pointer"
            />
          </span>
          <span className="italic text-violet-600">Welcome back, </span>
          <span className="text-xl text-gray-600">{user?.role ?? "Admin"}</span>
        </div>

        <div>
          <h1 className="text-lg font-semibold text-violet-600">
            {`${user?.first_name} ${user?.last_name}`}
          </h1>
          <button
            onClick={() => mutate()}
            className="font-bold text-orange-600"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
