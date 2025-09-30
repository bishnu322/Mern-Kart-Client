import AdminBodyWrapper from "../../components/admin/form/AdminBodyWrapper";
import PageHeader from "../../components/admin/header/PageHeader";
import FetchUsers from "../../components/admin/users/FetchUsers";

const User = () => {
  return (
    <main>
      <PageHeader title="All user" subTitle="Detail of users" />
      <AdminBodyWrapper>
        <FetchUsers />
      </AdminBodyWrapper>
    </main>
  );
};

export default User;
