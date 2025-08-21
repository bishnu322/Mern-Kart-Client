import SignUpForm from "../../components/form/signUpForm";
import { strings } from "../../strings";

const SignUp = () => {
  return (
    <main className="flex justify-center items-center h-full w-screen bg-gray-50">
      <div className="min-h-[400px]   min-w-[500px]  rounded-lg shadow-violet-800 shadow-2xl p-6 bg-white">
        <h1 className="text-violet-800 text-2xl font-bold text-center">
          {strings.signUp.title}
        </h1>

        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
