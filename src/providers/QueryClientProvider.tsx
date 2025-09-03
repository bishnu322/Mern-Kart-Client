import { QueryClientProvider } from "@tanstack/react-query";
import type React from "react";
import { query_client } from "./queryClient";

interface IProps {
  children: React.ReactNode;
}

const ReactQueryClientProvider: React.FC<IProps> = ({ children }) => {
  return (
    <QueryClientProvider client={query_client}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
