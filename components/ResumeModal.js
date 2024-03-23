import React from "react";
import { Modal, List, Checkbox, Fieldset } from "@react95/core";
import { Defrag8 } from "@react95/icons";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleShareClick = () => {
    window.location = "mailto:kaisdewani@yahoo.com";
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
          list: (
            <List>
              <List.Item onClick={onClose}>Close</List.Item>,
              <List.Item>
                <a href="/Dewani_Kais_Resume.pdf" download>
                  Download
                </a>
              </List.Item>
              ,
            </List>
          )
        },
        {
          name: "Contact Info",
          list: <List.Item onClick={handleShareClick}>Email</List.Item>
        }
      ]}
    >
      <div
        className="overflow-auto p-4 bg-retroGrey"
        style={{ maxHeight: "calc(80vh - 40px)" }}
      >
        <h6 className="text-slate-500 text-left text-xs"><u>Download the PDF from 'File -&gt; Download'</u></h6>
        <br/>
        <br/>
        <br/>
        <h2 className="text-center text-xl max-w-full">Kais Dewani</h2>
        <p>
          Email: <a href="mailto:kaisdewani@yahoo.com">kaisdewani@yahoo.com</a>
        </p>
        <p>Phone: (954)-682-8911</p>
        <p>
          GitHub: <a href="https://github.com/kaisdewani">kaisdewani</a>
        </p>
        <br />
        <Fieldset legend="Skills" width="300px">
          <p>
            Java, Selenium, Amazon Web Services, Linux, Github, Jenkins, Python,
            CI/CD, ReactJS, Docker
          </p>
        </Fieldset>
        <br />
        <Fieldset legend="Certificates" width="300px">
          <ul>
            <li>
              <a href="https://www.credly.com/badges/6bb07237-dc03-4835-8abd-cf663d55fa84/public_url">
                <Checkbox readOnly checked>
                  AWS Certified Solutions Architect Associate
                </Checkbox>
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/b8d572e9-a472-4c7a-96ed-6939826cc992/public_url">
                <Checkbox readOnly checked>
                  AZ-900: Microsoft Certified: Azure Fundamentals
                </Checkbox>
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/8ea7b82d-108d-41ec-8c88-c6a45a826017/public_url">
                <Checkbox readOnly checked>
                  AZ-305: Designing Microsoft Azure Infrastructure Solutions
                </Checkbox>
              </a>
            </li>
          </ul>
        </Fieldset>
        <br />
        <h2 className="text-base">Professional Experience</h2>
        <h4>
          <u>Release Engineer, Acronis SCS</u>
        </h4>
        <p>Oct 2022 – Jan 2024, Remote</p>
        <ul>
          <li>
            • Collaborated with security and compliance teams to incorporate
            FIPS 140-2 requirements into the build and release pipelines,
            ensuring secure handling of sensitive data.
          </li>
          <li>
            • Monitor and troubleshoot build and deployment failures,
            identifying and resolving issues in a timely manner to ensure smooth
            and reliable software releases.
          </li>
          <li>
            • Coordinated with cross-functional teams, including developers,
            quality assurance, and security, to streamline release cycles and
            ensure efficient deployment processes.
          </li>
          <li>
            • Maintained documentation and evidence of FIPS 140-2 compliance,
            including configuration settings, certificates, and audit logs.
          </li>
        </ul>
        <br />
        <h4>
          <u>Release Engineer, Wells Fargo</u>
        </h4>
        <p>Dec 2020 – Sep 2022, San Antonio TX</p>
        <ul>
          <li>
            • Participate in the release cycle which involves Performance,
            Development, UAT, and Production environments.
          </li>
          <li>
            • Participate in meetings with Technology, stakeholders to identify
            and mitigate potential risks associated with the monthly releases.
          </li>
          <li>
            • Documented software release management procedures and reviewed
            with stakeholders prior to deployment per release.
          </li>
          <li>
            • Resolve environment issues with development teams and
            update/create environment tickets in JIRA for documentation and
            using tools such as Splunk and Urban Code Deploy to find root cause.
          </li>
          <li>
            • Merged release branches to the respective master branches after
            the production release and resolved the conflicts raised during the
            merge.
          </li>
          <li>
            • Experience in Blue-Green deployment model by utilizing proprietary
            in house management console,Urban Code Deploy, and AppViewX F5.
          </li>
          <li>
            • Updated and maintained project dependencies using pom.xml in
            Maven, ensuring consistent builds and seamless integration with
            updated libraries.
          </li>
        </ul>
        <br />
        <h4>
          <u>Automation Test Engineer, Wells Fargo</u>
        </h4>
        <p>Sep 2019 – Nov 2020, Charlotte NC</p>
        <ul>
          <li>
            • Identify manual script candidates for smoke and regression test
            suites and using Selenium, Java, TestNG, and Jenkins/Maven to
            convert them for the automation suite.
          </li>
          <li>
            • Prepared project test plans, test estimations and approach
            strategies.
          </li>
          <li>
            • Worked closely with Business-analyst and developers for successful
            releases.
          </li>
          <li>
            • Work with a global team spread across tech hubs in multiple
            geographies and time zones.
          </li>
          <li>
            • Exercise agile methodology by collaborating within kanban and
            scrum teams.
          </li>
          <li>
            • Led the backlog grooming sessions to discuss the Epics, features
            and stories within the scrum team.
          </li>
        </ul>
        <br />
        <h4>
          <u>Automation Test Engineer, Synechron Inc.</u>
        </h4>
        <p>Jan 2019 – Sep 2019, Charlotte NC</p>
        <ul>
          <li>
            • Collaborating closely with developers to enhance testing through
            indepth understanding of the system and source code under test.
          </li>
          <li>
            • Using Java as well as numerous testing technologies (Selenium,
            TestNG, and internal frameworks) to design, build, and maintain test
            scripts and suites.
          </li>
          <li>
            • Contributed to improvements in the UI automation framework that is
            used to test a mission critical application for mortgage and lending
            applications.
          </li>
          <li>
            • Help to onboard 3 new QA team members and train them on internal
            frameworks as well as partial Java training.
          </li>
          <li>
            • Crafted confluence documents around the automation framework and
            troubleshooting tips.
          </li>
          <li>
            • Participated as a member of the Innovation Team to help provide
            ways to improve efficiency in existing and future projects.
          </li>
        </ul>
        <br />
        <h3>
          <u>Projects</u>
        </h3>
        <ul>
          <li>
            TieriFlicks Movie App and Tier List: Please check out my app on the
            Apple iOS App Store =)
          </li>
          <li>
            The Gist: A website built using ReactJS to summarize articles...
          </li>
        </ul>
        <a href="https://github.com/kaisdewani">Checkout my Github</a>
        <br />
        <br />
        <h3>
          <u>Education</u>
        </h3>
        <h4>Full Stack Web Development, Wyncode Academy</h4>
        <p>Jul 2018 – Sep 2018, Miami FL</p>
        <h4>Associate of Science, Palm Beach College</h4>
        <p>Aug 2013 – May 2015, Boca Raton FL</p>
      </div>
    </Modal>
  );
};

export default ResumeModal;
