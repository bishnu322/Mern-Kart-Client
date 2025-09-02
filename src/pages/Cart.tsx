import { useQuery } from "@tanstack/react-query";
import { getAllCartData } from "../api/cart.api";

const Cart = () => {
  const { data } = useQuery({
    queryFn: getAllCartData,
    queryKey: ["get_all_cart_data"],
  });

  if (!data?.data) {
    return (
      <div className="h-full">Cart is empty. Add some product to order...</div>
    );
  }
  return (
    <div className="h-full bg-gray-300">
      <h1 className="h-full">fetch cart data</h1>
    </div>
  );
};

export default Cart;
