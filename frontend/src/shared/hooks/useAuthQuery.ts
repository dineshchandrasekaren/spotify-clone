import { useAuth } from "@clerk/clerk-react";
import { type UseQueryOptions, useQuery } from "@tanstack/react-query";

export default function useAuthQuery<T>(options: UseQueryOptions<T>) {
  const { isLoaded, isSignedIn } = useAuth();

  return useQuery<T>({
    ...options,
    enabled: isLoaded && isSignedIn && (options.enabled ?? true),
  });
}
