import PageHeader from "../../../components/admin/header/PageHeader";

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
    </main>
  );
};

export default Category;
