import { QueryClient } from "@tanstack/react-query";

// Simplified query client for SSG - no server API calls needed
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});
