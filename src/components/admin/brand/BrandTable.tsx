import React from "react";
import type { IBrand } from "../../../types/brand.types";
import { Link } from "react-router";

interface IProps {
  brandData: IBrand[];
}
const BrandTable: React.FC<IProps> = ({ brandData }) => {
  return (
    <table className="w-full border border-gray-400 text-left rounded mt-3 overflow-hidden  ">
      <thead className="bg-violet-600 text-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2">S.N</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2"> Logo</th>
          <th className="border border-gray-300 px-4 py-2">Update</th>
          <th className="border border-gray-300 px-4 py-2 text-center">
            Delete
          </th>
        </tr>
      </thead>

      <tbody className="text-sm font-semibold text-gray-700">
        {brandData.map((items, index) => (
          <tr className="hover:bg-gray-200 bg-gray-300 " key={items._id}>
            <td className="border border-gray-100 px-4 py-2 text-center">
              {index + 1}.
            </td>
            <td className="border border-gray-100 px-4 py-2">
              {items.brand_name}
            </td>
            <td className="border border-gray-100 px-4 py-2">
              {items.description}
            </td>

            {/* logo */}
            <td className="border border-gray-100 px-4 py-2">
              <img
                src={items.logo.path}
                alt="brandLogo"
                className="w-15 object-fit"
              />
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
                // onClick={() => removeCategory(items._id)}
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
  );
};

export default BrandTable;
