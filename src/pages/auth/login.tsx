import { Link } from "react-router";
import LoginForm from "../../components/form/loginForm";
import { strings } from "../../strings";

const Login = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen bg-gray-50 sm:w-full">
      <div className="bg-white min-h-[400px]  p-6 rounded-md shadow-violet-800 shadow-2xl sm:w-[500px] ">
        <h1 className="text-2xl font-bold text-center text-violet-800">
          {strings.login.title}
        </h1>
        <LoginForm />
        {/* for signup routing */}
        <div className="m-2 text-center  text-md">
          Don't have an account?
          <span className="mx-2 font-bold cursor-pointer text-violet-500">
            <Link to={"/signup"}>Sign Up</Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Login;
