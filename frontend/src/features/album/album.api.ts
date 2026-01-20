import http from "@/shared/lib/axios.lib";
import type { Album } from "./album.types";
type AlbumResponse = { data: Album };
class AlbumApi {
  api = http<AlbumResponse>;
  getAllAlbums = () => this.api("/album").then((res) => res.data.data);
  getById = (id: string) =>
    this.api(`/album/${id}`).then((res) => res.data.data);
}

export default new AlbumApi();
