import React from "react";

const BackgroundVideo = ({ videoSource }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <video
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
