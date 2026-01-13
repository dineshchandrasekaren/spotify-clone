import type { ID } from "../../types/extraTypes";
import SongModel from "./song.model";
import type { ISong } from "./song.type";

class SongRepository {
  createSong = (song: ISong) => SongModel.create(song);
  getSongById = (id: ID) => SongModel.findById(id);
  deleteSong = (id: ID) => SongModel.findByIdAndDelete(id);
}

export default new SongRepository();
