import { useQuery } from "@tanstack/react-query";
import { profileApi } from "../api/auth.api";

const Profile = () => {
  const { data, isLoading } = useQuery({
    queryFn: profileApi,
    queryKey: ["profileApi"],
  });

  if (isLoading) return <div>Loading</div>;

  console.log("profile", { data });

  return (
    <div className="h-full bg-gray-300">
      <h1 className="min-h-full">Profile</h1>
    </div>
  );
};

export default Profile;
