import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
function App() {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);

  return (
    <header>
      <SignedOut>
        <SignInButton>Loosu</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

export default App;
