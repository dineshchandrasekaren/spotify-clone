import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton";
import { buttonVariants } from "@/shared/ui/button";
import RoundedCard from "@/shared/ui/rounded-card";
import { ScrollArea } from "@/shared/ui/scroll-area";
import { cn } from "@/shared/lib/utils";
import { Home, Library, MessageCircle } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAlbums } from "@/features/album/album.query";
import Typography from "@/shared/ui/typography";
const NavItem = ({
  Icon,
  label = "",
  to,
}: {
  Icon: any;
  label: string;
  to: string;
}) => {
  return (
    <NavLink
      to={to}
      className={cn(
        buttonVariants({
          variant: "ghost",
          className:
            "text-white hover:bg-zinc-800 w-full justify-center md:justify-start",
        }),
      )}
    >
      <Icon className="mr-2 size-5 " />
      <span className="hidden md:inline">{label}</span>
    </NavLink>
  );
};
const TitleWithIcon = ({ label, Icon }: { label: string; Icon: any }) => (
  <div className="flex w-full  gap-3 items-end mr-6 mb-4 mt-1 justify-center md:justify-start">
    <Icon className="mr-2 size-7 " />
    <h2 className="text-lg font-bold hidden md:inline text-white">{label}</h2>
  </div>
);
const LeftSidebar = () => {
  const { data, isLoading } = useAlbums();

  return (
    <div className="flex flex-col gap-2 h-full">
      {/* nav */}
      <RoundedCard>
        <div className="space-y-4">
          <NavItem to="/" Icon={Home} label="Home" />
          <NavItem to="/chat" Icon={MessageCircle} label="Messages" />
        </div>
      </RoundedCard>
      {/* playlist */}
      <RoundedCard className="  h-full">
        <TitleWithIcon Icon={Library} label="Playlists" />
        <ScrollArea className="h-[calc(100vh-300px)]">
          {isLoading ? (
            <PlaylistSkeleton />
          ) : data ? (
            data?.map((album: any) => (
              <Link
                to={`/albums/${album._id}`}
                key={album._id}
                className="p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer"
              >
                <img
                  src={album.imageUrl}
                  alt="Playlist img"
                  className="size-12 rounded-md shrink-0 object-cover"
                />

                <div className="flex-1 min-w-0 hidden md:block">
                  <p className="font-medium truncate">{album.title}</p>
                  <p className="text-sm text-zinc-400 truncate">
                    Album • {album.artist}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <Typography.large className="flex-center h-[50vh]! text-center">
              Please Login to see the playlists
            </Typography.large>
          )}
        </ScrollArea>
      </RoundedCard>
    </div>
  );
};

export default LeftSidebar;
