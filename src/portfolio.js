/* Change this file to get your personal Porfolio */
import img from "./assets/images/socket_io_logo_icon_144874.svg";
// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Ayush Dhiman",
  logo_name: "ayush dhiman",
  nickname: "I also Love Data Structures & Algorithms",
  full_name: "Ayush Dhiman",
  subTitle1: "Full Stack Developer.",
  subTitle2: "Problem Solver.",
  subTitle3: "Life Long Learner.",
  subTitle: "Full Stack Developer, Life Long Learner, Problem Solver.",
  resumeLink:
    "https://drive.google.com/file/d/1v9VllVUKlJOikOAGL_VEAMWJfKoVdSSQ/view?usp=drive_link",
  mail: "mailto:ayushdhiman0107@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ayushdhiman-py",
  linkedin: "https://www.linkedin.com/in/ayush-dhiman-3000651a0/",
  gmail: "ayushdhiman0107@gmail.com",
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive user interfaces and backend for web applications",
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Express, MongoDB and Rest APIs",
        "⚡ Integration of third party services such as Razorpay, Google Login etc.",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "gray",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:uikit",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },

        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    // {
    //   _id: "c026fe64-1542-42b0-84ab-9311840c169f",
    //   title: "Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing websites",
    //     "⚡ Experience with Continuous Integration",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Google Cloud Platform",
    //       fontAwesomeClassname: "skill-icons:gcp-dark",
    //       style: {
    //         backgroundColor: "transparent",
    //         width: "1em",
    //         height: "1em",
    //       },
    //     },
    //     {
    //       skillName: "Vercel",
    //       fontAwesomeClassname: "skill-icons:vercel-light",
    //       style: {
    //         color: "gray",
    //         fill: "gray",
    //         // backgroundColor: "white",
    //         width: "1em",
    //         height: "1em",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //         width: "1em",
    //         height: "1em",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //         width: "1em",
    //         height: "1em",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //         width: "1em",
    //         height: "1em",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //         width: "1em",
    //         height: "1em",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //         width: "1em",
    //         height: "1em",
    //       },
    //     },
    //     // {
    //     //   skillName: "Docker",
    //     //   fontAwesomeClassname: "simple-icons:docker",
    //     //   style: {
    //     //     color: "#1488C6",
    //     //   },
    //     // },
    //     {
    //       skillName: "GitHub Actions",
    //       fontAwesomeClassname: "simple-icons:githubactions",
    //       style: {
    //         color: "#5b77ef",
    //         width: "1em",
    //         height: "1em",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    // {
    //   title: "Amrita Vishwa Vidyapeetham, Coimbatore",
    //   subtitle: "Masters in Computer Applications (MCA)",
    //   logo_path: "amrita_logo.png",
    //   alt_name: "Amrita University",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence, Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
    //   ],
    //   website_link: "https://www.amrita.edu/",
    // },
    {
      title: "Guru Gobind Singh Indraprastha University, New Delhi",
      subtitle: "Bachelors in Computer Applications (BCA)",
      logo_path: "ggsipu_logo.png",
      alt_name: "GGSIPU",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ I have studied software engineering subjects like DS, Algorithms, OOPs, DBMS, OS, Computer networks etc.",
        "⚡ Got first place in AI competition.",
        "⚡ I was the head of Software Development Club of our college.",
        "⚡ I was also a member of Enactus.",
      ],
      website_link: "http://www.ipu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React Basics",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/29c75a387fcaf2f1e2403f73473092b2",
      alt_name: "Meta",
      color_code: "#096ce1",
    },

    {
      title: "Programming with JavaScript",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/cb44f1ee2db3f50b83a56cbae15fcc74",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/667de02731a480b76b5300c6612d174d",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/667de02731a480b76b5300c6612d174d",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Apprenticeship",
  description: "Till now, I've done 2 Internships mentioned below.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      {
        title: "Full Stack Developer",
        company: "IIT, Delhi",
        logo_path: "iit.png",
        alt_name: "iit",
        duration: "(Aug, 2023 - Sep, 2023)",
        location: "On-Site",
        description:
          "<li>Made a ML E-Commerce website from scratch which had clothes Tryon feature. </li><br><li>Some of the tech used was React, Firebase, Google Auth, Razorpay for payments, etc. </li>",
        color: "#0071C5",
      },

      {
        title: "Programmer",
        company: "HalesForm",
        logo_path: "hf.jpeg",
        alt_name: "infosys-logo",
        duration: "(Jul, 2022 - Jul, 2022)",
        location: "Remote",
        description:
          "<li>Worked on c# .net framework.</li><br><li>Wrote automation script which completes the work in just few minutes which was previously done manually taking it 2-3 days to complete.</li>",
      },
      // {
      //   title: "Operations Executive",
      //   company: "IIT",
      //   logo_path: "infosys-logo.png",
      //   alt_name: "infosys-logo",
      //   duration: "(Nov, 2021 - Jan, 2023)",
      //   location: "Remote",
      //   description:
      //     "<li>Implemented few UI tweaks and added new categories with add on pop-ups (video, images etc.) in an web app named “Awards For Excellence” which is used for nominating employees within Infosys for various award categories using Angular v10.</li><br><li>Implemented REST API using Node and Express to fetch the data of the classrooms, learners, educators and courses. Used socket programming for multi-user experience and other features like chat, screen, audio and video share for web based AR/VR learning platform.</li><br><li>Developed 2 new tools with an intuitive design in Lex (Learning platform for the employees of Infosys) for interactive content creation using Angular v12 which is getting used by 100+ educators for creating new interactive courses, consumed by 1000+ learners.</li>",
      // },
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create MERN Stack Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "project-1",
      name: "Chatties - A chat app",
      url: "https://chatties.onrender.com",
      repoUrl: "https://github.com/ayushdhiman-py/Chatties/tree/main",
      description:
        "A Real Time Chat App made using React which allows to chat in real time.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Css",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Javascript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "Express",
          iconifyClass: "devicon:express",
        },
        {
          name: "Node",
          iconifyClass: "fa-brands:node",
        },
        {
          name: "Render",
          iconifyClass: "simple-icons:render",
        },
        {
          name: "Soket.io",
          iconifyClass: "mdi:electricity-circle",
        },
        {
          name: "Nodemon",
          iconifyClass: "logos:nodemon",
        },
        {
          name: "Github",
          iconifyClass: "icon-park:github",
        },
        {
          name: "MongoDB",
          iconifyClass: "devicon:mongodb-wordmark",
        },
        {
          name: "JWT",
          iconifyClass: "logos:jwt",
        },
      ],
    },

    {
      id: "project-2",
      name: "GitNoobs",
      url: "https://git-issue-finder.onrender.com/",
      repoUrl: "https://github.com/ayushdhiman-py/Gitnoobs/tree/main",
      description:
        "A React application which shows you the issues that are currently open as issues in a repo.",
      languages: [
        {
          name: "Rest API",
          iconifyClass: "tabler:api",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Javascript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "Css",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Render",
          iconifyClass: "simple-icons:render",
        },
        {
          name: "Github",
          iconifyClass: "icon-park:github",
        },
      ],
    },

    {
      id: "project-3",
      name: "A star - Algorithm visualizer",
      repoUrl: "https://github.com/ayushdhiman-py/AstarAlgo",
      description: "An Algorithm visualizer of A star algorithm.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Github",
          iconifyClass: "icon-park:github",
        },
      ],
    },

    {
      id: "project-4",
      name: "Portfolio",
      url: "https://chatties.onrender.com",
      repoUrl: "https://github.com/ayushdhiman-py/Chatties/tree/main",
      description:
        "A Real Time Chat App made using React which allows to chat in real time.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos:html-5",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Css",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Javascript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "Render",
          iconifyClass: "simple-icons:render",
        },
        {
          name: "Github",
          iconifyClass: "icon-park:github",
        },
        {
          name: "Styled Components",
          iconifyClass: "skill-icons:styledcomponents",
        },
      ],
    },
    {
      id: "project-5",
      name: "Notes taking app",
      url: "https://ayushdhiman-py.github.io/Notes/",
      repoUrl: "https://github.com/ayushdhiman-py/Notes",
      description: "An Algorithm visualizer of A star algorithm.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos:html-5",
        },
        {
          name: "Javascript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "Css",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Github",
          iconifyClass: "icon-park:github",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
