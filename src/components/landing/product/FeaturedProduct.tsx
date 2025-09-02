import { useQuery } from "@tanstack/react-query";
import TitleComponent from "../../common/TitleComponent";
import ProductCard from "./card";
import { getAllProduct } from "../../../api/product.api";
import Loader from "../../loader/loader";

const FeaturedProduct = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllProduct,
    queryKey: ["get_all_product"],
  });

  if (!data) return null;

  if (isLoading) return <Loader />;

  return (
    <div className="w-full ">
      <TitleComponent
        title="Featured Product"
        sub_title="Limited Stock - Shop featured favorites today"
        link="#"
      />

      <div className="flex justify-between flex-wrap items-center">
        {data.data.map((data) => (
          <ProductCard key={data._id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
