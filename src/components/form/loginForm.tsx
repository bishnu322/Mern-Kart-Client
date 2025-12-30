import { strings } from "../../strings";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { IloginData } from "../../types/auth.types";
import { loginSchema } from "../../schema/auth.schema";
import { Input } from "../../shared/designSystem/form/input/Input";
import { Button } from "../../shared/designSystem/form/button/Button";
import { loginApi } from "../../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../context/auth.context";

const { login } = strings;

const LoginForm = () => {
  const { setUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const navigate_to = location.state?.from ?? "/";

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (response: any) => {
      toast.success(response?.message ?? "login success");
      localStorage.setItem("user", JSON.stringify(response.data.data));
      // localStorage.setItem("token", response.data.access_token);
      setUser(response.data.data);
      // setToken(response.data.access_token);
      navigate(navigate_to, { replace: true });
    },
    onError: (error) => {
      toast.error(error?.message ?? "login failed");
    },
    mutationKey: ["login_mutation"],
  });

  const onSubmit = (data: IloginData) => {
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3 flex flex-col gap-4">
          {/* input field for email  */}

          <div className="flex flex-col gap-1">
            <Input
              type="text"
              id="email"
              placeholder={login.placeholder.email}
              value={watch("email")}
              error={errors.email ? errors.email.message : ""}
              {...register("email")}
              label={login.email}
              labelHtmlFor="email"
              required
            />
          </div>

          {/* input field for password */}

          <div className="flex flex-col gap-2">
            <Input
              type="password"
              id="password"
              placeholder={login.placeholder.password}
              value={watch("password")}
              error={errors.password ? errors.password.message : ""}
              {...register("password")}
              label={login.password}
              labelHtmlFor="password"
              required
            />
          </div>

          {/* login button */}

          <div className="w-full mt-3">
            <Button
              type="submit"
              disabled={isPending}
              children={login.logInButton}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
