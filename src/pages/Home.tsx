// import Header from "../components/header";
import CategoryList from "../components/landing/category";
import FeaturedProduct from "../components/landing/product/FeaturedProduct";
import Hero from "../components/landing/Hero";

const Home = () => {
  return (
    <div className=" bg-white w-full">
      <Hero />

      <CategoryList />
      <div className="px-5 py-5 min-h-full">
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default Home;
