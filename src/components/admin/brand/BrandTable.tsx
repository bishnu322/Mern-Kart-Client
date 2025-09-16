/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { IBrand } from "../../../types/brand.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeBrand } from "../../../api/brand.api";
import toast from "react-hot-toast";
import { createColumnHelper } from "@tanstack/react-table";
import ActionButton from "../ActionButton";
import Table from "../../../shared/designSystem/table/Table";

interface IProps {
  brandData: IBrand[];
}
const BrandTable: React.FC<IProps> = ({ brandData }) => {
  const queryClient = useQueryClient();

  //* removing brand
  const { mutate } = useMutation({
    mutationFn: removeBrand,
    mutationKey: ["removeBrand"],
    onSuccess: (response) => {
      toast.success(response.message ?? "Brand removed");
      queryClient.invalidateQueries({ queryKey: ["getAllBrand"] });
    },
    onError: (error) => {
      toast.error(error.message ?? "something went wrong");
    },
  });

  //* tanstack table column creation
  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("s.n", {
      header: () => "S.N",
      cell: (info) => <span>{Number(info.cell.row.id) + 1}.</span>,
    }),
    columnHelper.accessor("brand_name", {
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

    columnHelper.accessor("logo", {
      header: () => <span>Logo</span>,
      cell: ({
        row: {
          original: { logo },
        },
      }) => (
        <span className="flex justify-center items-center">
          <img src={logo.path} alt="brandLogo" className="w-10 object-cover" />
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
        <ActionButton
          LinkTo={`brand/${original?._id}`}
          onClick={() => mutate(original?._id)}
        />
      ),
    }),
  ];

  return (
    <>
      <Table data={brandData ?? []} columns={columns} />
    </>
  );
};

export default BrandTable;
