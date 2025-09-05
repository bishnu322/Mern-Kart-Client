const AdminHeader = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center px-5 py-2">
        <div className="font-bold italic ">
          <span className="text-violet-700">Welcome back,</span>{" "}
          <span className="text-gray-800 text-xl">Admin</span>
        </div>
        <div>
          <h1 className="text-violet-800 font-semibold text-lg">Super Admin</h1>
          <button className="text-red-600 font-bold">Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
