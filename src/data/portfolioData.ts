export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Android' | 'Flutter';
  teamSize: number;
  playStoreUrl?: string; // Optional: only for live apps
  isLiveOnPlayStore: boolean;
  screenshotUrl?: string; // Real Google Play screenshot
  description: string;
  responsibilities: string[];
  techStack: string[];
  accentColor: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  points: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  board?: string;
  location: string;
  year: string;
}

export interface Certification {
  title: string;
  issuer: string;
  location: string;
  duration: string;
}

export const PERSONAL_INFO = {
  name: "Harshit Saxena",
  title: "Android Developer",
  careerObjective: "To work in a challenging and growth-oriented environment where I can utilize my technical skills, enhance my knowledge, and contribute effectively to the success of the organization while continuously learning new technologies.",
  phone: "+91-9634081401",
  email: "saxenah003@gmail.com",
  location: "34, Sector 4, Greater Noida, India",
  currentRole: "Android Developer at Ogrelogic Solutions Pvt. Ltd., Noida (October 2021 – Present)",
  experienceYears: "7+ Years",
  projectsCount: "14 Projects",
  certificationsCount: "2 Certifications",
  social: {
    email: "mailto:saxenah003@gmail.com",
    phone: "tel:+919634081401",
    whatsapp: "https://wa.me/919634081401"
  }
};

// Strictly from CV: Technical Skills
export const TECHNICAL_SKILLS = {
  programmingLanguages: ["Kotlin", "Core Java", "Dart", "C"],
  mobileTechnologies: ["Android SDK", "Flutter (Beginner Level)"],
  librariesFrameworks: [
    "Kotlin Coroutines",
    "Android Jetpack (LiveData, ViewModel)",
    "Retrofit",
    "Volley",
    "Firebase"
  ],
  apisIntegrations: [
    "REST API",
    "Payment Gateway Integration",
    "Google Maps API",
    "Open Street Map",
    "Firebase Cloud Messaging (FCM)"
  ],
  databases: ["MySQL", "Room Database", "Firebase Database"],
  tools: ["Android Studio", "Eclipse", "NetBeans", "VS Code", "Git"],
  technologiesAndKnowledge: [
    "Android Application Development",
    "REST API Integration",
    "JSON & XML Parsing",
    "Firebase Authentication",
    "Push Notifications",
    "Location Based Services",
    "Camera & Multimedia Handling",
    "Google Play Store Publishing",
    "Networking using Retrofit & Volley",
    "Third-party SDK Integration",
    "Cross-platform basics using Flutter"
  ],
  keyResponsibilities: [
    "API Integration using Retrofit",
    "Firebase Push Notifications",
    "Bug fixing and maintenance",
    "Play Store deployment",
    "Dynamic UI implementation",
    "JSON parsing and response handling"
  ]
};

