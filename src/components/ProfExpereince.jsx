import React from 'react';

const experiences = [
    {
      company: "TP ICAP Management Services Pte. Ltd., Singapore",
      roles: [
        {
          title: "Senior Software Engineer/ Associate Tech Lead",
          duration: "Feb 2023 - Present",
          responsibilities: [
            "Leads a 4-member agile team on the Matchbook trading platform, focusing on maintenance, feature upgrades, UI/UX enhancements across 12 enterprise-grade trading applications.",
            "In tackling the Matchbook trading platform's efficiency and cost issues, spearheaded its migration to an event-driven architecture, incorporating technologies such as Java Spring Boot, Python with Django and Flask, React with handsontable, Microsoft SQL Server, AWS DynamoDB and DocumentDB, Solace, and SNS with DAPR, deployed using Docker & Kubernetes, Puppet via Jenkins to EKS and transitioning monitoring to Datadog from AppDynamics. Achieved a 40% boost in efficiency and a 20% cut in costs.",
            "Developed \"Solver,\" an automation solution to speed up and enhance the reliability of manual trading matching processes, leveraging Python, Java, AWS SQS, S3, and EKS. Boosted system and transaction reliability by over 90%.",
          ]
        }
      ]
    },
    {
      company: "Chope Group Pte Limited, Singapore",
      roles: [
        {
          title: "Senior Software Engineer",
          duration: "Dec 2021 - Feb 2023",
          responsibilities: [
            "Identifying the need for an efficient automated restaurant registration and onboarding process, developed the \"Chope Automated Restaurant Registration and Onboarding Service\" using Go, Python Django, and Node.js with Express, Memcache, and PostgreSQL leveraging gRPC and REST for efficient, type-safe inter-service communication.",
            "Facing a need for deeper data insights to boost partner relationships and strategy, a reporting service was built to aggregate and analyze critical operational data. Collaboratively developed with the data analytics team and field operations, utilizing Python Flask and DynamoDB and deployed on AWS EKS."
          ]
        }
      ]
    },
    {
      company: "Wiley Global Technology, US / Sri Lanka",
      roles: [
        {
          title: "Senior Software Engineer/ Associate Tech Lead",
          duration: "Oct 2020 - Sep 2021",
          responsibilities: [
            "Led the task to shift the Wiley Educational Services Platform to a microservice-based, event-driven architecture for better efficiency, utilizing Java Spring Boot RX with Webflux, NodeJS, Python, ReactJS with TypeScript, and DynamoDB, orchestrated with Docker Kubernetes, deployed on EKS."
          ]
        }
      ]
    },
    {
      company: "Sysco Corporation - US / Sri Lanka",
      roles: [
        {
          title: "Senior Software Engineer",
          duration: "Sep 2019 - Oct 2020",
          responsibilities: [
            "Recognizing the necessity for a scalable, robust menu management solution for global enterprise clients on the CAKE Menu Platform, a new Enterprise version was developed using React TypeScript with Redux, NodeJs with ExpressJs, Java Spring Boot, and AWS Aurora PostgreSQL, Couchbase, and Neo4j for data management.",
            "The Reports and Analytics platform was overhauled for better usability and performance, collaborating with the UI/UX team and management, re-engineering the platform using Java, MongoDB, Couchbase, Elasticsearch, and Kibana."
          ]
        }
      ]
    },
    {
      company: "Omobio (Pvt) Ltd. - Sri Lanka",
      roles: [
        {
          title: "Software Engineer",
          duration: "Mar 2018 - Sep 2019",
          responsibilities: [
            "To increase user engagement for Banglalink's 40 million daily active users, a Network Event USSD Recommendation Engine was implemented using Python Django, PostgreSQL, and Go."
          ]
        },
        {
          title: "Associate Software Engineer",
          duration: "Mar 2017 - Mar 2018",
          responsibilities: [
            "The MyDialog App overhaul to boost user engagement and self-service capabilities for over 14 million daily users, utilizing React Native, JavaScript, Java Spring MVC, Python, Erlang, and PostgreSQL."
          ]
        }
      ]
    }
  ];

  const ProfExperience = () => {
    return (
      <div className="mx-auto p-4 justify-center items-center bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-5">Professional Experience:</h2>
        {experiences.map((exp, companyIndex) => (
          <div key={companyIndex} className="mb-4 bg-gray-300 shadow-lg rounded-lg mx-5 p-3">
            <h3 className="font-bold text-xl mb-3">{exp.company}</h3>
            {exp.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <p className="italic font-bold mb-2">{role.title}, {role.duration}</p>
                <ul className="list-disc ml-5 mb-2">
                  {role.responsibilities.map((responsibility, responsibilityIndex) => (
                    <li key={responsibilityIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  

export default ProfExperience;