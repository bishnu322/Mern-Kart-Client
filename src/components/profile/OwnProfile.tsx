
import {useQuery} from "@tanstack/react-query";
import {profileApi} from "../../api/auth.api.ts";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const profileDataConfig = [{
    Icon:MdOutlineMail,
    key:"email"
},{
    Icon:FaRegUser,
    key:"first_name"
}]

const OwnProfile = () => {

    const { data, isLoading } = useQuery({
        queryFn: profileApi,
        queryKey: ["profileApi"],
    });


    if (isLoading) return <div>Loading</div>;

    console.log("profiles", { data });

    return <main>
      <h1 className={`font-mono text-gray-500 text-sm`}>PERSONAL INFORMATION</h1>
      <div>
          {
              profileDataConfig.map(({Icon, key}) =>(
                  <div className={`flex items-center text-center gap-1`} key={key}>
                      <Icon />
                      <div>{data.data[key]}</div>
                  </div>
              ))
          }
      </div>
  </main>;
};

export default OwnProfile;
