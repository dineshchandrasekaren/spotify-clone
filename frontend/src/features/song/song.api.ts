import http from "@/shared/lib/axios.lib";
import type { Song } from "./song.types";
import ALL_API from "@/shared/apis";

type SongResponse = { data: Song[] };
class SongApi {
  private readonly api = ALL_API.song;
  private readonly http = http<SongResponse>;

  getAll = () => this.http(this.api.allSongs).then((res) => res.data.data);
  getFeatured = () =>
    this.http(this.api.specialSongs("getFeaturedSongs")).then(
      (res) => res.data.data,
    );
  getMadeForYou = () =>
    this.http(this.api.specialSongs("getMadeForYouSongs")).then(
      (res) => res.data.data,
    );
  getTrending = () =>
    this.http(this.api.specialSongs("getTrendingSongs")).then(
      (res) => res.data.data,
    );
}

export default new SongApi();
