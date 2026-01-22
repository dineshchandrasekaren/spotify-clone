import http from "@/shared/lib/axios.lib";
import type { User } from "./user.types";
import ALL_API from "@/shared/apis";
class UserApi {
  getAllUsers() {
    return http
      .get<{ data: User }>(ALL_API.user.allUser)
      .then((res) => res.data.data);
  }
}

export default new UserApi();
