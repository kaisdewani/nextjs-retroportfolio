import React from "react";
import { Modal, List, Frame } from "@react95/core"; // Corrected import line
import { CdMusic } from "@react95/icons";

const YouTubeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal
      icon={<CdMusic variant="32x32_4" />}
      title="Old_School_Cool.mp3"
      onClose={onClose}
      width="300px"
      height="200px"
      menu={[
        {
          name: "File",
          list: <List.Item onClick={onClose}>Close</List.Item>
        },
        { name: "Edit" }
      ]}
    >
      {/* Modal content */}
      <Frame
        boxShadow="none"
        style={{
          height: "315",
          width: "560"
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8cQSCIWHwRQ?si=knX-daoIcI0yJL-b&autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Frame>
    </Modal>
  );
};

export default YouTubeModal;
