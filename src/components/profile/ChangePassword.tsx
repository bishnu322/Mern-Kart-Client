
import {Input} from "../../shared/designSystem/form/input/Input.tsx";
import { useForm} from "react-hook-form";

interface FieldValues {
    email: string;
    old_password: string;
    new_password: string;
}

const ChangePassword = () => {

    const {register, watch, handleSubmit} = useForm<FieldValues>({})

    const submitForm = (data:{email:string, old_password:string, new_password:string}) =>{
        console.log("onSubmit",data)
    }


    console.log(watch)

  return (
      <main className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full`}>

          <form className={`sm:col-span-1 md:grid-cols-1 grid gap-2 w-full`} onClick={handleSubmit(submitForm)}>
              <Input
                  label={`Enter E-mail`}
                  labelHtmlFor={`E-mail`}
                  className={`w-full border border-violet-600 rounded p-2 outline-none`}
                  placeholder={`Enter E-mail`}
                  id="email"
                  {...register("email")}
                  required
              />

              <Input
                  label={`Enter Old Password`}
                  labelHtmlFor={`Old Password`}
                  className={`w-full border border-violet-600 rounded p-2 outline-none`}
                  placeholder={`Enter Old Password`}
                  id="old_password"
                  {...register("old_password")}
                  required

              />
              <Input
                  label={`Enter New Password`}
                  labelHtmlFor={`Confirm New Password`}
                  className={`w-full border border-violet-600 rounded p-2 outline-none`}
                  placeholder={`Confirm New Password`}
                  id="new_password"
                  {...register("new_password")}
                  required
              />

              <button
                  type="submit"
                  className={` w-50 text-sm bg-violet-600 text-gray-100 p-2 rounded hover:bg-violet-700 cursor-pointer font-semibold transition-all duration-200`}>Change Password</button>
          </form>

          <div className={`sm:col-span-1 my-10 text-gray-600 px-5`}>
              <h1 className={`text-md font-semibold`}>Password Policy</h1>

              <ul className={`list-disc mx-auto flex flex-col gap-1 mt-3`}>
                  <li>At Least 3 Number of lowercase letters in password</li>
                  <li>Password Maximum Length is 15</li>
                  <li>Password Minimum Length is 4</li>
              </ul>
          </div>
      </main>
  );
};

export default ChangePassword;
