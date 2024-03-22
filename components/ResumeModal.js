import React from "react";
import { Modal, List } from "@react95/core";
import { Defrag8 } from "@react95/icons";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleShareClick = () => {
    window.location = 'mailto:kaisdewani@yahoo.com';
  };

  return (
    <Modal
      icon={<Defrag8 variant="32x32_4" />}
      title="Dewani_Kais_Résumé.pdf"
      closeModal={onClose}
      width="300px"
      height="200px"
      className="fixed top-6 right-4"
      menu={[
        {
          name: "File",
          list: <List.Item onClick={onClose}>Close</List.Item>
        },
        { name: "Contact Info", 
        list: <List.Item onClick={handleShareClick}>Email</List.Item> }
      ]}
    >
      <div
        className="overflow-auto p-4 bg-retroGrey"
        style={{ maxHeight: "calc(80vh - 40px)" }}
      >
        <h2 className="text-center text-xl max-w-full">Kais Dewani</h2>
        <p>
          Email: <a href="mailto:kaisdewani@yahoo.com">kaisdewani@yahoo.com</a>
        </p>
        <p>Phone: (954)-682-8911</p>
        <p>
          GitHub: <a href="https://github.com/kaisdewani">kaisdewani</a>
        </p>
        <br />
        <h2 className="text-base">Skills</h2>
        <p>
          Java, Selenium, Amazon Web Services, Linux, Github, Jenkins, Python,
          CI/CD, ReactJS, Docker
        </p>
        <br />
        <h2 className="text-base">Certificates</h2>
        <ul>
          <li>
            <a href="https://www.credly.com/badges/6bb07237-dc03-4835-8abd-cf663d55fa84/public_url">
              AWS Certified Solutions Architect Associate
            </a>
          </li>
          <li>
            <a href="https://www.credly.com/badges/b8d572e9-a472-4c7a-96ed-6939826cc992/public_url">
              AZ-900: Microsoft Certified: Azure Fundamentals
            </a>
          </li>
          <li>
            <a href="https://www.credly.com/badges/8ea7b82d-108d-41ec-8c88-c6a45a826017/public_url">
              AZ-305: Designing Microsoft Azure Infrastructure Solutions
            </a>
          </li>
        </ul>
        <br />
        <h2 className="text-base">Professional Experience</h2>
        <h4>Release Engineer, Acronis SCS</h4>
        <p>Oct 2022 – Jan 2024, Remote</p>
        <ul>
          <li>
            Collaborated with security and compliance teams to incorporate FIPS
            140-2 requirements...
          </li>
          <li>Monitor and troubleshoot build and deployment failures...</li>
        </ul>
        <br />
        <h4>Release Engineer, Wells Fargo</h4>
        <p>Dec 2020 – Sep 2022, San Antonio TX</p>
        <ul>
          <li>
            Participate in the release cycle which involves Performance
            Development UAT and Production environments.
          </li>
        </ul>
        <br />
        <h4>Automation Test Engineer, Wells Fargo</h4>
        <p>Sep 2019 – Nov 2020, Charlotte NC</p>
        <ul>
          <li>
            Identify manual script candidates for smoke and regression test
            suites...
          </li>
        </ul>
        <br />
        <h3>Projects</h3>
        <ul>
          <li>
            TieriFlicks Movie App and Tier List: Please check out my app on the
            Apple iOS App Store =)
          </li>
          <li>
            The Gist: A website built using ReactJS to summarize articles...
          </li>
        </ul>
        <br />
        <h3>Education</h3>
        <h4>Full Stack Web Development, Wyncode Academy</h4>
        <p>Jul 2018 – Sep 2018, Miami FL</p>
        <h4>Associate of Science, Palm Beach College</h4>
        <p>Aug 2013 – May 2015, Boca Raton FL</p>
      </div>
    </Modal>
  );
};

export default ResumeModal;
