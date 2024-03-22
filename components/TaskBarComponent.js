import React from 'react';
import { TaskBar, List } from '@react95/core';
import { WindowsExplorer, ReaderClosed, Defrag8, CdMusic } from '@react95/icons';

const TaskBarComponent = ({ onOpenExplorer, onOpenDisk, onOpenResume, onOpenYouTubeModal }) => {
  return (
    <TaskBar
      list={
        <List>
          {/* <List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={onOpenDisk}>
            Local Disk (C:)
          </List.Item> */}
          <List.Item icon={<WindowsExplorer variant="32x32_4" />} onClick={onOpenExplorer}>
            Windows Explorer
          </List.Item>
          <List.Item icon={<Defrag8 variant="32x32_4" />} onClick={onOpenResume}>
            Resume
          </List.Item>
          <List.Item icon={<CdMusic variant="32x32_4" />} onClick={onOpenYouTubeModal}>
          Old_School_Cool.mp3
          </List.Item>
        </List>
      }
    />
  );
};

export default TaskBarComponent;
