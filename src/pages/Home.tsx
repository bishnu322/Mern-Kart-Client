// import Header from "../components/header";
import FeaturedProduct from "../components/landing/FeaturedProduct";
import Hero from "../components/landing/Hero";

const Home = () => {
  return (
    <div className=" bg-gray-50 w-full">
      <Hero />

      <div className="px-10 py-5 h-100">
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default Home;
