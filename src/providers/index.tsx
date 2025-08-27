import React, { Children } from "react";
import ReactQueryClientProvider from "./QueryClientProvider";
import AuthProvider from "../context/auth.context";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryClientProvider>
  );
};

export default Providers;
