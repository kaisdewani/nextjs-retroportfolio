import Head from "next/head";
import { useState, useEffect } from "react";
import { Modal, List, TaskBar, Button } from "@react95/core";
import { WindowsExplorer, ReaderClosed } from "@react95/icons";
import 'tailwindcss/tailwind.css';

export default function Home() {
  const [showExplorer, setShowExplorer] = useState(false);
  const [showDisk, setShowDisk] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modals */}
      {showExplorer && (
        <Modal
          icon={<WindowsExplorer variant="32x32_4" />}
          title="Windows Explorer"
          onClose={() => setShowExplorer(false)}
          width="300px"
          height="200px"
          menu={[{ name: 'File' }, { name: 'Edit' }]}
        >
          {/* Content for Windows Explorer modal */}
        </Modal>
      )}

      {showDisk && (
        <Modal
          defaultPosition={{ x: 50, y: 50 }}
          width="300px"
          height="200px"
          icon={<ReaderClosed variant="32x32_4" />}
          title="Local Disk (C:)"
          onClose={() => setShowDisk(false)}
          menu={[{ name: 'File' }, { name: 'Edit' }]}
        >
          {/* Content for Local Disk (C:) modal */}
        </Modal>
      )}

      {/* Main content can go here */}
      <main className="flex-grow p-4">
        {/* ... */}
      </main>

      {/* Start Bar */}
      <footer className="flex items-center justify-between  text-black p-2 fixed bottom-0 w-full">
        <TaskBar list={
          <List>
            <List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={() => setShowDisk(true)}>
              Local Disk (C:)
            </List.Item>
            <List.Item icon={<WindowsExplorer variant="32x32_4" />} onClick={() => setShowExplorer(true)}>
              Windows Explorer
            </List.Item>
          </List>
        } />
        <span className="mr-2">{time}</span>
      </footer>
    </div>
  );
}
