import GoogleAuthButton from "@/features/authentication/GoogleAuthButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const Admin = true;
  return (
    <div className="flex bg-zinc-900/75 items-center justify-between sticky t-0 p-4 backdrop-blur-md z-10 ">
      <h1 className="flex gap-2 items-center">Spotify</h1>

      <div className="flex gap-4 items-center">
        {Admin ? (
          <Link to="/admin">
            <LayoutDashboardIcon className="size-4 mr-2" />
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
