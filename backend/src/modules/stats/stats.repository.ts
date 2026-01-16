import AlbumModel from "../album/album.model";
import SongModel from "../song/song.model";
import UserModel from "../user/user.model";

class StatsRepository {
  getCountForAllArtist() {
    return SongModel.aggregate([
      {
        $unionWith: {
          coll: "albums",
          pipeline: [],
        },
      },
      {
        $group: {
          _id: "$artist",
        },
      },
      {
        $count: "total",
      },
    ]);
  }
  getCountForAllSongs() {
    return SongModel.countDocuments;
  }
  getCountForAllAlbum() {
    return AlbumModel.countDocuments;
  }
  getCountForAllUser() {
    return UserModel.countDocuments;
  }
}

export default new StatsRepository();
