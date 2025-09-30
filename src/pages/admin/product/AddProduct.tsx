import PageHeader from "../../../components/admin/header/PageHeader";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import AddProductForm from "../../../components/admin/product/AddProductForm";

const AddProduct = () => {
  return (
    <main>
      <PageHeader
        title="Add Product"
        subTitle="All field to add product"
        linkTo="/admin/product"
        buttonText="view product"
      />

      <AdminBodyWrapper>
        <AddProductForm />
      </AdminBodyWrapper>
    </main>
  );
};

export default AddProduct;
