import { Input } from "../../../shared/designSystem/form/input/Input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCategory, removeCategoryData } from "../../../api/category.api";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

  useEffect(() => {
    const interval = setTimeout(() => {
      setQuerySearch(tempSearch);
    }, 500);

    return () => clearTimeout(interval);
  }, [tempSearch]);

  const removeCategory = (id: string) => {
    mutate(id);
  };

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

      <div className="w-full h-full ">
        <table className="w-full border border-gray-400 text-left rounded mt-3 overflow-hidden  ">
          <thead className="bg-violet-600 text-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">S.N</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Update</th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="text-sm font-semibold text-gray-700">
            {categoryData?.data.map((items, index) => (
              <tr className="hover:bg-gray-200 bg-gray-300 " key={items._id}>
                <td className="border border-gray-100 px-4 py-2 text-center">
                  {index + 1}.
                </td>
                <td className="border border-gray-100 px-4 py-2">
                  {items.name}
                </td>
                <td className="border border-gray-100 px-4 py-2 ">
                  {items.description}
                </td>

                {/* edit category */}
                <td className="border border-gray-100 px-4 py-2 text-blue-600 cursor-pointer text-center">
                  <Link to={`/admin/category/${items._id}`}>
                    <button
                      className="bg-orange-500 text-gray-100 px-5 py-1 rounded cursor-pointer hover:bg-orange-600"
                      value={items._id}
                    >
                      Edit
                    </button>
                  </Link>
                </td>

                {/* remove category */}
                <td className="border border-gray-100 px-4 py-2 text-blue-600 cursor-pointer text-center">
                  <button
                    onClick={() => removeCategory(items._id)}
                    className="bg-red-600 text-gray-100 px-5 py-1 rounded cursor-pointer hover:bg-red-600"
                    value={items._id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchCategory;
