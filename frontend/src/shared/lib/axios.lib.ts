import axios from "axios";
const http = axios.create({ baseURL: "http://localhost:5000/api" });
const waitForClerk = async () => {
  if (window.Clerk?.loaded) return;

  await new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (window.Clerk?.loaded) {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
};

http.interceptors.request.use(async (config) => {
  await waitForClerk();

  const token = await window.Clerk?.session?.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      if (window.Clerk) {
        await window.Clerk.signOut();
      }
      return;
    }
    const message =
      error.response?.data?.message || error.message || "Something went wrong";

    return Promise.reject(new Error(message));
  },
);
export default http;
