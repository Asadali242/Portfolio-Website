import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import netsolImage from "../assets/images/image1.jpeg";
import dayImage from "../assets/images/image2.png";
import chubbImage from "../assets/images/image3.png";

export const experiencesData = [
  {
    title: "Information Technology Data Analytics Auditor",
    company: "Chubb Limited",
    location: "Philadelphia, PA",
    description:
      "• Engaged in complete IT audit cycle, leveraging R and SQL, enhancing control efficacy by 25% and streamlining compliance assessments.\n• Integrated Python's scikit-learn machine learning models into existing systems, predicting and mitigating financial reporting risks, enhancing SOX compliance alongside PwC, leading to a 30% reduction in audit discrepancies.\n• Assisted in risk assessments by performing statistical analysis and predictive modeling, successfully identifying key risk areas and implementing controls that reduced risks by 20%.\n• Led the development of an anomaly detection system using TensorFlow, improving compliance breach detection accuracy by 18%.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2023 – September 2023",
    image: chubbImage,
  },
  {
    title: "Technological Engineering Associate",
    company: "Day & Zimmermann",
    location: "Philadelphia, PA",
    description:
      "• Facilitated the delivery of top-tier technical support for corporate IT systems, leveraging BetterNet to optimize issue resolution.\n• Pioneered an innovative Python and ABAP-based integration solution to automate the synchronization of ticketing a enhancing operational efficiency and data integrity through a 40% reduction in manual data entry tasks.\n• Crafted and deployed sophisticated Ruby scripts to automate user response systems, reducing response times by 60% and significantly improving customer satisfaction metrics by 35% through efficient handling of customer queries and issues.\n• Managed and modernized enterprise databases using MySQL by implementing advanced indexing and query optimization techniques, ensuring data precision, enhancing core business operations, and improving data retrieval speed by 15%.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 – September 2022",
    image: dayImage,
  },
  {
    title: "Software Engineering Intern",
    company: "NetSol Technologies Inc.",
    location: "Calabasas, CA",
    description:
      "• Co-engineered an enhanced user interface as part of a five-developer team, using HTML, CSS Tailwind and Three.js resulting in a substantial increase in user experience satisfaction.\n• Directed the integration of React.js and Next.js for website navigation, significantly enhancing operational efficiency by 12% and optimizing user interaction fluidity through improved server-side rendering and dynamic routing.\n• Performed in-depth data analysis of user engagement, influencing a UI/UX strategic overhaul that led to a 10% uplift in site accessibility and a 50% rise in user retention.\n• Spearheaded the implementation of a Python-driven user feedback system and managed the database using PostgreSQL, leveraging user insights to optimize the website, resulting in a 10% improvement in user satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 – August 2021",
    image: netsolImage,
  },
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Capstone Project: Dynamic Pricing System",
    description:
      "I led the launch of a dynamic pricing system that boosted Gross Merchandise Value (GMV) by 20% through strategic pricing. I developed a serverless architecture to improve scalability and data handling, designed and integrated REST APIs for real-time updates, and used machine learning to refine pricing strategies. Additionally, I implemented a CI/CD pipeline to ensure efficient and reliable software deployments.",
    tags: [
      "React.js",
      "Node.js",
      "AWS",
      "REST APIs",
      "Python-based Machine Learning",
      "CI/CD Pipeline",
    ],
    githubLink: "https://github.com/Asadali242/Dynamic-Pricing-System",
  },
  {
    title: "Full Stack Blog Web App",
    description:
      "I created a full-stack blog web application that significantly boosted user engagement and content management. I utilized EJS for server-side rendering, which optimized user interfaces for dynamic content updates and improved readability. To ensure data integrity and enhance database interactions, I employed Mongoose for MongoDB data modeling. Additionally, I architected a scalable MongoDB database schema to support the application’s growing content needs.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Mongoose"],
    githubLink: "https://github.com/Asadali242/Blog-Web-App",
  },
  {
    title: "Meal Planner Web App",
    description:
      "I developed a web application in Django that provides users with recipes based on their meal preferences and available ingredients. Working with a team of five in a Scrum framework, I was responsible for building the overall web app and implementing a database to store user credentials and user-generated recipes.",
    tags: ["Python3", "HTML5", "CSS3", "Bootstrap4", "Django", "SQLite"],
    githubLink: "https://github.com/Asadali242/Meal-Planner",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Python",
  "C/C++",
  "Tailwind",
  "PostgreSQL",
  "MySQL",
  "Ruby",
  "Tableau",
  "React.js",
  "Next.js",
  "Node.js",
  "Flask",
  "Express.js",
  "Three.js",
  "MongoDB",
  "Kubernetes",
  "Linux",
  "WebGL",
  "Agile",
  "WordPress",
  "Django",
  "Terminal-UI",
  "Apache Spark",
  "Apache Hadoop",
] as const;
