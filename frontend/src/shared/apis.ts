import type { SongSpecialRoutes } from "@/features/song/song.types";

const ALL_API = {
  album: {
    allAlbum: "/album",
    byId: (id: string) => `/album/${id}`,
  },
  song: {
    allSongs: "/song",
    specialSongs: (category: SongSpecialRoutes) => `/song/${category}`,
  },
  user: {
    allUser: "/user",
  },
  auth: {
    callback: "/auth/callback",
  },
};

export default ALL_API;
