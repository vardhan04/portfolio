/* Change this file to get your personal Portfolio */

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
  username: "Sai Vardhan",
  title: "Hi, I'm Sai Vardhan",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks, constantly seeking innovative solutions for real-world problems."
  ),
  resumeLink:
 "https://drive.google.com/file/d/1ta9GqwE8wGRw9Hb_jMYQ2LVljPJoCy2W/view",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vardhan04",
  linkedin: "https://www.linkedin.com/in/vardhan04/",
  gmail: "saivardhan.vsd94@gmail.com",
  gitlab: "tel:+15628242552", 
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your applications."
    ),
    emoji("⚡ Progressive Web Applications prioritizing high performance and user satisfaction."),
    emoji(
      "⚡ Integrate AI features using TensorFlow and PyTorch, enhancing application functionality with machine learning."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "boostsrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University Long Beach",
      logo: require("./assets/images/csu.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - December 2024",
      desc: "Coursework:",
      descBullets: [
        "Distributed Computing, Pattern Recognition, Advanced Software Engineering",
        "Artificial Intelligence, Software Testing and Verification, Advanced Analysis of Algorithms"
      ]
    },
    {
      schoolName: "CVR College",
      logo: require("./assets/images/cvr.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - July 2021",
      desc: "Conducted research on CNN and Computer Vision, enhancing image recognition",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Automatic Data Processing",
      companylogo: require("./assets/images/adp1.png"),
      date: "Aug 2021 – Dec 2022",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Redesigned dashboard interface using ReactJS and JavaScript for improved performance and user engagement.",
        "Enhanced deployment efficiency by designing CI/CD pipelines with Jenkins and Docker.",
        "Optimized frontend and backend integration to improve API response times and user interactions.",
        "Automated server monitoring using Python scripts to reduce downtime and speed up system recovery."
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    {
      role: "Software Engineer Intern",
      company: "Automatic Data Processing",
      companylogo: require("./assets/images/adp1.png"),
      date: "Sep 2020 – Dec 2020",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Led migration to React and TypeScript stack, improving bug reports and software architecture.",
        "Developed responsive web interfaces with HTML, CSS, and Bootstrap to increase user engagement.",
        "Collaborated with senior developers to troubleshoot issues, enhancing system performance.",
        "Spearheaded Proxy Whitelisting project, reducing time-to-market and improving deployment efficiency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "LEVERAGING AI AND MACHINE LEARNING",
  projects: [
    {
      image: require("./assets/images/yolo.webp"),
      projectName: "Vision Enhancer",
      projectDesc: "Enhanced low-light detection using YOLOv8 and Detectron2",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/vardhan04/pr_project"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bird.webp"),
      projectName: "BirdClassifier",
      projectDesc: "Bird species recognition using CNN and Flask",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/vardhan04/birdspecies"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: " Fabric Engineer Associate ",
      subtitle:
        "Skilled in designing, creating, deploying data analytics solutions with expertise in Fabric.",
      image: require("./assets/images/msoft.png"),
      imageAlt: "Microsoft Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-us/users/saivardhan-6617/credentials/9015499eb3dd6cfb"
        },
      ]
    },
    {
      title: "Certified AI Associate",
      subtitle:
        "Equipped to guide strategic decisions with Salesforce's Trusted AI Principles.",
      image: require("./assets/images/sls1.png"),
      imageAlt: "Salesforce Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.salesforce.com/trailblazer/ug9cc1imu8un418cvi"
        }
      ]
    },

    {
      title: "API Fundamentals Expert",
      subtitle: "Master API integration and testing with Postman for modern software development.",
      image: require("./assets/images/postman.jpg"),
      imageAlt: "Postman Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://badgr.com/public/assertions/MBMIKCz0QGOT56-b9afsEA?identity__email=saivardhan18@gmail.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Presentation 🎥"),
  subtitle: "I LOVE TO EXPLAIN MY PROJECTS AND INSIGHTS",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/embed/KzrDyJSBPwA"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  //resumeLink: "https://drive.google.com/file/d/1ta9GqwE8wGRw9Hb_jMYQ2LVljPJoCy2W/view",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-5628242552",
  email_address: "saivardhan.vsd94@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
