// const image =
//   "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/Skin-and-hair-care-beauty-product-mock-up--lotion-bottle--oil--cream--isolated-on/960x0.jpg?fit=scale";

import type { IProduct } from "../../../types/product.types";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({
  product: {
    name,
    cover_img,
    price,
    brand: { description },
  },
}: IProductCardProps) => {
  return (
    <div className="p-5 m-5  w-[300px] rounded  shadow-2xl bg-white shadow-gray-400">
      {/* image section */}

      <div>
        <img
          src={cover_img.path}
          alt={""}
          className="object-contain w-full h-[250px]"
        />
      </div>

      {/* name */}

      <h2 className="text-lg text-violet-800 font-semibold my-2">{name}</h2>
      {/* description */}

      <p className="text-gray-500 text-sm line-clamp-3 my-2">{description}</p>
      {/* price */}
      <p className="text-md text-violet-800 font-semibold my-2">NPR. {price}</p>
      {/* button */}

      <div className="flex justify-between">
        {/* view detail */}
        <button className="border-1 px-3 py-2 rounded text-md font-semibold cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
          View Detail
        </button>
        {/* add to cart */}
        <button className="border-1 px-3 py-2 rounded text-md font-semibold bg-black text-white cursor-pointer hover:text-black hover:bg-white transition-all duration-300">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
