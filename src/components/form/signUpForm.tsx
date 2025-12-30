/* eslint-disable @typescript-eslint/no-explicit-any */
import { strings } from "../../strings";
import { useForm } from "react-hook-form";
import { Input } from "../../shared/designSystem/form/input/Input";
import { Button } from "../../shared/designSystem/form/button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ISignup } from "../../types/auth.types";
import { signUpSchema } from "../../schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../../api/auth.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const { signUp } = strings;

const SignUpForm = () => {
  const navigate = useNavigate();
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
      confirm_password: "",
    },
    resolver: yupResolver(signUpSchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: signUpApi,

    onSuccess: (response: any) => {
      toast.success(response?.message ?? "sign up successful");
      navigate("/login", { replace: true });
    },
    onError: (error: any) => {
      toast.error(error?.message ?? "sign up failed");
    },
    mutationKey: ["signup_mutation"],
  });

  const signUpFormSubmitHandler = async (data: ISignup) => {
    mutate(data);
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
            type="confirm_password"
            id="confirm_password"
            placeholder={signUp.placeholder.confirm_password}
            value={watch("confirm_password")}
            error={
              errors.confirm_password ? errors.confirm_password.message : ""
            }
            {...register("confirm_password")}
            label={signUp.confirm_password}
            labelHtmlFor="confirm_password"
            required
          />

          {/* form submit button */}

          <div className="w-full mt-3">
            <Button
              type="submit"
              children={signUp.signUpButton}
              disabled={isPending}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
