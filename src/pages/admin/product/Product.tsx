import PageHeader from "../../../components/admin/header/PageHeader";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import ProductList from "../../../components/admin/product/ProductList";

const Products = () => {
  return (
    <main>
      <PageHeader
        title="Product list"
        subTitle="All products fetched"
        linkTo="/admin/product/add"
        buttonText="Add product"
      />

      <AdminBodyWrapper>
        <h1>product</h1>
        <ProductList />
      </AdminBodyWrapper>
    </main>
  );
};

export default Products;
