import { Link } from "react-router";
import SignUpForm from "../../components/form/signUpForm";
import { strings } from "../../strings";

const SignUp = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <div className="min-h-[400px]   min-w-[500px]  rounded-lg shadow-violet-800 shadow-2xl p-6 bg-white">
        <h1 className="text-2xl font-bold text-center text-violet-800">
          {strings.signUp.title}
        </h1>

        <SignUpForm />

        <div className="m-2 text-center  text-md">
          Have an account?
          <span className="mx-2 font-bold cursor-pointer text-violet-500">
            <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
