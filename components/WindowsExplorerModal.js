import React from "react";
import { Modal, List } from "@react95/core";
import { FileFind, FolderExe, Mshtml32529, WindowsExplorer } from "@react95/icons";

const WindowsExplorerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const githubUrl = "https://github.com/kaisdewani"

  const tieriflicksArticleURL =
    "https://www.linkedin.com/pulse/tieriflicks-my-first-app-movie-enthusiasts-kais-dewani-mykmc/?trackingId=Qv%2Fm95ql%2BVTuiDnjxYW5rg%3D%3D";

  const handleIconClick = (passURL) => () => {
    window.open(passURL, "_blank");
  };

  return (
    <Modal
      icon={<WindowsExplorer variant="32x32_4" />}
      title="Windows Explorer"
      closeModal={onClose}
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
      <div
        className="flex flex-row justify-start overflow-auto p-4 bg-retroGrey"
        style={{ maxHeight: "calc(80vh - 40px)" }}
      >
        <div className="flex flex-col items-center mx-2">
          <Mshtml32529
            onClick={handleIconClick(tieriflicksArticleURL)}
            variant="32x32_4"
            className="cursor-pointer"
          />
          <h3 className="mt-2">Article about TieriFlicks</h3>
        </div>
        <div className="flex flex-col items-center mx-2">
          <FolderExe
            onClick={handleIconClick(githubUrl)}
            variant="32x32_4"
            className="cursor-pointer"
          />
          <h3 className="mt-2">GitHub</h3>
        </div>
        <div className="flex flex-col items-center mx-2">
          <FileFind
            // onClick={handleIconClick(githubUrl)}
            variant="32x32_4"
            className="cursor-pointer"
          />
          <h3 className="mt-2">
             <a href='/Dewani_Kais_Resume.pdf' download>Dewani_Kais_Resume.pdf</a>
             </h3>
        </div>
      </div>
    </Modal>
  );
};

export default WindowsExplorerModal;
