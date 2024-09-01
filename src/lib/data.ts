import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import netsolImage from "../assets/images/image1.jpeg";
import dayImage from "../assets/images/image2.png";
import chubbImage from "../assets/images/image3.png";
import drexelImage from "../assets/images/image4.png";

export const experiencesData = [
  {
    title: "Software Engineering Co-op",
    company: "Chubb Limited",
    location: "Philadelphia, PA",
    icon: React.createElement(CgWorkAlt),
    date: "April 2023 – September 2023",
    image: chubbImage,
  },
  {
    title: "Technological Engineering Associate Co-op",
    company: "Day & Zimmermann",
    location: "Philadelphia, PA",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 – September 2022",
    image: dayImage,
  },
  {
    title: "Software Engineering Co-op",
    company: "NetSol Technologies Inc.",
    location: "Calabasas, CA",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 – August 2021",
    image: netsolImage,
  },
  {
    title: "Learning Center Developer",
    company: "Drexel University Teaching and Learning Center (TLC)",
    location: "Philadelphia, PA",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 – February 2021",
    image: drexelImage,
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
      "I spearheaded the development and launch of a dynamic pricing system, driving a 20% increase in Gross Merchandise Value (GMV) through data-driven, strategic pricing. I architected a scalable serverless infrastructure using AWS services like Lambda and RDS to enhance performance and flexibility. I designed and integrated RESTful APIs with Node.js for seamless real-time pricing updates. Leveraging machine learning algorithms in Python with Scikit-Learn, I optimized pricing strategies based on competitor data and market trends. Additionally, I implemented a CI/CD pipeline using GitHub Actions to streamline deployment, ensuring rapid and reliable software iterations.",
    tags: [
      "AWS",
      "Lambda",
      "RDS",
      "EC2",
      "Node.js",
      "RESTful APIs",
      "Python",
      "Scikit-Learn",
      "Machine Learning",
      "CI/CD Pipeline",
    ],
    githubLink: "https://github.com/Asadali242/Dynamic-Pricing-System",
  },
  {
    title: "Full Stack Blog Web App",
    description:
      "I developed a full-stack blog web application that significantly enhanced user engagement and streamlined content management. I utilized EJS for server-side rendering, optimizing user interfaces for dynamic content updates and improving readability. To ensure data integrity and efficient database interactions, I employed Mongoose for MongoDB data modeling. Additionally, I architected a scalable MongoDB database schema to support the application’s growing content needs",
    tags: [
    "Full-Stack Development",
    "EJS",
    "Server-Side Rendering",
    "MongoDB",
    "Mongoose",
  ],
    githubLink: "https://github.com/Asadali242/Blog-Web-App",
  },
  {
    title: "Meal Planner Web App",
    description:
      "I developed a Django-based web application that offers users personalized recipes based on their meal preferences and available ingredients. As part of a five-member team working within a Scrum framework, I was responsible for building the overall web application and implementing a database to securely store user credentials and user-generated recipes.",
    tags: [
    "Django",
    "Web Development",
    "Meal Planning",
    "Database Design",
    "User Authentication",
  ],
    githubLink: "https://github.com/Asadali242/Meal-Planner",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "Python",
  "Java",
  "C/C++",
  "Tableau",
  "WordPress",
  "HTML",
  "Tailwind CSS",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Three.js",
  "D3.js",
  "Flask",
  "Ruby",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS S3",
  "AWS API Gateway",
  "AWS Lambda",
  "AWS EC2",
  "AWS IAM",
  "Azure",
  "Google Cloud Platform",
  "Kubernetes",
  "Agile",
  "JIRA",
  "Notion",
  "Linux",
  "Django",
  "WebGL",
] as const;
