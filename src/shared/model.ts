import { faCode, faCodeCommit, faDesktop, faMobile, faDatabase, faToolbox } from "@fortawesome/free-solid-svg-icons";
import kiit from "/assets/images/kiitLogo.png";
import codechef from "/assets/images/codechef.svg";
import leetcode from "/assets/images/leetcode.svg";
import hackerrank from "/assets/images/hackerrank.svg";
import react from "/assets/icons/icons8-react-native.svg";
import vue from "/assets/icons/icons8-vue-js.svg";
import angular from "/assets/icons/icons8-angular.svg";
import javascript from "/assets/icons/icons8-javascript.svg";
import typescript from "/assets/icons/icons8-typescript.svg";
import html from "/assets/icons/icons8-html.svg";
import css from "/assets/icons/icons8-css.svg";
import java from "/assets/icons/icons8-java.svg";
import spring from "/assets/icons/icons8-spring.svg";
import springBoot from "/assets/icons/icons8-spring-boot.svg";
import node from "/assets/icons/icons8-nodejs.svg";
import express from "/assets/icons/icons8-express-js.svg";
import mongodb from "/assets/icons/icons8-mongodb.svg";
import mysql from "/assets/icons/icons8-mysql.svg";
import postgresql from "/assets/icons/icons8-postgresql.svg";
import docker from "/assets/icons/icons8-docker.svg";
import aws from "/assets/icons/icons8-aws.svg";
import githubAction from "/assets/icons/icons8-github.svg";
import git from "/assets/icons/icons8-git.svg";
import reactNative from "/assets/icons/icons8-react-native.svg";
import androidStudio from "/assets/icons/icons8-android-studio.svg";
import flutter from "/assets/icons/icons8-flutter.svg";
import redis from "/assets/icons/icons8-redis.svg";
import kafka from "/assets/icons/kafka.svg";
import { faGithub, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import mentit from "/assets/images/mentit.png";
import troika from "/assets/images/troika_logo.png";
import binaryDots from "/assets/images/binary_dot.png";
import factset from "/assets/images/factset.png";
import fico from "/assets/images/fico_logo.png";

export const ResumeLink = "https://drive.google.com/file/d/1XupxI5Gt2NVYGxc0Iib-G_xOn7Oa3Doa/view?usp=sharing";

export const BlogListLink = "https://abhishekmshr063.medium.com/";

export const LibaryLink = "https://www.npmjs.com/~abhishekadarshmishra";

export const Socials = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/abhishek-adarsh-mishra-445125165/',
            icon: faLinkedinIn,
        },
        {
            name: 'Github',
            url: 'https://github.com/AbhishekAdarshMishra',
            icon: faGithub,
        },
        {
            name: 'Gmail',
            url: 'mailto:abhishekmshr063@gmail.com',
            icon: faGoogle
        }
    ];

export const Contact = {
    name: "Abhishek Adarsh Mishra",
    email: "abhishekmshr063@gmail.com",
    address: "Hyderabad, Telangana, India",
}; 

export const Skills = [
    {
        title : "Frontend",
        icon: faDesktop,
        skills : [
            {
                name: "React.js",
                icon: react
            },
            {
                name: "Vue.js",
                icon: vue
            },
            {
                name: "Angular",
                icon: angular
            },
            {
                name: "Javascript",
                icon: javascript
            },
            {
                name: "Typescript",
                icon: typescript
            },
            {
                name: "HTML",
                icon: html
            },
            {
                name: "CSS",
                icon: css
            }
        ]
    },
    {
        title : "Backend",
        icon: faCode,
        skills : [
            {
                name: "Java",
                icon: java
            },
            {
                name: "Spring",
                icon: spring
            },
            {
                name: "Spring Boot",
                icon: springBoot
            },
            {
                name: "Servlet"
            },
            {
                name: "JDBC",
            },
            {
                name: "Hibernate",
            },
            {
                name: "Node.js",
                icon: node
            },
            {
                name: "Express.js",
                icon: express
            },
        ]
    },
    {
        title : "Database",
        icon: faDatabase,
        skills : [
            {
                name: "MongoDB",
                icon: mongodb
            },
            {
                name: "MySQL",
                icon: mysql
            },
            {
                name: "PostgreSQL",
                icon: postgresql
            },
        ]
    },
    {
        title : "DevOps",
        icon: faCodeCommit,
        skills : [
            {
                name: "Docker",
                icon: docker
            },
            {
                name: "AWS",
                icon: aws
            },
            {
                name: "Github Action",
                icon: githubAction
            },
            {
                name: "Git",
                icon: git
            }
        ]
    },
    {
        title: "Android",
        icon: faMobile,
        skills: [
            {
                name: "React Native",
                icon: reactNative
            },
            {
                name: "Android Studio",
                icon: androidStudio
            },
            {
                name: "Flutter",
                icon: flutter
            }
        ]
    },
    {
        title : "Other Tech",
        icon: faToolbox,
        skills : [
            {
                name: "Redis",
                icon: redis
            },
            {
                name: "Kafka",
                icon: kafka
            },
            {
                name: "C++"
            },
            {
                name: "Python"
            },
            {
                name: "Jest"
            },
            {
                name: "Pinia"
            },
            {
                name: "Cypress"
            },
            {
                name: "vitest"
            },
            {
                name: "Playwright"
            },
            {
                name: "Data Structure and Algorithms"
            },
            {
                name: "Low Level System Design"
            },
            {
                name: "High Level System Design"
            },
            {
                name: "Functional Programming"
            },
        ]
    },

];

