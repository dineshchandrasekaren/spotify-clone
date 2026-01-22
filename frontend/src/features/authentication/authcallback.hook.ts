import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import http from "@/shared/lib/axios.lib";
import asynchronous from "@/shared/utils/async.util";

export function useAuthCallback(callback: () => void) {
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (!isLoaded || !user) return;
    const abortController = new AbortController();

    asynchronous(
      async () => {
        await http.post(
          "/auth/callback",
          {
            id: user?.id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            imageUrl: user?.imageUrl,
            email: user?.emailAddresses[0].emailAddress,
          },
          { signal: abortController.signal },
        );
        await callback();
      },
      (e) => {
        console.log("auth failed", e || "");
        alert("auth failed");
      },
    )();

    return () => {
      abortController.abort();
    };
  }, [user, isLoaded]);
}
