/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHeader from "../../../components/admin/header/PageHeader";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCategoryById, updateCategoryById } from "../../../api/category.api";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../../shared/designSystem/form/button/Button";
import type { FormValues } from "../../../components/admin/category/RegisterCategoryForm";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => updateCategoryById(id as string, data),
    onSuccess: () => {
      toast.success("Updated successfully");
      navigate("/admin/category");
    },
    onError: (error: any) => {
      toast.error(error.message ?? "Error while updating");
    },
  });

  const { data, isLoading } = useQuery({
    queryFn: () => getCategoryById(id as string),
    queryKey: ["fetchingCategoryToEdit", id],
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        name: data.data.name,
        description: data.data.description,
      });
    }
  }, [data, reset]);

  const onSubmit = (formData: FormValues) => {
    mutate(formData);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <PageHeader
        title="Edit Category"
        subTitle="Category is ready to modify"
        linkTo="/admin/category"
        buttonText="View Category"
      />

      <AdminBodyWrapper>
        <AdminBodyTitle>Category field to edit</AdminBodyTitle>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              id="name"
              label="Name"
              labelHtmlFor="name"
              placeholder="Category name"
              className="w-full border border-violet-600 p-2 rounded outline-none"
              {...register("name")}
            />
          </div>

          <div>
            <TextArea
              id="description"
              label="Description"
              labelHtmlFor="description"
              placeholder="Describe Category here..."
              className="w-full border border-violet-600 p-2 rounded outline-none min-h-[200px]"
              {...register("description")}
            />
          </div>

          <div className=" w-full">
            <Button type="submit">{isPending ? "Updating" : "Update"}</Button>
          </div>
        </form>
      </AdminBodyWrapper>
    </div>
  );
};

export default EditCategory;
