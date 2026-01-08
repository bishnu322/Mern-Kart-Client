import { useForm } from "react-hook-form";
import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";
import BrandDropdown from "./BrandDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { Button } from "../../../shared/designSystem/form/button/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { getProductById, updateProduct } from "../../../api/product.api";
import type { IUpdateProductData } from "../../../types/product.types";
import { useEffect } from "react";

const UpdateProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset, control } =
    useForm<IUpdateProductData>({
      defaultValues: {
        name: "",
        description: "",
        price: 0,
        stock: 0,
        category: "",
        brand: "",
        isFeatured: true,
      },
    });

  // get product by id
  const { data: productData } = useQuery({
    queryKey: ["getProductById"],
    queryFn: () => getProductById(id),
  });

  //* query mutation
  const { mutate } = useMutation({
    mutationFn: (formData: IUpdateProductData) =>
      updateProduct(formData._id, formData),
    mutationKey: ["updateProduct"],
    onSuccess: (response) => {
      toast.success(response.message ?? "Product updated successfully");
      navigate("/admin/product");
    },
    onError: (error) => {
      toast.error(error.message ?? "Product update failed!");
    },
  });

  useEffect(() => {
    if (productData?.data) {
      const product = productData.data;
      reset({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        isFeatured: product.isFeatured,
      });
      // setValue("category", product.category)
    }
  }, [reset, productData]);

  const onSubmit = (formData: IUpdateProductData) => {
    mutate({ ...formData, _id: id as string });
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
            <BrandDropdown control={control} />
          </div>

          {/* category dropdown */}
          <div>
            <CategoryDropdown control={control} />
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
