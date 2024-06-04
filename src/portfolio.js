// Change this file to get your personal Portfolio

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yehya Altamimi",
  title: "Hi all, I'm Yehya",
  subTitle: emoji(
    "A versatile Full Stack Software Developer 🚀 with experience in developing interactive web and mobile applications, automating processes using AI and machine learning, and optimizing backend systems. Skilled in technologies such as JavaScript, React, Node.js, Python, and cloud services like AWS and Microsoft Azure."
  ),
  resumeLink: "src/containers/greeting/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Yehya0",
  linkedin: "https://www.linkedin.com/in/yehya-altamimi-33a58319b/",
  gmail: "altamimiyehya3@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "Versatile Full Stack Developer with a Passion for Innovation and Automation",
  skills: [
    emoji("⚡ Develop interactive front-end/user interfaces using HTML, CSS, and JavaScript"),
    emoji("⚡ Implement cloud solutions and integrate third-party services like AWS and Microsoft Azure"),
    emoji("⚡ Automate processes using AI and machine learning tools such as Python and OpenAI's GPT"),
    emoji("⚡ Conduct quality assurance and testing to ensure seamless migrations and data integrity"),
    emoji("⚡ Optimize backend systems and improve data handling efficiency using SQL and C#")
  ],
  
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Microsoft Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "C#", fontAwesomeClassname: "fab fa-microsoft" }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Interests Section
const interestsInfo = {
  display: true, // Set false to hide this section, defaults to true
  interests: [
    {
      title: "Mixed Martial Arts (MMA)",
      imagePath: require("./assets/gifs/export_1717456704607.gif"), // Ensure you have an image in your assets folder
      description: "I engage in regular MMA sparring sessions to improve my physical fitness and tactical skills.",
      descBullets: [
        "Participate in weekly sparring sessions at a local gym.",
        "Focused training in Brazilian Jiu-Jitsu and Muay Thai.",
        "Competed in amateur MMA competitions."
      ]
    },
    // You can add more interests here
  ]
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Michigan Dearborn",
      logo: require("./assets/images/UMich-logo.webp"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2019 - April 2024",
      desc: "GPA: 3.57. Relevant coursework includes Data Structures & Algorithms, Operating Systems, Web Technology, Database Management Systems, Software Architecture & Design Patterns, Software Engineering, Discrete Structures, Intro to Artificial Intelligence, Deep Learning, and Linear Algebra.",
      descBullets: [
        "Participated in various research projects and coding competitions.",
        "Developed multiple web and mobile applications as part of coursework.",
        "Engaged in collaborative team projects to build software solutions.",
        "Presented findings and projects in technical presentations.",
        "Senior Design Project: Developed Aimee, a chatbot for an e-commerce startup, focusing on product recommendations and search capabilities using Python and natural language processing."
      ]
    }
  ]
};


// Work experience section
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Daimler Truck Financial Services",
      companylogo: require("./assets/images/daimlerLogo.jpeg"),
      date: "June 2023 – September 2023",
      desc: "Enhanced strategic financial insights by developing a Java-based bot for automating monthly RPA performance reports for the CFO, reducing report generation time by 80%. Boosted document processing speed by implementing a Python and OpenAI's GPT-driven AI tool, cutting data extraction times by 50% and doubling bot performance efficiency. Streamlined project transitions from concept to production by collaborating on Process Definition and Technical Solution Design Documents, ensuring successful deployment of automated solutions."
    },
    {
      role: "Microsoft Developer Intern",
      company: "Total Solutions",
      companylogo: require("./assets/images/totalSolutionsLogo.png"),
      date: "May 2023 – August 2023",
      desc: "Ensured a seamless migration from on-premise network to SharePoint Online with zero data loss and a 20% reduction in migration time through rigorous quality assurance and testing. Developed innovative app modernization solutions and created sales blogs for Microsoft CoPilot and Microsoft Fabric, resulting in a 30% increase in client inquiries and a 15% boost in engagement. Improved a client's website by updating the front end with HTML and CSS to enhance design and user experience, and fixing backend issues with C# to resolve data handling errors, resulting in a 20% improvement in site performance."
    },
    {
      role: "Software Engineer Intern",
      company: "OST - Open Systems Technologies",
      companylogo: require("./assets/images/vervintLogo.png"),
      date: "October 2022 – May 2023",
      desc: "Accomplished improved integration of customer data by developing automated data migration scripts, measured by a 30% reduction in data inconsistencies across systems. Achieved a 20% increase in processing speed by optimizing existing SQL queries in the ERP system, measured by benchmarking query execution times before and after optimization. Accomplished enhanced user satisfaction by redesigning the ERP system's dashboard based on user feedback, measured by a 25% increase in positive user reviews."
    }
  ]
};

// Open Source Section to View Your Github Pinned Projects
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Project 1",
      projectDesc: "I did x y and z",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Project 2",
      projectDesc: "I did x y and z",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss an opportunity with me or just want to say hi? My Inbox is open for all.",
  number: "+1 (313)-213-9587",
  email_address: "altamimiyehya3@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable,
  resumeSection,
  interestsInfo
};