// Strictly from CV: 14 Professional Projects
// Live Play Store apps have screenshots and verified links
// Apps not live on Play Store have playStoreUrl omitted
export const PROJECTS: Project[] = [
  {
    id: "rapagra",
    title: "Rapagra – Smart Agriculture Solution",
    tagline: "Smart agriculture and crop health monitoring application",
    category: "Android",
    teamSize: 6,
    isLiveOnPlayStore: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en",
    screenshotUrl: "https://play-lh.googleusercontent.com/Z2T9iKlmVsWm1Yv4UVDKb5E0ZjuMCAIM3_vySQxB2uf0ZTfiB1rthc1EOty-05IQkoljss3U-lYQTi_JVu90fg=s0-br30",
    description: "A smart agriculture and crop health monitoring application that helps farmers detect disease risks early and optimize pesticide usage. The system reduces crop protection costs, labor, and chemical spraying while improving productivity and yield management.",
    responsibilities: [
      "Developed using Kotlin and Android SDK",
      "API Integration using Retrofit for real-time sensor updates",
      "Room Database caching for offline farm monitoring",
      "Play Store deployment and regular updates"
    ],
    techStack: ["Kotlin", "Android SDK", "Retrofit", "Room Database", "REST API"],
    accentColor: "#10b981"
  },
  {
    id: "immortal-seats",
    title: "Immortal Seats – Event Tickets",
    tagline: "Event ticket booking application with interactive seat maps",
    category: "Android",
    teamSize: 2,
    isLiveOnPlayStore: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en",
    screenshotUrl: "https://play-lh.googleusercontent.com/0pS-Y8Suf03YUCLZJX0XYXAFF9WcSTmYOAuN4_HdGvKlwlr78wu9DSgy6mvmYnC7HmVaqYQa-sP4Ni_v6RBS=s0-br30",
    description: "A ticket booking application that allows users to search events using advanced filters and explore interactive seat maps with real-time seat views. Users can also save and manage their favorite events for quick access.",
    responsibilities: [
      "Interactive seat view maps and event search filters",
      "Payment Gateway Integration for ticket purchases",
      "Firebase Cloud Messaging (FCM) for event notifications",
      "Dynamic UI implementation and API handling using Retrofit"
    ],
    techStack: ["Kotlin", "Android Jetpack", "Retrofit", "Payment Gateway", "FCM"],
    accentColor: "#00f0ff"
  },
  {
    id: "high-desert",
    title: "High Desert Design",
    tagline: "Project management app for landscaping and design projects",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ogrelogic.highdesertdesigns&hl=en",
    screenshotUrl: "https://play-lh.googleusercontent.com/_lI9yiL0QS9WzBfmlznLyiRCdQEXHrhUrNRIK3ds2hY9yDeH6Ak6Q_uJNJHVUSzpuLvhgFLRyEexfmBvHrqr=s0-br30",
    description: "A project management application designed for managing landscaping and design projects with real-time task tracking, team collaboration, and workload distribution. The app provides drag-and-drop project reassignment, secure data management, notifications, and detailed dashboards to improve productivity and project efficiency.",
    responsibilities: [
      "Real-time task tracking and drag-and-drop reassignment",
      "Camera & Multimedia Handling for job-site photos",
      "Firebase Push Notifications & team collaboration",
      "Bug fixing, maintenance, and Play Store publishing"
    ],
    techStack: ["Kotlin", "Android SDK", "Room Database", "Camera API", "Retrofit"],
    accentColor: "#f59e0b"
  },
  {
    id: "power-thinking",
    title: "Power Thinking Corp",
    tagline: "Mental health and well-being application",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ogrelogic.powerthinkingcorp&hl=en",
    screenshotUrl: "https://play-lh.googleusercontent.com/sorDWS61uPpgd5DyYPAIkV4WOsyTW01qbHG9ozz9xKld7aeJKyHqxfr9h9n7BIOGs4Rv4eDIx-tz_9wEyGdf=s0-br30",
    description: "A mental health and well-being application designed to promote positive thinking, resilience, and emotional strength through evidence-based techniques. The app helps users manage stress, improve self-belief, and achieve personal goals with guided wellness tools.",
    responsibilities: [
      "Guided wellness tools, audio sessions, and goal tracking",
      "Android Jetpack (LiveData, ViewModel) architecture",
      "JSON parsing and response handling",
      "Play Store release management"
    ],
    techStack: ["Kotlin", "Jetpack (LiveData, ViewModel)", "Retrofit", "Room Database"],
    accentColor: "#a855f7"
  },
  {
    id: "federal-benefits",
    title: "Federal Benefits Service",
    tagline: "Federal employee benefits & retirement education platform",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ogrelogic.FederalBenifit&hl=en",
    screenshotUrl: "https://play-lh.googleusercontent.com/CC1mKmGluS0e3uHSN42cME1sm5zJc9VIb4tSjsW0syejyWBoRc-4NohdFK8UvYVD_2kw7hdCi1BPAg2zzYD0-w=s0-br30",
    description: "A federal employee benefits application designed to educate users about retirement plans, government benefit programs, and financial security. The platform helps federal employees understand and manage their benefits while avoiding common retirement-related issues.",
    responsibilities: [
      "Educational modules and benefit calculator integrations",
      "REST API integration and JSON parsing",
      "Firebase authentication and data security",
      "Play Store updates and bug fixing"
    ],
    techStack: ["Kotlin", "REST API", "Retrofit", "Firebase Auth", "Android SDK"],
    accentColor: "#3b82f6"
  },
  {
    id: "goodwin-academy",
    title: "GoodWin Academy",
    tagline: "Childcare and early learning application",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.goodwin.academy&hl=en",
    screenshotUrl: "https://play-lh.googleusercontent.com/I0x-u_lub7sNG3abLvG07xz9j4CQtNtfb_L6wVumO3rKVVCZWxCX5tfQTIFmsibrPwde-llExM5ZRZNk2WaJWjM=s0-br30",
    description: "A childcare and early learning application designed to support safe, engaging, and high-quality child care services with seamless parent communication. The platform promotes holistic child development through a secure, screen-free, and nurturing learning environment.",
    responsibilities: [
      "Seamless parent communication and daily updates feed",
      "Firebase push notifications for instant alerts",
      "Dynamic UI implementation and photo sharing",
      "Play Store deployment"
    ],
    techStack: ["Kotlin", "Android SDK", "Firebase FCM", "Retrofit", "Jetpack"],
    accentColor: "#f43f5e"
  },
  {
    id: "meetgoals",
    title: "MeetGoals",
    tagline: "Productivity and self-improvement habit builder",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN",
    screenshotUrl: "https://play-lh.googleusercontent.com/Kgo0QBy7DoCM2Jbjcu4Tn4UPH2YQ4b1aefjKUvKHLGaOEUGF750RWD_Jw_9aGfXSnT6147MR3vnIIhHZZBYF=s0-br30",
    description: "A productivity and self-improvement app that helps users achieve goals, build better habits, improve focus, and overcome procrastination through personalized plans and guided techniques.",
    responsibilities: [
      "Personalized habit plans and reminder scheduling",
      "Room Database caching for local habit progress",
      "Dynamic UI implementation and animations",
      "Bug fixing and Play Store maintenance"
    ],
    techStack: ["Kotlin", "Room Database", "Retrofit", "Android Jetpack"],
    accentColor: "#6366f1"
  },
  {
    id: "starting-5",
    title: "Starting 5",
    tagline: "Youth basketball training and development platform",
    category: "Flutter",
    teamSize: 2,
    isLiveOnPlayStore: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN",
    screenshotUrl: "https://play-lh.googleusercontent.com/cyzdB7C51QAsV-YBIoOuMHLqXaCtmI1AJ87AgpySOhvtj6ZAt_QfO2lJMUpPink-rHzyovjy9MpjhO0gvh9TJ9c=s0-br30",
    description: "A youth basketball training and development platform offering skill training, leagues, tournaments, travel teams, private sessions, and college sports preparation for kids and teens from beginner to elite levels.",
    responsibilities: [
      "Built with Flutter (Cross-platform)",
      "Video drill training player and tournament updates",
      "REST API integration and user authentication",
      "Play Store publishing and updates"
    ],
    techStack: ["Flutter", "Dart", "REST API", "Firebase Auth", "Play Store"],
    accentColor: "#ec4899"
  },
  {
    id: "step-app",
    title: "Step App",
    tagline: "Fitness and cancer awareness activity application",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: false, // Not live on Play Store
    description: "A fitness and awareness application that tracks users’ daily steps and encourages healthy lifestyles through activity-based challenges. The app promotes digestive cancer awareness by converting user steps into reward coins that can be donated to healthcare organizations across Europe.",
    responsibilities: [
      "Daily step tracking and activity-based challenge algorithms",
      "Reward coin conversion and donation wallet system",
      "Push Notifications integration via Firebase",
      "API Integration using Retrofit"
    ],
    techStack: ["Kotlin", "Android SDK", "Retrofit", "Firebase", "Location Services"],
    accentColor: "#10b981"
  },
  {
    id: "launchora",
    title: "Launchora – Write, Read Stories and Poems",
    tagline: "Writing and reading platform for stories and poems",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: false, // Not live on Play Store
    description: "A writing and reading platform where users can publish stories and poems. The application allows users to share poems, love stories, mystery stories, journals, fan fiction, and other creative content.",
    responsibilities: [
      "Developed and maintained Android application using Java and Kotlin",
      "Integrated REST APIs with Retrofit and Volley",
      "Rich text editor and dynamic story reader UI",
      "Collaborated with team members for feature implementation"
    ],
    techStack: ["Core Java", "Kotlin", "Retrofit", "Volley", "Android SDK"],
    accentColor: "#e11d48"
  },
  {
    id: "match-on",
    title: "Match On – Dating App",
    tagline: "Dating and social networking application",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: false, // Not live on Play Store
    description: "A dating and social networking application with profile management, user interaction, and real-time features.",
    responsibilities: [
      "Profile management and real-time user discovery",
      "Location Based Services integration (Google Maps API)",
      "Firebase notifications and authentication",
      "Dynamic UI development and maintenance"
    ],
    techStack: ["Kotlin", "Firebase Auth", "Google Maps API", "Retrofit", "FCM"],
    accentColor: "#db2777"
  },
  {
    id: "hallo-basket",
    title: "Hallo Basket – Grocery App",
    tagline: "Online grocery shopping application",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: false, // Not live on Play Store
    description: "An online grocery shopping application with product listing, order management, and payment integration features.",
    responsibilities: [
      "Product listing, cart management, and order tracking",
      "Payment Gateway Integration",
      "JSON parsing and response handling",
      "Bug fixing and performance optimization"
    ],
    techStack: ["Kotlin", "Payment Gateway", "Retrofit", "Room Database"],
    accentColor: "#16a34a"
  },
  {
    id: "nitve",
    title: "Nitve – Shop for Puja Goods",
    tagline: "E-commerce app for spiritual and puja products",
    category: "Android",
    teamSize: 4,
    isLiveOnPlayStore: false, // Not live on Play Store
    description: "An e-commerce application for purchasing puja-related products and spiritual items.",
    responsibilities: [
      "E-commerce product catalog and search filters",
      "Payment Gateway Integration and checkout flow",
      "REST API integration using Retrofit",
      "Dynamic UI implementation"
    ],
    techStack: ["Kotlin", "Retrofit", "Payment Gateway", "Firebase"],
    accentColor: "#ea580c"
  },
  {
    id: "wisdom-pet",
    title: "Wisdom Pet Clinic",
    tagline: "Pet clinic appointment booking & management app",
    category: "Android",
    teamSize: 1,
    isLiveOnPlayStore: false, // Not live on Play Store
    description: "A pet clinic application designed for appointment booking, pet care services, and clinic management.",
    responsibilities: [
      "Appointment booking and clinic management system",
      "REST API handling and JSON parsing",
      "Firebase push notifications for appointment alerts",
      "Dynamic UI implementation"
    ],
    techStack: ["Kotlin", "Android Jetpack", "Retrofit", "Firebase FCM"],
    accentColor: "#0284c7"
  }
];

