import http from "@/shared/lib/axios.lib";
import type { Song } from "./song.types";

type SongResponse = { data: Song };
class SongApi {
  api = http<SongResponse>;
  getFeatured = () =>
    this.api("/song/getFeaturedSongs").then((res) => res.data.data);
  getMadeForYou = () =>
    this.api("/song/getMadeForYouSongs").then((res) => res.data);
  getTrending = () =>
    this.api("/song/getTrendingSongs").then((res) => res.data.data);
}

export default new SongApi();
