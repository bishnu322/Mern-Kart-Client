import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import PageHeader from "../../../components/admin/header/PageHeader";
import FetchCategory from "../../../components/admin/category/FetchCategory";

const Category = () => {
  return (
    <main className="w-full h-full tracking-wider">
      <PageHeader
        key={"categoryList"}
        title={"Category list"}
        subTitle={" All products Category"}
        linkTo={"/admin/category/add"}
        buttonText={"Add New Category"}
      />
      <AdminBodyWrapper>
        <FetchCategory />
      </AdminBodyWrapper>
    </main>
  );
};

export default Category;
