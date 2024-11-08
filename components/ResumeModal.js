import React from "react";
import { Modal, List, Fieldset } from "@react95/core";
import { Defrag8 } from "@react95/icons";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleShareClick = () => {
    window.location = "mailto:kaisdewani.devops@gmail.com";
  };

  return (
    <Modal
      icon={<Defrag8 variant="32x32_4" />}
      title="Dewani_Kais_Résumé.docx"
      closeModal={onClose}
      className="fixed inset-0 md:inset-auto md:top-6 md:right-4 w-full md:w-[800px] h-full md:h-auto"
      menu={[
        {
          name: "File",
          list: (
            <List>
              <List.Item onClick={onClose}>Close</List.Item>
              <List.Item>
                <a className="hover:bg-white" href="/Dewani_Kais_Resume.docx" download>
                  Download
                </a>
              </List.Item>
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
        className="overflow-auto p-2 md:p-4 bg-retroGrey"
        style={{ maxHeight: "calc(100vh - 40px)" }}
      >
        <h6 className="text-slate-500 text-left text-xs">
          <u>Download the PDF from 'File -&gt; Download'</u>
        </h6>
        
        {/* Header Section */}
        <div className="text-center mt-4">
          <h1 className="text-xl md:text-2xl font-bold mb-2">Kais Dewani</h1>
          <div className="text-xs md:text-sm space-y-1 md:space-y-0 md:space-x-2">
            <span>San Antonio, TX</span>
            <span className="hidden md:inline">•</span>
            <a href="https://github.com/kaisdewani" className="hover:underline block md:inline">@kaisdewani</a>
            <span className="hidden md:inline">•</span>
            <a href="https://github.com/kaisdewani" className="hover:underline block md:inline">@kaisdewani</a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:kaisdewani.devops@gmail.com" className="hover:underline block md:inline">kaisdewani.devops@gmail.com</a>
          </div>
          <p className="text-xs md:text-sm mt-2 px-2">
            AWS Solutions Architect (Associate) | AZ-900: Azure Fundamentals | AZ-305: Designing Azure Infrastructure Solutions
          </p>
        </div>

        {/* Summary Section */}
        <Fieldset legend="Summary" className="mt-4 md:mt-6">
          <p className="text-xs md:text-sm leading-relaxed">
            DevSecOps Engineer with 6+ years of experience focusing on automation and security across multi cloud environments. I combine my passion for automation engineering with a security-first mindset, specializing in building secure CI/CD pipelines and infrastructure-as-code using Terraform, Ansible, and Kubernetes. Experienced in implementing automated security controls while maintaining system scalability and reliability.
          </p>
        </Fieldset>

        {/* Skills Section */}
        <Fieldset legend="Skills" className="mt-4">
          <div className="text-xs md:text-sm space-y-2">
            <p><strong>Cloud & Virtualization:</strong> Microsoft Azure, Amazon Web Services (AWS), VMware vSphere</p>
            <p><strong>Networking:</strong> Route 53, VPC, Subnets, Network ACLs, Load Balancing, API Gateway</p>
            <p><strong>CI/CD:</strong> Azure DevOps, Jenkins, GitLab CI/CD, AWS CodePipeline</p>
            <p><strong>Scripting:</strong> Python, PowerShell, Bash, JSON, YAML</p>
            <p><strong>Infrastructure as Code:</strong> CloudFormation, Terraform, Azure ARM Templates, Ansible</p>
            <p><strong>Version Control:</strong> Git, Bitbucket, TortoiseSVN, GitHub</p>
            <p><strong>Containerization:</strong> Docker, Kubernetes, ECS, EKS</p>
            <p><strong>Security:</strong> IAM, KMS, Security Groups, AWS Secrets Manager, Tfsec, FIPS 140-2</p>
            <p><strong>Monitoring:</strong> Splunk, CloudWatch, CloudTrail, ELK Stack</p>
            <p><strong>Disaster Recovery:</strong> AWS Backup, Azure Recovery Services</p>
          </div>
        </Fieldset>

        {/* Experience Section */}
        <Fieldset legend="Experience" className="mt-4">
          {/* DevSecOps Contracting */}
          <div className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <h3 className="font-bold text-sm md:text-base">DevSecOps Contracting, Sole Proprietorship</h3>
              <span className="text-xs md:text-sm">May 2024 - Present</span>
            </div>
            <p className="text-xs md:text-sm italic mb-2">San Antonio TX</p>
            <ul className="text-xs md:text-sm list-disc pl-4 space-y-1">
              <li>Led the design and deployment of multi-cloud infrastructures for multiple enterprise clients on Upwork, using Terraform and Kubernetes to support scalable, secure environments to support over 10,000 users.</li>
              <li>Designed and automated security controls across cloud infrastructures, including encryption and network traffic restrictions, ensuring minimal exposure to threats and reduced attack surface.</li>
              <li>Orchestrated the use of Azure Key Vaults to manage sensitive credentials securely, ensuring that all critical information was encrypted and securely stored, preventing any exposure of plain text credentials.</li>
              <li>Architected and implemented multi-cloud monitoring solutions using Splunk, enabling real-time log aggregation, alerting, and incident response across distributed cloud environments.</li>
              <li>Improved visibility and reduced resolution time for critical system issues through advanced log analysis and troubleshooting capabilities.</li>
              <li>Led the development and optimization of CI/CD pipelines with Azure DevOps and Jenkins for various client applications, including automating the deployment of Flask-based services for Shopify.</li>
              <li>Strengthened the security posture of cloud applications by implementing Cloudflare's WAF and DDoS protection, developing advanced security rules and policies that safeguarded against threats, while optimizing for performance and availability.</li>
              <li>Led the application of Zero Trust Security models within Kubernetes clusters, enabling secure, automated deployment and management of cloud-native applications.</li>
            </ul>
          </div>

          {/* Senior DevSecOps Engineer */}
          <div className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <h3 className="font-bold text-sm md:text-base">Senior DevSecOps Engineer, Acronis SCS</h3>
              <span className="text-xs md:text-sm">Sep 2022 - May 2024</span>
            </div>
            <p className="text-xs md:text-sm italic mb-2">Charlotte NC</p>
            <ul className="text-xs md:text-sm list-disc pl-4 space-y-1">
              <li>Led the end-to-end automation of deployment pipelines using Ansible, Docker and Jenkins, ensuring fully automated, repeatable processes that significantly increased deployment speed and consistency across both development and production environments.</li>
              <li>Partnered with our security and compliance team to integrate FIPS 140-2 requirements into the Jenkins CI/CD pipeline, ensuring the secure handling and encryption of sensitive data throughout the build and release process to maintain compliance standards.</li>
              <li>Managed and provisioned ESXi virtual machines within data center environments, overseeing the deployment, configuration, and maintenance of those virtual machines to ensure optimal performance and scalability.</li>
              <li>Implemented high availability and disaster recovery strategies, ensuring continuous uptime and efficient resource utilization across virtualized environments.</li>
              <li>Monitored and resolved Jenkins build and deployment issues, implementing static code analysis and containerization to ensure continuous, reliable software releases with minimal downtime.</li>
              <li>Worked with development, QA, and security teams to optimize release cycles, improving system stability and accelerating deployments.</li>
              <li>Integrated SonarQube and Tfsec into CI/CD workflows to automate security scanning and ensure compliance with code quality standards.</li>
              <li>Maintained documentation for FIPS 140-2 compliance, including the management of configuration settings, certificates, and audit logs to ensure traceability and adherence to compliance frameworks.</li>
              <li>Improved legacy CI/CD pipelines by introducing Docker containerization and CloudFormation, reducing build times by over 30%, and increasing infrastructure scalability and flexibility.</li>
              <li>Conducted code reviews and pull request assessments, ensuring all changes adhered to security best practices, preventing vulnerabilities, and complying with regulatory requirements.</li>
              <li>Implemented security controls across large-scale environments, ensuring compliance and reducing risks.</li>
            </ul>
          </div>

          {/* Senior Build and Release Engineer */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <h3 className="font-bold text-sm md:text-base">Senior Build and Release Engineer, Wells Fargo</h3>
              <span className="text-xs md:text-sm">Sep 2019 - Sep 2022</span>
            </div>
            <p className="text-xs md:text-sm italic mb-2">Charlotte NC</p>
            <ul className="text-xs md:text-sm list-disc pl-4 space-y-1">
              <li>Led and coordinated the release cycle across Performance, Development, UAT, and Production environments, ensuring smooth transitions between environments and maintaining deployment stability throughout each stage.</li>
              <li>Collaborated with technology teams and stakeholders to identify, assess, and mitigate potential risks associated with monthly releases, aligning business priorities with technical execution to ensure successful and secure deployments.</li>
              <li>Participate in meetings with technology, stakeholders to identify and mitigate potential risks associated with the monthly releases.</li>
              <li>Developed and maintained detailed software release management documentation, facilitating clear communication with stakeholders and ensuring all procedural and technical requirements were met prior to each deployment.</li>
              <li>Resolved complex environmental issues in collaboration with development teams, using tools such as Splunk and Urban Code Deploy to conduct deep root cause analysis and maintain system health.</li>
              <li>Managed and documented incidents and resolutions through JIRA for visibility and traceability.</li>
              <li>Implemented the Blue-Green deployment model, leveraging in-house management consoles, Urban Code Deploy, and AppViewX F5, to minimize downtime, streamline release processes, and mitigate deployment risks across critical environments.</li>
              <li>Updated and maintained project dependencies using Maven, ensuring consistent builds and seamless integration with updated libraries, enhancing application reliability and reducing integration challenges across development cycles.</li>
              <li>Identified manual test scripts suitable for automation within smoke and regression testing suites, leveraging Selenium, Java, TestNG, and Jenkins/Maven to enhance the automation framework.</li>
              <li>Developed project test plans, estimations, and strategic approaches, ensuring alignment with organizational objectives.</li>
              <li>Followed agile methodologies by engaging within Kanban and Scrum teams, leading to continuous improvement.</li>
              <li>Led backlog grooming sessions to prioritize and refine Epics, features, and user stories, enhancing the team's focus and productivity.</li>
            </ul>
          </div>
        </Fieldset>

        {/* Projects Section */}
        <Fieldset legend="Projects" className="mt-4">
          <ul className="text-xs md:text-sm list-disc pl-4 space-y-1">
            <li><strong>TieriFlicks:</strong> An iOS application that uses OpenAI GPT 4, Firebase, and SwiftUI.</li>
            <li><strong>The Gist:</strong> A website built using ReactJS to summarize articles using a text analysis API.</li>
            <li><strong>StarTrivia:</strong> A website built using ReactJS to summarize articles using a text analysis API.</li>
            <li><strong>Jokes For Joy:</strong> Website to generate dad jokes using ReactS by using API calls.</li>
            <li><strong>Quick Connect:</strong> React on Rails application to make sharing contact information more efficient by leveraging Twilio API.</li>
          </ul>
        </Fieldset>

        {/* Education Section */}
        <Fieldset legend="Education" className="mt-4">
          <div className="space-y-3 text-xs md:text-sm">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="font-bold">Full Stack Web Development</h3>
                <span>Jul 2018 - Sep 2018</span>
              </div>
              <p className="italic">Wyncode Academy</p>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="font-bold">Associate of Science</h3>
                <span>Aug 2013 - May 2015</span>
              </div>
              <p className="italic">Palm Beach College</p>
            </div>
          </div>
        </Fieldset>
      </div>
    </Modal>
  );
};

export default ResumeModal;
