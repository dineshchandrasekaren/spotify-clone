import { Button } from "@/shared/ui/button";
import { useSignIn } from "@clerk/clerk-react";

const GoogleAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();

  return (
    <Button
      variant={"secondary"}
      className="w-full text-white border-zinc-200 h-11"
      onClick={() => {
        if (!isLoaded) return;

        try {
          signIn?.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback",
          });
        } catch (e: any) {
          console.error("OAuth sign in error", e);
        }
      }}
    >
      <img src="/google.png" alt="google-login logo" className="size-5" />
      <span className="hidden md:inline">Continue with Google</span>
    </Button>
  );
};

export default GoogleAuthButton;
