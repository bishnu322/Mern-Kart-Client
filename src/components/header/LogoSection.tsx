import { Link } from "react-router";
import logo from "../../assets/logo.png";

const LogoSection = () => {
  return (
    <Link to="/" className="w-12 md:w-16 lg:w-[70px]">
      <img src={logo} alt="MERN Kart Logo" className="w-full" />
    </Link>
  );
};

export default LogoSection;
