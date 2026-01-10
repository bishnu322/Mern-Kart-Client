import CountCard from "../../components/admin/dashboard/CountCard";

const Dashboard = () => {
  return (
    <main className="flex flex-wrap items-center justify-items-start gap-3 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4">
      <CountCard label={"Products"} count={1000} />
      <CountCard label={"Categories"} count={50} />
      <CountCard label={"Orders"} count={200} />
      <CountCard label={"Users"} count={1500} />
      <CountCard label={"Brands"} count={30} />
      <CountCard label={"Admins"} count={20} />
    </main>
  );
};

export default Dashboard;
