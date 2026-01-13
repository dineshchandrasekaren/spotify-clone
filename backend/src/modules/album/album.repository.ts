import type { ID } from "../../types/extraTypes";
import AlbumModel from "./album.model";
import type { IAlbum } from "./album.type";

class AlbumRepository {
  addSong(albumId: ID, songId: ID) {
    return AlbumModel.findByIdAndUpdate(
      albumId,
      { $push: { songs: songId } },
      { new: true }
    );
  }

  getById(id: ID) {
    return AlbumModel.findById(id);
  }
  createAlbum(album: IAlbum) {
    return AlbumModel.create(album);
  }
}

export default new AlbumRepository();
