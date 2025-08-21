import { strings } from "../../strings";
import { useForm } from "react-hook-form";
import { Input } from "../../shared/designSystem/form/input/Input";
import { Button } from "../../shared/designSystem/form/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const { signUp } = strings;

interface ISignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const signUpSchema = yup.object({
  firstName: yup.string().required("first name cannot be empty"),
  lastName: yup.string().required("last name cannot be empty"),
  phoneNumber: yup.string().required("phone number is required"),
  email: yup
    .string()
    .required("email is required")
    .email("invalid email format"),
  password: yup.string().required("password is required"),
  confirmPassword: yup.string().required("password is required"),
});

const SignUpForm = () => {
  // const [signUpFormData, setSignUpFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   phoneNumber: "",
  // });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
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
            {/* for firstName */}

            <Input
              type="text"
              id="firstName"
              placeholder={signUp.placeholder.firstName}
              value={watch("firstName")}
              error={errors.firstName ? errors.firstName.message : ""}
              {...register("firstName")}
              label={signUp.firstName}
              labelHtmlFor="firstName"
              required
            />
          </div>
          {/* for lastName */}

          <Input
            type="text"
            id="lastName"
            placeholder={signUp.placeholder.lastName}
            value={watch("lastName")}
            error={errors.lastName ? errors.lastName.message : ""}
            {...register("lastName")}
            label={signUp.lastName}
            labelHtmlFor="lastName"
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

          {/* for phoneNumber */}

          <Input
            type="number"
            id="phoneNumber"
            placeholder={signUp.placeholder.phoneNumber}
            value={watch("phoneNumber")}
            error={errors.phoneNumber ? errors.phoneNumber.message : ""}
            {...register("phoneNumber")}
            label={signUp.phoneNumber}
            labelHtmlFor="phoneNumber"
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
