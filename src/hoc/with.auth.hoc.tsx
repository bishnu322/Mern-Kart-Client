import type { ComponentType } from "react";
import { useAuth } from "../context/auth.context";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/loader/loader";

// Define Role type, adjust as needed for your app
type Role = string;

export function withAuth<T extends object>(
  Component: ComponentType<T>,
  roles: Role[]
) {
  return function ProtectedComponent(props: T & React.Attributes) {
    const { isLoading, user } = useAuth();

    const location = useLocation();

    if (isLoading) {
      return <Loader />;
    }

    if (!user) {
      toast.error("you need to login first");
      return (
        <Navigate
          to={"/login"}
          replace={true}
          state={{ from: location.pathname }}
        />
      );
    }

    if (roles && !roles.includes(user.role)) {
      toast.error("Unauthorized, you cannot access this route ");
      return (
        <Navigate
          to={"/login"}
          replace={true}
          state={{ from: location.pathname }}
        />
      );
    }

    // role based
    // If you want to use roles, pass it as an argument or remove this block
    // Example: const roles = ['admin']; // or get from props/context

    // if (roles && !roles.includes(user.role)) {
    //     toast.error("Unauthorized");
    //     return <Navigate to={'/unauthorized'} />;
    // }

    return <Component {...props} />;
  };
}
