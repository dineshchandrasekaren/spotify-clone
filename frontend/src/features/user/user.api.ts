import http, { type AxiosResponse } from "@/shared/lib/axios.lib";
import type { User } from "./user.types";
class UserApi {
  getAllUsers() {
    return http.get("/user").then((res: AxiosResponse<{ data: User }>) => {
      return res.data.data;
    });
  }
}

export default new UserApi();
