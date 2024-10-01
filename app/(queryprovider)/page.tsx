"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Data from "../components/Data";

export default function HomePage() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Data />
    </QueryClientProvider>
  );
}
