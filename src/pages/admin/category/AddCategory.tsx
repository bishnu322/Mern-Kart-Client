// import { useForm } from "react-hook-form";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";

import PageHeader from "../../../components/admin/header/PageHeader";
import RegisterCategoryForm from "./RegisterCategoryForm";
// import { Button } from "../../../shared/designSystem/form/button/Button";
// import { Input } from "../../../shared/designSystem/form/input/Input";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createCategory } from "../../../api/category.api";
// import toast from "react-hot-toast";
// import * as yup from "yup";

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
