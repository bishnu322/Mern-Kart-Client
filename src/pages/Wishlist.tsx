import { withAuth } from "../hoc/with.auth.hoc";
import { allAdminAndUser } from "../types/global.types";
import { useQuery } from "@tanstack/react-query";
import { wishlistApi } from "../api/wishlist.api";
import Loader from "../components/loader/loader";

const Wishlist = () => {
  const { data, isLoading } = useQuery({
    queryFn: wishlistApi,
    queryKey: ["get_all_wishlist"],
  });

  if (!data?.data?.length) return <div>wishlist is empty..</div>;
  if (isLoading) return <Loader />;

  return (
    <div className="flex justify-center flex-wrap items-center sm:flex sm:flex-wrap sm:my-10 sm:justify-start">
      {data.data.map((value) => (
        <div
          className="p-4 m-5  w-[300px] rounded  shadow-2xl shadow-gray-700 bg-white"
          key={value._id}
        >
          {/* image section */}

          <div>
            <img
              src={value.cover_img.path}
              alt={""}
              className="object-contain w-full h-[200px]  transition-all duration-500 hover:object-fill hover:cursor-pointer"
            />
          </div>

          {/* name */}

          <div className="flex justify-between my-1">
            <h2 className="text-lg text-violet-800 font-semibold">
              {value.name}
            </h2>
            {/* description */}

            {/* price */}
            <p className="text-md text-violet-800 font-semibold">
              NPR. {value.price}
            </p>
          </div>

          <div className="line-clamp-2 my-3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            temporibus magnam deleniti, quam quas eligendi.
          </div>

          {/* button */}

          {/* view detail */}
          <button className="border-1 px-3 py-2 rounded text-md font-semibold cursor-pointer hover:bg-black hover:text-white transition-all duration-300 w-full">
            Remove
          </button>
          {/* add to cart */}
        </div>
      ))}
    </div>
  );
};

const Page = withAuth(Wishlist, allAdminAndUser);

export default Page;
