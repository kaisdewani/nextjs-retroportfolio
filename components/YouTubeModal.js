import React from "react";
import { Modal, List, Frame } from "@react95/core";
import { CdMusic } from "@react95/icons";

const YouTubeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal
      icon={<CdMusic variant="32x32_4" />}
      title="Old_School_Cool.mp3"
      closeModal={onClose}
      width="300px"
      height="200px"
      style={{
        top: "15%",
        left: "1%"
      }}
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
          height: "315px",
          width: "560px"
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8cQSCIWHwRQ?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Frame>
    </Modal>
  );
};

export default YouTubeModal;
