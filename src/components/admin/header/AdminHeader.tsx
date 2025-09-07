import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../context/auth.context";
import { logoutApi } from "../../../api/auth.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AdminHeader = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const { mutate } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (response) => {
      console.log(response);
      localStorage.removeItem("user");

      toast.success(response?.message ?? "logout successful");
      setUser(null);

      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message ?? "something went wrong while logout");
    },
    mutationKey: ["logout_mutation"],
  });
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center px-5 py-2">
        <div className="font-bold  ">
          <span className="text-violet-600 italic">Welcome back, </span>
          <span className="text-gray-600 text-xl">{user?.role ?? "Admin"}</span>
        </div>

        <div>
          <h1 className="text-violet-600 font-semibold text-lg">
            {`${user?.first_name} ${user?.last_name}`}
          </h1>
          <button
            onClick={() => mutate()}
            className="text-orange-600 font-bold"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
