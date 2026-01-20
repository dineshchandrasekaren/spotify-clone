import QUERYKEY from "@/app/constants/query.constant";
import albumApi from "./album.api";
import type { Album } from "./album.types";
import useAuthQuery from "@/shared/hooks/useAuthQuery";

export const useAlbums = () => {
  return useAuthQuery<Album[]>({
    queryKey: QUERYKEY.album,
    queryFn: albumApi.getAllAlbums,
  });
};
export const useAlbum = (id: string) => {
  return useAuthQuery<Album>({
    queryKey: [...QUERYKEY.album, id],
    queryFn: () => albumApi.getById(id!),
    enabled: !!id,
  });
};
