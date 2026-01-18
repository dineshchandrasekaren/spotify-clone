import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton";
import { buttonVariants } from "@/shared/ui/button";
import RoundedCard from "@/shared/ui/rounded-card";
import { ScrollArea } from "@/shared/ui/scroll-area";
import { cn } from "@/shared/lib/utils";
import { Home, Library, MessageCircle } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
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
          className: "text-white hover:bg-zinc-800 w-full justify-start",
        }),
      )}
    >
      <Icon className="mr-2 size-5" />{" "}
      <span className="hidden md:inline">{label}</span>
    </NavLink>
  );
};
const TitleWithIcon = ({ label, Icon }: { label: string; Icon: any }) => (
  <div className="flex gap-3 items-end mr-6 mb-4">
    <Icon className="size-7" />{" "}
    <h2 className="text-lg font-bold hidden md:inline text-white">{label}</h2>
  </div>
);
const LeftSidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* nav */}
      <RoundedCard>
        <div className="space-y-4">
          <NavItem to="/" Icon={Home} label="Home" />
          <NavItem to="/chat" Icon={MessageCircle} label="Messages" />
        </div>
      </RoundedCard>
      {/* playlist */}
      <RoundedCard>
        <TitleWithIcon Icon={Library} label="Playlists" />
        <ScrollArea className="h-72 ">
          <PlaylistSkeleton />
        </ScrollArea>
      </RoundedCard>
    </div>
  );
};

export default LeftSidebar;
