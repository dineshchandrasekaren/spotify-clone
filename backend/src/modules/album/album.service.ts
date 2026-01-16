import type { ID } from "../../types/extraTypes";
import CustomError from "../../utils/customError.util";
import albumRepository from "./album.repository";

class AlbumService {
  async getAllAlbum() {
    return await albumRepository.getAllAlbum().lean();
  }
  async getAlbumById(id: ID) {
    if (!id) throw new CustomError("Please pick the album.", 400);

    const album = await albumRepository.getById(id).populate("songs");
    if (!album) throw new CustomError("Invalid album.", 404);

    return album;
  }
}

export default new AlbumService();
