import { strings } from "../../strings";
import { useForm } from "react-hook-form";
import { Input } from "../../shared/designSystem/form/input/Input";
import { Button } from "../../shared/designSystem/form/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const { signUp } = strings;

interface ISignup {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  confirmPassword: string;
}

const signUpSchema = yup.object({
  first_name: yup.string().required("first name cannot be empty"),
  last_name: yup.string().required("last name cannot be empty"),
  phone_number: yup.string().required("phone number is required"),
  email: yup
    .string()
    .required("email is required")
    .email("invalid email format"),
  password: yup.string().required("password is required"),
  confirmPassword: yup.string().required("password is required"),
});

const SignUpForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone_number: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signUpSchema),
    mode: "all",
  });

  const signUpFormSubmitHandler = async (data: ISignup) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(signUpFormSubmitHandler)}>
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            {/* for first_name */}

            <Input
              type="text"
              id="first_name"
              placeholder={signUp.placeholder.first_name}
              value={watch("first_name")}
              error={errors.first_name ? errors.first_name.message : ""}
              {...register("first_name")}
              label={signUp.first_name}
              labelHtmlFor="first_name"
              required
            />
          </div>
          {/* for last_name */}

          <Input
            type="text"
            id="last_name"
            placeholder={signUp.placeholder.last_name}
            value={watch("last_name")}
            error={errors.last_name ? errors.last_name.message : ""}
            {...register("last_name")}
            label={signUp.last_name}
            labelHtmlFor="last_name"
          />

          {/* for email */}

          <Input
            type="email"
            id="email_"
            placeholder={signUp.placeholder.email}
            value={watch("email")}
            error={errors.email ? errors.email.message : ""}
            {...register("email")}
            label={signUp.email}
            labelHtmlFor="email"
            required
          />

          {/* for phone_number */}

          <Input
            type="number"
            id="phone_number"
            placeholder={signUp.placeholder.phone_number}
            value={watch("phone_number")}
            error={errors.phone_number ? errors.phone_number.message : ""}
            {...register("phone_number")}
            label={signUp.phone_number}
            labelHtmlFor="phone_number"
            required
          />

          {/* for password */}

          <Input
            type="password"
            id="password_"
            placeholder={signUp.placeholder.password}
            value={watch("password")}
            error={errors.password ? errors.password.message : ""}
            {...register("password")}
            label={signUp.password}
            labelHtmlFor="password"
            required
          />

          {/* confirm password */}
          <Input
            type="confirmPassword"
            id="confirmPassword"
            placeholder={signUp.placeholder.confirmPassword}
            value={watch("confirmPassword")}
            error={errors.password ? errors.password.message : ""}
            {...register("confirmPassword")}
            label={signUp.confirmPassword}
            labelHtmlFor="confirmPassword"
            required
          />

          {/* form submit button */}

          <div className="w-full mt-3">
            <Button type="submit" children={signUp.signUpButton} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
