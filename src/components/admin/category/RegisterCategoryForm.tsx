import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createCategory } from "../../../api/category.api";
import toast from "react-hot-toast";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { Button } from "../../../shared/designSystem/form/button/Button";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../../../schema/categorySchema";

export type FormValues = {
  name: string;
  description: string;
};

export interface ICategoryData {
  name: string;
  description: string;
}

const RegisterCategoryForm = () => {
  // const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
    },
    resolver: yupResolver(categorySchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      toast.success("Category created successfully");
      reset();
      // queryClient.invalidateQueries({ queryKey: ["createCategory"] });
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          id="name"
          label="Name"
          labelHtmlFor="name"
          placeholder="Category name"
          error={errors.name ? errors.name.message : ""}
          className="w-full p-2 border rounded outline-none border-violet-600"
          {...register("name")}
        />
      </div>

      <div>
        <TextArea
          id="description"
          label="Description"
          labelHtmlFor="description"
          placeholder="Describe Category here..."
          error={errors.description ? errors.description.message : ""}
          className="w-full border border-violet-600 p-2 rounded outline-none min-h-[200px]"
          {...register("description")}
        />
      </div>

      <div className="w-1/4 mt-3 ">
        <Button type="submit">{isPending ? "Submitting" : "Submit"}</Button>
      </div>
    </form>
  );
};

export default RegisterCategoryForm;
