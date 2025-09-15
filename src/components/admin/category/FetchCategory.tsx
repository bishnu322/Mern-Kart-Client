/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "../../../shared/designSystem/form/input/Input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCategory, removeCategoryData } from "../../../api/category.api";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Table from "../../../shared/designSystem/table/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const FetchCategory = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");

  const queryClient = useQueryClient();

  const { data: categoryData } = useQuery({
    queryFn: () =>
      getAllCategory({
        query: querySearch,
      }),
    queryKey: ["get_All_category", querySearch],
  });

  const { mutate } = useMutation({
    mutationFn: removeCategoryData,
    mutationKey: ["removeCategoryData"],
    onSuccess: (response) => {
      toast.success(response.message ?? "category removed");
      queryClient.invalidateQueries({ queryKey: ["get_All_category"] });
    },
    onError: (error) => {
      toast.error(error.message ?? "cannot remove");
    },
  });

  console.log(categoryData?.data);

  useEffect(() => {
    const interval = setTimeout(() => {
      setQuerySearch(tempSearch);
    }, 500);

    return () => clearTimeout(interval);
  }, [tempSearch]);

  const removeCategory = (id: string) => {
    mutate(id);
  };

  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      header: () => (
        <span className="line-clamp-1 max-w-[300px]">Description</span>
      ),
      cell: (info) => (
        <span className="line-clamp-1 max-w-[300px]">
          <i>{info.getValue()}</i>
        </span>
      ),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Created At",
      cell: (info) => (
        <span>
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
        <span>
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
        <div className="flex justify-center gap-4">
          <Link
            to={`/admin/category/${original?._id}`}
            className="text-orange-500 cursor-pointer"
          >
            <FaEdit size={20} />
          </Link>
          <span className="text-red-600 cursor-pointer">
            <FaRegTrashAlt
              size={20}
              onClick={() => removeCategory(original?._id)}
            />
          </span>
        </div>
      ),
    }),
  ];

  return (
    <div className="w-full h-full">
      {/* heading */}
      <h1 className="text-xl font-semibold text-gray-600">Category list</h1>

      {/* search field */}

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <Input
            value={tempSearch}
            className="w-full border border-violet-600 p-2 rounded outline-none "
            placeholder="Search category"
            onChange={(e) => setTempSearch(e.target.value)}
          />
        </div>
      </div>

      {/* category data table  */}

      <div className="w-full h-full mt-4">
        <Table columns={columns} data={categoryData?.data ?? []} />
      </div>
    </div>
  );
};

export default FetchCategory;
