/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProduct, removeProduct } from "../../../api/product.api";
import { createColumnHelper } from "@tanstack/react-table";
import ActionButton from "../ActionButton";
import Table from "../../../shared/designSystem/table/Table";
import { ProductSkeleton } from "../../../components/skeleton";
import toast from "react-hot-toast";

interface IProps {
  queryInputValue: string;
  category?: string;
  brand?: string;
}

const ProductTable: React.FC<IProps> = ({
  queryInputValue,
  category,
  brand,
}) => {
  const queryClient = useQueryClient();
  //* fetching product
  const { data, isLoading } = useQuery({
    queryKey: [
      "getAllProduct",
      {
        query: queryInputValue,
        category: "",
        brand: "",
      },
    ],
    queryFn: () =>
      getAllProduct({
        query: queryInputValue,
        category,
        brand,
      }),
  });

  //* remove product

  const { mutate } = useMutation({
    mutationFn: removeProduct,
    mutationKey: ["removeProduct"],
    onSuccess: () => {
      toast.success("Product removed successfully!");
      queryClient.invalidateQueries({ queryKey: ["getAllProduct"] });
    },
    onError: (error) => {
      toast.error(error.message ?? "error while removing product");
    },
  });

  if (isLoading) return <ProductSkeleton />;

  if (!data?.data) return null;

  //* header for product list

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("s.n", {
      header: () => "S.N",
      cell: (info) => (
        <span className="flex justify-center items-center">
          {Number(info.cell.row.id) + 1}.
        </span>
      ),
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: () => <span className="line-clamp-1 max-w-[300px]">Price</span>,
      cell: (info) => (
        <span className="line-clamp-1 max-w-[300px]">
          <i className="text-green-700">Rs. {info.getValue()}</i>
        </span>
      ),
    }),
    columnHelper.accessor("stock", {
      header: () => <span className="line-clamp-1 max-w-[300px]">Stock</span>,
      cell: (info: any) => (
        <span className="line-clamp-1 max-w-[300px] text-center">
          <i className={`${info > 1 ? "text-green-600" : "text-red-600"}`}>
            {info.getValue()}
          </i>
        </span>
      ),
    }),
    columnHelper.accessor("isFeatured", {
      header: () => (
        <span className="line-clamp-1 max-w-[300px]">Featured</span>
      ),
      cell: (info: any) => (
        <span className="line-clamp-1 max-w-[300px] text-center">
          <i className={`${info === true ? "text-green-500" : "text-red-500"}`}>
            {info.getValue().toString()}
          </i>
        </span>
      ),
    }),

    columnHelper.accessor("createdAt", {
      header: () => "Created At",
      cell: (info) => (
        <span className="flex justify-center items-center">
          {new Intl.DateTimeFormat("en-us", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(info.getValue()))}
        </span>
      ),
    }),
    columnHelper.accessor("updatedAt", {
      header: () => "Updated At",
      cell: (info) => (
        <span className="flex justify-center items-center">
          {new Intl.DateTimeFormat("en-us", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(info.getValue()))}
        </span>
      ),
    }),
    columnHelper.accessor(" ", {
      header: () => <span>Action</span>,
      footer: (info) => info.column.id,
      cell: ({ row: { original } }) => (
        <ActionButton
          LinkTo={`product/${original?._id}`}
          onClick={() => {
            mutate(original._id);
          }}
        />
      ),
    }),
  ];

  return (
    <main className="mt-3">
      <Table columns={columns} data={data?.data} />
    </main>
  );
};

export default ProductTable;
