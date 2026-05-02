export type CareerLevel = {
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  role: string;
  experience?: string;
  salary?: string;
  responsibilities?: string[];
  certifications?: string[];
};

export type Course = {
  id: string;
  name: string;
  shortName?: string;
  icon: string; // lucide icon name
  description: string;
  skills: string[];
  tools: string[];
  careerPath: CareerLevel[];
  relatedRoles?: string[];
  category: "Programming" | "Infrastructure" | "AI" | "Web" | "Database" | "Security";
};

export type Package = {
  id: "nciip" | "ncia";
  name: string;
  tagline: string;
  description: string;
  color: string;
  courses: Course[];
};

export const packages: Package[] = [
  {
    id: "nciip",
    name: "NCIIP+",
    tagline: "Programming + Software Track",
    description: "Master 10 in-demand technologies and build a future-ready career.",
    color: "primary",
    courses: [
      {
        id: "c-cpp",
        name: "C, C++",
        icon: "Code2",
        category: "Programming",
        description: "Foundation of programming with low-level memory control and OOP.",
        skills: ["Pointers", "OOP", "Memory Management", "Algorithms", "Data Structures"],
        tools: ["GCC", "Clang", "Visual Studio", "CLion"],
        relatedRoles: ["Software Developer", "Embedded Engineer", "Game Developer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Junior Developer",
            experience: "0-1 yr",
            salary: "₹2.5 - 3.5 LPA",
            responsibilities: [
              "Write basic C/C++ programs and debug code",
              "Implement data structures & algorithms",
              "Assist seniors with feature development",
            ],
            certifications: ["NCIIP+ Foundation"],
          },
          {
            level: "Intermediate",
            role: "Software Developer",
            experience: "1-3 yrs",
            salary: "₹4 - 7 LPA",
            responsibilities: [
              "Design modules using OOP principles",
              "Optimize memory & performance-critical code",
              "Build APIs and reusable libraries",
            ],
          },
          {
            level: "Advanced",
            role: "Systems Engineer",
            experience: "3-6 yrs",
            salary: "₹8 - 14 LPA",
            responsibilities: [
              "Architect low-level system components",
              "Lead performance tuning initiatives",
              "Mentor junior developers",
            ],
          },
          {
            level: "Expert",
            role: "Solution Architect",
            experience: "7+ yrs",
            salary: "₹18 - 35 LPA",
            responsibilities: [
              "Design enterprise-scale software architectures",
              "Set technical standards across teams",
              "Drive technology roadmap & vendor decisions",
            ],
          },
        ],
      },
      {
        id: "java",
        name: "Java (Core & Advanced)",
        shortName: "Java",
        icon: "Coffee",
        category: "Programming",
        description: "Industry-standard enterprise programming with Spring and Hibernate.",
        skills: ["Core Java", "Spring Boot", "Hibernate", "REST APIs", "Microservices"],
        tools: ["IntelliJ", "Eclipse", "Maven", "Gradle", "JUnit"],
        relatedRoles: ["Backend Developer", "Full Stack Developer", "Software Engineer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Java Trainee",
            experience: "0-1 yr",
            salary: "₹3 - 4 LPA",
            responsibilities: [
              "Write Java classes following OOP principles",
              "Develop simple Spring Boot endpoints",
              "Fix bugs and write unit tests",
            ],
            certifications: ["Oracle Certified Associate (OCA)"],
          },
          {
            level: "Intermediate",
            role: "Backend Developer",
            experience: "1-3 yrs",
            salary: "₹5 - 9 LPA",
            responsibilities: [
              "Build REST APIs with Spring Boot",
              "Integrate databases via Hibernate/JPA",
              "Implement authentication & security",
            ],
            certifications: ["Oracle Certified Professional (OCP)"],
          },
          {
            level: "Advanced",
            role: "Senior Java Engineer",
            experience: "3-6 yrs",
            salary: "₹10 - 18 LPA",
            responsibilities: [
              "Design microservice architectures",
              "Lead code reviews and CI/CD setup",
              "Optimize JVM and database performance",
            ],
          },
          {
            level: "Expert",
            role: "Java Solution Architect",
            experience: "8+ yrs",
            salary: "₹22 - 45 LPA",
            responsibilities: [
              "Architect distributed enterprise systems",
              "Define standards for Java platforms",
              "Engage with stakeholders on tech strategy",
            ],
          },
        ],
      },
      {
        id: "dotnet",
        name: ".NET (ASP, C#)",
        shortName: ".NET",
        icon: "Hexagon",
        category: "Programming",
        description: "Microsoft's powerful framework for enterprise web and desktop apps.",
        skills: ["C#", "ASP.NET Core", "Entity Framework", "MVC", "Web API"],
        tools: ["Visual Studio", "Azure", "SQL Server", "VS Code"],
        relatedRoles: ["Backend Developer", "Full Stack Developer", "Azure Engineer"],
        careerPath: [
          {
            level: "Beginner",
            role: ".NET Trainee",
            experience: "0-1 yr",
            salary: "₹3 - 4 LPA",
            responsibilities: [
              "Write C# code following best practices",
              "Build basic ASP.NET MVC apps",
              "Work with SQL Server queries",
            ],
            certifications: ["Microsoft MTA: Software Development"],
          },
          {
            level: "Intermediate",
            role: ".NET Developer",
            experience: "1-3 yrs",
            salary: "₹5 - 8 LPA",
            responsibilities: [
              "Develop Web APIs with ASP.NET Core",
              "Implement Entity Framework data layer",
              "Deploy apps on IIS / Azure",
            ],
            certifications: ["Microsoft Certified: Azure Developer Associate"],
          },
          {
            level: "Advanced",
            role: "Senior .NET Engineer",
            experience: "3-6 yrs",
            salary: "₹10 - 16 LPA",
            responsibilities: [
              "Architect modular enterprise solutions",
              "Mentor team and enforce coding standards",
              "Integrate with Azure services & DevOps",
            ],
          },
          {
            level: "Expert",
            role: ".NET Architect",
            experience: "8+ yrs",
            salary: "₹20 - 40 LPA",
            responsibilities: [
              "Design large-scale .NET cloud architectures",
              "Drive technology roadmap & migrations",
              "Lead multiple engineering squads",
            ],
          },
        ],
      },
      {
        id: "web",
        name: "HTML, CSS, JS, PHP, Bootstrap",
        shortName: "Web Dev",
        icon: "Globe",
        category: "Web",
        description: "Front-end fundamentals plus PHP for full server-side web development.",
        skills: ["Responsive Design", "DOM", "PHP", "MySQL Integration", "Bootstrap"],
        tools: ["VS Code", "Bootstrap", "XAMPP", "Chrome DevTools"],
        relatedRoles: ["Web Developer", "Front-End Developer", "UI Developer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Web Designer",
            experience: "0-1 yr",
            salary: "₹2 - 3.5 LPA",
            responsibilities: [
              "Build responsive HTML/CSS layouts",
              "Style pages using Bootstrap",
              "Add interactivity with vanilla JS",
            ],
          },
          {
            level: "Intermediate",
            role: "Front-End Developer",
            experience: "1-3 yrs",
            salary: "₹4 - 7 LPA",
            responsibilities: [
              "Build dynamic UIs with modern JavaScript",
              "Integrate REST APIs and PHP backends",
              "Implement accessibility and SEO best practices",
            ],
          },
          {
            level: "Advanced",
            role: "Full Stack Developer",
            experience: "3-6 yrs",
            salary: "₹8 - 14 LPA",
            responsibilities: [
              "Develop end-to-end web apps with PHP & MySQL",
              "Optimize performance & deployment pipelines",
              "Lead small frontend/backend teams",
            ],
          },
          {
            level: "Expert",
            role: "Lead Web Architect",
            experience: "7+ yrs",
            salary: "₹16 - 30 LPA",
            responsibilities: [
              "Design scalable web platform architecture",
              "Define design systems and standards",
              "Mentor full-stack engineering teams",
            ],
          },
        ],
      },
      {
        id: "frameworks",
        name: "Angular, Node, React",
        shortName: "JS Frameworks",
        icon: "Atom",
        category: "Web",
        description: "Modern JavaScript frameworks for scalable single-page applications.",
        skills: ["Components", "State Management", "REST APIs", "SSR", "TypeScript"],
        tools: ["React", "Angular", "Node.js", "Express", "Next.js"],
        relatedRoles: ["Full Stack Developer", "Frontend Engineer", "MERN/MEAN Developer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Junior Frontend Dev",
            experience: "0-1 yr",
            salary: "₹3 - 4.5 LPA",
            responsibilities: [
              "Build UI components in React/Angular",
              "Consume REST APIs in components",
              "Write unit tests with Jest/Jasmine",
            ],
          },
          {
            level: "Intermediate",
            role: "React/Angular Developer",
            experience: "1-3 yrs",
            salary: "₹6 - 10 LPA",
            responsibilities: [
              "Architect SPA features with state management",
              "Build Node.js/Express backend services",
              "Optimize bundle size and load performance",
            ],
          },
          {
            level: "Advanced",
            role: "Full Stack Engineer",
            experience: "3-6 yrs",
            salary: "₹12 - 20 LPA",
            responsibilities: [
              "Lead full MERN/MEAN application delivery",
              "Implement SSR, caching & CI/CD",
              "Mentor junior frontend engineers",
            ],
          },
          {
            level: "Expert",
            role: "Frontend Architect",
            experience: "8+ yrs",
            salary: "₹22 - 45 LPA",
            responsibilities: [
              "Define micro-frontend architecture",
              "Set design system & performance budgets",
              "Drive frontend roadmap across products",
            ],
          },
        ],
      },
      {
        id: "databases",
        name: "MySQL, MongoDB, Oracle",
        shortName: "Databases",
        icon: "Database",
        category: "Database",
        description: "SQL and NoSQL database systems for modern data-driven applications.",
        skills: ["SQL", "NoSQL", "Indexing", "Query Optimization", "Replication"],
        tools: ["MySQL Workbench", "MongoDB Compass", "Oracle SQL Dev", "DBeaver"],
        relatedRoles: ["Database Administrator", "Data Engineer", "Backend Developer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Database Trainee",
            experience: "0-1 yr",
            salary: "₹3 - 4 LPA",
            responsibilities: [
              "Write SQL queries and stored procedures",
              "Perform basic backup and restore",
              "Monitor database health metrics",
            ],
          },
          {
            level: "Intermediate",
            role: "Database Developer",
            experience: "1-3 yrs",
            salary: "₹5 - 9 LPA",
            responsibilities: [
              "Design schemas for SQL & NoSQL stores",
              "Tune queries and add indexing strategies",
              "Implement replication and sharding",
            ],
            certifications: ["Oracle Database SQL Associate"],
          },
          {
            level: "Advanced",
            role: "Database Administrator",
            experience: "3-6 yrs",
            salary: "₹10 - 16 LPA",
            responsibilities: [
              "Manage HA, DR and security policies",
              "Automate provisioning with scripts",
              "Lead migration & upgrade projects",
            ],
            certifications: ["MongoDB DBA", "Oracle Certified Professional"],
          },
          {
            level: "Expert",
            role: "Data Architect",
            experience: "8+ yrs",
            salary: "₹20 - 40 LPA",
            responsibilities: [
              "Design enterprise data platforms",
              "Set data governance & modeling standards",
              "Architect data lakes and warehouses",
            ],
          },
        ],
      },
      {
        id: "python",
        name: "Python (Basic & Advanced)",
        shortName: "Python",
        icon: "FileCode",
        category: "Programming",
        description: "Versatile language powering web, automation, AI and data science.",
        skills: ["Core Python", "Django", "Flask", "Automation", "FastAPI"],
        tools: ["PyCharm", "Jupyter", "VS Code", "Git"],
        relatedRoles: ["Python Developer", "Automation Engineer", "Data Engineer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Python Developer",
            experience: "0-1 yr",
            salary: "₹3 - 4.5 LPA",
            responsibilities: [
              "Write Python scripts & utilities",
              "Build small Flask/Django apps",
              "Automate repetitive tasks",
            ],
          },
          {
            level: "Intermediate",
            role: "Backend Engineer",
            experience: "1-3 yrs",
            salary: "₹6 - 10 LPA",
            responsibilities: [
              "Develop REST APIs with Django/FastAPI",
              "Integrate with databases & message queues",
              "Write automated test suites",
            ],
            certifications: ["PCAP - Python Associate"],
          },
          {
            level: "Advanced",
            role: "Python Tech Lead",
            experience: "3-6 yrs",
            salary: "₹12 - 20 LPA",
            responsibilities: [
              "Architect Python services & async systems",
              "Lead a small team and code reviews",
              "Optimize backend performance",
            ],
          },
          {
            level: "Expert",
            role: "Software Architect",
            experience: "8+ yrs",
            salary: "₹22 - 45 LPA",
            responsibilities: [
              "Design distributed Python platforms",
              "Set engineering best practices org-wide",
              "Drive technical roadmap & hiring",
            ],
          },
        ],
      },
      {
        id: "data-science",
        name: "Data Science & Analytics",
        shortName: "Data Science",
        icon: "BarChart3",
        category: "AI",
        description: "Turn raw data into business insights with statistics and visualization.",
        skills: ["Statistics", "Pandas", "Visualization", "SQL", "Predictive Modeling"],
        tools: ["Jupyter", "Power BI", "Tableau", "Python", "Excel"],
        relatedRoles: ["Data Analyst", "Data Scientist", "BI Developer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Data Analyst Trainee",
            experience: "0-1 yr",
            salary: "₹3 - 4.5 LPA",
            responsibilities: [
              "Clean and explore datasets in Pandas",
              "Build dashboards in Power BI/Tableau",
              "Write SQL reports for stakeholders",
            ],
          },
          {
            level: "Intermediate",
            role: "Data Analyst",
            experience: "1-3 yrs",
            salary: "₹5 - 9 LPA",
            responsibilities: [
              "Perform statistical analysis & A/B tests",
              "Create interactive BI dashboards",
              "Translate data into business insights",
            ],
            certifications: ["Microsoft PL-300 (Power BI)"],
          },
          {
            level: "Advanced",
            role: "Senior Data Scientist",
            experience: "3-6 yrs",
            salary: "₹12 - 22 LPA",
            responsibilities: [
              "Build predictive ML models in production",
              "Lead experimentation frameworks",
              "Collaborate with engineering on data pipelines",
            ],
          },
          {
            level: "Expert",
            role: "Chief Data Officer",
            experience: "10+ yrs",
            salary: "₹35 - 80 LPA",
            responsibilities: [
              "Define organization-wide data strategy",
              "Lead data science & analytics teams",
              "Drive data-led business transformation",
            ],
          },
        ],
      },
      {
        id: "ai-ml",
        name: "AI / ML",
        icon: "BrainCircuit",
        category: "AI",
        description: "Build intelligent systems using machine learning and deep learning.",
        skills: ["Supervised Learning", "Neural Networks", "NLP", "Computer Vision", "MLOps"],
        tools: ["TensorFlow", "PyTorch", "scikit-learn", "Hugging Face"],
        relatedRoles: ["AI/ML Engineer", "Data Scientist", "Research Engineer"],
        careerPath: [
          {
            level: "Beginner",
            role: "ML Intern",
            experience: "0-1 yr",
            salary: "₹3.5 - 5 LPA",
            responsibilities: [
              "Train basic ML models with scikit-learn",
              "Prepare datasets and feature engineering",
              "Document experiments & results",
            ],
          },
          {
            level: "Intermediate",
            role: "ML Engineer",
            experience: "1-3 yrs",
            salary: "₹6 - 12 LPA",
            responsibilities: [
              "Build deep learning models in TensorFlow/PyTorch",
              "Deploy models with REST APIs",
              "Implement MLOps pipelines",
            ],
            certifications: ["TensorFlow Developer Certificate"],
          },
          {
            level: "Advanced",
            role: "AI Engineer",
            experience: "3-6 yrs",
            salary: "₹14 - 28 LPA",
            responsibilities: [
              "Design NLP / Computer Vision systems",
              "Lead model evaluation & A/B testing",
              "Optimize models for production scale",
            ],
            certifications: ["AWS ML Specialty", "Azure AI Engineer"],
          },
          {
            level: "Expert",
            role: "AI Research Lead",
            experience: "8+ yrs",
            salary: "₹30 - 60 LPA",
            responsibilities: [
              "Drive AI research & publications",
              "Architect large-scale AI platforms",
              "Mentor PhDs & senior engineers",
            ],
          },
        ],
      },
      {
        id: "testing",
        name: "Software Testing",
        icon: "SearchCheck",
        category: "Programming",
        description: "Manual and automation testing to ensure software quality.",
        skills: ["Manual Testing", "Selenium", "API Testing", "Test Cases", "Performance Testing"],
        tools: ["Selenium", "JIRA", "Postman", "TestNG", "JMeter"],
        relatedRoles: ["QA Engineer", "Automation Engineer", "SDET"],
        careerPath: [
          {
            level: "Beginner",
            role: "QA Trainee",
            experience: "0-1 yr",
            salary: "₹2.5 - 3.5 LPA",
            responsibilities: [
              "Write and execute manual test cases",
              "Log defects in JIRA",
              "Perform regression testing",
            ],
            certifications: ["ISTQB Foundation"],
          },
          {
            level: "Intermediate",
            role: "Software Test Engineer",
            experience: "1-3 yrs",
            salary: "₹4 - 7 LPA",
            responsibilities: [
              "Automate UI tests with Selenium",
              "Test APIs with Postman / RestAssured",
              "Run performance tests with JMeter",
            ],
          },
          {
            level: "Advanced",
            role: "Automation Lead",
            experience: "3-6 yrs",
            salary: "₹8 - 14 LPA",
            responsibilities: [
              "Design automation frameworks",
              "Integrate tests in CI/CD pipelines",
              "Lead a QA pod and reviews",
            ],
            certifications: ["ISTQB Advanced"],
          },
          {
            level: "Expert",
            role: "QA Architect",
            experience: "8+ yrs",
            salary: "₹16 - 30 LPA",
            responsibilities: [
              "Define enterprise QA strategy",
              "Set quality standards across products",
              "Drive shift-left & SDET practices",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ncia",
    name: "NCIA+",
    tagline: "Infrastructure + Networking Track",
    description: "Complete IT infrastructure and advanced career package.",
    color: "destructive",
    courses: [
      {
        id: "hardware",
        name: "Hardware",
        icon: "Cpu",
        category: "Infrastructure",
        description: "Computer hardware fundamentals, troubleshooting and assembly.",
        skills: ["Assembly", "Troubleshooting", "BIOS", "Peripherals", "Motherboard Repair"],
        tools: ["Multimeter", "Diagnostic Tools", "POST Card"],
        relatedRoles: ["Hardware Technician", "IT Support Engineer", "Field Engineer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Hardware Technician",
            experience: "0-1 yr",
            salary: "₹1.8 - 2.8 LPA",
            responsibilities: [
              "Assemble desktops and install peripherals",
              "Diagnose POST and boot failures",
              "Replace faulty components",
            ],
            certifications: ["CompTIA A+"],
          },
          {
            level: "Intermediate",
            role: "IT Support Engineer",
            experience: "1-3 yrs",
            salary: "₹3 - 5 LPA",
            responsibilities: [
              "Provide L1/L2 hardware support",
              "Manage asset inventory and warranties",
              "Resolve incidents within SLA",
            ],
          },
          {
            level: "Advanced",
            role: "Hardware Specialist",
            experience: "3-6 yrs",
            salary: "₹6 - 10 LPA",
            responsibilities: [
              "Lead complex hardware troubleshooting",
              "Plan procurement & lifecycle",
              "Mentor support technicians",
            ],
          },
          {
            level: "Expert",
            role: "IT Infrastructure Manager",
            experience: "8+ yrs",
            salary: "₹12 - 22 LPA",
            responsibilities: [
              "Manage data center hardware operations",
              "Define infrastructure capacity planning",
              "Lead IT support & ops teams",
            ],
          },
        ],
      },
      {
        id: "networking",
        name: "Networking",
        icon: "Network",
        category: "Infrastructure",
        description: "Core networking concepts, protocols and topologies.",
        skills: ["TCP/IP", "Routing", "Switching", "Subnetting", "VLANs"],
        tools: ["Wireshark", "Packet Tracer", "GNS3"],
        relatedRoles: ["Network Engineer", "NOC Engineer", "Network Administrator"],
        careerPath: [
          {
            level: "Beginner",
            role: "Network Trainee",
            experience: "0-1 yr",
            salary: "₹2.5 - 3.5 LPA",
            responsibilities: [
              "Configure basic LAN/WAN setups",
              "Monitor network alerts in NOC",
              "Document network topology",
            ],
            certifications: ["CompTIA Network+"],
          },
          {
            level: "Intermediate",
            role: "Network Engineer",
            experience: "1-3 yrs",
            salary: "₹4 - 7 LPA",
            responsibilities: [
              "Configure routers, switches & firewalls",
              "Troubleshoot routing & switching issues",
              "Implement VLAN & VPN solutions",
            ],
          },
          {
            level: "Advanced",
            role: "Senior Network Engineer",
            experience: "3-6 yrs",
            salary: "₹8 - 14 LPA",
            responsibilities: [
              "Design enterprise WAN/LAN networks",
              "Implement OSPF / BGP routing",
              "Lead network upgrade projects",
            ],
          },
          {
            level: "Expert",
            role: "Network Architect",
            experience: "8+ yrs",
            salary: "₹18 - 35 LPA",
            responsibilities: [
              "Architect SDN & multi-site networks",
              "Define network security policies",
              "Drive vendor selection & roadmap",
            ],
          },
        ],
      },
      {
        id: "os",
        name: "Operating System",
        shortName: "OS",
        icon: "MonitorCog",
        category: "Infrastructure",
        description: "Windows and Linux administration and shell scripting.",
        skills: ["Windows Admin", "Linux", "Shell Scripting", "Permissions", "Patch Management"],
        tools: ["PowerShell", "Bash", "Terminal", "WSUS"],
        relatedRoles: ["System Administrator", "System Engineer", "DevOps Engineer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Desktop Support",
            experience: "0-1 yr",
            salary: "₹2 - 3 LPA",
            responsibilities: [
              "Install & configure Windows/Linux OS",
              "Resolve user OS issues",
              "Manage user accounts & permissions",
            ],
          },
          {
            level: "Intermediate",
            role: "System Administrator",
            experience: "1-3 yrs",
            salary: "₹4 - 7 LPA",
            responsibilities: [
              "Administer Windows & Linux servers",
              "Write shell / PowerShell automation",
              "Manage backups and patching",
            ],
          },
          {
            level: "Advanced",
            role: "System Engineer",
            experience: "3-6 yrs",
            salary: "₹8 - 14 LPA",
            responsibilities: [
              "Design server infrastructure",
              "Implement monitoring & HA",
              "Lead OS migration projects",
            ],
          },
          {
            level: "Expert",
            role: "Infrastructure Architect",
            experience: "8+ yrs",
            salary: "₹18 - 35 LPA",
            responsibilities: [
              "Architect hybrid OS infrastructure",
              "Define standards across data centers",
              "Lead infrastructure modernization",
            ],
          },
        ],
      },
      {
        id: "ccna",
        name: "CCNA",
        icon: "Router",
        category: "Infrastructure",
        description: "Cisco Certified Network Associate - industry standard certification.",
        skills: ["Routing", "Switching", "VLANs", "OSPF", "ACLs"],
        tools: ["Cisco IOS", "Packet Tracer", "GNS3", "EVE-NG"],
        relatedRoles: ["Network Engineer", "Network Security Engineer", "Network Architect"],
        careerPath: [
          {
            level: "Beginner",
            role: "Network Support",
            experience: "0-1 yr",
            salary: "₹2.5 - 3.5 LPA",
            responsibilities: [
              "Provide L1 network support",
              "Configure basic Cisco devices",
              "Maintain network documentation",
            ],
            certifications: ["Cisco CCNA"],
          },
          {
            level: "Intermediate",
            role: "CCNA Engineer",
            experience: "1-3 yrs",
            salary: "₹4 - 8 LPA",
            responsibilities: [
              "Configure Cisco routers & switches",
              "Implement VLANs, STP, EtherChannel",
              "Troubleshoot OSPF / EIGRP issues",
            ],
          },
          {
            level: "Advanced",
            role: "Senior Network Engineer",
            experience: "3-6 yrs",
            salary: "₹9 - 16 LPA",
            responsibilities: [
              "Design multi-site Cisco networks",
              "Implement BGP & MPLS",
              "Lead network audits & upgrades",
            ],
            certifications: ["Cisco CCNP Enterprise"],
          },
          {
            level: "Expert",
            role: "CCIE / Network Architect",
            experience: "8+ yrs",
            salary: "₹22 - 50 LPA",
            responsibilities: [
              "Architect global enterprise networks",
              "Define routing & SDN strategy",
              "Mentor CCNP/CCIE candidates",
            ],
            certifications: ["Cisco CCIE"],
          },
        ],
      },
      {
        id: "redhat",
        name: "RedHat",
        icon: "Server",
        category: "Infrastructure",
        description: "RHCSA / RHCE Linux administration on enterprise servers.",
        skills: ["Linux Admin", "SELinux", "Storage", "Services", "Ansible Automation"],
        tools: ["RHEL", "Ansible", "Cockpit", "Podman"],
        relatedRoles: ["Linux Administrator", "DevOps Engineer", "Cloud Engineer"],
        careerPath: [
          {
            level: "Beginner",
            role: "Linux Trainee",
            experience: "0-1 yr",
            salary: "₹3 - 4 LPA",
            responsibilities: [
              "Manage users, groups & permissions on RHEL",
              "Configure basic services",
              "Write simple shell scripts",
            ],
            certifications: ["RHCSA"],
          },
          {
            level: "Intermediate",
            role: "Linux Administrator",
            experience: "1-3 yrs",
            salary: "₹5 - 9 LPA",
            responsibilities: [
              "Manage RHEL servers in production",
              "Configure SELinux, firewalld, storage",
              "Automate tasks with Ansible",
            ],
            certifications: ["RHCE"],
          },
          {
            level: "Advanced",
            role: "DevOps Engineer",
            experience: "3-6 yrs",
            salary: "₹10 - 18 LPA",
            responsibilities: [
              "Build CI/CD pipelines",
              "Manage container & Kubernetes clusters",
              "Implement infrastructure as code",
            ],
            certifications: ["Red Hat OpenShift Admin"],
          },
          {
            level: "Expert",
            role: "Cloud Architect",
            experience: "8+ yrs",
            salary: "₹22 - 45 LPA",
            responsibilities: [
              "Architect hybrid cloud platforms",
              "Define DevOps & SRE strategy",
              "Lead platform engineering teams",
            ],
          },
        ],
      },
      {
        id: "mcsa",
        name: "MCSA",
        icon: "ServerCog",
        category: "Infrastructure",
        description: "Microsoft Certified Solutions Associate - Windows server expertise.",
        skills: ["Active Directory", "Group Policy", "DNS", "DHCP", "Hyper-V"],
        tools: ["Windows Server", "Hyper-V", "PowerShell", "SCCM"],
        relatedRoles: ["System Administrator", "Windows Engineer", "MS Solutions Architect"],
        careerPath: [
          {
            level: "Beginner",
            role: "Windows Support",
            experience: "0-1 yr",
            salary: "₹2.5 - 3.5 LPA",
            responsibilities: [
              "Support Windows desktops & servers",
              "Manage user accounts in AD",
              "Resolve OS-level incidents",
            ],
          },
          {
            level: "Intermediate",
            role: "System Administrator",
            experience: "1-3 yrs",
            salary: "₹4 - 8 LPA",
            responsibilities: [
              "Administer Active Directory & GPOs",
              "Manage DNS, DHCP, file servers",
              "Automate tasks with PowerShell",
            ],
            certifications: ["Microsoft MCSA"],
          },
          {
            level: "Advanced",
            role: "Senior Sys Admin",
            experience: "3-6 yrs",
            salary: "₹9 - 15 LPA",
            responsibilities: [
              "Design AD forests & Hyper-V clusters",
              "Implement backup & DR solutions",
              "Lead Windows infrastructure projects",
            ],
          },
          {
            level: "Expert",
            role: "MS Solutions Architect",
            experience: "8+ yrs",
            salary: "₹20 - 40 LPA",
            responsibilities: [
              "Architect Microsoft enterprise stacks",
              "Lead Azure / hybrid migrations",
              "Define identity & governance strategy",
            ],
            certifications: ["Microsoft Certified: Azure Solutions Architect"],
          },
        ],
      },
      {
        id: "cloud",
        name: "Cloud",
        icon: "Cloud",
        category: "Infrastructure",
        description: "AWS, Azure & GCP cloud computing for scalable infrastructure.",
        skills: ["AWS", "Azure", "Virtualization", "IaaS/PaaS", "Serverless"],
        tools: ["AWS Console", "Azure Portal", "Terraform", "Kubernetes"],
        relatedRoles: ["Cloud Engineer", "DevOps Engineer", "Cloud Architect"],
        careerPath: [
          {
            level: "Beginner",
            role: "Cloud Trainee",
            experience: "0-1 yr",
            salary: "₹3.5 - 5 LPA",
            responsibilities: [
              "Provision basic AWS/Azure resources",
              "Monitor cloud workloads",
              "Maintain documentation & tags",
            ],
            certifications: ["AWS Cloud Practitioner", "Azure Fundamentals (AZ-900)"],
          },
          {
            level: "Intermediate",
            role: "Cloud Engineer",
            experience: "1-3 yrs",
            salary: "₹6 - 12 LPA",
            responsibilities: [
              "Deploy workloads with IaC (Terraform)",
              "Configure VPC, IAM, networking",
              "Automate operations with serverless",
            ],
            certifications: ["AWS Solutions Architect Associate"],
          },
          {
            level: "Advanced",
            role: "Senior Cloud Engineer",
            experience: "3-6 yrs",
            salary: "₹14 - 24 LPA",
            responsibilities: [
              "Design HA, multi-region architectures",
              "Lead cloud migrations & cost optimization",
              "Implement DevOps & SRE practices",
            ],
            certifications: ["AWS DevOps Engineer Pro"],
          },
          {
            level: "Expert",
            role: "Cloud Solutions Architect",
            experience: "8+ yrs",
            salary: "₹25 - 55 LPA",
            responsibilities: [
              "Architect enterprise multi-cloud platforms",
              "Define governance, security & FinOps",
              "Lead cloud strategy across business units",
            ],
            certifications: ["AWS Solutions Architect Pro", "Azure Solutions Architect Expert"],
          },
        ],
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        icon: "ShieldCheck",
        category: "Security",
        description: "Protect systems and networks from cyber threats and attacks.",
        skills: ["Ethical Hacking", "Firewalls", "SIEM", "Vulnerability Assessment", "Incident Response"],
        tools: ["Kali Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite"],
        relatedRoles: ["Cybersecurity Analyst", "Network Security Engineer", "Cybersecurity Architect"],
        careerPath: [
          {
            level: "Beginner",
            role: "IT Support Engineer",
            experience: "0-1 yr",
            salary: "₹3 - 4 LPA",
            responsibilities: [
              "Assist with security tooling & alerts",
              "Apply security patches",
              "Document security procedures",
            ],
            certifications: ["CompTIA Security+"],
          },
          {
            level: "Intermediate",
            role: "Security Analyst",
            experience: "1-3 yrs",
            salary: "₹5 - 9 LPA",
            responsibilities: [
              "Monitor SIEM and triage incidents",
              "Run vulnerability assessments",
              "Implement firewall & endpoint policies",
            ],
            certifications: ["CEH (Certified Ethical Hacker)"],
          },
          {
            level: "Advanced",
            role: "Network Security Engineer",
            experience: "3-6 yrs",
            salary: "₹10 - 18 LPA",
            responsibilities: [
              "Design secure network architectures",
              "Lead penetration testing engagements",
              "Drive incident response playbooks",
            ],
            certifications: ["OSCP", "Cisco CyberOps"],
          },
          {
            level: "Expert",
            role: "Cybersecurity Architect",
            experience: "8+ yrs",
            salary: "₹22 - 50 LPA",
            responsibilities: [
              "Architect zero-trust security platforms",
              "Define org-wide security strategy",
              "Lead SOC and red/blue team programs",
            ],
            certifications: ["CISSP", "CISM"],
          },
        ],
      },
    ],
  },
];

export const allCourses = packages.flatMap((p) =>
  p.courses.map((c) => ({ ...c, packageId: p.id, packageName: p.name }))
);
