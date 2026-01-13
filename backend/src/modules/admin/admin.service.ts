import type { ID } from "../../types/extraTypes";
import CustomError from "../../utils/customError.util";
import AlbumRepository from "../album/album.repository";
import type { ISong } from "../song/song.type";
import SongRepository from "../song/songs.repository";

class AdminServices {
  private readonly songRepo = SongRepository;
  private readonly albumRepo = AlbumRepository;

  createSong = async (song: ISong) => {
    const { artist, title, duration, albumId, imageUrl, audioUrl } = song;
    if (!artist || !title || !duration || !imageUrl || !audioUrl) {
      throw new CustomError("Please give all the details", 400);
    }
    const newSong = await this.songRepo.createSong(song);
    let album = undefined;
    if (albumId) {
      album = await this.albumRepo.addSong(albumId, newSong._id);
      album?.songs.push(newSong._id);
      await album?.save();
      newSong.albumId = album?._id;
    }

    return await newSong.save();
  };
  deleteSong = async (songId: ID) => {};
}

export default new AdminServices();
