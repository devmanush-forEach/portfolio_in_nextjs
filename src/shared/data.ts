import {
  ContactSection,
  EducationHead,
  Experience,
  Profile,
  Project,
  ProjectSection,
  Qualifications,
  SeoData,
  SkillSection,
  SocialMediaLink,
} from "./types";

// SEO SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const seo: SeoData = {
  title: "Nikhil's Portfolio",
  description:
    "Adaptable, enthusiastic, self-motivated, collaborative, good team-player and always thrive to work on end to end projects and curious to work with experts in computer programming. Looking forward to working with an organisation that utilises these skills to contribute to the organization's success.",
  og: {
    title: "Nikhil Shakya Portfolio",
    type: "website",
    url: "http://nikhilshakya.com/",
  },
};
// PROFILE SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const profile: Profile = {
  title: "Full stack MERN developer",
  logoName: "Nikhilshakya",
  subTitle: "",
  about:
    "Hi, I am Nikhil Shakya. A passionate, enthusiastic,adaptable, self-motivated, collaborative, good team-player and always thrive to work on end to end projects and curious to work with experts in computer programming. Looking forward to working with an organisation that utilises these skills to contribute to the organization's success.",
  resumeLink:
    "https://drive.google.com/file/d/1-2lkcrILAqanGKysCnXjn-tqEUfFB3Kj/view?usp=share_link",

  portfolioRepository: "https://github.com/devmanush-forEach/portfolio-website",
  githubProfile: "https://github.com/devmanush-forEach",
};

// SOCIAL MEDIA SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Github",
    link: "https://github.com/devmanush-forEach",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nikhil-shakya-3a1939213",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "shakyanikhil12345@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Nikhils49628021",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nikhil.shakya.9400/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.facebook.com/nikhil.shakya.9400/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

// EDUCATION SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const educationHead: EducationHead = {
  title: "Basic Education and Qualification",
  description: "",
};

// QUALIFICATIONS SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const qualifications: Qualifications[] = [
  {
    title: "Masai School",
    subtitle: "Full stack web development course",
    logoPath: "masai_logo.jpg",
    altName: "Masai School",
    duration: "August 2021 - March 2022",
    descriptions: [
      "⚡ I have studied a lot of technical skills of full stack web development.",
      "⚡ Apart from this, I have also learned soft skills like team-work, time management, communication skills.",
      "⚡ Developed presentable and fully responsive webpages and applicatoion.",
    ],
    website_link: "https://www.masaischool.com/",
  },
  {
    title: "Government Polytechnic Ghaziabad",
    subtitle: "Three year diploma in Electronics and Communication Engineering",
    logoPath: "gpg_logo.png",
    altName: "GPG",
    duration: "2018 - 2021",
    descriptions: [
      "⚡ I have studied basics of electronic components and devices, microcontrollers, circuits.",
      "⚡ Apart from this, I have learned basics of C language, basics of Arduino programming",
      "⚡ Participated in 2018 jonal games organised by BTEUP.",
    ],
    website_link: "https://www.gpghaziabad.ac.in/",
  },
  {
    title: "St. lawrance Sr. Sec. Public School",
    subtitle: "High school & Intermediate (in PCM) ",
    logoPath: "lawrance_logo.png",
    altName: "GPG",
    duration: "2014 - 2016 & 2016 - 2018",
    descriptions: [
      "⚡ Completed my high school and inter education.",
      "⚡ Apart from this, I have participated in school games competition.",
    ],
    website_link:
      "https://school.careers360.com/schools/st-lawrance-public-school-shyam-nagar-farrukhabad",
  },
];
// CERTIFICATION SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const certifications = [];

