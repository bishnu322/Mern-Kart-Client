import React from "react";
import { useParams } from "react-router";
import PageHeader from "../../../components/admin/header/PageHeader";

const UpdateProduct = () => {
  const params = useParams();

  console.log({ params });
  return (
    <main>
      <PageHeader
        title="Update product"
        subTitle="All field to update"
        buttonText="Product list"
        linkTo="/admin/product"
      />
    </main>
  );
};

export default UpdateProduct;
