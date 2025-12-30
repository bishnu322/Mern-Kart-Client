import { useQuery } from "@tanstack/react-query";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import type { IconType } from "react-icons";
import { profileApi } from "../../api/auth.api";

const profileDataConfig: { Icon: IconType; key: string }[] = [
  {
    Icon: MdOutlineMail,
    key: "email",
  },
  {
    Icon: FaRegUser,
    key: "first_name",
  },
  {
    Icon: MdOutlinePhone,
    key: "phone_number",
  },
];

const OwnProfile = () => {
  const { data, isLoading } = useQuery({
    queryFn: profileApi,
    queryKey: ["profileApi"],
  });

  if (isLoading) return <div>Loading</div>;

  const createdAtDate: string | null = data?.data?.createdAt
    ? new Date(data.data.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const updatedAtDate: string | null = data?.data?.updatedAt
    ? new Date(data.data.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className={`flex justify-center items-center flex-wrap`}>
      <div
        className={`flex flex-col justify-between  sm:justify-between sm:flex-row  items-center text-center md:gap-10 gap-5 `}
      >
        <div className={` p-3 h-40  mx-5 text-center text-gray-400`}>
          <FaUserGraduate size={150} />
        </div>

        <div>
          <h1 className={`font-mono text-gray-500 text-sm my-3 md:text-start`}>
            PERSONAL INFORMATION
          </h1>
          <div className={`flex flex-col gap-1 justify-center text-center`}>
            {profileDataConfig.map(
              ({ Icon, key }: { Icon: IconType; key: string }) => (
                <div
                  className={`flex items-center text-center gap-1 font-semibold text-md`}
                  key={key}
                >
                  <div className={`text-gray-500`}>
                    <Icon size={20} />
                  </div>
                  <div>{data.data[key]}</div>
                </div>
              )
            )}
          </div>
        </div>

        <div className={`text-center md:mt-10`}>
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
    </main>
  );
};

export default OwnProfile;
