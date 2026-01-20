import React from "react";

const SongListSkeleton = () => {
  return (
    <div className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 h-full px-4 py-2">
      <div className="h-4 bg-zinc-800 rounded animate-pulse " />
      <div className="h-3 bg-zinc-800 rounded animate-pulse " />
      <div className="h-3 bg-zinc-800 rounded animate-pulse " />
      <div className="h-3 bg-zinc-800 rounded animate-pulse " />
    </div>
  );
};

export default SongListSkeleton;
