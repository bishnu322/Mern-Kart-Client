/* eslint-disable @typescript-eslint/no-explicit-any */
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../shared/designSystem/table/Table";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUser, removeUser } from "../../../api/user.api";
import ActionButton from "../ActionButton";
import toast from "react-hot-toast";
import { UserSkeleton } from "../../../components/skeleton";

const FetchUsers = () => {
  const queryClient = useQueryClient();
  const columnHelper = createColumnHelper<any>();

  //* fetching data of user
  const { data, isLoading } = useQuery({
    queryFn: getAllUser,
    queryKey: ["getAllUser"],
  });

  //* remove mutation of user
  const { mutate } = useMutation({
    mutationFn: removeUser,
    mutationKey: ["removeUser"],
    onSuccess: (response) => {
      toast.success(response.message ?? "user removed successfully");
      queryClient.invalidateQueries({ queryKey: ["getAllUser"] });
    },
    onError: (error) => {
      toast.error(error.message ?? "Failed to remove user");
    },
  });

  console.log({ data });
  const columns = [
    columnHelper.accessor("s.n", {
      header: () => "S.N",
      cell: (info) => (
        <span className="flex justify-center items-center">
          {Number(info.cell.row.id) + 1}.
        </span>
      ),
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
      id: "fullName",
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => <span className="line-clamp-1 max-w-[300px]">E-mail</span>,
      cell: (info) => (
        <span className="line-clamp-1 max-w-[300px]">
          <i>{info.getValue()}</i>
        </span>
      ),
    }),
    columnHelper.accessor("phone_number", {
      header: () => <span className="line-clamp-1 max-w-[300px]">Phone</span>,
      cell: (info) => (
        <span className="line-clamp-1 max-w-[300px]">
          <i>{info.getValue()}</i>
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
        <ActionButton onClick={() => mutate(original._id)} />
      ),
    }),
  ];
  return (
    <main>
      <AdminBodyTitle>Fetched User</AdminBodyTitle>
      <div className="mt-2">
        {isLoading ? (
          <UserSkeleton />
        ) : (
          <Table columns={columns} data={data?.data} />
        )}
      </div>
    </main>
  );
};

export default FetchUsers;