// Strictly from CV: Professional Experience
export const EXPERIENCES: Experience[] = [
  {
    role: "Android Developer",
    company: "Ogrelogic Solutions Pvt. Ltd.",
    location: "Noida, India",
    period: "October 2021 – Present",
    isCurrent: true,
    points: [
      "Developed and maintained Android applications using Kotlin and Java.",
      "Integrated REST APIs, Firebase services, and third-party SDKs.",
      "Worked on Payment Gateway integrations, push notifications, and Google Maps APIs.",
      "Performed bug fixing, app optimization, and Play Store updates.",
      "Worked on JSON parsing, API handling using Retrofit and Volley.",
      "Currently learning and working on Flutter-based mobile applications."
    ],
    skills: ["Kotlin", "Java", "Flutter", "Android SDK", "Retrofit", "Volley", "Firebase", "Google Maps API", "Payment Gateway", "Play Store"]
  },
  {
    role: "Android Developer",
    company: "Avaskm Technology",
    location: "Noida, India",
    period: "3 January 2021 – 5 July 2021",
    isCurrent: false,
    points: [
      "Developed Android applications with API integrations.",
      "Implemented Firebase notifications and authentication.",
      "Worked on UI development and app maintenance.",
      "Published and updated applications on Google Play Store."
    ],
    skills: ["Android SDK", "API Integration", "Firebase FCM", "Firebase Auth", "UI Development", "Play Store"]
  },
  {
    role: "Administrator",
    company: "Kritika Pharmacy College",
    location: "Bareilly, India",
    period: "12 August 2019 – 7 March 2020",
    isCurrent: false,
    points: [
      "Managed administrative and technical activities.",
      "Maintained records and coordinated operational tasks."
    ],
    skills: ["Administration", "Record Maintenance", "Technical Coordination"]
  },
  {
    role: "Project Assistant (Tech.) – Adhoc Basis",
    company: "IIT Roorkee",
    location: "Roorkee, India",
    period: "27 March 2019 – 27 June 2019",
    isCurrent: false,
    points: [
      "Assisted in technical project activities.",
      "Worked on documentation and software-related support tasks."
    ],
    skills: ["Technical Support", "Software Documentation", "Project Activities"]
  },
  {
    role: "Android Developer",
    company: "Launchora",
    location: "Gurugram, India",
    period: "1st March 2018 – 15 March 2019",
    isCurrent: false,
    points: [
      "Worked on Android application development and maintenance.",
      "Integrated REST APIs and third-party libraries.",
      "Collaborated with team members for feature implementation."
    ],
    skills: ["Java", "Android Development", "REST APIs", "Third-party Libraries", "Team Collaboration"]
  },
  {
    role: "Technical Trainer",
    company: "Arise Data",
    location: "India",
    period: "1 January 2017 – 30 June 2017",
    isCurrent: false,
    points: [
      "Provided technical training related to programming concepts.",
      "Assisted students in practical implementation and project work."
    ],
    skills: ["Technical Training", "Core Java", "Programming Concepts", "Project Mentorship"]
  }
];

// Strictly from CV: Education
export const EDUCATION_LIST: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SCMS Pilibhit",
    location: "Uttar Pradesh",
    year: "2016"
  },
  {
    degree: "Intermediate (XII)",
    institution: "School for C.L.V.P",
    board: "U.P. Board",
    location: "Allahabad",
    year: "2013"
  },
  {
    degree: "High School (X)",
    institution: "School for ABVM",
    board: "U.P. Board",
    location: "Uttar Pradesh",
    year: "2010"
  }
];

// Strictly from CV: Certifications
export const CERTIFICATIONS: Certification[] = [
  {
    title: "6 Months Certification in Android",
    issuer: "Cetpa Infotech",
    location: "Roorkee",
    duration: "6 Months"
  },
  {
    title: "3 Months Certification in Core Java",
    issuer: "CMS",
    location: "Haridwar",
    duration: "3 Months"
  }
];

// Strictly from CV: Personal Strengths
export const PERSONAL_STRENGTHS: string[] = [
  "Quick learner and adaptable to new technologies",
  "Good communication and interpersonal skills",
  "Ability to work in team environments",
  "Willingness to take responsibilities and challenges"
];
