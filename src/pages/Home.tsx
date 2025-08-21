// import Header from "../components/header";

import Footer from "../components/footer/Footer";
import Header from "../components/header";
import FeaturedProduct from "../components/landing/FeaturedProduct";
import Hero from "../components/landing/Hero";

const Home = () => {
  return (
    <div className=" bg-gray-50 w-full">
      <Header />
      <Hero />
      {/* <Header /> */}
      {/* <img src={heroImg} className="w-screen h-[80vh]" alt="heroImg" /> */}
      {/* home section */}
      {/* footer section */}

      <div className="px-10 py-5 h-100">
        <FeaturedProduct />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
