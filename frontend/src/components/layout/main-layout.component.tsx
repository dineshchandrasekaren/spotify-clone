import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../shared/ui/resizable";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/left-sidebar.component";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import FriendsActivity from "./components/friend-activity.component";

const MainLayout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup
        orientation="horizontal"
        className="flex-1 flex h-full overflow-hidden p-2"
      >
        <ResizablePanel
          defaultSize={"20%"}
          minSize={isMobile ? 0 : "10%"}
          maxSize={"30%"}
        >
          <LeftSidebar />
        </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        {/* Main content */}
        <ResizablePanel defaultSize={isMobile ? "80%" : "60%"}>
          <Outlet />
        </ResizablePanel>

        {!isMobile && (
          <>
            <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

            {/* right sidebar */}
            <ResizablePanel
              defaultSize={"20%"}
              minSize={0}
              maxSize={"25%"}
              collapsedSize={0}
            >
              <FriendsActivity />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
};

export default MainLayout;
