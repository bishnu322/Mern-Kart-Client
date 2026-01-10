import { useState } from "react";
import ChangePassword from "./ChangePassword";
import OwnProfile from "./OwnProfile";
import { MyOrders } from "./myOrders/MyOrders";

const ProfileDetails = () => {
  const [ownProfile, setOwnProfile] = useState<boolean>(true);
  const [changePass, setChangePass] = useState<boolean>(false);
  const [myOrders, setMyOrders] = useState<boolean>(false);

  const handleProfileToggle = () => {
    setOwnProfile(true);
    setChangePass(false);
    setMyOrders(false);
  };

  const handleChangePassword = () => {
    setOwnProfile(false);
    setChangePass(true);
    setMyOrders(false);
  };

  const handleMyOrders = () => {
    setOwnProfile(false);
    setChangePass(false);
    setMyOrders(true);
  };

  return (
    <main className="px-4 py-5">
      <h1 className="text-xl font-semibold text-gray-700">My Profile</h1>
      <p className="text-sm text-gray-600 ">View your profile detail</p>
      <div className="flex mt-4 gap-2">
        <button
          onClick={handleProfileToggle}
          className={` text-gray-600 px-4 py-2 rounded-t-sm font-semibold ${
            !changePass
              ? "bg-gray-200 border-t-2 border-t-violet-600 text-violet-700"
              : "bg-gray-300 border-t-2 border-t-gray-300"
          }  transition-all duration-200`}
        >
          Own Profile
        </button>

        <button
          onClick={handleChangePassword}
          className={` text-gray-600 px-4 py-2 rounded-t-sm font-semibold ${
            changePass
              ? "bg-gray-200 border-t-2 border-t-violet-500 text-violet-700"
              : "bg-gray-300 border-t-2 border-t-gray-300"
          } transition-all duration-200`}
        >
          Change Password
        </button>

        <button
          onClick={handleMyOrders}
          className={` text-gray-600 px-4 py-2 rounded-t-sm font-semibold ${
            myOrders
              ? "bg-gray-200 border-t-2 border-t-violet-500 text-violet-700"
              : "bg-gray-300 border-t-2 border-t-gray-300"
          } transition-all duration-200`}
        >
          My Orders
        </button>
      </div>

      {ownProfile && !changePass && (
        <div className="bg-gray-200 min-h-[200px] p-4 rounded-b-md rounded-r-md">
          <OwnProfile />
        </div>
      )}

      {changePass && (
        <div className="bg-gray-200 min-h-[400px] p-4 rounded-b-md rounded-r-md">
          <ChangePassword />
        </div>
      )}

      {myOrders && (
        <div className="p-4 bg-gray-200 rounded-b-md rounded-r-md">
          <MyOrders />
        </div>
      )}
    </main>
  );
};

export default ProfileDetails;
