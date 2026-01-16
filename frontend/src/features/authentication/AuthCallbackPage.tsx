import { Card, CardContent } from "@/components/ui/card";
import asynchronous from "@/helper/async.helper";
import http from "@/lib/axios.lib";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
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
          { signal: abortController.signal }
        );
        navigate("/");
      },
      (e) => {
        console.log("auth failed", e || "");
        alert("auth failed");
      }
    )();

    return () => {
      abortController.abort();
    };
  }, [user, isLoaded]);
  return (
    <div className="flex-center w-full bg-black">
      <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
        <CardContent className="flex flex-col items-center gap-4 pt-6">
          <Loader className="size-8 text-emerald-400 animate-spin" />
          <h3 className="text-xl font-bold text-zinc-400">You Logging in</h3>
          <p className="text-sm text-zinc-400">Redirecting...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallbackPage;
