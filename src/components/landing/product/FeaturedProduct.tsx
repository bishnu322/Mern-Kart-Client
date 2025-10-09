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

  console.log(data);
  if (!data) return null;

  if (isLoading) return <Loader />;

  return (
    <div className="w-full ">
      <TitleComponent
        title="Featured Product"
        sub_title="Limited Stock - Shop featured favorites today"
        link="/products"
      />

      <div className="flex justify-around items-center flex-wrap gap-5 flex-col sm:flex-row">
        {data.data.map((data) => (
          <ProductCard key={data._id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
