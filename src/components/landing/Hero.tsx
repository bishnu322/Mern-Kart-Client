import { Link } from "react-router";
import heroImg from "../../assets/heroimg3.jpg";

const Hero = () => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="relative h-full w-full">
        <img
          src={heroImg}
          className="w-full h-full object-cover"
          alt="Shopping experience"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content section */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5">
            Where Deals Meets Desire
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 font-semibold mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Endless choices, one-click ease!
          </p>
          <Link
            to={"/products"}
            className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg cursor-pointer transition-colors duration-300 text-sm sm:text-base md:text-lg"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
