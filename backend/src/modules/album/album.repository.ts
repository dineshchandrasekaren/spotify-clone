import type { ID } from "../../types/extraTypes";
import AlbumModel from "./album.model";
import type { IAlbum } from "./album.type";

class AlbumRepository {
  addSongToAlbum(albumId: ID, songId: ID) {
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
  deleteAlbum(_id: ID) {
    return AlbumModel.deleteOne({ _id });
  }
  removeSongFromAlbum(albumId: ID, songId: ID) {
    return AlbumModel.findByIdAndUpdate(
      albumId,
      { $pull: { songs: songId } },
      { new: true }
    );
  }
  getAllAlbum() {
    return AlbumModel.find();
  }
}

export default new AlbumRepository();
