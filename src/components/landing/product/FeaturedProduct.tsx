import { useQuery } from "@tanstack/react-query";
import TitleComponent from "../../common/TitleComponent";
import ProductCard from "./card";
import { getAllFeaturedProduct } from "../../../api/product.api";
import Loader from "../../loader/loader";

const FeaturedProduct = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllFeaturedProduct,
    queryKey: ["get_all_product"],
  });

  if (!data) return null;

  if (isLoading) return <Loader />;

  return (
    <div className="w-full ">
      <TitleComponent
        title="Featured Product"
        sub_title="Limited Stock - Shop featured favorites today"
        link="/products"
      />

      <div className="flex flex-col flex-wrap items-center justify-around gap-5 sm:flex-row">
        {data.data.map((data) => (
          <ProductCard key={data._id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
