import http from "@/shared/lib/axios.lib";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const updateTokenInstance = (token: string | null) => {
  if (token) {
    http.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common.Authorization;
  }
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const initAuth = () => {
      setLoading(true);
      getToken()
        .then((token) => {
          updateTokenInstance(token);
        })
        .catch((e) => {
          updateTokenInstance(null);
          console.log("Error at auth", e.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    initAuth();
  }, [getToken]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <Loader className="size-8 text-emerald-400 animate-spin" />
      </div>
    );
  }

  return children;
};

export default AuthProvider;
