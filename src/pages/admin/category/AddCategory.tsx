import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import PageHeader from "../../../components/admin/header/PageHeader";
import RegisterCategoryForm from "../../../components/admin/category/RegisterCategoryForm";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";

const AddCategory = () => {
  return (
    <div className="w-full h-full">
      {/* page header */}

      <PageHeader
        key={"AddNewCategory"}
        title={"Add New Category"}
        subTitle="add category"
        linkTo={"/admin/category"}
        buttonText={"View Category"}
      />

      {/* form body */}

      <AdminBodyWrapper>
        <AdminBodyTitle>Category form</AdminBodyTitle>

        <RegisterCategoryForm />
      </AdminBodyWrapper>
    </div>
  );
};

export default AddCategory;
