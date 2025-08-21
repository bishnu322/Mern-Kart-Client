import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";

const query_client = new QueryClient();

interface IProps {
  children: React.ReactNode;
}

const ReactQueryClientProvider: React.FC<IProps> = ({ children }) => {
  return (
    <QueryClientProvider client={query_client}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
