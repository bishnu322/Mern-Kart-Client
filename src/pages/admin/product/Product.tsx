import React from "react";
import PageHeader from "../../../components/admin/header/PageHeader";

const Products = () => {
  return (
    <main>
      <PageHeader
        title="Product list"
        subTitle="All products fetched"
        linkTo="/admin/product/add"
        buttonText="Add product"
      />
    </main>
  );
};

export default Products;