export const Educations = [
    {
        title: "Graduation (B.Tech)",
        institute: "Kalinga Institute Of Industrial Technology, Bhubaneshwar",
        course: "B.Tech in Information Technology",
        duration: "2018-2022",
        logo: kiit,
        description: [
            "I have studied basic Software Engineering subjects like DS, Algorithms, DBMS, CN, OOP, ML, DMDW, OS, COA, AI etc.",
            "Apart from this, I have done courses on Deep Learning, Data Science, Android App Development, Full Stack Development, Angular, Vue.js, React.js, Java, Spring Boot, Blockchain, AR/VR etc.",
            "Currently having 9.34 CGPA"
        ],
        link: "https://kiit.ac.in/"
    }
];

export const CompetitiveCodingProfiles = [
    {
        name: "CodeChef",
        link: "https://www.codechef.com/users/abhishekmshr75",
        logo: codechef
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/u/abhishekmshr063/",
        logo: leetcode
    },
    {
        name: "HackerRank",
        link: "https://www.hackerrank.com/profile/abhishekmshr063",
        logo: hackerrank
    }
];

export const Achievements = [
    {
        info: "Awarded Star Award (2024) at Factset for demonstrating exceptional ownership and delivering an end-to-end web application, including high and low-level design, from scratch.",
        link: "https://drive.google.com/file/d/1QWPF8ut0qwmJDramh3vV9jttxUVvwsjF/view"
    },
    {
        info: "Received the Blue Ribbon Award (2023) at Factset for optimizing application performance through the implementation of lazy loading, caching, and algorithm enhancements.",
        link: "https://drive.google.com/file/d/1AIFwts-xj0PJY31AJ2fuwMxy3kjPLPVJ/view"
    },
    {
        info: "Awarded Spot Award (2022) at FICO for implementing crucial features with optimized algorithms.",
        link: "https://drive.google.com/file/d/1HzZMRaqRtnpTCmDHpLuU3KYUefHF_jFc/view"
    }

];

export const Experience = [
    {
        company: "Factset Research Systems",
        location: "Hyderabad, Telangana, India",
        logo: factset,
        roles: [
            {
                title: "Software Engineer 2",
                duration: "April 2023 - Present",
                details: [
                    "Took ownership and led the complete rewrite of a web application using Vue 3, Composition API, Pinia, Vite, and Vitest, introducing multiple new features to boost user engagement, improving load times and overall application performance by 30%.",
                    "Contributed to High-Level Design (HLD) planning for features such as lazy loading, caching, state management with Pinia, and worker threads. Played a key role in Jira Cards and Epic Planning.",
                    "Integrated Pinia for state management and utilized worker threads, reducing code complexity and codebase size by 20%, and boosting application performance by 20-30%.",
                    "Researched and Established coding standards using Low-Level Design (LLD) principles for the codebase, state management, and worker threads, and documented these standards in the repository's contribution guide.",
                    "Refactored the codebase and created reusable components, decreasing codebase size by 30% and improving maintainability.",
                    "Developed a chatbot using OpenAI LLM API and Faiss Vector DB during a hackathon, enhancing user interaction and support.",
                    "Built and optimized a RESTful API server using Node.js and Express.js, supporting specialized application operations and enhancing performance by integrating worker threads.",
                    "Provided 'On-call' client support, documenting key issues and solutions to improve team efficiency and knowledge sharing."
                ]
            },
            {
                title: "Software Engineer 1",
                duration: "July 2022 - March 2023",
                details: [
                    "Implemented caching to enhance stability and boost application performance by 30-40%. Won BlueRibbon Award.",
                    "Conducted research and developed a proof of concept to migrate an Angular.js application to Vue.js progressively.",
                    "Applied the Singleton design pattern (LLD) to establish a state management system that facilitated communication between Angular.js and Vue.js frameworks, reducing the migration workload for the team by 30%.",
                    "Developed key features, refactored code, created reusable components, and wrote Jest and Cypress tests.",
                    "Completed an AWS hands-on workshop, gaining practical experience with EC2, S3, Lambda/serverless, pipeline, and Terraform.",
                ]
            }
        ]
    },
    {
        company: "FICO",
        location: "Bangalore, Karnataka, India",
        logo: fico,
        roles: [
            {
                title: "Software Engineer Intern",
                duration: "May 2021 - June 2022",
                details: [
                    "Contributed to migrating the application from Angular.js to Angular 13 and implementing crucial features. Won Spot Award.",
                    "Led NGRX and RXJS state management implementation, boosting app scalability and performance.",
                    "Built key features, refactored code, and created reusable components and responsive user interface, while also contributing to unit testing using Jest."
                ]
            }
        ]
    },
    {
        company: "Troika Transsolutions Private Limited",
        location: "Remote",
        logo: troika,
        roles: [
            {
                title: "Full Stack Development Intern",
                duration: "January 2020 - March 2020",
                details: [
                    "Tools: RestApi, MongoDB, Node.js, Express.js, Android Studio and Web development, AWS EC2.",
                    "Functions: Restroom management System with Android app to get user reviews, attendance, etc.",
                    "Web Application to be managed by authorities. Backend with automatic email or SMS generation deployed in AWS."
                ]
            }
        ]
    },
    {
        company: "Binary Dots (FretBox)",
        location: "Remote",
        logo: binaryDots,
        roles: [
            {
                title: "Android App Development Intern",
                duration: "July 2019 - Sept 2019",
                details: [
                    "Tools: Android Studio, Java, RestApi.",
                    "Functions: A Society Management App in different languages like Eng/Hindi/Marathi.",
                    "It Supports all the features like visitor tracks, Complaint resolving system, Suggestion, Gate pass, Feedback, Maintenance."
                ]
            }
        ]
    },
    {
        company: "Vibasu Career Accelerator Private Limited (Mentit)",
        location: "Remote",
        logo: mentit,
        roles: [
            {
                title: "Android App Development Intern",
                duration: "April 2019 - July 2019",
                details: [
                    "Tools: Android Studio, Java, RestApi.",
                    "Function: Teaching Platform. Teacher and student and interact , set milestones see progress, etc."
                ]
            }
        ]
    }
];

