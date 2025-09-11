import React from "react";
import PageHeader from "../../../components/admin/header/PageHeader";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import BrandList from "../../../components/admin/brand/BrandList";

const Brand = () => {
  return (
    <main>
      <PageHeader
        title="Brand list"
        subTitle="All product brand list"
        buttonText="Add Brand"
        linkTo="/admin/brand/add"
      />

      <AdminBodyWrapper>
        <BrandList />
      </AdminBodyWrapper>
    </main>
  );
};

export default Brand;
