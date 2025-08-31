import { withAuth } from "../hoc/with.auth.hoc";
import { allAdminAndUser } from "../types/global.types";
import { useQuery } from "@tanstack/react-query";
import { wishlistApi } from "../api/wishlist.api";

interface WishlistItem {
  _id: string;
  cover_img: { path: string };
  name: string;
  price: number;
  // add other fields as needed
}

const Wishlist = () => {
  const { data } = useQuery({
    queryFn: wishlistApi,
    queryKey: ["get_all_wishlist"],
  });

  if (!data) return <div>wishlist is empty..</div>;

  return (
    <div>
      {data.data.map((value: WishlistItem) => (
        <div
          className="p-4  m-5  w-[300px] rounded  shadow-2xl shadow-gray-700 bg-white "
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

          <div className="flex justify-between my-3">
            <h2 className="text-lg text-violet-800 font-semibold">
              {value.name}
            </h2>
            {/* description */}

            {/* price */}
            <p className="text-md text-violet-800 font-semibold">
              NPR. {value.price}
            </p>
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
