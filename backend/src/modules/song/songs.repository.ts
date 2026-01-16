import type { ID } from "../../types/extraTypes";
import SongModel from "./song.model";
import type { ISong } from "./song.type";

class SongRepository {
  createSong = (song: ISong) => SongModel.create(song);
  getSongById = (id: ID) => SongModel.findById(id);
  deleteSong = (_id: ID) => SongModel.deleteOne({ _id });
  removeAlbumId = (id: ID) =>
    SongModel.updateMany({ albumId: id }, { $unset: { albumId: "" } });
  getAllSongs = () => SongModel.find();
  getRandomSongs = (count: number) => {
    return SongModel.aggregate([
      {
        $sample: { size: count },
      },
      {
        $project: {
          _id: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
          title: 1,
        },
      },
    ]);
  };
}

export default new SongRepository();
