import { Card, CardContent } from "@/shared/ui/card";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthCallback } from "./authcallback.hook";
const AuthCallbackPage = () => {
  const navigate = useNavigate();
  useAuthCallback(() => {
    navigate("/");
  });
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
