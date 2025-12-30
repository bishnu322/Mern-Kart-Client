import { useForm } from "react-hook-form";
import { Input } from "../../shared/designSystem/form/input/Input";
import { strings } from "../../strings";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema, type TOrderFormValues } from "../../schema/order.schema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { placeOrder } from "../../api/order.api";
import toast from "react-hot-toast";
import { Button } from "../../shared/designSystem/form/button/Button";
import { getAllCartData } from "../../api/cart.api";

const { address } = strings;

const OrderForm = () => {
  const {
    placeholder,
    button: { placeOrder: placeOrderBtn },
  } = address;

  const { data: cartData } = useQuery({
    queryFn: getAllCartData,
    queryKey: ["get_all_cart_data"],
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "Nepal",
      state: "",
      city: "",
      street: "",
    },
    resolver: yupResolver(orderSchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: placeOrder,
    onSuccess: (response) => {
      toast.success(response.data.message);
      // navigate(navigate_to, { replace: true });
    },
    onError: (error) => {
      toast.error(error?.message ?? "Order failed");
    },
  });

  const onSubmit = (data: TOrderFormValues) => {
    const products = cartData?.data?.items?.map((item) => ({
      product: item.product._id,
      quantity: String(item.quantity), // convert number to string
    }));

    if (!products) return;

    mutate({
      items: products,
      shipping_address: data,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-200 w-full md:w-1/2 p-4 space-y-4"
    >
      <h1 className="font-semibold text-violet-500 text-2xl">Address</h1>

      {/* Country */}
      <div className="flex flex-col gap-1">
        <Input
          type="text"
          id="country"
          placeholder={placeholder.country}
          value={watch("country")}
          error={errors.country?.message}
          {...register("country")}
          label={address.country}
          labelHtmlFor="country"
          readOnly
          required
        />
      </div>

      {/* State */}
      <div className="flex flex-col gap-1">
        <Input
          type="text"
          id="state"
          placeholder={placeholder.state}
          value={watch("state")}
          error={errors.state?.message}
          {...register("state")}
          label={address.state}
          labelHtmlFor="state"
          required
        />
      </div>

      {/* City */}
      <div className="flex flex-col gap-1">
        <Input
          type="text"
          id="city"
          placeholder={placeholder.city}
          value={watch("city")}
          error={errors.city?.message}
          {...register("city")}
          label={address.city}
          labelHtmlFor="city"
          required
        />
      </div>

      {/* Street */}
      <div className="flex flex-col gap-1">
        <Input
          type="text"
          id="street"
          placeholder={placeholder.street}
          value={watch("street")}
          error={errors.street?.message}
          {...register("street")}
          label={address.street}
          labelHtmlFor="street"
          required
        />
      </div>

      <div className="w-full mt-3">
        <Button type="submit" disabled={isPending} children={placeOrderBtn} />
      </div>
    </form>
  );
};

export default OrderForm;
