import { useAuth } from "../../../context/auth.context";

const AdminHeader = () => {
  const { user } = useAuth();
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
          <button className="text-orange-600 font-bold">Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
