/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHeader from "../../../components/admin/header/PageHeader";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCategoryById, updateCategoryById } from "../../../api/category.api";
import { useParams } from "react-router";
import { Button } from "../../../shared/designSystem/form/button/Button";
import type { FormValues } from "./RegisterCategoryForm";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";

const EditCategory = () => {
  const { id } = useParams();

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
        <h1 className="text-lg font-semibold text-gray-600">
          Category field to edit
        </h1>

        <form
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              id="name"
              label="Name"
              labelHtmlFor="name"
              className="w-full border border-violet-600 p-2 rounded outline-none"
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <Input
              id="description"
              label="Description"
              labelHtmlFor="description"
              className="w-full border border-violet-600 p-2 rounded outline-none"
              {...register("description")}
            />
          </div>

          <div className="mt-6 w-full">
            <Button type="submit">{isPending ? "Updating" : "Update"}</Button>
          </div>
        </form>
      </AdminBodyWrapper>
    </div>
  );
};

export default EditCategory;
