import PageHeader from "../../../components/admin/header/PageHeader";
import UpdateProductForm from "../../../components/admin/product/UpdateProductForm";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";

const UpdateProduct = () => {
  return (
    <main>
      <PageHeader
        title="Update product"
        subTitle="All field to update"
        buttonText="Product list"
        linkTo="/admin/product"
      />

      <AdminBodyWrapper>
        <UpdateProductForm />
      </AdminBodyWrapper>
    </main>
  );
};

export default UpdateProduct;
