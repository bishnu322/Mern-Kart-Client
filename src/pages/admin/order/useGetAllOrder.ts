import { useQuery } from "@tanstack/react-query";
import { getAllOrder } from "../../../api/order.api";

export const useGetAllOrder = () => {
  const query = useQuery({
    queryFn: () => getAllOrder(),
    queryKey: ["getAllOrder"],
  });

  return query;
};
