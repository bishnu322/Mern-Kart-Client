import { Input } from "../../../shared/designSystem/form/input/Input";
import { Button } from "../../../shared/designSystem/form/button/Button";
import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../../api/category.api";
import { Link } from "react-router";

const FetchCategory = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllCategory,
    queryKey: ["get_All_category"],
  });

  console.log(data?.data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full h-full">
      {/* heading */}
      <h1 className="text-xl font-semibold text-gray-600">Category list</h1>

      {/* search field */}

      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-3">
          <Input
            className="w-full border border-violet-600 p-2 rounded outline-none "
            placeholder="Search category"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <Button>Search</Button>
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
              <th className="border border-gray-300 px-4 py-2">Modification</th>
            </tr>
          </thead>
          <tbody className="text-sm font-semibold text-gray-700">
            {data?.data.map((items, index) => (
              <tr className="hover:bg-gray-200 bg-gray-300 " key={items._id}>
                <td className="border border-gray-100 px-4 py-2 text-center">
                  {index + 1}.
                </td>
                <td className="border border-gray-100 px-4 py-2">
                  {items.name}
                </td>
                <td className="border border-gray-100 px-4 py-2 line-clamp-3">
                  {items.description}
                </td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchCategory;
