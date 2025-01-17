import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aaron Ballesteros",
  initials: "AB",
  url: "https://0n.engineer/",
  location: "Sacramento, CA",
  locationLink: "https://www.google.com/maps/place/sacramento",
  description:
    "New Grad & Software Engineer",
  summary:
    "My goal is to be at the forefront of engineering projects that make a tangible difference. " +
      "I value collaboration, continuous learning, and the application of technical expertise to diverse real-world challenges. " +
      "As I chart my professional journey, I am eager to collaborate with teams that are pushing the boundaries of what's possible and expanding the horizons of the tech industry.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abal387@wgu.edu",
    tel: "+19166126183",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/opratrx",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aarondb/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/",
        icon: Icons.file,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CompSciLib",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Quality Assurance Tester",
      logoUrl: "/compscilib.jpeg",
      start: "August 2023",
      end: "December 2023",
      description: [
        "Evaluated model proficiency in Discrete Math, Statistics, Linear Algebra, Data Structures, and Computer Architecture.",
        "Streamlined navigation, enhanced responsiveness, and prioritized simplicity for an intuitive user experience.",
        "Identified and resolved 13 bugs across features like practice modules, homework assistance, and study plans.",
        "Played a key role in integrating major features, including the Roadmap UI Revamp.",
        "Enhanced the AI-powered Homework Help feature with new functionalities: output copy, math keyboard, LaTeX toggle, and query history.",
      ],
    },
    {
      company: "California Department of Food and Agriculture",
      badges: [],
      location: "Sacramento, CA",
      title: "Agricultural Technician II",
      logoUrl: "/cali.webp",
      start: "May 2019",
      end: "Present",
      description: [
        "Collaborated with scientists, technicians, and developers to define application development specifications.",
        "Designed and developed flowcharts for iOS application architecture and development processes.",
        "Contributed to Statements of Qualifications (SOQs) by establishing protocol standards.",
        "Created technical training materials, including presentations and instructional videos, to teach protocols and improve team efficiency.",
        "Conducted laboratory tasks, including specimen preparation, glassware sanitation, and nematode sample processing.",
      ],
    },
    {
      company: "California Department of Food and Agriculture ",
      badges: [],
      location: "Sacramento, CA",
      title: "Agricultural Technician I",
      logoUrl: "/cali.webp",
      start: "June 2017",
      end: "May 2019",
      description: [
        "Followed established trapping and survey protocols, including proper placement, handling, and servicing of traps. Adheres to trap servicing schedule. ",
        "Followed established phytosanitary protocols when entering/leaving trapping sites to prevent spread of pests and diseases of concern.",
        "Maintained daily and/or weekly reports of work completed, including number of traps serviced, properties visited and/or surveyed, samples collected, and other information as needed.",
        "Provided complete data and reports to the Environmental Scientist for tracking/progress of the trapping program.",
      ],
    },
  ],
  education: [
    {
      school: "Western Governors University",
      href: "https://www.wgu.edu",
      degree: "Bachelors Degree of Computer Science (BSCS) - 3.0",
      logoUrl: "/wgu.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Cosumnes River College",
      href: "https://crc.losrios.edu",
      degree: "Associates Degree of Computer Science (ASCS) - 3.6",
      logoUrl: "/crc.png",
      start: "2021",
      end: "2022",
    },
  ],
  awards: [
    {
      institution: "WGU Excellence Award",
      href: "https://www.wgu.edu",
      award: "Dr. Kirk A. Welter, P.E. - Vice President, Evaluation Operations",
      description: `"The student successfully implemented the algorithm and data structure as appropriate to the given task and satisfied all the task requirements
on the first attempt. The student had an intuitive simulation for the interface for different lookups of the data."`,
      logoUrl: "/seal.png",
      start: "April 2024",
    },
    {
      institution: "Associates Degree of Computer Science - Honors",
      href: "https://crc.losrios.edu",
      award: "Cosumnes River College",
      description: "Successfully completed the Computer Science program with a 3.6 GPA.",
      logoUrl: "/crc.png",
      start: "December 2022",
    },
  ],
  certificates: [
    {
      institution: "Linux Essentials Professional Development Certificate",
      href: "https://www.wgu.edu",
      certificate: "Linux Professional Institute (LPI)",
      logoUrl: "/lpi.png",
      start: "2023",
      end: "2024",
    },
    {
      institution: "Oracle Certified Associate, Java SE 8 Programmer",
      href: "https://crc.losrios.edu",
      certificate: "Oracle",
      logoUrl: "/oracle.png",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "SwiftMD",
      href: "https://swiftmd.0n.engineer",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed [SwiftMD](https://swiftmd.0n.engineer/), a SaaS web application that utilizes machine learning to predict potential health conditions based on user symptoms. Designed to streamline preliminary medical diagnostics and improve healthcare efficiency.",
      technologies: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "Scikit-learn",
        "NumPy",
        "Matplotlib",
        "Semantic UI",
        "JavaScript",
        "HTML/CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://swiftmd.0n.engineer",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "./swiftmd.mp4",
    },
    {
      title: "Package Delivery System",
      href: "https://github.com/opratrx/c950-data-structures-algorithms-ii",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed an optimized package delivery system for WGUPS as part of my Data Structures & Algorithms II course, earning an Excellence Award. Leveraging a Greedy Algorithm and hash tables, the program ensured efficient routing and real-time package management, aligning with course goals in applying advanced data structures and evaluating algorithmic complexity.",
      technologies: [
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/opratrx/c950-data-structures-algorithms-ii",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./c950.mp4",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Senior Project - Capstone",
      dates: "Western Governors University - C964",
      tags: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "Scikit-learn",
        "NumPy",
        "Matplotlib",
        "Semantic UI",
        "JavaScript",
        "HTML/CSS",
      ],
      description:
        "The Computer Science Capstone course allows the student to demonstrate their application of the academic and\n" +
          "professional abilities developed during the BSCS program. The capstone challenges students to integrate skills and\n" +
          "knowledge from all program domains into one project.",

      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://swiftmd.0n.engineer/",
        },
      ],
      image: "", // Add the image property here
    },
    {
      title: "Data Structures & Algorithms II",
      dates: "Western Governors University - C950",
      tags: ["Python"],
      description:
        "Data Structures and Algorithms II explores the analysis and implementation of high-performance data structures and supporting algorithms, including graphs, hashing, self-adjusting data structures, set representations, and dynamic programming. The course also introduces students to NP-complete problems. The course discusses how to use Python techniques to implement software solutions for problems of memory management and data compression. This course has two prerequisites: Data Structures and Algorithms I and Discrete Math II.",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/opratrx/c950-data-structures-algorithms-ii/",
        },
      ],
      image: "", // Add the image property here
    },
    {
      title: "Advanced Java",
      dates: "Western Governors University - D387",
      tags: [
          "Java",
          "Maven",
          "Spring Boot",
          "Angular",
          "Docker",
          "SQL",
          "AWS",
      ],
      description:
        "Advanced Java refines object-oriented programming expertise and skills. You will implement multithreaded, object-oriented code with the features of Java necessary to develop software that meets business requirements. Additionally, you will determine how to deploy software applications using cloud services. This course requires intermediate expertise in object-oriented programming and the Java language.",
      icon: "public",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/opratrx/d387-advanced-java",
        },
      ],
      image: "", // Add the image property here
    },
    {
      title: "Back-End Programming",
      dates: "Western Governors University - D288",
      tags: [
          "Java",
          "Maven",
          "Spring Boot",
          "Angular",
          "SQL",
          "Lombok",
      ],
      description:
        "Back-End Programming introduces students to creating back-end components of a web application with the support of framework packages. This course also teaches students how to implement database functionality in a web application and how to create web services. This course requires intermediate expertise in object-oriented programming and the Java language.",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          image: "https://kagi.com/proxy/i?c=lWla4SiEvVNmj85b_dW2HcBDkb-62vZXR0vAz8RZagoDUxPesKfOlDMd49nFCewhhn0rxbEkwn-2wtYtHSE8-UW-hRXUpYeG50dRQH08vmIH3BHDIp37cLe56DZNACJ77cvgKyXxcB1pJ9g5AzBsxgDNzHIYprcyeL3Gffhl7EA%3D",
          mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
          href: "https://github.com/opratrx/d288-back-end",
        },
      ],
      image: "", // Add the image property here
    },
    {
      title: "Java Frameworks",
      dates: "Western Governors University - D287",
      tags: [
          "Java",
          "Maven",
          "Spring Boot",
          "Thymeleaf",
          "SQL",
          "Bootstrap",
      ],
      description:
        "Java Frameworks builds object-oriented programming expertise and introduces powerful new tools for Java application development. Students will execute exception handling, Java frameworks, and other object-oriented principles and constructs to develop a complete application including a user interface. This course requires foundational knowledge of object-oriented programming and the Java language.",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/opratrx/d287-java-frameworks",
        },
      ],
      image: "", // Add the image property here
    },
    {
      title: "Genetic Algorithm Robots",
      dates: "Folsom Lake College - CISP 400",
      tags: ["C++"],
      description:
        "This project is a C++ implementation of an experiment first initiated at Harvard University in 1968. The primary objective is to study the effects of evolution on a population of robots using a genetic algorithm. Robots are designed to navigate a grid in search of batteries, which they use as an energy source. As they move and make decisions, they consume energy, and their survival depends on efficient decision-making.",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/opratrx/flc_geneticalgo",
        },
      ],
      image: "", // Add the image property here
    },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
