import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";
import { Input } from "../../../shared/designSystem/form/input/Input";
import ProductTable from "./ProductTable";

const ProductList = () => {
  return (
    <main>
      <AdminBodyTitle>Search Product</AdminBodyTitle>
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {/* search button  */}

        <Input
          // value={tempSearch}
          className="w-full border border-violet-600 p-2 rounded outline-none "
          placeholder="Search Product"
          // onChange={(e) => setTempSearch(e.target.value)}
        />
      </div>

      {/* brand details */}

      <div>
        <ProductTable />
      </div>
    </main>
  );
};

export default ProductList;
