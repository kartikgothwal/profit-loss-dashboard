import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { JSX } from "react";
import { Toaster } from "react-hot-toast";
const queryClient: QueryClient = new QueryClient();

const Provider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
};

export default Provider;
