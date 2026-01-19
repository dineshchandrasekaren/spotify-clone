import QUERYKEY from "@/app/constants/query_key";
import { useQuery } from "@tanstack/react-query";
import albumApi from "./album.api";
import type { Album } from "./album.types";

export const useAlbums = () => {
  return useQuery({
    queryKey: QUERYKEY.album,
    queryFn: albumApi.getAllAlbums,
  });
};
export const useAlbum = (id: string) => {
  return useQuery<Album>({
    queryKey: [...QUERYKEY.album, id],
    queryFn: () => albumApi.getById(id!),
    enabled: !!id,
  });
};
