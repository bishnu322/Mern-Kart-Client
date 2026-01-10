import { useEffect, useState } from "react";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";
import { Input } from "../../../shared/designSystem/form/input/Input";
import ProductTable from "./ProductTable";

const ProductList = () => {
  const [inputTempValue, setInputTempValue] = useState("");
  const [queryInputValue, setQueryInputValue] = useState("");

  useEffect(() => {
    const interval = setTimeout(() => {
      setQueryInputValue(inputTempValue);
    }, 500);

    return () => clearTimeout(interval);
  }, [inputTempValue]);

  return (
    <main>
      <AdminBodyTitle>Search Product</AdminBodyTitle>
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {/* search button  */}

        <Input
          value={inputTempValue}
          className="w-full p-2 border rounded outline-none border-violet-600 "
          placeholder="Search Product"
          onChange={(e) => setInputTempValue(e.target.value)}
        />
      </div>

      {/* brand details */}
      <div>
        <ProductTable queryInputValue={queryInputValue} />
      </div>
    </main>
  );
};

export default ProductList;
