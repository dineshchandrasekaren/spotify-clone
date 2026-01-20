import userApi from "./user.api";
import useAuthQuery from "@/shared/hooks/useAuthQuery";
import type { User } from "./user.types";
import QUERYKEY from "@/app/constants/query.constant";

export const useUsers = () =>
  useAuthQuery<User[]>({
    queryKey: QUERYKEY.user,
    queryFn: userApi.getAllUsers,
  });
