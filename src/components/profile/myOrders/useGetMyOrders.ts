import { useQuery } from "@tanstack/react-query";
import { getMyOrders } from "../../../api/order.api";

export const useGetMyOrders = () => {
  const query = useQuery({
    queryFn: () => getMyOrders(),
    queryKey: ["myOrders"],
  });

  return query;
};