export const Projects = [
    {
        title: "Whatsapp gallery Organiser",
        code: "https://github.com/AbhishekAdarshMishra/Mobile_Gallary_image_classifier",
        tech: ["Python", "Keras", "Tensorflow", "Flask"],
        details: [
            "Deep Learning CNN model using Keras and Tensorflow with an accuracy rate of 85-90% predict the category of gallery image into cars, memes, selfies, screenshots, etc, to organize them.",
        ]
    },
    {
        title: "College Community App",
        code: "https://github.com/AbhishekAdarshMishra/kiitCommunityFrontend",
        tech: ["React", "Mongodb", "Node.js", "Express.js"],
        details: [
            "It is a college community social media web app to share knowledege , solving queries , interaction between faculty , staff anf student. Providing notes , Notice etc."
        ]
    },
    {
        title: "Job Application Board",
        code: "https://github.com/AbhishekAdarshMishra/Appleyego",
        tech: ["Angular", "Mongodb", "Node.js", "Express.js", "Javascript"],
        details: [
            "A web application for students to find Job applications posted by Companies or Govt., Last year Paper, scholarships details, Results etc."
        ]
    },
    {
        title: "Movie WebApp",
        code: "https://github.com/AbhishekAdarshMishra/AngularMovieApp",
        tech: ["Angular", "Typescript"],
        details : [
            "A web application to search for movies and get details about it. It uses TMDB API to fetch movie details."
        ]
    },
    {
        title: "AR/VR Android App",
        demo: "https://www.dropbox.com/scl/fi/zhp915pfsilgdacxnuyyr/Record_2019-08-15-06-15-07.mp4?rlkey=lyl0zppgcmmpjg59tugf2r69e&e=1&dl=0",
        tech: ["C#", "Unity"],
        details: [
            "Digital Visiting card (On scanning card with the android app a 3d model comes out to explain about the company and other 3d animation explanations)."
        ]
    },
    {
        title: "Facial Expression Recognition",
        code: "https://github.com/AbhishekAdarshMishra/Facial-Expression_recognition",
        tech: ["Python", "Keras", "Tensorflow"],
        details: [
            "Developed a CNN model to detect the expression of a face in a video."
        ]
    },
    {
        title: "ML Basic Projects",
        code: "https://github.com/AbhishekAdarshMishra/Machine_learning",
        tech: ["Python"],
        details: [
            "Basic projects on Object detection, Object Recognition, Dominant colour etc"
        ]
    }
];

export const Publications = [
    {
        title: "Automated Decentralized Comparmental Proprietorship System (ADCPS) {IJSER(ISSN 2229-5518)}",
        date: "22 Oct 2020",
        description: "Automated Decentralized Comparmental Proprietorship System (ADCPS). This paper focuses on providing a better alternative system for all transactions in the real state by making use of Blockchain and ethereum technology as its foundation.",
        link: "https://www.ijser.org/onlineResearchPaperViewer.aspx?Automated-Decentralized-Compartmental-Proprietorship-System-ADCPS.pdf"
    }
];
