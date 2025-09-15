/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface IProps {
  data: any[];
  columns: any[];
}

const Table: React.FC<IProps> = ({ columns, data = [] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="w-full rounded-t-lg overflow-hidden">
        <thead className="bg-violet-600 text-white font-bold">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 border border-gray-100 text-start px-4"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-gray-300">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-violet-300 text-sm font-semibold"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-2 border border-gray-100 text-gray-600 px-4"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </div>
  );
};

export default Table;
