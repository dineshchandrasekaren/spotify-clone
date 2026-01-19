import http from "@/shared/lib/axios.lib";

class Album {
  getAllAlbums = () => http.get("/album").then((res) => res.data.data);
  getById = (id: string) =>
    http.get(`/album/${id}`).then((res) => res.data.data);
}

export default new Album();
