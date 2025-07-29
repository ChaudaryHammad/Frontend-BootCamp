import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I bring hands-on experience in web and mobile development, having worked extensively with React, React Native, and the .NET Framework. My work emphasizes responsive design, clean architecture, and maintainable code aligned with SOLID principles.`;

export const ABOUT_TEXT = `
I’m a Full Stack Developer with a strong foundation in building responsive and interactive applications across web and mobile platforms. I specialize in ReactJS, React Native, Tailwind CSS, and modern JavaScript to craft seamless user experiences, enhanced by smooth animations using Framer Motion.

On the backend, I work with Node.js, Express, and MongoDB as part of the MERN stack, and I also have hands-on experience with the .NET Framework, giving me a versatile edge in application development.

I’m actively involved in open-source projects, where I apply best practices like the SOLID principles and collaborate with developers worldwide. Continuously exploring new technologies, I aim to deliver scalable, maintainable, and impactful solutions in dynamic, real-world environments.`;

export const EXPERIENCES = [
  {
    year: "Mar-2025 - Present",
    role: "Associate Software Engineer",
    company: "SDSol Technologies",
    description: `Working as a Full Stack Developer with a focus on frontend technologies like React.js and React Native while also contributing to backend systems using .NET Framework. Collaborated on cross-functional projects, ensuring scalable, maintainable code aligned with SOLID principles.`,
    technologies: [
      "React.js",
      "React Native",
      ".Net Core",
      "SQL Server",
      "ASP.NET",
    ],
  },

  {
    year: "Oct-2023 - Nov-2023",
    role: "Interned as a Frontend Developer",
    company: "IntersPak",
    description: `Developed user interfaces for web applications using React.js and Tailwind CSS. Collaborated with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "Express.js", "mongoDB"],
  },
  {
    year: "Oct-2023 - Nov-2023",
    role: "Open Source Contributor",
    company: "GitHub",
    description: `Contributed to open-source projects on GitHub, collaborating with developers worldwide to enhance software functionality and resolve issues. Participated in Hacktoberfest and coding challenges to develop innovative solutions and expand my skill set.`,
    technologies: ["HTML", "CSS", "React.js", "Tailwind CSS"],
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
    link: "https://coursera.org/share/afcf917e8fc519c4b69fa8e5fd5f6ed8",
  },

  {
    year: "Dec-2023 - Jan-2024 ",
    role: "Developing Back-End Apps with Node.js and Express",
    company: "IBM",
    description: `Completed a course on developing backend applications with Node.js and Express on IBM, focusing on building RESTful APIs, integrating MongoDB databases, and deploying applications to cloud platforms. Developed a multi-vendor e-commerce platform as a final project to demonstrate my skills in backend development.`,
    link: "https://coursera.org/share/8bd963052736acdee18ed6a6fbc1aaf0",
  },

  {
    year: "Jan-2024 - Feb-2024 ",
    role: "Introduction to MongoDB",
    company: "MongoDB Inc.",
    description: `Completed an introductory course on MongoDB on MongoDB Inc, focusing on database management, CRUD operations, and data modeling. Developed a blogging application with MongoDB as the database to apply the learned concepts and enhance my skills in database management.`,
    link: "https://coursera.org/share/f073b3e60afee2f22639c8ec2c2f6730",
  },
];

export const PROJECTS = [
  {
    title: "AutoEssentials  - FYP",
    image: project1,
    description:
      "Developed a multi-vendor e-commerce platform using the MERN stack, connecting car owners with premium auto parts and integrating real-time CNN-based inspection tools to enhance safety and maintenance.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    link: [
      { github: "https://github.com/ChaudaryHammad/Autoessentials" },
      { live: "https://autoessentials.vercel.app/" },
    ],
  },

  {
    title: "Runo",
    image: project2,
    description:
      "Developed a full-stack blogging application that allows users to create, edit, and publish blog posts, with features like user authentication, commenting, and post categorization.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: [
      { github: "https://github.com/ChaudaryHammad/Runo" },
      { live: "https://runo-nine.vercel.app" },
    ],
  },
  {
    title: "PassSense",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],

    link: [
      { github: "https://github.com/ChaudaryHammad/PassSense" },
      { live: "https://pass-sense.vercel.app" },
    ],
  },
  {
    title: "Expense Tracking App",
    image: project4,
    description:
      "The Expense Tracking App allows users to track their expenses and manage their finances effectively",
    technologies: ["Reactjs", "GraphQl", "Tailwindcss"],

    link: [
      { github: "https://github.com/ChaudaryHammad/Expense-tracking-app" },
      { live: "" },
    ],
  },
];

export const CONTACT = {
  address: "Burewala, Punjab, Pakistan",
  phoneNo: "+92 314 6146 470 ",
  email: "hammad.node@gmail.com",
};
