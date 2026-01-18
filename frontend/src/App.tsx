import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import AuthCallbackPage from "./features/authentication/auth-callback.page";
import HomePage from "./pages/home.page";
import MainLayout from "./components/layout/main-layout.component";
import Chat from "./features/message/chat.component";
import { useOnlineStatus } from "./shared/hooks/useOnlineStatus";
import { useEffect, useState } from "react";

function App() {
  const [showStatus, setShowStatus] = useState(false);
  const isOnline = useOnlineStatus();
  useEffect(() => {
    setTimeout(() => {
      setShowStatus(!isOnline);
    }, 2000);
  }, [isOnline]);
  return (
    <>
      {showStatus && (
        <div
          className={` w-full font-bold z-20 sticky top-0 py-0.5 text-center  ${isOnline ? "bg-emerald-700" : "bg-red-500"}`}
        >
          {isOnline ? "Back to online." : "You are in offline."}
        </div>
      )}
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
    </>
  );
}

export default App;
