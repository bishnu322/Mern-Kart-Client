import { Input } from "../../../shared/designSystem/form/input/Input";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";
import { Button } from "../../../shared/designSystem/form/button/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getBrandById, UpdateBrand } from "../../../api/brand.api";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";

export interface IBrandType {
  brand_name: string;
  logo?: FileList;
  description: string;
}
export type FormValues = {
  brand_name: string;
  logo?: FileList;
  description: string;
};

//* brand form
const BrandUpdate = () => {
  const { id } = useParams();

  //* brand query
  const { data, isLoading } = useQuery({
    queryFn: () => getBrandById(id as string),
    queryKey: ["getBrandById", id],
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      brand_name: "",
      description: "",
    },
  });

  // populate form when query returns
  useEffect(() => {
    if (data?.data) {
      const brand = data.data;
      reset({
        brand_name: brand.brand_name,
        description: brand.description,
      });
    }
  }, [data, reset]);

  //*brand mutation
  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => UpdateBrand(id as string, data),
    mutationKey: ["updateBrand"],
    onSuccess: () => {
      toast.success("Brand updated...");
    },
    onError: (error) => {
      toast.error(error.message ?? "Unable to update brand!");
    },
  });

  //* handling brand form
  const onSubmit = (formData: FormValues) => {
    // pass raw form values to API; API builds FormData and handles optional logo
    mutate(formData);
  };

  if (isLoading) return <div>Loading..</div>;

  return (
    <>
      <AdminBodyTitle>Brand Update Field</AdminBodyTitle>
      <form
        className="w-full h-screen flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid  gap-2 sm:grid-cols-2">
          {/* brand name field */}
          <div>
            <Input
              label="Name"
              id="brand_name"
              placeholder="Brand name"
              className="w-full border border-violet-600 p-2 rounded outline-none"
              {...register("brand_name")}
              error={errors.brand_name ? errors.brand_name.message : ""}
            />
          </div>

          {/* brand logo field */}
          <div>
            <Input
              label="Brand logo"
              id="logo"
              placeholder="Brand image"
              type="file"
              className="w-full border border-dashed border-violet-600 p-2 rounded outline-none"
              {...register("logo")}
              error={errors.logo ? errors.logo.message : ""}
            />
          </div>
        </div>

        {/* brand description field */}
        <div className="w-full grid">
          <TextArea
            label="Brand description"
            id="description"
            placeholder="Add brand description"
            className="min-h-[200px] border border-violet-600 p-2 rounded outline-none"
            {...register("description")}
            error={errors.description ? errors.description.message : ""}
          />
        </div>

        <div className="mt-3 w-1/4">
          <Button type="submit">{isPending ? "Updating" : "Update"}</Button>
        </div>
      </form>
    </>
  );
};

export default BrandUpdate;
