import { Input } from "../../../shared/designSystem/form/input/Input";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";
import { Button } from "../../../shared/designSystem/form/button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { brandSchema } from "../../../schema/brandSchema";

interface IBrandType {
  brand_name: string;
  logo: string;
  description: string;
}

const BrandForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IBrandType>({
    resolver: yupResolver(brandSchema),
  });
  console.log(watch);

  const handleFormSubmit = (data: IBrandType) => {
    console.log(data);
  };
  return (
    <form
      className="w-full h-screen flex flex-col gap-2"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="grid  gap-2 sm:grid-cols-2">
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
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default BrandForm;
