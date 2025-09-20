/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";
import BrandDropdown from "./BrandDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { Button } from "../../../shared/designSystem/form/button/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { getProductById, updateProduct } from "../../../api/product.api";
import type { IUpdateProductData } from "../../../types/product.types";

const UpdateProductForm = () => {
  const { id } = useParams();

  console.log(id);
  const { register, handleSubmit } = useForm({});

  //* get product by id

  const { data } = useQuery({
    queryFn: () => getProductById(id as string),
    queryKey: ["getProductById"],
  });

  console.log(data);

  //* query mutation
  const { mutate } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: IUpdateProductData }) =>
      updateProduct(id, data),
    mutationKey: ["createProduct"],
    onSuccess: (response) => {
      toast.success(response.message ?? "Product created successfully");
    },
    onError: (error) => {
      toast.error(error.message ?? "Product creation failed!");
    },
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
    mutate(formData);
  };

  return (
    <>
      <AdminBodyTitle>Update Product Form</AdminBodyTitle>
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

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default UpdateProductForm;
