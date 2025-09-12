import React from "react";
import PageHeader from "../../../components/admin/header/PageHeader";
import BrandForm from "../../../components/admin/brand/BrandForm";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";

const AddBrand = () => {
  return (
    <main>
      <PageHeader
        title="Add New Brand"
        subTitle="Add brand"
        buttonText="All brand field"
        linkTo="/admin/brand"
      />
      <AdminBodyWrapper>
        <BrandForm />
      </AdminBodyWrapper>
    </main>
  );
};

export default AddBrand;
