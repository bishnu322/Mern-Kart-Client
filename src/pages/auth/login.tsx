import { Link } from "react-router";
import LoginForm from "../../components/form/loginForm";
import { strings } from "../../strings";

const Login = () => {
  return (
    <main className="bg-gray-50 h-screen w-full flex justify-center items-center sm:w-full">
      <div className="bg-white min-h-[400px]  p-6 rounded-md shadow-violet-800 shadow-2xl sm:w-[500px] ">
        <h1 className="text-2xl font-bold text-violet-800 text-center">
          {strings.login.title}
        </h1>
        <LoginForm />
        {/* for signup routing */}
        <div className="text-center m-2  text-md">
          Don't have an account?
          <span className="text-violet-500 font-bold cursor-pointer mx-2">
            <Link to={"/signup"}>Sign Up</Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Login;
