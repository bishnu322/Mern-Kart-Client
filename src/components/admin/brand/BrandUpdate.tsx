import { Input } from "../../../shared/designSystem/form/input/Input";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";
import { Button } from "../../../shared/designSystem/form/button/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getBrandById, UpdateBrand } from "../../../api/brand.api";
// import toast from "react-hot-toast";
import { useParams } from "react-router";
import toast from "react-hot-toast";

export interface IBrandType {
  brand_name: string;
  logo: FileList;
  description: string;
}
export type FormValues = {
  brand_name: string;
  logo: FileList;
  description: string;
};

//* brand form
const BrandUpdate = () => {
  const { id } = useParams();

  //* brand query

  const { data } = useQuery({
    queryFn: () => getBrandById(id as string),
    queryKey: ["getBrandById", id],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBrandType>();

  //*brand mutation
  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => UpdateBrand(id as string, data),
    mutationKey: ["createBrand"],
    onSuccess: () => {
      toast.success("Brand updated...");
    },
    onError: (error) => {
      toast.error(error.message ?? "Unable to update brand!");
    },
  });
  // console.log(watch);
  console.log(data);

  //* handling brand form
  const onSubmit = (formData: FormValues) => {
    mutate(formData);
  };

  return (
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
  );
};

export default BrandUpdate;
