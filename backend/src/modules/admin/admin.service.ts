import type { ID } from "../../types/extraTypes";
import CustomError from "../../utils/customError.util";
import AlbumRepository from "../album/album.repository";
import type { IAlbum } from "../album/album.type";
import type { ISong } from "../song/song.type";
import SongRepository from "../song/songs.repository";

class AdminServices {
  private readonly songRepo = SongRepository;
  private readonly albumRepo = AlbumRepository;

  createSong = async (song: ISong) => {
    const { artist, title, duration, albumId, audioUrl } = song;
    if (!artist || !title || !duration || !audioUrl) {
      throw new CustomError("Please give all the details", 400);
    }
    const newSong = await this.songRepo.createSong(song);
    let album = undefined;
    if (albumId) {
      album = await this.albumRepo.addSongToAlbum(albumId, newSong._id);
      newSong.albumId = album?._id;
    }

    return await newSong.save();
  };
  deleteSong = async (songId: ID) => {
    if (!songId) throw new CustomError("Please pick the song to delete", 400);
    const song = await this.songRepo.getSongById(songId);
    if (!song) throw new CustomError("Invalid Song", 404);
    await this.songRepo.deleteSong(songId);
    if (song.albumId) {
      await this.albumRepo.removeSongFromAlbum(song.albumId, song._id);
    }
    return song;
  };
  createAlbum = async (album: IAlbum) => {
    if (!album.artist || !album.imageUrl || !album.releaseYear || !album.title)
      throw new CustomError("Kindly fill all the information for album", 400);
    const newAlbum = await this.albumRepo.createAlbum(album);
    return newAlbum;
  };
  deleteAlbum = async (albumId: ID) => {
    if (!albumId) throw new CustomError("Please pick the correct album.", 400);
    const album = await this.albumRepo.getById(albumId);
    if (!album) throw new CustomError("Invalid Album.", 404);
    await Promise.all([
      this.albumRepo.deleteAlbum(albumId),
      this.songRepo.removeAlbumId(albumId),
    ]);

    return album;
  };
}

export default new AdminServices();
