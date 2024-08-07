import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `As a recent graduate, I have built expertise in web development through practical experience and certifications, emphasizing responsive design and adherence to SOLID principles.`;

export const ABOUT_TEXT = `
I am a Frontend Developer with a strong focus on crafting interactive and responsive user interfaces using ReactJS, Tailwind CSS, and modern JavaScript. I leverage Framer Motion for creating sophisticated animations and transitions, enhancing the user experience with smooth, dynamic effects.

Currently, I am expanding my skill set into backend development, gaining proficiency in Node.js and Express, and exploring MongoDB for database management. My work with the MERN stack allows me to build comprehensive, full-stack web applications that integrate frontend and backend seamlessly.
My passion for open-source projects drives me to actively contribute to various initiatives, where I apply my knowledge and collaborate with the community to push the boundaries of technology. I stay engaged with the latest industry trends and innovations, continually learning and experimenting to deliver cutting-edge solutions in dynamic, collaborative environments.`;

export const EXPERIENCES = [
  {
    year: "Oct-2023 - Nov-2023 ",
    role: "Interned as a Frontend Developer",
    company: "IntersPak",
    description: `Developed user interfaces for web applications using React.js and Tailwind CSS. Collaborated with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "Express.js", "mongoDB"],
  },
  {
    year: "Oct-2023 - Nov-2023",
    role: "Open Source Contributor",
    company: "GitHub",
    description: `Contributed to open-source projects on GitHub, collaborating with developers worldwide to enhance software functionality and resolve issues. Participated in Hactoberfest and coding challenges to develop innovative solutions and expand my skill set.`,
    technologies: ["HTML", "CSS", "Reactjs", "Tailwind CSS"],
  },
  
];




export const EDUCATION = [
  {
    year: "Sep-2020 - Jul-2024 ",
    role: "Bachelor's in Computer Science",
    company: "COMSATS University Islamabad",
    description: `I graduated with a Bachelor of Computer Science from COMSATS University Islamabad, Sahiwal Campus, in 2024. Throughout the rigorous 4-year program, I developed a solid foundation in software development, data structures, algorithms, and database management. My coursework and projects provided hands-on experience with modern programming languages and technologies, enhancing my problem-solving skills and collaborative abilities.`,
   
  },

  {
    year: "Jan-2024 - Feb-2024 ",
    role: "Advanced Reactjs",
    company: "Meta",
    description: `Completed an advanced React.js course on Meta, focusing on advanced concepts like Redux, Context API, and React Hooks. Developed a portfolio website and a blogging application to apply the learned concepts and enhance my skills in frontend development.`,
   link:"https://coursera.org/share/afcf917e8fc519c4b69fa8e5fd5f6ed8"
  },

  {
    year: "Dec-2023 - Jan-2024 ",
    role: "Developing Back-End Apps with Node.js and Express",
    company: "IBM",
    description: `Completed a course on developing backend applications with Node.js and Express on IBM, focusing on building RESTful APIs, integrating MongoDB databases, and deploying applications to cloud platforms. Developed a multi-vendor e-commerce platform as a final project to demonstrate my skills in backend development.`,
   link:"https://coursera.org/share/8bd963052736acdee18ed6a6fbc1aaf0"
  },

  {
    year: "Jan-2024 - Feb-2024 ",
    role: "Introduction to MongoDB",
    company: "MongoDB Inc.",
    description: `Completed an introductory course on MongoDB on MongoDB Inc, focusing on database management, CRUD operations, and data modeling. Developed a blogging application with MongoDB as the database to apply the learned concepts and enhance my skills in database management.`,
   link:"https://coursera.org/share/f073b3e60afee2f22639c8ec2c2f6730"
  },
  
];




export const PROJECTS = [
  {
    title: "AutoEssentials  - FYP",
    image: project1,
    description:
      "Contributed to the development of a multi-vendor e-commerce platform using the MERN stack, connecting car owners with premium auto parts and integrating real-time CNN-based inspection tools to enhance safety and maintenance.",
    technologies: ["React", "Node.js", "MongoDB","Express.js"],
    link:""
  },
  
  {
    title: "Blogging Application",
    image: project2,
    description:
      "Developed a full-stack blogging application that allows users to create, edit, and publish blog posts, with features like user authentication, commenting, and post categorization.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link:""
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link:"https://hammad-portfolio-k4z9.vercel.app/"
  },
  {
    title: "AgriCo Website Landing Page",
    image: project4,
    description:
      "Designed a responsive landing page for an agricultural company, featuring product information, contact details, and a subscription form.",
    technologies: ["HTML", "CSS", "JAvascript", ],
    link:"https://chaudaryhammad.github.io/AgriCulture-Website/"
  },

];

export const CONTACT = {
  address: "Burewala, Punjab, Pakistan",
  phoneNo: "+92 314 6146 470 ",
  email: "hammad.node@gmail.com",
};
