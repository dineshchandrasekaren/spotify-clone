import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import AuthCallbackPage from "./features/authentication/auth-callback.page";
import HomePage from "./pages/home.page";
import MainLayout from "./components/layout/main-layout.component";
import Chat from "./features/message/chat.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="chat" element={<Chat />} />
      </Route>
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
