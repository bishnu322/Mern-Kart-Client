import PageHeader from "../../../components/admin/header/PageHeader";
import AdminBodyWrapper from "../../../components/admin/form/AdminBodyWrapper";
import BrandUpdate from "../../../components/admin/brand/BrandUpdate";

const EditBrand = () => {
  // params are available via useParams if needed
  return (
    <main>
      <PageHeader
        title="Update Brand"
        subTitle="Update required brand field"
        buttonText="Brand list"
        linkTo="/admin/brand"
      />
      <AdminBodyWrapper>
        <BrandUpdate />
      </AdminBodyWrapper>
    </main>
  );
};

export default EditBrand;
