/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";
import BrandDropdown from "./BrandDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { Button } from "../../../shared/designSystem/form/button/Button";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../../../api/product.api";
import toast from "react-hot-toast";

const AddProductForm = () => {
  const { register, handleSubmit, reset } = useForm({});

  //* query mutation
  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    mutationKey: ["createProduct"],
    onSuccess: (response) => {
      toast.success(response.message ?? "Product created successfully");
      reset();
    },
    onError: (error) => {
      toast.error(error.message ?? "Product creation failed!");
    },
  });

  const onSubmit = (formData: any) => {
    mutate(formData);
  };

  return (
    <>
      <AdminBodyTitle>Add Product Form</AdminBodyTitle>
      <form className="grid text-sm gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {/* product name */}
          <div>
            <Input
              label="Name"
              type="text"
              placeholder="Product name"
              id="name"
              labelHtmlFor="name"
              className="w-full border border-violet-600 p-2 rounded outline-none"
              {...register("name")}
            />
          </div>

          {/* price */}
          <div>
            <Input
              label="Price"
              type="number"
              placeholder="Product price"
              id="price"
              labelHtmlFor="price"
              className="w-full border border-violet-600 p-2 rounded outline-none"
              {...register("price")}
            />
          </div>

          {/* stock */}
          <div>
            <Input
              label="Stock"
              type="number"
              placeholder="Product stock"
              id="stock"
              labelHtmlFor="stock"
              className="w-full border border-violet-600 p-2 rounded outline-none"
              {...register("stock")}
            />
          </div>

          {/* brand dropdown */}
          <div>
            <BrandDropdown register={register} />
          </div>

          {/* category dropdown */}
          <div>
            <CategoryDropdown register={register} />
          </div>

          {/* featured as a boolean */}
          <div>
            <label
              htmlFor="isFeatured"
              className="text-gray-800 font-semibold text-lg"
            >
              Featured
            </label>
            <select
              // name="isFeatured"/
              id="isFeatured"
              className="w-full border border-violet-600 p-2 rounded outline-none"
              defaultValue="true"
              {...register("isFeatured")}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>

          {/* cover_img */}

          <div>
            <Input
              label="Product Cover image"
              id="cover_img"
              placeholder="Product cover image"
              type="file"
              className="w-full border border-dashed border-violet-600 p-2 rounded outline-none"
              {...register("cover_img")}
              // {...register("logo")}
              // error={errors.logo ? errors.logo.message : ""}
            />
          </div>
          {/* images */}
          <div>
            <Input
              label="Product images"
              id="images"
              placeholder="Product images"
              type="file"
              className="w-full border border-dashed border-violet-600 p-2 rounded outline-none"
              {...register("images")}
              multiple
              // {...register("logo")}
              // error={errors.logo ? errors.logo.message : ""}
            />
          </div>
        </div>

        <div>
          {/* product description */}
          <TextArea
            label="Description"
            placeholder="Product description..."
            id="description"
            labelHtmlFor="description"
            className="min-h-[200px]  w-full border border-violet-600 p-2 rounded outline-none"
            {...register("description")}
          />
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Submitting" : "Submit"}
        </Button>
      </form>
    </>
  );
};

export default AddProductForm;
