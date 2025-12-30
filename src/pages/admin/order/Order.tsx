import { Link } from "react-router";
import PageHeader from "../../../components/admin/header/PageHeader";
import { useGetAllOrder } from "./useGetAllOrder";
import { OrderSkeleton } from "../../../components/skeleton";

const OrderPage = () => {
  const { data, isLoading } = useGetAllOrder();

  if (isLoading) return <OrderSkeleton />;
  if (!data) return null;

  const orders = data.data;

  return (
    <main>
      <PageHeader title="Orders" subTitle="Order details" />

      {orders.map((order) => (
        <div
          key={order._id}
          className="p-5 my-4 rounded-md border border-gray-200 flex flex-col gap-5"
        >
          <div>
            <div className="font-bold">
              Payment Method: {order.payment_method}
            </div>
            <div>
              Date of Order: {new Date(order.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div>
            <div className="font-bold">Address</div>
            <div>Country: {order.shipping_address.country}</div>
            <div>City: {order.shipping_address.city}</div>
            <div>State: {order.shipping_address.state}</div>
            <div>Street: {order.shipping_address.street}</div>
          </div>

          <div>
            <div className="font-bold">User Details</div>
            <div>
              Name: {order.user.first_name} {order.user.last_name}
            </div>
            <div>Email: {order.user.email}</div>
            <div>Phone number: {order.user.phone_number}</div>
          </div>

          <div>
            <div className="font-bold">Product</div>

            {order.items.map((product) => (
              <Link
                to={`/product/${product.product._id}`}
                key={product.product._id}
                className="flex gap-5 items-center"
              >
                <img
                  src={product.product.cover_img.path}
                  alt="product image"
                  className="rounded w-50 h-50 object-contain"
                />
                <div>
                  <div>Product Title: {product.product.name}</div>
                  <div>Price: {product.total_price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default OrderPage;
