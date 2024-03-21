import Head from "next/head";
import React, { useState } from "react";
import WindowsExplorerModal from "../components/WindowsExplorerModal";
import LocalDiskModal from "../components/LocalDiskModal";
import ResumeModal from "../components/ResumeModal";
import TaskBarComponent from "../components/TaskBarComponent";
import ClockComponent from "../components/ClockComponent";
import YouTubeModal from "../components/YouTubeModal";
import DesktopIcons from "../components/DesktopIcons";
import BackgroundVideo from "../components/BackgroundVideo";

const Home = () => {
  const [showExplorer, setShowExplorer] = useState(false);
  const [showDisk, setShowDisk] = useState(false);
  const [showResume, setResume] = useState(true);
  const [showYouTubeModal, setYouTubeModal] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Hey! I'm Kais 😊</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WindowsExplorerModal
        isOpen={showExplorer}
        onClose={() => setShowExplorer(false)}
      />
      <LocalDiskModal isOpen={showDisk} onClose={() => setShowDisk(false)} />
      <YouTubeModal
        isOpen={showYouTubeModal}
        onClose={() => setYouTubeModal(false)}
      />
      <ResumeModal isOpen={showResume} onClose={() => setResume(false)} />

      
      <main className="flex-grow p-4 ">
      <BackgroundVideo videoSource="/wallpaper.mp4" />
        {/* Main content */}
        <DesktopIcons />
      </main>

      <footer className="flex items-center justify-between text-black p-2 fixed bottom-0 w-full">
        <TaskBarComponent
          onOpenExplorer={() => setShowExplorer(true)}
          onOpenDisk={() => setShowDisk(true)}
          onOpenResume={() => setResume(true)}
          onOpenYouTubeModal={() => setYouTubeModal(true)}
        />
        {/* <ClockComponent /> */}
      </footer>
    </div>
  );
};

export default Home;
