import AdminBodyTitle from "../../../shared/designSystem/AdminBodyTitle";
import Dropdown from "../../../shared/designSystem/form/input/Dropdown";
import { Input } from "../../../shared/designSystem/form/input/Input";
import { TextArea } from "../../../shared/designSystem/form/input/TextArea";

const AddProductForm = () => {
  const data = [
    {
      _id: "1",
      name: "asd",
    },
    {
      _id: "2",
      name: "asd2",
    },
    {
      _id: "3",
      name: "asd3",
    },
  ];
  return (
    <>
      <AdminBodyTitle>Add Product Form</AdminBodyTitle>
      <form className="grid text-sm">
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {/* product name */}
          <div>
            <Input
              label="Name"
              type="text"
              placeholder="product name"
              id="name"
              labelHtmlFor="name"
              className="w-full border border-violet-600 p-2 rounded outline-none"
            />
          </div>

          {/* price */}
          <div>
            <Input
              label="Price"
              type="number"
              placeholder="product price"
              id="price"
              labelHtmlFor="price"
              className="w-full border border-violet-600 p-2 rounded outline-none"
            />
          </div>

          {/* stock */}
          <div>
            <Input
              label="Stock"
              type="number"
              placeholder="product stock"
              id="stock"
              labelHtmlFor="stock"
              className="w-full border border-violet-600 p-2 rounded outline-none"
            />
          </div>

          {/* brand dropdown */}
          <div>
            <Dropdown label="Brand" labelFor="brand" name="brand" data={data} />
          </div>

          {/* category dropdown */}
          <div>
            <Dropdown label="Category" labelFor="category" name="category" />
          </div>
          {/* featured as a boolean */}
          <div>
            <Dropdown label="Featured" labelFor="featured" name="featured" />
          </div>
        </div>

        {/* cover_img */}
        {/* images */}
        <div>
          {/* product description */}
          <TextArea
            label="Description"
            placeholder="product description..."
            id="description"
            labelHtmlFor="description"
            className="w-full border border-violet-600 p-2 rounded outline-none"
          />
        </div>
      </form>
    </>
  );
};

export default AddProductForm;