// SKILL SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const skills: SkillSection[] = [
  {
    title: "Full Stack Development",
    fileName: "FullStackImg",
    skills: [
      "⚡ Building resposive website front end using React-Redux",
      "⚡ Creating application backend in NodeJS, Express, & MongoDB",
    ],
    softwareSkills: [
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
        skillName: "Bootstrap",
        fontAwesomeClassname: "simple-icons:bootstrap",
        style: {
          color: "#712CF9",
        },
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "simple-icons:javascript",
        style: {
          backgroundColor: "#000000",
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
        skillName: "Redux",
        fontAwesomeClassname: "simple-icons:redux",
        style: {
          color: "#6A43A9",
        },
      },
      {
        skillName: "React-Router",
        fontAwesomeClassname: "simple-icons:reactrouter",
        style: {
          color: "#D0021B",
        },
      },
      {
        skillName: "MUI",
        fontAwesomeClassname: "simple-icons:mui",
        style: {
          color: "#007FFF",
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
        skillName: "NPM",
        fontAwesomeClassname: "simple-icons:npm",
        style: {
          color: "#CB3837",
        },
      },
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "simple-icons:mongodb",
        style: {
          color: "#2C8EBB",
        },
      },
      {
        skillName: "Express",
        fontAwesomeClassname: "simple-icons:express",
        style: {
          color: "#663399",
        },
      },
      {
        skillName: "GraphQL",
        fontAwesomeClassname: "simple-icons:graphql",
        style: {
          color: "#E10098",
        },
      },
      {
        skillName: "Git Hub",
        fontAwesomeClassname: "simple-icons:git",
        style: {
          color: "#EF391A",
        },
      },
    ],
  },
  {
    title: "Cloud Infra-Architecture",
    fileName: "CloudInfraImg",
    skills: [
      "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    ],
    softwareSkills: [
      {
        skillName: "GCP",
        fontAwesomeClassname: "simple-icons:googlecloud",
        style: {
          color: "#4285F4",
        },
      },
      {
        skillName: "AWS",
        fontAwesomeClassname: "simple-icons:amazonaws",
        style: {
          color: "#FF9900",
        },
      },
      {
        skillName: "Azure",
        fontAwesomeClassname: "simple-icons:microsoftazure",
        style: {
          color: "#0089D6",
        },
      },
      {
        skillName: "Firebase",
        fontAwesomeClassname: "simple-icons:firebase",
        style: {
          color: "#FFCA28",
        },
      },
      {
        skillName: "PostgreSQL",
        fontAwesomeClassname: "simple-icons:postgresql",
        style: {
          color: "#336791",
        },
      },
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "simple-icons:mongodb",
        style: {
          color: "#47A248",
        },
      },
      {
        skillName: "Docker",
        fontAwesomeClassname: "simple-icons:docker",
        style: {
          color: "#1488C6",
        },
      },
      {
        skillName: "Kubernetes",
        fontAwesomeClassname: "simple-icons:kubernetes",
        style: {
          color: "#326CE5",
        },
      },
    ],
  },
  {
    title: "UI/UX Design",
    fileName: "DesignImg",
    skills: [
      "⚡ Designing highly attractive user interface for mobile and web applications",
      "⚡ Customizing logo designs and building logos from scratch",
      "⚡ Creating the flow of application functionalities to optimize user experience",
    ],
    softwareSkills: [
      {
        skillName: "Adobe XD",
        fontAwesomeClassname: "simple-icons:adobexd",
        style: {
          color: "#FF2BC2",
        },
      },
      {
        skillName: "Figma",
        fontAwesomeClassname: "simple-icons:figma",
        style: {
          color: "#F24E1E",
        },
      },
      {
        skillName: "Adobe Illustrator",
        fontAwesomeClassname: "simple-icons:adobeillustrator",
        style: {
          color: "#FF7C00",
        },
      },
      {
        skillName: "Inkscape",
        fontAwesomeClassname: "simple-icons:inkscape",
        style: {
          color: "#000000",
        },
      },
    ],
  },
];

