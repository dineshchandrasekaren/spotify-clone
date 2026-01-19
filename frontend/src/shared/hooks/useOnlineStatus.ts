import { useEffect, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handler = (status: boolean) => () => setIsOnline(status);
    window.addEventListener("online", handler(true));
    window.addEventListener("offline", handler(false));

    return () => {
      window.removeEventListener("online", handler(true));
      window.removeEventListener("offline", handler(false));
    };
  }, []);

  return isOnline;
}
