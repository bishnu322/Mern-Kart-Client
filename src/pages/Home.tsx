// import Header from "../components/header";
// import CategoryList from "../components/landing/category";
import FeaturedProduct from "../components/landing/product/FeaturedProduct";
import Hero from "../components/landing/Hero";
import CategoryList from "../components/landing/category";

const Home = () => {
  return (
    <div className="w-full  bg-gray-50">
      <Hero />

      <CategoryList />

      <div className="min-h-full px-5 py-5">
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default Home;