// COMPETITIVE SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const competitiveSites = [
  // {
  //   siteName: "HackerRank",
  //   iconifyClassname: "simple-icons:hackerrank",
  //   style: {
  //     color: "#2EC866",
  //   },
  //   profileLink: "https://www.hackerrank.com/layman_brother",
  // },
  // {
  //   siteName: "Codechef",
  //   iconifyClassname: "simple-icons:codechef",
  //   style: {
  //     color: "#5B4638",
  //   },
  //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
  // },
  // {
  //   siteName: "Codeforces",
  //   iconifyClassname: "simple-icons:codeforces",
  //   style: {
  //     color: "#1F8ACB",
  //   },
  //   profileLink: "http://codeforces.com/profile/layman_brother",
  // },
  // {
  //   siteName: "Hackerearth",
  //   iconifyClassname: "simple-icons:hackerearth",
  //   style: {
  //     color: "#323754",
  //   },
  //   profileLink: "https://www.hackerearth.com/@ashutosh391",
  // },
  // {
  //   siteName: "Kaggle",
  //   iconifyClassname: "simple-icons:kaggle",
  //   style: {
  //     color: "#20BEFF",
  //   },
  //   profileLink: "https://www.kaggle.com/laymanbrother",
  // },
];

// EXPERIENCE SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const experience: Experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have 7 months work experience as an Associative software developer at Roado and I have seven months training experience at Masai where I worked on three collaborative projects and two individual projects.",
  headerImagePath: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Software Developer",
          company: "RoadO",
          companyUrl: "https://www.roado.co.in/",
          logoPath: "roado_logo.png",
          duration: "April 2022 - October 2022",
          location: "Bengaluru, Karnataka, ",
          description:
            "I was working as an Associative Software developer. My roles were to maintain and update frontend as well as backend side of the webside. There I learned a lot of new tech skills like graphql API and also team work.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Masai Alumini",
          company: "Masai School",
          companyUrl: "https://www.delhivery.com/",
          logoPath: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// PROJECTS SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const project: ProjectSection = {
  title: "Projects",
  description:
    "I have created two fully functional websites with my team and also I have created many minor projects at masai in frontend as well as in backend. ",
  avatarImagePath: "projects_image.svg",
  projects: [
    {
      id: "R_kgDOGij2ef",
      name: "Lasles-VPN-clone",
      createdAt: "2022-11-16T07:03:49Z",
      url: "https://github.com/devmanush-forEach/lasles-vpn",
      description:
        "Lasles VPN clone is a single page MERN app with a pixel perfect, fully responsive and user interactive UI. It is an individual project completed in 5 days.",
      isFork: false,
      imgUrl: "laslesvpn.png",
      websiteUrl:
        "http://ec2-65-0-47-21.ap-south-1.compute.amazonaws.com:3000/",
      techStack: [
        {
          name: "React",
          icon: "simple-icons:react",
          color: "#61DAFB",
        },
        {
          name: "redux",
          icon: "simple-icons:redux",
          color: "#6A43A9",
        },
        {
          name: "React-Router",
          icon: "simple-icons:reactrouter",
          color: "#D0021B",
        },
        {
          name: "Axios",
          icon: "simple-icons:axios",
          color: "#5a29e4",
        },
        {
          name: "MongoDB",
          icon: "simple-icons:mongodb",
          color: "#2C8EBB",
        },
        {
          name: "NodeJS",
          icon: "simple-icons:node-dot-js",
          color: "#339933",
        },
        {
          name: "Express",
          icon: "simple-icons:express",
          color: "#663399",
        },
        {
          name: "Razor Pay",
          icon: "simple-icons:razorpay",
          color: "#0a1070",
        },
        {
          name: "Netlify",
          icon: "simple-icons:netlify",
          color: "#46a1be",
        },
      ],
    },
    {
      id: "R_kgDOGij2EQ",
      name: "Bitcs-clone",
      createdAt: "2022-02-16T07:03:49Z",
      url: "https://github.com/devmanush-forEach/bitcs-clone",
      description:
        "Bitcs-clone is a single page react app with a pixel perfect , fully responsive, and user interactive UI. It is an Individual project completed in 2 days. ",
      isFork: false,
      imgUrl: "bitcs.png",
      websiteUrl: "https://bitcs-clone-d4752.netlify.app//",
      techStack: [
        {
          name: "JavaScript",
          icon: "logos-javascript",
        },
        {
          name: "HTML",
          icon: "logos-html-5",
        },
        {
          name: "CSS",
          icon: "logos-css-3",
        },
        {
          name: "React",
          icon: "simple-icons:react",
          color: "#61DAFB",
        },
        {
          name: "redux",
          icon: "simple-icons:redux",
          color: "#6A43A9",
        },
        {
          name: "React-Router",
          icon: "simple-icons:reactrouter",
          color: "#D0021B",
        },
      ],
    },
    {
      id: "R_kgDOGh3FHg",
      name: "Myfitnesspal-clone",
      createdAt: "2021-12-14T07:31:03Z",
      url: "https://github.com/Ravindraapps/MyFitnesspalCWP",
      description:
        " My fitnesspal is a single page web app where users get their exercise schedule and diet plan according to experts.",
      isFork: false,
      imgUrl: "myfitnesspal.png",
      websiteUrl: "https://myfitnesspal-clone-2ed873.netlify.app/",
      techStack: [
        {
          name: "JavaScript",
          icon: "logos-javascript",
        },
        {
          name: "HTML",
          icon: "logos-html-5",
        },
        {
          name: "CSS",
          icon: "logos-css-3",
        },
        {
          name: "ReactJS",
          icon: "simple-icons:react",
          color: "#61DAFB",
        },
        {
          name: "Redux",
          icon: "simple-icons:redux",
          color: "#6A43A9",
        },
        {
          name: "React-Router",
          icon: "simple-icons:reactrouter",
          color: "#D0021B",
        },
      ],
    },
    {
      id: "R_kgDOGh3FHg",
      name: "FrontEndMasters-Website",
      createdAt: "2021-12-14T07:31:03Z",
      url: "https://github.com/jishanpatel7/FrontEndMasters-Website",
      description:
        "Frontend-Master is E-learning Platform for Learning Frontend Development.",
      isFork: false,
      imgUrl: "frontend.jfif",
      websiteUrl: "https://safe-woodland-02335.herokuapp.com/",
      techStack: [
        {
          name: "JavaScript",
          icon: "logos-javascript",
        },
        {
          name: "HTML",
          icon: "logos-html-5",
        },
        {
          name: "CSS",
          icon: "logos-css-3",
        },
        {
          name: "MongoDB",
          icon: "simple-icons:mongodb",
          color: "#2C8EBB",
        },
        {
          name: "NodeJS",
          icon: "simple-icons:node-dot-js",
          color: "#339933",
        },
        {
          name: "Express",
          icon: "simple-icons:express",
          color: "#663399",
        },
      ],
    },
    {
      id: "R_kgDOGUiLdg",
      name: "Lakme-India-Website",
      createdAt: "2021-11-03T10:46:22Z",
      url: "https://github.com/jishanpatel7/Lakme-India-Website",
      description:
        "Lakme India is an E-commerce Platform for Beauty and Fashion Products.",
      isFork: false,
      imgUrl: "lakme.png",
      websiteUrl: "https://lakme-clone-d613cd.netlify.app/",
      techStack: [
        {
          name: "CSS",
          icon: "logos-css-3",
        },
        {
          name: "HTML",
          icon: "logos-html-5",
        },
        {
          name: "JavaScript",
          icon: "logos-javascript",
        },
      ],
    },
  ],
};

// CONTACT SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const contact: ContactSection = {
  contactSection: {
    title: "Contact Me",
    profileImagPath: "animated_ashutosh.png",
    description:
      "I am available on almost every social site. You can message me, or mail me, I will reply within 24 hours. ",
  },
  addressSection: {
    title: "Address",
    subtitle: "Farrukhabad, Uttar Pradesh",
    avatarImagePath: "address_image.svg",
    locationMapLink:
      "https://www.google.com/maps/place/Farrukhabad+Bus+Station/@27.3862466,79.5874611,17z/data=!3m1!4b1!4m5!3m4!1s0x399e304edb3bbb91:0x5c4d97476bc01045!8m2!3d27.3862466!4d79.5896498",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+918882398520",
  },
  emailSection: {
    title: "Email Address",
    subtitle: "shakyanikhil12345@gmail.com",
  },
};
