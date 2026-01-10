import { Link } from "react-router";
import heroImg from "../../assets/heroimg3.jpg";

const Hero = () => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="relative w-full h-full">
        <img
          src={heroImg}
          className="object-cover w-full h-full"
          alt="Shopping experience"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content section */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4 md:mb-5">
            Where Deals Meets Desire
          </h1>
          <p className="max-w-2xl mx-auto mb-4 text-base font-semibold text-gray-100 sm:text-lg md:text-xl sm:mb-6 md:mb-8">
            Endless choices, one-click ease!
          </p>
          <Link
            to={"/products"}
            className="px-4 py-2 text-sm font-bold text-white rounded-lg cursor-pointer sm:px-5 sm:py-3 md:px-6 md:py-3 bg-violet-600 hover:bg-violet-700 transition-colors duration-300 sm:text-base md:text-lg"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
