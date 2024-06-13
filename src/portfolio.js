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
  title: "Hello, I'm Yehya",
  subTitle: emoji(
    "I'm a dedicated software engineer based in Dearborn, MI, with a Bachelor's degree in Software Engineering from the University of Michigan 〽️. My diverse internship experiences include developing AI-based product recommendation systems at Spessle, creating automated financial reporting tools at Daimler Truck Financial Services, and enhancing website performance at Total Solutions. I have strong skills in Python, Java, JavaScript, SQL, and various cloud platforms and DevOps tools. I'm passionate about leveraging technology to solve real-world problems and continuously improving my technical expertise."
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
  title: "S",
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
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "C#", fontAwesomeClassname: "fab fa-microsoft" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Interests Section
const interestsInfo = {
  display: true, // Set false to hide this section, defaults to true
  interests: [
    {
      title: "Mixed Martial Arts (MMA)",
      imagePath: require("./assets/gifs/giphy 2.webp"), // Ensure you have an image in your assets folder
      description: "I engage in regular MMA sparring sessions to improve my physical fitness and tactical skills.",
      descBullets: [
        "Participate in volleyball tournaments.",
        "Focused training in Brazilian Jiu-Jitsu and Muay Thai.",
        "Competed in amateur MMA competitions."
      ]
    },
    // You can add more interests here
    {
      title: "Volleyball",
      imagePath: require("./assets/gifs/giphy.webp"), // Ensure you have an image in your assets folder
      description: "Playing volleyball helps me stay active and develop team collaboration skills.",
      descBullets: [
        "Participate in weekly volleyball tournaments at the mosque.",
        "Organize and manage volleyball teams for community events.",
        "Regularly practice serves, spikes, and defensive skills."
      ]
    },
    {
      title: "Coding Projects",
      imagePath: require("./assets/gifs/giphy (2).webp"), // Ensure you have an image in your assets folder
      description: "I love working on coding projects to enhance my programming skills and build useful applications.",
      descBullets: [
        "Develop web and mobile applications using modern technologies.",
        "Contribute to open-source projects on GitHub.",
        "Collaborate with other developers on innovative projects."
      ]
    }, 
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
  display: true,
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Spessle",
      companylogo: require("./assets/images/SpessleLogo.jpeg"),
      date: "September 2023 – April 2024",
      descBullets: [
        "Developed Aimee, an AI tool that boosted product recommendation accuracy by 20% for Spessle clients by analyzing customer behavior using Python, PostgreSQL, and natural language processing.",
        "Enhanced search efficiency by 30% on client e-commerce platforms through the integration of Milvus, PyTorch, and BERT, enabling more accurate product searches based on user queries.",
        "Improved user satisfaction by 25% by rigorously testing AI models to ensure the accuracy and relevance of product recommendations, thereby increasing client engagement and transaction success rates."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Daimler Truck Financial Services",
      companylogo: require("./assets/images/daimlerLogo.jpeg"),
      date: "June 2023 – September 2023",
      descBullets: [
        "Enhanced strategic financial insights by developing a Java-based bot for automating monthly RPA performance reports for the CFO, reducing report generation time by 80%.",
        "Boosted document processing speed by implementing a Python and OpenAI's GPT-driven AI tool, cutting data extraction times by 50% and doubling bot performance efficiency.",
        "Streamlined project transitions from concept to production by collaborating on Process Definition and Technical Solution Design Documents, ensuring successful deployment of automated solutions."
      ]
    },
    {
      role: "Microsoft Developer Intern",
      company: "Total Solutions",
      companylogo: require("./assets/images/1631432922611.jpeg"),
      date: "May 2023 – August 2023",
      descBullets: [
        "Ensured a seamless migration from on-premise network to SharePoint Online with zero data loss and a 20% reduction in migration time through rigorous quality assurance and testing.",
        "Developed innovative app modernization solutions and created sales blogs for Microsoft CoPilot and Microsoft Fabric, resulting in a 30% increase in client inquiries and a 15% boost in engagement.",
        "Improved a client's website by updating the front end with HTML and CSS to enhance design and user experience, and fixing backend issues with C# to resolve data handling errors, resulting in a 20% improvement in site performance."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "OST - Open Systems Technologies",
      companylogo: require("./assets/images/open_systems_technologies_inc__logo.jpeg"),
      date: "October 2022 – May 2023",
      descBullets: [
        "Accomplished improved integration of customer data by developing automated data migration scripts, measured by a 30% reduction in data inconsistencies across systems.",
        "Achieved a 20% increase in processing speed by optimizing existing SQL queries in the ERP system, measured by benchmarking query execution times before and after optimization.",
        "Accomplished enhanced user satisfaction by redesigning the ERP system's dashboard based on user feedback, measured by a 25% increase in positive user reviews."
      ]
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
      image: require("./assets/gifs/tictactoe.gif"),
      projectName: "AI-Powered-Tic-Tac-Toe",
      projectDesc: "This project implements a Tic-Tac-Toe game with a graphical user interface using Python's Pygame library. The game includes an AI opponent that uses the Minimax algorithm to play optimally. The AI is designed to challenge players by making the best possible moves, providing a competitive and engaging experience",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Yehya0/AI-Powered-Tic-Tac-Toe"
        }
      ]
    },
    {
      image: require("./assets/images/maxresdefault.jpg"),
      projectName: "Stock Predictor - LSTM",
      projectDesc: "This project utilizes Long Short-Term Memory (LSTM) neural networks to predict stock prices. It leverages historical stock price data, including technical indicators like RSI and MACD, to forecast future prices. The main goal is to demonstrate the application of deep learning techniques in financial market analysis.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Yehya0/StockPredictor-LSTM"
        }
      ]
    },
    {
      image: require("./assets/images/under-construction-2629935_960_720.jpg"),
      projectName: "Solana Scam Checker (UNDER CONSTRUCTION⚠️)",
      projectDesc: "SolanaScanCheck is a stateless, user-friendly web tool designed to help cryptocurrency investors assess the legitimacy of tokens on the Solana blockchain. The website allows users to enter a cryptocurrency contract address and provides an analysis based on several indicators known to reflect the credibility and security of tokens. It will also offer educational resources on avoiding cryptocurrency scams and rug pulls.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Yehya0/SolanaScamChecker"
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

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
