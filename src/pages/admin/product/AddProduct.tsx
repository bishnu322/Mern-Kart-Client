import React from "react";
import PageHeader from "../../../components/admin/header/PageHeader";

const AddProduct = () => {
  return (
    <main>
      <PageHeader
        title="Add Product"
        subTitle="All field to add product"
        linkTo="/admin/product"
        buttonText="view product"
      />
    </main>
  );
};

export default AddProduct;
