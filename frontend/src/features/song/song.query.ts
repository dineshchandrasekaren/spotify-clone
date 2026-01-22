import { useQuery } from "@tanstack/react-query";
import songApi from "./song.api";
import QUERYKEY from "@/app/constants/query.constant";
export const useSongs = () =>
  useQuery({
    queryKey: QUERYKEY.song.all,
    queryFn: songApi.getAll,
  });
export const useFeaturedSongs = () =>
  useQuery({
    queryKey: QUERYKEY.song.byspecial("getFeaturedSongs"),
    queryFn: songApi.getFeatured,
  });
export const useMadeForYouSongs = () =>
  useQuery({
    queryKey: QUERYKEY.song.byspecial("getMadeForYouSongs"),
    queryFn: songApi.getMadeForYou,
  });
export const useTrendingSongs = () =>
  useQuery({
    queryKey: QUERYKEY.song.byspecial("getTrendingSongs"),
    queryFn: songApi.getTrending,
  });
