import React from 'react';
import { Modal, List } from '@react95/core';
import { Defrag8  } from '@react95/icons';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal
      icon={<Defrag8 variant="32x32_4" />}
      title="Dewani_Kais_Résumé"
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

export default ResumeModal;
