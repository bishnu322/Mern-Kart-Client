
import {useQuery} from "@tanstack/react-query";
import {profileApi} from "../../api/auth.api.ts";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
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

    const createdAtDate:string |null = data?.data?.createdAt
        ? new Date(data.data.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : null;
    console.log({createdAtDate})

    const updatedAtDate:string|null = data?.data?.updatedAt
        ? new Date(data.data.createdAt).toLocaleDateString("en-US", {
            year:"numeric",
            month:"long",
            day:"numeric"
        })
        :null


    console.log("profiles", { data });

    return (
        <main className={`min-h-[400px]`}>

            <div className={`grid grid-cols-1 text-center sm:text-start sm:grid-cols-3 md:grid-cols-5 `}>
                <div className={`sm:col-span-1 p-3 h-40 mt-10 mx-5 text-center text-gray-400 flex justify-center sm:justify-items-start`}><FaUserGraduate size={150}/></div>

                <div className={`col-span-1 sm:col-span-2 mt-14`}>
                    <h1 className={`font-mono text-gray-500 text-sm my-3`}>PERSONAL INFORMATION</h1>
                    <div className={`flex flex-col justify-center  items-center sm:items-start sm:justify-between gap-3`}>
                        {
                            profileDataConfig.map(({Icon, key}:{Icon:IconType,key:string}) =>(
                                <div className={`flex items-center text-center gap-1 font-semibold text-md`} key={key}>
                                    <div className={`text-gray-500`}><Icon size={20}/></div>
                                    <div>{data.data[key]}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={`col-span-1 sm:col-span-2 mt-5 sm:mt-24`}>
                   <div>
                       <h1 className={`font-semibold`}>Account Created Date</h1>
                       <p className={`text-gray-600`}>{createdAtDate}</p>
                   </div>
                   <div>
                       <h1 className={`font-semibold`}>Account Updated Date</h1>
                       <h1 className={`text-gray-600`}>{updatedAtDate}</h1>
                   </div>
                </div>
            </div>

  </main>)
};

export default OwnProfile;
