import type { SongSpecialRoutes } from "@/features/song/song.types";

const QUERYKEY = {
  album: { all: ["albums"], byid: (id: string) => [...QUERYKEY.album.all, id] },
  user: { all: ["users"] },
  song: {
    all: ["songs"],
    byspecial: (category: SongSpecialRoutes) => [
      ...QUERYKEY.song.all,
      category,
    ],
  },
} as const;

export default QUERYKEY;
