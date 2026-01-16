import statsRepository from "./stats.repository";

const {
  getCountForAllAlbum,
  getCountForAllArtist,
  getCountForAllSongs,
  getCountForAllUser,
} = statsRepository;

class StatsService {
  async getAllStats() {
    const [album = 0, artist = 0, songs = 0, user = 0] = await Promise.all([
      getCountForAllAlbum,
      getCountForAllArtist,
      getCountForAllSongs,
      getCountForAllUser,
    ]);
    return { album, artist, songs, user };
  }
}

export default new StatsService();
