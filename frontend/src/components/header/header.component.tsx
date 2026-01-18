import GoogleAuthButton from "@/features/authentication/components/google-button.component";
import { cn } from "@/shared/lib/utils";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../../shared/ui/button";

const Header = () => {
  const { user, isLoaded } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  return (
    <div className="flex bg-zinc-900/75 items-center justify-between sticky t-0 p-4 backdrop-blur-md z-10 ">
      <h1 className="flex gap-3 items-center font-black">
        {" "}
        <img src="/spotify.png" alt="Logo" className="size-8" /> Spotify
      </h1>

      <div className="flex gap-4 items-center">
        {isAdmin && isLoaded ? (
          <Link
            to="/admin"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <LayoutDashboardIcon className="size-4 mr-2" /> Admin Dashboard
          </Link>
        ) : (
          ""
        )}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <GoogleAuthButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
