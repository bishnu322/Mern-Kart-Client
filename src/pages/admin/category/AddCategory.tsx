import PageHeader from "../../../components/admin/header/PageHeader";

const AddCategory = () => {
  return (
    <div>
      <PageHeader
        key={"AddNewCategory"}
        title={"Add New Category"}
        subTitle="add category"
        linkTo={"/admin/category"}
        buttonText={"View Category"}
      />
    </div>
  );
};

export default AddCategory;
