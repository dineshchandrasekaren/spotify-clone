// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   useAuth,
//   UserButton,
// } from "@clerk/clerk-react";
// function App() {
//   const { isSignedIn } = useAuth();
//   console.log(isSignedIn);

//   return (
//     <header>
//       <SignedOut>
//         <SignInButton>Loosu</SignInButton>
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </header>
//   );
// }

// export default App;

import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import AuthCallbackPage from "./features/authentication/AuthCallbackPage";
import HomePage from "./pages/Home.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/sso-callback"
        element={
          <AuthenticateWithRedirectCallback
            signInForceRedirectUrl={"/auth-callback"}
          />
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
    </Routes>
  );
}

export default App;
