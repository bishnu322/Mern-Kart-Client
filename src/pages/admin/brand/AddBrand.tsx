import React from "react";
import PageHeader from "../../../components/admin/header/PageHeader";

const AddBrand = () => {
  return (
    <main>
      <PageHeader
        title="Add New Brand"
        subTitle="Add brand"
        buttonText="All brand field"
        linkTo="/admin/brand"
      />
    </main>
  );
};

export default AddBrand;
