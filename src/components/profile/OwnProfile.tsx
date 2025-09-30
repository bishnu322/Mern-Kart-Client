
import {useQuery} from "@tanstack/react-query";
import {profileApi} from "../../api/auth.api.ts";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import type {IconType} from "react-icons";


const profileDataConfig:{Icon:IconType, key:string}[] = [{
    Icon:MdOutlineMail,
    key:"email"
},{
    Icon:FaRegUser,
    key:"first_name"
},{
    Icon:MdOutlinePhone,
    key:"phone_number"
},

]

const OwnProfile = () => {
    const {data, isLoading} = useQuery({
        queryFn: profileApi,
        queryKey: ["profileApi"]
    })


    if (isLoading) return <div>Loading</div>;

    console.log("profiles", { data });

    return (
        <main>
            <h1 className={`font-mono text-gray-500 text-sm`}>PERSONAL INFORMATION</h1>
            <div className={`grid grid-cols-5 mt-10`}>
                <div className={`col-span-1 border p-3 rounded-2xl h-40  mx-5 text-center`}>Avatar</div>

                <div className={`col-span-4`}>
                    <div className={`flex flex-col justify-between gap-3`}>
                        {
                            profileDataConfig.map(({Icon, key}:{Icon:IconType,key:string}) =>(
                                <div className={`flex items-center text-center gap-1 font-semibold text-md`} key={key}>
                                    <div className={`text-violet-700`}><Icon size={20}/></div>
                                    <div>{data.data[key]}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

  </main>)
};

export default OwnProfile;
