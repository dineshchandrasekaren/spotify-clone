import http from "@/shared/lib/axios.lib";
import type { Album } from "./album.types";
import ALL_API from "@/shared/apis";
type AlbumResponse = { data: Album };
type AlbumsResponse = { data: Album[] };
class AlbumApi {
  private readonly api = ALL_API.album;
  getAllAlbums = () =>
    http.get<AlbumsResponse>(this.api.allAlbum).then((res) => res.data.data);
  getById = (id: string) =>
    http.get<AlbumResponse>(this.api.byId(id)).then((res) => res.data.data);
}

export default new AlbumApi();
