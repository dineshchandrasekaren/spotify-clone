import songsRepository from "./songs.repository";

class SongService {
  async getAllSongs() {
    return await songsRepository.getAllSongs().lean();
  }
  async randomSongs(count: number) {
    return await songsRepository.getRandomSongs(count);
  }
}

export default new SongService();
