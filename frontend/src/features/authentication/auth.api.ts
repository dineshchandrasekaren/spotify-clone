import ALL_API from "@/shared/apis";
import http from "@/shared/lib/axios.lib";

export const AuthCallback = (data: any, signal: any) =>
  http.post(ALL_API.auth.callback, data, { signal });
