import { useMutation, useQueryClient } from "@tanstack/react-query";
// import React from "react";
import { useForm } from "react-hook-form";
import { createCategory } from "../../../api/category.api";
import toast from "react-hot-toast";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { Button } from "../../../shared/designSystem/form/button/Button";

export type FormValues = {
  name: string;
  description: string;
};

export interface ICategoryData {
  name: string;
  description: string;
}

const RegisterCategoryForm = () => {
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      toast.success("Category created successfully");
      queryClient.invalidateQueries({ queryKey: ["createCategory"] });
    },
    onError: (error) => {
      toast.error(error.message ?? "cannot push, something went wrong");
    },
    mutationKey: ["create_category"],
  });

  const onSubmit = (data: ICategoryData) => {
    mutate(data);
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          id="name"
          label="Name"
          labelHtmlFor="name"
          placeholder="Name"
          className="w-full border border-violet-600 p-2 rounded outline-none"
          {...register("name")}
        />
      </div>
      <div>
        <Input
          id="description"
          label="Description"
          labelHtmlFor="description"
          placeholder="Description"
          className="w-full border border-violet-600 p-2 rounded outline-none"
          {...register("description")}
        />
      </div>

      <div className="mt-6 w-full">
        <Button type="submit">{isPending ? "Submitting" : "Submit"}</Button>
      </div>
    </form>
  );
};

export default RegisterCategoryForm;
