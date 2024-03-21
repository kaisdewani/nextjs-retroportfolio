import React from 'react';
import { Modal, List } from '@react95/core';
import { WindowsExplorer } from '@react95/icons';

const WindowsExplorerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal
      icon={<WindowsExplorer variant="32x32_4" />}
      title="Windows Explorer"
      onClose={onClose}
      width="300px"
      height="200px"
      menu={[
        {
          name: "File",
          list: <List.Item onClick={onClose}>Close</List.Item>,
        },
        { name: "Edit" },
      ]}
    >
      {/* Modal content */}
    </Modal>
  );
};

export default WindowsExplorerModal;
