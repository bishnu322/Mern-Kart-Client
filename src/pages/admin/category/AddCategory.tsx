import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import PageHeader from "../../../components/admin/header/PageHeader";
import RegisterCategoryForm from "./RegisterCategoryForm";

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
        <div>
          <h1 className="text-xl font-semibold text-violet-800">
            Category form
          </h1>
        </div>

        <RegisterCategoryForm />
      </AdminBodyWrapper>
    </div>
  );
};

export default AddCategory;
