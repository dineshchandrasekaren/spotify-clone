import { Button } from "@/components/ui/button";
import { useSignIn } from "@clerk/clerk-react";

const GoogleAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();

  return (
    <Button
      variant="secondary"
      className="w-full text-white border-zinc-200 h-11"
      onClick={() => {
        if (!isLoaded) return;

        try {
          signIn?.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback",
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          console.error("OAuth sign in error", e);
        }
      }}
    >
      GoogleAuthButton
    </Button>
  );
};

export default GoogleAuthButton;
