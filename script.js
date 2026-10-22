tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    900: '#312e81',
                },
                gold: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                }
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 4s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)' },
                    '100%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.8)' }
                }
            }
        }
    }
}

/*
             IMPORTANT:
             Institute WhatsApp number in international format (country code + mobile number, no + or spaces).
            */

const INSTITUTE_WHATSAPP = "919021179106";


const courseCategories = [
    {
        id: "programming",
        title: "IT & Programming",
        icon: "fa-code",
        color: "blue",
        description: "Coding, web development, databases and software skills."
    },
    {
        id: "accounting",
        title: "Accounting & Finance",
        icon: "fa-calculator",
        color: "amber",
        description: "Tally Prime, GST, taxation and financial accounting."
    },
    {
        id: "design",
        title: "Design & Digital Media",
        icon: "fa-palette",
        color: "pink",
        description: "Graphic design, animation, web design and digital marketing."
    },
    {
        id: "computer",
        title: "Computer & Office Courses",
        icon: "fa-desktop",
        color: "cyan",
        description: "MS Office, computer fundamentals and office automation."
    },
    {
        id: "hardware",
        title: "Hardware & Networking",
        icon: "fa-network-wired",
        color: "emerald",
        description: "Computer hardware, networking and technical troubleshooting."
    },
    {
        id: "vocational",
        title: "Vocational & Professional Skills",
        icon: "fa-screwdriver-wrench",
        color: "purple",
        description: "Communication, technical trades and career-oriented skills."
    }
];


const courses = [
    // IT & PROGRAMMING
    {
        name: "C Programming",
        category: "programming",
        duration: "2 Months",
        level: "Beginner",
        overview: "Learn structured programming and build a strong foundation in coding, logic development and problem-solving.",
        syllabus: [
            "Variables, data types and operators",
            "Conditional statements and loops",
            "Functions, arrays and strings",
            "Pointers and structures",
            "File handling and debugging",
            "Practical programming exercises"
        ],
        outcomes: "Write basic C programs, solve programming problems and develop a foundation for advanced programming."
    },
    {
        name: "C++ Programming",
        category: "programming",
        duration: "2 Months",
        level: "Beginner to Intermediate",
        overview: "Understand C++ programming and object-oriented concepts through guided coding exercises.",
        syllabus: [
            "C++ syntax, variables and operators",
            "Functions, arrays and pointers",
            "Classes, objects and constructors",
            "Inheritance and polymorphism",
            "Exception and file handling",
            "Mini programming projects"
        ],
        outcomes: "Understand object-oriented programming and develop basic C++ applications."
    },
    {
        name: "Java Programming",
        category: "programming",
        duration: "2 Months",
        level: "Beginner",
        overview: "Build a foundation in Java, object-oriented programming and application development.",
        syllabus: [
            "Java syntax and data types",
            "Conditions, loops and arrays",
            "Classes, objects and interfaces",
            "Inheritance and polymorphism",
            "Collections and exception handling",
            "Basic Java projects"
        ],
        outcomes: "Create basic Java programs and understand the foundations of application development."
    },
    {
        name: "Python Programming",
        category: "programming",
        duration: "2–3 Months",
        level: "Beginner",
        overview: "Learn Python programming, automation fundamentals and practical data handling.",
        syllabus: [
            "Python syntax and variables",
            "Conditions and loops",
            "Lists, tuples and dictionaries",
            "Functions and modules",
            "File and exception handling",
            "Automation exercises and mini projects"
        ],
        outcomes: "Write Python scripts and develop a foundation for automation and data analysis."
    },
    {
        name: "HTML & Web Designing",
        category: "programming",
        duration: "1–3 Months",
        level: "Beginner",
        overview: "Learn how websites are structured and designed using HTML and foundational web technologies.",
        syllabus: [
            "HTML document structure",
            "Headings, links, lists and images",
            "Tables and forms",
            "CSS styling and page layouts",
            "Responsive design fundamentals",
            "Practical webpage creation"
        ],
        outcomes: "Build structured web pages and understand the fundamentals of website creation."
    },
    {
        name: "PHP & MySQL",
        category: "programming",
        duration: "2 Months",
        level: "Intermediate",
        overview: "Learn server-side programming and database connectivity for dynamic websites.",
        syllabus: [
            "PHP syntax and functions",
            "Form processing and validation",
            "Sessions and cookies",
            "MySQL tables and queries",
            "CRUD operations",
            "Dynamic website project"
        ],
        outcomes: "Build basic database-connected websites and understand server-side development."
    },
    {
        name: "ASP.NET Programming",
        category: "programming",
        duration: "2 Months",
        level: "Intermediate",
        overview: "Explore the .NET ecosystem and the fundamentals of building web applications.",
        syllabus: [
            "C# fundamentals",
            ".NET application structure",
            "Web pages and routing",
            "Forms and validation",
            "Database connectivity",
            "Web application project"
        ],
        outcomes: "Understand the building blocks of .NET application development."
    },
    {
        name: "C# .NET",
        category: "programming",
        duration: "2–3 Months",
        level: "Beginner to Intermediate",
        overview: "Learn C# syntax, object-oriented programming and the fundamentals of .NET applications.",
        syllabus: [
            "Data types and operators",
            "Conditions, loops and methods",
            "Classes and interfaces",
            "Collections and LINQ basics",
            "Exception and file handling",
            "Basic .NET application"
        ],
        outcomes: "Create foundational .NET programs and understand object-oriented development."
    },
    {
        name: "Angular Development",
        category: "programming",
        duration: "2–3 Months",
        level: "Intermediate",
        overview: "Explore modern front-end development using Angular and TypeScript.",
        syllabus: [
            "TypeScript fundamentals",
            "Components and templates",
            "Data binding and directives",
            "Services and routing",
            "Forms and API integration",
            "Single-page application project"
        ],
        outcomes: "Understand Angular application structure and build a basic interactive web application."
    },
    {
        name: "React Front-End Development",
        category: "programming",
        duration: "9 Months",
        level: "Beginner to Advanced",
        overview: "Learn modern front-end development through reusable React components and interactive interfaces.",
        syllabus: [
            "HTML, CSS and JavaScript fundamentals",
            "React components, props and state",
            "Hooks and event handling",
            "Routing and API integration",
            "Forms and validation",
            "Responsive front-end projects"
        ],
        outcomes: "Build interactive front-end interfaces and develop a portfolio of web projects."
    },
    {
        name: "Java Spring Boot REST API",
        category: "programming",
        duration: "9 Months",
        level: "Advanced",
        overview: "Explore Java backend development, REST APIs and database-connected applications.",
        syllabus: [
            "Java fundamentals and OOP",
            "Spring Boot project structure",
            "REST APIs and HTTP methods",
            "Dependency injection and validation",
            "JPA/Hibernate database integration",
            "Testing and deployment fundamentals"
        ],
        outcomes: "Develop foundational backend services and understand REST API workflows."
    },
    {
        name: "Data Analysis with Python",
        category: "programming",
        duration: "2 Months",
        level: "Beginner to Intermediate",
        overview: "Learn how Python can help organise, analyse and interpret data.",
        syllabus: [
            "Python revision",
            "Data cleaning fundamentals",
            "Working with tables and datasets",
            "Data analysis libraries",
            "Charts and data visualisation",
            "Practical analysis exercises"
        ],
        outcomes: "Perform basic data analysis and communicate findings using charts and summaries."
    },
    {
        name: "Data Analytics & Data Science",
        category: "programming",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore data preparation, analysis, visualisation and introductory data science concepts.",
        syllabus: [
            "Data and statistics fundamentals",
            "Data cleaning and preparation",
            "Exploratory data analysis",
            "Visualisation and interpretation",
            "Introduction to predictive modelling",
            "Mini data project"
        ],
        outcomes: "Understand core analytics workflows and create introductory data projects."
    },
    {
        name: "Database Management & SQL",
        category: "programming",
        duration: "3 Months",
        level: "Beginner",
        overview: "Understand relational databases and learn how to retrieve, organise and manage data.",
        syllabus: [
            "Database concepts and tables",
            "SQL queries and filtering",
            "Joins and subqueries",
            "Keys and constraints",
            "Normalisation fundamentals",
            "Database practice exercises"
        ],
        outcomes: "Write common SQL queries and understand the foundations of relational databases."
    },
    {
        name: "Oracle SQL & PL/SQL",
        category: "programming",
        duration: "3 Months",
        level: "Intermediate",
        overview: "Learn database queries and introductory procedural programming with SQL and PL/SQL.",
        syllabus: [
            "SQL queries and joins",
            "Tables, constraints and indexes",
            "PL/SQL blocks and variables",
            "Conditions and loops",
            "Procedures and functions",
            "Triggers and exception handling"
        ],
        outcomes: "Understand database querying and basic database programming workflows."
    },
    {
        name: "Mobile App Development with React Native",
        category: "programming",
        duration: "3 Months",
        level: "Intermediate",
        overview: "Explore cross-platform mobile application development using React Native.",
        syllabus: [
            "JavaScript fundamentals",
            "React component concepts",
            "Mobile layouts and styling",
            "Navigation and screen management",
            "API integration fundamentals",
            "Basic mobile application project"
        ],
        outcomes: "Understand the process of building a foundational cross-platform mobile application."
    },
    {
        name: "Operating Systems",
        category: "programming",
        duration: "3 Months",
        level: "Beginner",
        overview: "Understand operating system concepts, system resources and software environments.",
        syllabus: [
            "Operating system fundamentals",
            "Files and process management",
            "Memory and storage concepts",
            "User accounts and permissions",
            "Installation and troubleshooting",
            "Practical system exercises"
        ],
        outcomes: "Understand operating system basics and common system management tasks."
    },

    // ACCOUNTING & FINANCE
    {
        name: "Tally Prime",
        category: "accounting",
        duration: "3 Months",
        level: "Beginner",
        overview: "Learn digital accounting workflows and manage business records using Tally Prime.",
        syllabus: [
            "Company creation and configuration",
            "Ledgers and groups",
            "Voucher entries",
            "Sales and purchase transactions",
            "Inventory and stock basics",
            "Financial reports and reconciliation"
        ],
        outcomes: "Practise accounting entries and understand common business accounting workflows."
    },
    {
        name: "Tally Prime with GST",
        category: "accounting",
        duration: "3 Months",
        level: "Beginner to Intermediate",
        overview: "Combine accounting software practice with introductory GST accounting and reporting.",
        syllabus: [
            "Accounting fundamentals",
            "Company and ledger setup",
            "GST configuration basics",
            "Sales and purchase invoices",
            "Input Tax Credit fundamentals",
            "GST reports and reconciliation"
        ],
        outcomes: "Practise GST-related accounting entries and understand reporting workflows."
    },
    {
        name: "Advanced Tally Prime with GST",
        category: "accounting",
        duration: "3 Months",
        level: "Intermediate",
        overview: "Develop further accounting skills using advanced Tally features and GST workflows.",
        syllabus: [
            "Advanced voucher entries",
            "GST adjustments and reconciliation",
            "Inventory valuation",
            "Cost centres and categories",
            "Banking and outstanding reports",
            "Financial statements"
        ],
        outcomes: "Understand advanced accounting operations and common reconciliation workflows."
    },
    {
        name: "Computerized Accounting",
        category: "accounting",
        duration: "To Be Confirmed",
        level: "Beginner",
        overview: "Learn the fundamentals of digital bookkeeping and accounting software.",
        syllabus: [
            "Accounting principles",
            "Voucher and ledger management",
            "Accounting software operations",
            "Invoice preparation",
            "GST fundamentals",
            "Financial record keeping"
        ],
        outcomes: "Understand the digital accounting process and maintain basic accounting records."
    },
    {
        name: "Advanced Financial Accounting",
        category: "accounting",
        duration: "3 Months",
        level: "Intermediate",
        overview: "Study accounting records, adjustments and financial statement preparation.",
        syllabus: [
            "Journal, ledger and trial balance",
            "Bank reconciliation",
            "Depreciation and adjustments",
            "Final accounts",
            "Financial statements",
            "Accounting case studies"
        ],
        outcomes: "Understand the preparation and interpretation of common financial records."
    },
    {
        name: "Computer Applications & Advanced Accounting",
        category: "accounting",
        duration: "6 Months",
        level: "Beginner to Intermediate",
        overview: "Combine computer applications, office productivity and practical accounting fundamentals.",
        syllabus: [
            "Computer fundamentals",
            "Office applications",
            "Accounting principles",
            "Accounting software",
            "GST fundamentals",
            "Spreadsheet-based accounting"
        ],
        outcomes: "Develop basic computer and accounting skills for office and business environments."
    },
    {
        name: "SAP Finance & Controlling (FICO)",
        category: "accounting",
        duration: "To Be Confirmed",
        level: "Intermediate",
        overview: "Explore enterprise finance concepts and the fundamentals of SAP financial workflows.",
        syllabus: [
            "SAP ERP fundamentals",
            "General ledger accounting",
            "Accounts payable and receivable",
            "Asset accounting",
            "Cost and profit centre concepts",
            "Financial reporting fundamentals"
        ],
        outcomes: "Understand the basic structure of enterprise finance and controlling processes."
    },
    {
        name: "Financial Management",
        category: "accounting",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore budgeting, financial planning and introductory business finance.",
        syllabus: [
            "Financial management concepts",
            "Budget preparation",
            "Cash flow fundamentals",
            "Cost and revenue analysis",
            "Financial planning",
            "Practical case studies"
        ],
        outcomes: "Understand basic budgeting, financial planning and financial decision-making."
    },

    // DESIGN
    {
        name: "Graphic Design & CorelDRAW",
        category: "design",
        duration: "2–3 Months",
        level: "Beginner",
        overview: "Develop design fundamentals and learn to create visual assets for print and digital media.",
        syllabus: [
            "Design principles and colour theory",
            "Shapes and vector drawing",
            "Typography and layout",
            "Logo and visiting card design",
            "Brochures and banners",
            "Print-ready artwork"
        ],
        outcomes: "Create foundational graphic design work and build a beginner design portfolio."
    },
    {
        name: "Adobe Illustrator",
        category: "design",
        duration: "2 Months",
        level: "Beginner",
        overview: "Explore vector graphics and create scalable artwork for branding and illustrations.",
        syllabus: [
            "Workspace and drawing tools",
            "Pen tool and shapes",
            "Colour and typography",
            "Logo and icon design",
            "Illustration fundamentals",
            "Exporting artwork"
        ],
        outcomes: "Create basic vector illustrations, icons and branding assets."
    },
    {
        name: "2D & 3D Animation",
        category: "design",
        duration: "6 Months",
        level: "Beginner",
        overview: "Explore animation fundamentals, motion principles and introductory 3D workflows.",
        syllabus: [
            "Design fundamentals",
            "Storyboarding",
            "Keyframes and motion",
            "2D animation basics",
            "3D modelling fundamentals",
            "Rendering and mini projects"
        ],
        outcomes: "Understand the animation workflow and create introductory animation projects."
    },
    {
        name: "Professional Web Designing",
        category: "design",
        duration: "3 Months",
        level: "Beginner",
        overview: "Learn the design and layout principles used to build clear, attractive and responsive websites.",
        syllabus: [
            "Web design principles",
            "HTML and CSS fundamentals",
            "Responsive page layouts",
            "Typography and colour",
            "Navigation and UI basics",
            "Website design project"
        ],
        outcomes: "Create responsive website layouts and understand basic user interface design."
    },
    {
        name: "Digital Marketing",
        category: "design",
        duration: "2 Months",
        level: "Beginner",
        overview: "Explore digital marketing channels and the fundamentals of online brand promotion.",
        syllabus: [
            "Digital marketing fundamentals",
            "Search engine optimisation basics",
            "Social media content",
            "Campaign fundamentals",
            "Email marketing",
            "Analytics and reporting"
        ],
        outcomes: "Understand common digital marketing channels and plan introductory campaigns."
    },
    {
        name: "Basic Interior Design",
        category: "design",
        duration: "6 Months",
        level: "Beginner",
        overview: "Explore space planning, materials, lighting and the principles of interior design.",
        syllabus: [
            "Interior design fundamentals",
            "Space planning",
            "Colour and materials",
            "Furniture layouts",
            "Lighting basics",
            "Introductory design drawings"
        ],
        outcomes: "Understand interior planning principles and prepare basic design concepts."
    },
    {
        name: "Advanced Interior Design",
        category: "design",
        duration: "3 Months",
        level: "Intermediate",
        overview: "Develop interior planning and presentation skills through more detailed design exercises.",
        syllabus: [
            "Advanced space planning",
            "Material selection",
            "Lighting plans",
            "Furniture and layout planning",
            "Presentation drawings",
            "Interior design project"
        ],
        outcomes: "Prepare more detailed interior design concepts and project presentations."
    },
    {
        name: "Fashion Designing",
        category: "design",
        duration: "3 Months",
        level: "Beginner",
        overview: "Learn fashion fundamentals, garment construction and introductory pattern techniques.",
        syllabus: [
            "Fashion design fundamentals",
            "Sketching and illustration",
            "Fabric and textile basics",
            "Measurements and patterns",
            "Cutting and stitching",
            "Garment project"
        ],
        outcomes: "Understand basic garment design and construction workflows."
    },
    {
        name: "Advanced Fashion Designing",
        category: "design",
        duration: "1 Year",
        level: "Advanced",
        overview: "Explore advanced garment construction, pattern development and collection planning.",
        syllabus: [
            "Advanced fashion illustration",
            "Textiles and fabric selection",
            "Pattern making",
            "Draping and garment construction",
            "Collection development",
            "Portfolio project"
        ],
        outcomes: "Develop more detailed garment concepts and understand fashion collection workflows."
    },
    {
        name: "AutoCAD 2D & 3D",
        category: "design",
        duration: "To Be Confirmed",
        level: "Beginner to Intermediate",
        overview: "Learn computer-aided drafting and introductory 3D modelling for technical drawings.",
        syllabus: [
            "CAD interface and tools",
            "2D drawing commands",
            "Layers and dimensions",
            "Layouts and plotting",
            "3D modelling fundamentals",
            "Technical drawing exercises"
        ],
        outcomes: "Prepare basic technical drawings and understand introductory CAD modelling."
    },
    {
        name: "CREO & Pro/ENGINEER",
        category: "design",
        duration: "3 Months",
        level: "Beginner to Intermediate",
        overview: "Explore parametric CAD modelling and engineering design workflows.",
        syllabus: [
            "CAD interface and sketches",
            "Features and solid modelling",
            "Part design",
            "Assemblies",
            "Engineering drawings",
            "Design modification exercises"
        ],
        outcomes: "Understand parametric modelling and prepare basic engineering design models."
    },
    {
        name: "V-Ray Rendering",
        category: "design",
        duration: "3 Months",
        level: "Intermediate",
        overview: "Learn the fundamentals of lighting, materials and rendering for visualisation projects.",
        syllabus: [
            "Scene setup",
            "Materials and textures",
            "Lighting fundamentals",
            "Camera settings",
            "Rendering settings",
            "Visualisation exercises"
        ],
        outcomes: "Produce introductory rendered visuals and understand rendering workflows."
    },
    {
        name: "Engineering Analysis with ANSYS",
        category: "design",
        duration: "3 Months",
        level: "Intermediate",
        overview: "Explore introductory engineering simulation and analysis workflows.",
        syllabus: [
            "Simulation fundamentals",
            "Geometry preparation",
            "Meshing basics",
            "Boundary conditions",
            "Structural analysis",
            "Results interpretation"
        ],
        outcomes: "Understand the stages of a basic engineering simulation exercise."
    },
    {
        name: "BIM Engineering",
        category: "design",
        duration: "3 Months",
        level: "Intermediate",
        overview: "Learn introductory Building Information Modelling concepts and digital building workflows.",
        syllabus: [
            "BIM fundamentals",
            "Building components",
            "Model creation concepts",
            "Coordination basics",
            "Project documentation",
            "Model-based exercises"
        ],
        outcomes: "Understand digital building models and their role in project documentation."
    },

    // COMPUTER & OFFICE
    {
        name: "MS Office",
        category: "computer",
        duration: "3 Months",
        level: "Beginner",
        overview: "Develop essential office productivity skills using word processing, spreadsheets and presentations.",
        syllabus: [
            "Computer and file management",
            "MS Word documents",
            "Excel formulas and spreadsheets",
            "PowerPoint presentations",
            "Printing and formatting",
            "Practical office assignments"
        ],
        outcomes: "Prepare documents, organise spreadsheet data and create professional presentations."
    },
    {
        name: "Computer Operator",
        category: "computer",
        duration: "6 Months",
        level: "Beginner",
        overview: "Learn day-to-day computer operations and common office productivity tasks.",
        syllabus: [
            "Computer fundamentals",
            "Operating system basics",
            "File and folder management",
            "Office applications",
            "Typing and printing",
            "Internet and email"
        ],
        outcomes: "Perform common computer operator tasks and manage routine digital records."
    },
    {
        name: "Data Entry Operator",
        category: "computer",
        duration: "6 Months",
        level: "Beginner",
        overview: "Develop data entry accuracy and learn digital record management techniques.",
        syllabus: [
            "Typing practice",
            "Spreadsheet entry",
            "Data validation",
            "Record maintenance",
            "Document handling",
            "Accuracy and productivity exercises"
        ],
        outcomes: "Enter, organise and maintain digital records with improved accuracy."
    },
    {
        name: "Office Automation",
        category: "computer",
        duration: "To Be Confirmed",
        level: "Beginner",
        overview: "Learn digital tools and workflows used in everyday office administration.",
        syllabus: [
            "Word processing",
            "Spreadsheets",
            "Presentations",
            "Email and internet",
            "Digital documentation",
            "Office workflow exercises"
        ],
        outcomes: "Use common office applications to organise documents and routine administrative tasks."
    },
    {
        name: "Computer Fundamentals",
        category: "computer",
        duration: "To Be Confirmed",
        level: "Beginner",
        overview: "Build a strong foundation in computers, software, operating systems and internet usage.",
        syllabus: [
            "Computer components",
            "Hardware and software",
            "Operating system basics",
            "Files and folders",
            "Internet and email",
            "Basic computer practice"
        ],
        outcomes: "Understand everyday computer operations and develop essential digital literacy."
    },
    {
        name: "Computer Teachers Training",
        category: "computer",
        duration: "6 Months",
        level: "Beginner to Intermediate",
        overview: "Explore computer fundamentals alongside introductory teaching and lesson planning methods.",
        syllabus: [
            "Computer fundamentals",
            "Office applications",
            "Lesson planning",
            "Teaching aids",
            "Practical demonstrations",
            "Lab instruction fundamentals"
        ],
        outcomes: "Understand basic computer instruction and practical lesson planning."
    },
    {
        name: "Desktop Publishing (DTP)",
        category: "computer",
        duration: "To Be Confirmed",
        level: "Beginner",
        overview: "Learn page layout and publication design fundamentals for print materials.",
        syllabus: [
            "Page layout concepts",
            "Typography",
            "Text and image placement",
            "Publication design",
            "Print preparation",
            "Brochure and document projects"
        ],
        outcomes: "Create basic print layouts and understand publication preparation."
    },
    {
        name: "Typing Typing",
        category: "computer",
        duration: "3 Months",
        level: "Beginner",
        overview: "Develop typing speed, accuracy and keyboard proficiency in the selected language.",
        syllabus: [
            "Keyboard familiarity",
            "Typing posture and accuracy",
            "English typing practice",
            "Marathi or Hindi practice as applicable",
            "Timed typing exercises",
            "Mock test practice"
        ],
        outcomes: "Improve typing speed and accuracy. Examination eligibility and language options should be confirmed with the institute."
    },
    {
        name: "Spoken English & Communication",
        category: "computer",
        duration: "3 Months",
        level: "Beginner",
        overview: "Build confidence in everyday English conversations and professional communication.",
        syllabus: [
            "Vocabulary and sentence formation",
            "Everyday conversations",
            "Pronunciation practice",
            "Listening and speaking",
            "Presentation skills",
            "Interview practice"
        ],
        outcomes: "Improve communication confidence through guided speaking and listening activities."
    },

    // HARDWARE & NETWORKING
    {
        name: "Computer Hardware & Networking",
        category: "hardware",
        duration: "3 Months",
        level: "Beginner",
        overview: "Understand computer components, hardware troubleshooting and networking fundamentals.",
        syllabus: [
            "Computer components and assembly",
            "Hardware diagnostics",
            "Operating system installation",
            "IP addressing basics",
            "LAN and network setup",
            "Troubleshooting exercises"
        ],
        outcomes: "Understand basic computer maintenance and introductory network configuration."
    },
    {
        name: "Network Administration",
        category: "hardware",
        duration: "To Be Confirmed",
        level: "Intermediate",
        overview: "Explore network configuration, connectivity management and basic troubleshooting.",
        syllabus: [
            "Networking fundamentals",
            "TCP/IP concepts",
            "IP addressing and subnetting",
            "Routing and switching basics",
            "Access control fundamentals",
            "Network troubleshooting"
        ],
        outcomes: "Understand common network administration concepts and basic connectivity troubleshooting."
    },
    {
        name: "Advanced Networking",
        category: "hardware",
        duration: "2 Months",
        level: "Intermediate",
        overview: "Build on networking fundamentals with more detailed configuration and troubleshooting exercises.",
        syllabus: [
            "Network architecture",
            "IP addressing and subnetting",
            "Routing fundamentals",
            "Switching concepts",
            "Network security basics",
            "Troubleshooting exercises"
        ],
        outcomes: "Understand intermediate network concepts and common troubleshooting workflows."
    },
    {
        name: "Ethical Hacking & Cybersecurity",
        category: "hardware",
        duration: "2 Months",
        level: "Beginner",
        overview: "Learn cybersecurity principles, vulnerability awareness and authorised security testing fundamentals.",
        syllabus: [
            "Cybersecurity fundamentals",
            "Networking essentials",
            "Security assessment concepts",
            "Vulnerability identification",
            "Authorised lab exercises",
            "Security documentation"
        ],
        outcomes: "Understand defensive security concepts and responsible, authorised testing practices."
    },
    {
        name: "Laptop Repairing",
        category: "hardware",
        duration: "3 Months",
        level: "Beginner",
        overview: "Learn laptop components, diagnostic techniques and basic hardware maintenance.",
        syllabus: [
            "Laptop components",
            "Hardware diagnostics",
            "RAM and storage basics",
            "Operating system installation",
            "Common hardware faults",
            "Maintenance and safety"
        ],
        outcomes: "Understand basic laptop diagnostics and routine maintenance procedures."
    },
    {
        name: "Mobile Phone Repairing",
        category: "hardware",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore mobile device components, fault diagnosis and basic repair techniques.",
        syllabus: [
            "Mobile components",
            "Repair tools and safety",
            "Fault diagnosis",
            "Hardware troubleshooting",
            "Component replacement basics",
            "Practical repair exercises"
        ],
        outcomes: "Understand basic mobile device maintenance and diagnostic workflows."
    },
    {
        name: "Software Testing",
        category: "hardware",
        duration: "2 Months",
        level: "Beginner",
        overview: "Learn software testing fundamentals and how to document and report defects.",
        syllabus: [
            "Testing fundamentals",
            "Test cases and test plans",
            "Functional testing",
            "Regression testing",
            "Defect reporting",
            "Practical testing exercises"
        ],
        outcomes: "Write basic test cases, execute tests and document defects clearly."
    },

    // VOCATIONAL & PROFESSIONAL
    {
        name: "CNC Operating & Programming",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore CNC machine operation, basic programming concepts and workshop practices.",
        syllabus: [
            "Machine fundamentals and safety",
            "Coordinate systems",
            "G-code and M-code basics",
            "Tool setup and offsets",
            "Basic machine operations",
            "Measurement and quality checks"
        ],
        outcomes: "Understand introductory CNC workflows and essential workshop safety."
    },
    {
        name: "AC & Refrigeration Services",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Learn introductory air-conditioning and refrigeration concepts with an emphasis on safe servicing.",
        syllabus: [
            "Refrigeration fundamentals",
            "AC components",
            "Electrical safety",
            "Installation concepts",
            "Preventive maintenance",
            "Fault diagnosis"
        ],
        outcomes: "Understand common AC components and basic maintenance procedures under appropriate supervision."
    },
    {
        name: "Industrial Fire & Safety",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore workplace safety, fire prevention and emergency response fundamentals.",
        syllabus: [
            "Workplace hazard awareness",
            "Fire prevention",
            "Extinguisher fundamentals",
            "Emergency response",
            "Evacuation procedures",
            "Personal protective equipment"
        ],
        outcomes: "Understand essential workplace safety concepts and emergency procedures."
    },
    {
        name: "Basic Tailoring",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Learn foundational stitching, garment measurements and basic tailoring techniques.",
        syllabus: [
            "Measuring techniques",
            "Fabric selection",
            "Sewing machine operation",
            "Basic stitches",
            "Cutting and pattern basics",
            "Garment stitching practice"
        ],
        outcomes: "Understand basic tailoring techniques and practise simple garment construction."
    },
    {
        name: "Beauty Parlour",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore basic beauty services, hygiene practices and introductory salon techniques.",
        syllabus: [
            "Salon hygiene",
            "Skin care fundamentals",
            "Facial basics",
            "Threading fundamentals",
            "Basic makeup",
            "Client care"
        ],
        outcomes: "Understand introductory beauty service procedures and client hygiene practices."
    },
    {
        name: "Nursery Teacher Training",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore early childhood learning activities and introductory classroom teaching techniques.",
        syllabus: [
            "Early childhood development",
            "Storytelling and rhymes",
            "Classroom activities",
            "Teaching aids",
            "Lesson planning",
            "Child safety fundamentals"
        ],
        outcomes: "Plan introductory learning activities for young children. Recognition and eligibility should be verified before enrolment."
    },
    {
        name: "Business Communication",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Develop workplace communication, professional writing and presentation skills.",
        syllabus: [
            "Professional writing",
            "Email etiquette",
            "Listening and speaking",
            "Presentations",
            "Team communication",
            "Interview preparation"
        ],
        outcomes: "Communicate more clearly in common academic and workplace situations."
    },
    {
        name: "Entrepreneurship & Management",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore business planning, customer research and the foundations of management.",
        syllabus: [
            "Business idea development",
            "Market research",
            "Business planning",
            "Budgeting fundamentals",
            "Marketing concepts",
            "Startup case studies"
        ],
        outcomes: "Understand introductory business planning and entrepreneurship concepts."
    },
    {
        name: "ChatGPT & AI Productivity",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Learn how to use AI tools thoughtfully for learning, content creation and productivity.",
        syllabus: [
            "AI fundamentals",
            "Prompt writing",
            "Content drafting",
            "Research assistance",
            "Productivity workflows",
            "Responsible AI use"
        ],
        outcomes: "Use AI tools for introductory productivity tasks while checking outputs for accuracy."
    },
    {
        name: "Plumber",
        category: "vocational",
        duration: "1 Month",
        level: "Beginner",
        overview: "Learn introductory plumbing tools, fittings and basic maintenance procedures.",
        syllabus: [
            "Tools and materials",
            "Pipes and fittings",
            "Jointing fundamentals",
            "Water supply systems",
            "Drainage basics",
            "Leak detection and safety"
        ],
        outcomes: "Understand basic plumbing tasks and common maintenance concepts."
    },
    {
        name: "Food & Nutrition",
        category: "vocational",
        duration: "3 Months",
        level: "Beginner",
        overview: "Explore food groups, balanced diets, meal planning and food hygiene.",
        syllabus: [
            "Nutrition fundamentals",
            "Food groups",
            "Balanced diet concepts",
            "Meal planning",
            "Food hygiene",
            "Food safety"
        ],
        outcomes: "Understand basic nutrition and safe food handling principles."
    }
];


let currentCategory = null;
let currentCourse = null;


// CATEGORY RENDERING
function renderCategories() {
    const grid = document.getElementById("category-grid");

    grid.innerHTML = courseCategories.map(category => {
        const count = courses.filter(
            course => course.category === category.id
        ).length;

        return `
            <button type="button"
                onclick="showCategory('${category.id}')"
                class="group text-left bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl
                hover:border-indigo-400 dark:hover:border-indigo-500
                transition-all duration-300">

                <div class="flex items-start justify-between gap-4">
                    <div class="w-14 h-14 rounded-2xl
                        bg-${category.color}-100 dark:bg-${category.color}-900/30
                        text-${category.color}-600 dark:text-${category.color}-400
                        flex items-center justify-center text-2xl">
                        <i class="fa-solid ${category.icon}"></i>
                    </div>

                    <span class="text-xs font-bold px-3 py-1 rounded-full
                        bg-slate-100 dark:bg-slate-800
                        text-slate-600 dark:text-slate-300">
                        ${count} Courses
                    </span>
                </div>

                <h4 class="text-lg font-extrabold mt-5
                    text-slate-900 dark:text-white">
                    ${category.title}
                </h4>

                <p class="text-sm leading-6 mt-2
                    text-slate-500 dark:text-slate-400">
                    ${category.description}
                </p>

                <div class="mt-5 text-sm font-bold text-indigo-600
                    dark:text-indigo-400">
                    Explore Courses
                    <i class="fa-solid fa-arrow-right ml-2
                        group-hover:translate-x-1 transition-transform"></i>
                </div>
            </button>
        `;
    }).join("");
}


const categorySelect = document.getElementById("student-category");
const courseSelect = document.getElementById("student-course");

// Populate course names from your existing courses array
categorySelect.addEventListener("change", function () {
    const selectedCategory = this.value;

    // Clear previous options
    courseSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = selectedCategory
        ? "Select Interested Course"
        : "First select a course category";

    courseSelect.appendChild(defaultOption);

    // Find courses matching the selected category
    const filteredCourses = courses.filter(
        course => course.category === selectedCategory
    );

    filteredCourses.forEach(course => {
        const option = document.createElement("option");

        option.value = course.name;
        option.textContent = course.name;

        courseSelect.appendChild(option);
    });

    courseSelect.disabled = filteredCourses.length === 0;

    if (filteredCourses.length === 0 && selectedCategory) {
        defaultOption.textContent = "No courses available";
    }
});

// SHOW SELECTED CATEGORY
function showCategory(categoryId) {
    currentCategory = categoryId;

    const category = courseCategories.find(
        item => item.id === categoryId
    );

    const categoryCourses = courses.filter(
        course => course.category === categoryId
    );

    document.getElementById("category-view").classList.add("hidden");
    document.getElementById("course-detail-view").classList.add("hidden");
    document.getElementById("course-list-view").classList.remove("hidden");

    document.getElementById("selected-category-title").textContent =
        category.title;

    const grid = document.getElementById("course-grid");

    grid.innerHTML = categoryCourses.map((course, index) => `
        <button type="button"
            onclick="showCourse('${course.name.replace(/'/g, "\\'")}')"
            class="text-left bg-white dark:bg-slate-900 p-6 rounded-2xl
            border border-slate-200 dark:border-slate-800
            hover:border-indigo-400 dark:hover:border-indigo-500
            hover:shadow-xl transition-all group">

            <div class="w-11 h-11 flex items-center justify-center
                rounded-xl bg-indigo-100 dark:bg-indigo-900/40
                text-indigo-600 dark:text-indigo-400 text-lg">
                <i class="fa-solid fa-book-open"></i>
            </div>

            <div class="flex items-center justify-between gap-2 mt-4">
                <span class="text-xs font-semibold text-slate-500
                    dark:text-slate-400">
                    ${course.level}
                </span>

                <span class="text-xs font-bold text-indigo-600
                    dark:text-indigo-400">
                    ${course.duration}
                </span>
            </div>

            <h4 class="text-lg font-extrabold mt-3
                text-slate-900 dark:text-white">
                ${course.name}
            </h4>

            <p class="text-sm leading-6 mt-2 text-slate-500
                dark:text-slate-400">
                ${course.overview}
            </p>

            <div class="mt-5 text-sm font-bold text-indigo-600
                dark:text-indigo-400">
                View Syllabus
                <i class="fa-solid fa-arrow-right ml-2
                    group-hover:translate-x-1 transition-transform"></i>
            </div>
        </button>
    `).join("");

    window.scrollTo({
        top: document.getElementById("courses").offsetTop - 20,
        behavior: "smooth"
    });
}


// SHOW FULL COURSE DETAILS
function showCourse(courseName) {
    currentCourse = courses.find(course => course.name === courseName);

    if (!currentCourse) return;

    const category = courseCategories.find(
        item => item.id === currentCourse.category
    );

    document.getElementById("course-list-view").classList.add("hidden");
    document.getElementById("course-detail-view").classList.remove("hidden");

    document.getElementById("detail-category").textContent = category.title;
    document.getElementById("detail-title").textContent = currentCourse.name;
    document.getElementById("detail-duration").textContent =
        "Duration: " + currentCourse.duration + "  |  Level: " + currentCourse.level;

    document.getElementById("detail-short").textContent = currentCourse.overview;
    document.getElementById("detail-overview").textContent = currentCourse.overview;
    document.getElementById("detail-outcomes").textContent = currentCourse.outcomes;

    document.getElementById("detail-syllabus").innerHTML =
        currentCourse.syllabus.map(topic => `
            <li class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-emerald-500 mt-1"></i>
                <span>${topic}</span>
            </li>
        `).join("");

    window.scrollTo({
        top: document.getElementById("courses").offsetTop - 20,
        behavior: "smooth"
    });
}


// NAVIGATION
function showCategories() {
    document.getElementById("course-list-view").classList.add("hidden");
    document.getElementById("course-detail-view").classList.add("hidden");
    document.getElementById("category-view").classList.remove("hidden");

    currentCategory = null;
    currentCourse = null;
}

function backToCourses() {
    if (currentCategory) {
        document.getElementById("course-detail-view").classList.add("hidden");
        document.getElementById("course-list-view").classList.remove("hidden");
    } else {
        showCategories();
    }
}


// OPEN ENQUIRY FORM. It must also work from generic admission buttons.
function openAdmissionForm() {
    const modal = document.getElementById("admission-modal");
    const categoryField = document.getElementById("student-category");
    const courseField = document.getElementById("student-course");

    if (!modal) return;

    // Preselect the course only when a course was selected on the site.
    // Otherwise, leave the form ready for the student to choose one.
    if (currentCourse && categoryField && courseField) {
        const matchingCategory = Array.from(categoryField.options).some(
            option => option.value === currentCourse.category
        );
        if (matchingCategory) {
            categoryField.value = currentCourse.category;
            categoryField.dispatchEvent(new Event("change", { bubbles: true }));
            courseField.value = currentCourse.name;
        }
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    const firstField = modal.querySelector('input, select, textarea');
    if (firstField) window.setTimeout(() => firstField.focus(), 50);
}

function closeAdmissionForm() {
    const modal = document.getElementById("admission-modal");
    if (modal) modal.classList.add("hidden");
    document.body.style.overflow = "";
}


document.getElementById("student-enquiry-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);

        const studentName = formData.get("studentName");
        const phone = formData.get("phone");
        const city = formData.get("city");
        const category = categorySelect.selectedIndex >= 0
            ? categorySelect.options[categorySelect.selectedIndex].text
            : "Not selected";
        const course = courseSelect.value || "Not selected";
        const education = formData.get("education") || "Not specified";
        const message = formData.get("message") || "None";

        const whatsappMessage =
            `*Admission Enquiry*
Name: ${studentName}
Mobile: ${phone}
City: ${city}
Course Category: ${category}
Interested Course: ${course}
Education: ${education}
Question: ${message}`;

        // Institute WhatsApp number
        const whatsappNumber = "919021179106";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(whatsappMessage);

        // Open WhatsApp directly from the submit gesture; keep the form intact if blocked.
        const whatsappWindow = window.open(whatsappURL, "_blank", "noopener,noreferrer");
        if (!whatsappWindow) {
            window.location.href = whatsappURL;
        }
    });


// INITIALISE
renderCategories();

/* Theme Toggle Handler */
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'light' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    document.documentElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
} else {
    document.documentElement.classList.add('dark');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
}

themeToggleBtn.addEventListener('click', function () {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
        showToast('Switched to Light Theme');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
        showToast('Switched to Night Theme');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const categorySelect = document.getElementById("form-category-select");
    const courseSelect = document.getElementById("form-course-select");

    if (!form || !categorySelect || !courseSelect) return;

    // Institute WhatsApp number.
    const WHATSAPP_NUMBER = "919021179106";

    // Populate all course categories.
    courseCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.title;
        categorySelect.appendChild(option);
    });

    // Filter courses according to selected category.
    categorySelect.addEventListener("change", function () {
        const selectedCategory = this.value;

        courseSelect.replaceChildren();

        const placeholder = document.createElement("option");
        placeholder.value = "";

        const filteredCourses = courses.filter(
            course => course.category === selectedCategory
        );

        placeholder.textContent = selectedCategory
            ? "Select Interested Course"
            : "First select a course category";

        courseSelect.appendChild(placeholder);

        filteredCourses.forEach(course => {
            const option = document.createElement("option");
            option.value = course.name;
            option.textContent = course.name;
            courseSelect.appendChild(option);
        });

        courseSelect.disabled = filteredCourses.length === 0;
    });

    // Create the enquiry message and open WhatsApp.
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const studentName =
            form.querySelector("#student-name").value.trim();

        const studentMobile =
            form.querySelector("#student-mobile").value.trim();

        const studentCity =
            form.querySelector("#student-city").value.trim();

        const education =
            form.querySelector("#student-education").value || "Not specified";

        const categoryName =
            categorySelect.options[categorySelect.selectedIndex].text;

        const interestedCourse = courseSelect.value;

        const question =
            form.querySelector("#student-message").value.trim()
            || "Not specified";

        const message = [
            "🎓 *Hello Pravin Sir 👋*",
            "",
            "I would like to enquire about course admission.",
            "",
            "👤 *Student Name:* " + studentName,
            "📱 *Mobile Number:* " + studentMobile,
            "📍 *City / Town:* " + studentCity,
            "📚 *Course Category:* " + categoryName,
            "🎯 *Interested Course:* " + interestedCourse,
            "🎓 *Current Education:* " + education,
            "💬 *Question:* " + question,
            "",
            "Please share the course fees, duration, syllabus and available batch timings.",
            "",
            "Thank you!"
        ].join("\n");

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
});
/* Navigation menu is initialized once in the DOMContentLoaded handler below. */
/* Toast Helper */
function showToast(msg) {
    const toast = document.getElementById('toast-msg');
    const toastText = document.getElementById('toast-text');
    toastText.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

/* Modal Toggle */
function toggleModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    if (modal.classList.contains('hidden')) {
        if (id === 'admission-modal' && typeof openAdmissionForm === 'function') {
            openAdmissionForm();
        } else {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Close the admission form with Escape or by clicking the dark backdrop.
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeAdmissionForm();
});

document.addEventListener('click', function (event) {
    const modal = document.getElementById('admission-modal');
    if (modal && event.target === modal) closeAdmissionForm();
});

function handleModalSubmit(e) {
    e.preventDefault();
    toggleModal('admission-modal');
    showToast('Thank you! Demo class reserved. Pravin Sir will call you shortly.');
}

function handleFormSubmit(e) {
    e.preventDefault();
    showToast('Inquiry submitted! Good Luck Computer Classes team will reach out.');
    e.target.reset();
}

/* AI Pathfinder */
function selectPathGoal(goal) {
    const res = document.getElementById('pathfinder-result');
    const icon = document.getElementById('path-icon');
    const title = document.getElementById('path-title');
    const desc = document.getElementById('path-desc');

    res.classList.remove('hidden');

    if (goal === 'gov') {
        icon.innerHTML = '<i class="fa-solid fa-landmark text-amber-400"></i>';
        title.textContent = 'quiz + Typing Typing (30 & 40 WPM)';
        desc.textContent = 'Mandatory qualification for MPSC, Court Stenographer, Clerk & Talathi government exams in Maharashtra.';
    } else if (goal === 'coding') {
        icon.innerHTML = '<i class="fa-solid fa-code text-emerald-400"></i>';
        title.textContent = 'C++, Python Masterclass & Web Development';
        desc.textContent = 'Build core logic, algorithm fundamentals, and project portfolio for diploma, engineering, or software developer careers.';
    } else {
        icon.innerHTML = '<i class="fa-solid fa-chart-line text-purple-400"></i>';
        title.textContent = 'Tally Prime GST + MS-Office Professional';
        desc.textContent = 'Perfect for business accounting, CA firm entry jobs, inventory manager, and billing clerk profiles in Bhandara.';
    }
}

/* ACCURATE Typing Practice Engine */
const typingParagraphs = {
    easy: {
        eng: "Computers are essential tools in modern offices. Typing with speed and accuracy helps students perform better in exams and daily work. Good Luck Computer Classes provides practical training in Bhandara.",
        mar: "संगणक हे आधुनिक युगात अत्यंत महत्त्वाचे साधन आहे. संगणकाचे ज्ञान घेतल्यामुळे अनेक रोजगाराच्या संधी उपलब्ध होतात."
    },
    medium: {
        eng: "Learning software development, keyboard typing speed, and accounting software like Tally Prime creates valuable career opportunities. With proper training and practical skills, students can build a strong foundation for their professional future.",
        mar: "योग्य संगणक प्रशिक्षण, टंकलेखनाचा नियमित सराव आणि अचूकता यामुळे विद्यार्थ्यांना संगणक कौशल्ये विकसित करता येतात आणि करिअरच्या विविध संधी उपलब्ध होतात."
    },
    hard: {
        eng: "In modern competitive government examinations like MPSC and District Court recruitment, candidates require speed of 40 words per minute along with 95 percent accuracy in Typing keyboard examinations under timed supervisor pressure.",
        mar: "सरकारी नोकरीसाठी टंकलेखन प्रमाणपत्र अत्यंत आवश्यक आहे. गुड लक कॉम्प्युटर क्लासेस भंडारा येथे प्रवीण मोहबे सर यांच्या मार्गदर्शनाखाली शेकडो विद्यार्थी यशस्वी झाले आहेत."
    }
};

let currentTypingLevel = 'easy';
let typingTimer = null;
let timeRemaining = 60;
let isTypingActive = false;

function setTypingLevel(lvl) {
    currentTypingLevel = lvl;
    document.querySelectorAll('#btn-lvl-easy, #btn-lvl-medium, #btn-lvl-hard').forEach(btn => {
        btn.className = 'px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-brand-500 transition-all';
    });
    document.getElementById(`btn-lvl-${lvl}`).className = 'px-3 py-1.5 rounded-lg bg-brand-600 text-white transition-all';
    resetTypingTest();
}

function resetTypingTest() {
    clearInterval(typingTimer);
    isTypingActive = false;
    timeRemaining = 60;
    document.getElementById('typing-timer').textContent = '60s';
    document.getElementById('typing-wpm').textContent = '0 WPM';
    document.getElementById('typing-accuracy').textContent = '100%';

    const lang = document.getElementById('typing-lang').value;
    const text = typingParagraphs[currentTypingLevel][lang] || typingParagraphs[currentTypingLevel]['eng'];

    const display = document.getElementById('typing-text-display');
    display.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');

    const input = document.getElementById('typing-input');
    input.value = '';
    input.disabled = true;
    input.placeholder = "Click 'Start Speed Test' button below to begin...";

    document.getElementById('start-typing-btn').disabled = false;
    document.getElementById('typing-feedback-badge').classList.add('hidden');
}

function startTypingTest() {
    resetTypingTest();
    isTypingActive = true;
    const input = document.getElementById('typing-input');
    input.disabled = false;
    input.placeholder = "Start typing the passage shown above...";
    input.focus();
    document.getElementById('start-typing-btn').disabled = true;

    typingTimer = setInterval(() => {
        timeRemaining--;
        document.getElementById('typing-timer').textContent = `${timeRemaining}s`;

        if (timeRemaining <= 0) {
            endTypingTest();
        }
    }, 1000);
}

function endTypingTest() {
    clearInterval(typingTimer);
    isTypingActive = false;
    document.getElementById('typing-input').disabled = true;
    document.getElementById('typing-feedback-badge').classList.remove('hidden');
    addScore(50, 'Typing Speed Test Completed');
}

const typingInput = document.getElementById('typing-input');
typingInput.addEventListener('input', (e) => {
    if (!isTypingActive) return;

    const typedVal = typingInput.value;
    const lang = document.getElementById('typing-lang').value;
    const originalText = typingParagraphs[currentTypingLevel][lang] || typingParagraphs[currentTypingLevel]['eng'];
    const spans = document.getElementById('typing-text-display').querySelectorAll('span');

    let correctCount = 0;

    spans.forEach((span, index) => {
        const char = typedVal[index];
        if (char == null) {
            span.className = '';
        } else if (char === span.textContent) {
            span.className = 'bg-emerald-500/20 text-emerald-500 font-bold';
            correctCount++;
        } else {
            span.className = 'bg-red-500/20 text-red-500 font-bold';
        }
    });

    const elapsedMinutes = (60 - timeRemaining) / 60 || 0.01;
    const wordsTyped = typedVal.trim().split(/\s+/).filter(w => w.length > 0).length || 0;
    const wpm = Math.round(wordsTyped / elapsedMinutes);
    const accuracy = typedVal.length > 0 ? Math.round((correctCount / typedVal.length) * 100) : 100;

    document.getElementById('typing-wpm').textContent = `${wpm} WPM`;
    document.getElementById('typing-accuracy').textContent = `${accuracy}%`;

    // On-screen Virtual Key Highlight
    const lastChar = typedVal.slice(-1).toLowerCase();
    document.querySelectorAll('.key-cap').forEach(k => {
        if (k.getAttribute('data-key') === lastChar) {
            k.classList.add('key-active');
            setTimeout(() => k.classList.remove('key-active'), 200);
        }
    });
});

/* 25 RANDOM QUESTIONS POOL */
const testQuestionPool = [
    { q: "What is the key shortcut to duplicate a selected slide in Microsoft PowerPoint?", options: ["Ctrl + N", "Ctrl + D", "Ctrl + M", "Ctrl + K"], ans: 1, tip: "Ctrl + D duplicates selected elements or slides instantly in PowerPoint." },
    { q: "Which of the following is an official Microsoft operating system?", options: ["Windows 11", "Android", "iOS", "Ubuntu Linux"], ans: 0, tip: "Windows 11 is the flagship OS by Microsoft." },
    { q: "Which formula in MS Excel is used to add up a range of numbers?", options: ["=AVERAGE()", "=COUNT()", "=SUM()", "=TOTAL()"], ans: 2, tip: "The =SUM() function adds all numbers in the specified cell range." },
    { q: "What is the primary function of RAM in a computer system?", options: ["Permanent Storage", "Temporary Volatile Memory", "Graphics Processing", "Power Supply"], ans: 1, tip: "RAM holds data temporarily for fast processor access." },
    { q: "Which shortcut key is used to Undo the last action in MS Word?", options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + U"], ans: 1, tip: "Ctrl + Z reverses your previous action." },
    { q: "In web browsers, what does HTTP stand for?", options: ["Hypertext Transfer Protocol", "High Tech Transport Language", "Hyperlink Text Process", "Host Transfer Protocol"], ans: 0, tip: "HTTP is the foundational protocol for transferring web data." },
    { q: "Which MS Excel feature allows you to auto-fill sequential dates or numbers?", options: ["AutoSum", "AutoFill", "Data Validation", "PivotTable"], ans: 1, tip: "AutoFill completes series like days, months, or numbers." },
    { q: "What type of malware disguises itself as legitimate software?", options: ["Virus", "Trojan Horse", "Worm", "Spyware"], ans: 1, tip: "Trojans mislead users of their true intent." },
    { q: "Which key combination pastes copied content?", options: ["Ctrl + C", "Ctrl + P", "Ctrl + V", "Ctrl + A"], ans: 2, tip: "Ctrl + V is used for pasting content." },
    { q: "In MS Word, which alignment spreads text evenly between margins?", options: ["Left", "Center", "Right", "Justify"], ans: 3, tip: "Justify gives clean straight edges on both sides." },
    { q: "What is the main extension of a Microsoft Word 2019 file?", options: [".txt", ".docx", ".xlsx", ".pptx"], ans: 1, tip: ".docx is the standard XML-based Word document extension." },
    { q: "Which port is commonly used to connect a USB flash drive?", options: ["HDMI", "VGA", "USB", "Ethernet"], ans: 2, tip: "USB stands for Universal Serial Bus." },
    { q: "In PowerPoint, what view displays all slides as thumbnails?", options: ["Slide Sorter View", "Normal View", "Reading View", "Slide Show"], ans: 0, tip: "Slide Sorter arranges thumbnails for easy reordering." },
    { q: "Which device converts digital signals to analog for internet transmission?", options: ["Router", "Modem", "Switch", "Hub"], ans: 1, tip: "Modem stands for Modulator-Demodulator." },
    { q: "What is the shortcut key to open a New Document in MS Word?", options: ["Ctrl + N", "Ctrl + O", "Ctrl + W", "Ctrl + M"], ans: 0, tip: "Ctrl + N creates a brand new blank file." },
    { q: "In Excel, cell address A1 refers to:", options: ["Column 1 Row A", "Column A Row 1", "Sheet 1 Cell A", "Formula Bar"], ans: 1, tip: "Column letters come first, followed by row numbers." },
    { q: "Which cloud storage service is integrated into Microsoft Windows 11?", options: ["Google Drive", "iCloud", "OneDrive", "Dropbox"], ans: 2, tip: "OneDrive is Microsoft's built-in cloud solution." },
    { q: "What is the maximum number of bits in an IPv4 address?", options: ["16 bits", "32 bits", "64 bits", "128 bits"], ans: 1, tip: "IPv4 uses 32-bit logical addresses." },
    { q: "Which Excel function counts cells containing numbers only?", options: ["=COUNT()", "=COUNTA()", "=COUNTBLANK()", "=SUM()"], ans: 0, tip: "COUNT ignores text and only tallies numeric entries." },
    { q: "What is the shortcut to start a PowerPoint Slide Show from beginning?", options: ["F5", "Shift + F5", "F1", "Esc"], ans: 0, tip: "F5 launches the slide show from slide 1." },
    { q: "Which computer hardware component is known as the Brain of Computer?", options: ["Hard Disk", "CPU", "Motherboard", "RAM"], ans: 1, tip: "Central Processing Unit executes instructions." },
    { q: "What technology is used in wireless mice and keyboards?", options: ["Bluetooth / 2.4GHz RF", "Infrared", "Fiber Optics", "Satellite"], ans: 0, tip: "RF and Bluetooth provide seamless wireless peripheral links." },
    { q: "Which key removes the character to the LEFT of the cursor?", options: ["Delete", "Backspace", "Spacebar", "Escape"], ans: 1, tip: "Backspace deletes to the left, Delete to the right." },
    { q: "What is phishing in cybersecurity?", options: ["Hardware defect", "Fake email/site fraud to steal password", "System speedup", "Antivirus scan"], ans: 1, tip: "Phishing tricks users into revealing confidential data." },
    { q: "Which file format is uncompressed raw audio?", options: [".mp3", ".wav", ".aac", ".flac"], ans: 1, tip: "WAV is high quality uncompressed audio." }
];

let activeQuizQuestions = [];
let currentQIndex = 0;
let score = 0;
let quizFinished = false;

function shuffleArray(array) {
    // Fisher-Yates shuffle avoids biased random sorting.
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initRandomQuiz() {
    // Load the complete question pool so learners can attempt every question.
    activeQuizQuestions = shuffleArray([...testQuestionPool]);
    currentQIndex = 0;
    score = 0;
    quizFinished = false;
    const nextButton = document.getElementById('next-q-btn');
    if (nextButton) { nextButton.disabled = false; nextButton.innerHTML = 'Next Question <i class="fa-solid fa-arrow-right ml-1"></i>'; }
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('quiz-total-tried').textContent = '0';
    document.getElementById('quiz-progress-bar').style.width = '0%';
    loadtestQuestion();
}

function loadtestQuestion() {
    const qObj = activeQuizQuestions[currentQIndex];
    document.getElementById('quiz-question-counter').textContent = `Question ${currentQIndex + 1} of ${activeQuizQuestions.length}`;
    document.getElementById('quiz-question-text').textContent = qObj.q;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    qObj.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 text-xs sm:text-sm font-semibold transition-all flex items-center justify-between';
        btn.innerHTML = `<span>${opt}</span> <i class="fa-regular fa-circle text-slate-400"></i>`;
        btn.onclick = () => checktestAnswer(idx, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('quiz-explanation').classList.add('hidden');
}

function checktestAnswer(selectedIdx, btnEl) {
    const qObj = activeQuizQuestions[currentQIndex];
    const allBtns = document.getElementById('quiz-options').children;

    for (let b of allBtns) {
        b.disabled = true;
    }

    if (selectedIdx === qObj.ans) {
        btnEl.classList.add('bg-emerald-500/10', 'border-emerald-500', 'text-emerald-600');
        score++;
        document.getElementById('quiz-score').textContent = score;
        addScore(10, 'Correct Quiz Answer');
    } else {
        btnEl.classList.add('bg-red-500/10', 'border-red-500', 'text-red-600');
        allBtns[qObj.ans].classList.add('bg-emerald-500/10', 'border-emerald-500', 'text-emerald-600');
    }

    document.getElementById('quiz-total-tried').textContent = currentQIndex + 1;
    document.getElementById('quiz-explanation-text').textContent = qObj.tip;
    document.getElementById('quiz-explanation').classList.remove('hidden');

    const pct = Math.round(((currentQIndex + 1) / activeQuizQuestions.length) * 100);
    document.getElementById('quiz-progress-bar').style.width = `${pct}%`;
}

function nextquizQuestion() {
    if (quizFinished) {
        initRandomQuiz();
        return;
    }

    // Require an answer before advancing.
    const optionsContainer = document.getElementById('quiz-options');
    if (optionsContainer && !Array.from(optionsContainer.children).some(button => button.disabled)) {
        showToast('Please answer this question before continuing.');
        return;
    }

    if (currentQIndex < activeQuizQuestions.length - 1) {
        currentQIndex++;
        loadtestQuestion();
    } else {
        quizFinished = true;
        showToast(`Quiz completed! Score: ${score}/${activeQuizQuestions.length}`);
        document.getElementById('quiz-question-counter').textContent = 'Quiz Completed';
        document.getElementById('quiz-question-text').textContent =
            `You completed all ${activeQuizQuestions.length} questions and scored ${score}/${activeQuizQuestions.length}.`;
        document.getElementById('quiz-options').innerHTML = '';
        document.getElementById('quiz-explanation').classList.add('hidden');
        const nextButton = document.getElementById('next-q-btn');
        if (nextButton) nextButton.innerHTML = 'Restart Quiz <i class="fa-solid fa-rotate-right ml-1"></i>';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("terminal-output");
    const input = document.getElementById("terminal-input");
    const form = document.getElementById("terminal-form");

    if (!output || !input || !form) return;

    function printLine(text, className = "text-emerald-400") {
        const line = document.createElement("div");
        line.className = className;
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }

    function printHeading(text) {
        printLine(text, "text-white font-bold mt-3 mb-2");
    }

    function scrollOutput() {
        output.scrollTop = output.scrollHeight;
    }

    // Course par click karne par details isi page par dikhao
    function showCourseDetails(course) {
        const section = document.getElementById("course-details");

        if (!section) {
            printLine(
                "Course details section nahi mila. HTML mein id='course-details' add karein.",
                "text-amber-400"
            );
            return;
        }

        const title = section.querySelector("#course-detail-title");
        const overview = section.querySelector("#course-detail-overview");
        const duration = section.querySelector("#course-detail-duration");
        const level = section.querySelector("#course-detail-level");
        const syllabus = section.querySelector("#course-detail-syllabus");
        const outcomes = section.querySelector("#course-detail-outcomes");

        if (title) title.textContent = course.name;
        if (overview) overview.textContent = course.overview || "";
        if (duration) duration.textContent = course.duration || "Contact institute";
        if (level) level.textContent = course.level || "Not specified";
        if (outcomes) outcomes.textContent = course.outcomes || "";

        if (syllabus) {
            syllabus.replaceChildren();

            (course.syllabus || []).forEach(function (topic) {
                const li = document.createElement("li");
                li.textContent = topic;
                syllabus.appendChild(li);
            });
        }

        section.classList.remove("hidden");
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // Course button
    function printCourseCard(course) {
        const card = document.createElement("button");

        card.type = "button";
        card.className =
            "w-full text-left block p-3 rounded-xl " +
            "border border-slate-700 bg-slate-950 " +
            "hover:border-emerald-500 hover:bg-emerald-950/30 " +
            "transition-colors mb-2";

        const title = document.createElement("div");
        title.className = "text-emerald-400 font-bold";
        title.textContent = "› " + course.name;

        const description = document.createElement("div");
        description.className = "text-slate-400 text-xs mt-1";
        description.textContent =
            (course.duration || "Duration not specified") +
            " • " +
            (course.level || "Level not specified");

        card.append(title, description);

        card.addEventListener("click", function () {
            printLine("Opening course details: " + course.name);
            showCourseDetails(course);
        });

        output.appendChild(card);
    }

    // Course categories
    function showCategories() {
        printHeading("Available Course Categories:");

        courseCategories.forEach(function (category) {
            const button = document.createElement("button");

            button.type = "button";
            button.className =
                "block w-full text-left p-3 rounded-xl " +
                "border border-slate-700 bg-slate-950 " +
                "hover:border-emerald-500 hover:text-white " +
                "transition-colors mb-2";

            button.textContent = "› " + category.title;

            button.addEventListener("click", function () {
                showCourses(category.id);
            });

            output.appendChild(button);
        });

        printLine(
            "Select a category to explore its courses.",
            "text-slate-400"
        );

        scrollOutput();
    }

    // Category ke courses
    function showCourses(categoryId) {
        const search = String(categoryId).trim().toLowerCase();

        const category = courseCategories.find(function (item) {
            return (
                item.id.toLowerCase() === search ||
                item.title.toLowerCase() === search
            );
        });

        if (!category) {
            printLine(
                "Category not found. Type 'courses' to see categories.",
                "text-amber-400"
            );
            return;
        }

        const categoryCourses = courses.filter(function (course) {
            return course.category === category.id;
        });

        printHeading(category.title);

        printLine(
            categoryCourses.length +
            " courses available. Click a course to view its details.",
            "text-slate-400"
        );

        if (!categoryCourses.length) {
            printLine(
                "No courses are currently listed in this category.",
                "text-amber-400"
            );
            return;
        }

        categoryCourses.forEach(printCourseCard);
        scrollOutput();
    }

    // Terminal commands
    function runCommand(rawCommand) {
        const command = rawCommand.trim();

        if (!command) return;

        printLine("$ " + command, "text-white");

        const normalized = command.toLowerCase();

        if (normalized === "help") {
            printHeading("Available Commands");
            printLine("help    - Show available commands");
            printLine("courses - Browse course categories");
            printLine("clear   - Clear terminal output");
            printLine("contact - Institute contact information");
            printLine("home    - Scroll to homepage");
            printLine("Type a category name to view its courses.");
            return;
        }

        if (normalized === "clear") {
            output.replaceChildren();
            printLine("Terminal cleared.");
            return;
        }

        if (normalized === "courses") {
            showCategories();
            return;
        }

        if (normalized === "contact") {
            printHeading("Good Luck Computer Classes");
            printLine("Location: Near Muslim Library Square, Bhandara");
            printLine("Visit the Contact or Admission Enquiry section.");
            return;
        }

        if (normalized === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const matchedCategory = courseCategories.find(function (category) {
            return (
                category.id.toLowerCase() === normalized ||
                category.title.toLowerCase() === normalized
            );
        });

        if (matchedCategory) {
            showCourses(matchedCategory.id);
            return;
        }

        // Course ka naam type karne par bhi details kholen
        const matchedCourse = courses.find(function (course) {
            return course.name.toLowerCase() === normalized;
        });

        if (matchedCourse) {
            showCourseDetails(matchedCourse);
            return;
        }

        printLine(
            "Command not recognized. Type 'help' or 'courses'.",
            "text-amber-400"
        );
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const command = input.value;
        input.value = "";

        runCommand(command);
    });
});
/* Playground Code Editor Engine */
const codeTemplates = {
    html: `<div style="padding: 20px; font-family: sans-serif; text-align: center; background: #eef2ff; border-radius: 12px;">
  <h2 style="color: #4f46e5;">Good Luck Computer Classes</h2>
  <p>Learn quiz, Typing & Coding in Bhandara!</p>
</div>`,
    cpp: `// C++ Program Example
#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to Pravin Sir's Coding Lab in Bhandara!" << endl;
    return 0;
}`,
    python: `# Python Program Example
student_name = "Rahul"
marks = 88

if marks >= 75:
    print(f"Congratulations {student_name}! You scored Grade A+.")
else:
    print("Keep practicing!")`
};

function loadCodeTemplate() {
    const val = document.getElementById('code-template-select').value;
    document.getElementById('code-editor-input').value = codeTemplates[val] || codeTemplates.html;
}

function runCodePlayground() {
    const code = document.getElementById('code-editor-input').value;
    const container = document.getElementById('code-output-frame-container');
    const val = document.getElementById('code-template-select').value;

    if (val === 'html') {
        container.innerHTML = `<iframe id="code-preview-iframe" class="w-full h-full min-h-[220px] border-0"></iframe>`;
        const iframe = document.getElementById('code-preview-iframe');
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(code);
        doc.close();
    } else {
        container.innerHTML = `<pre class="text-emerald-400 font-code leading-relaxed">[Output Terminal Simulation]\nRunning script...\n\n> Program Executed Successfully!\n> Output generated based on code logic.</pre>`;
    }
    addScore(20, 'Code Playground Executed');
}

function clearCodeOutput() {
    document.getElementById('code-output-frame-container').innerHTML = `<div class="text-slate-500 text-center py-12">Click "Run Code Preview" to render output...</div>`;
}

// Initialize defaults on DOM Ready
window.addEventListener('DOMContentLoaded', () => {
    loadCodeTemplate();
    resetTypingTest();
    initRandomQuiz();
});

/* Responsive navigation drawer helpers */
function closeNavigationMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-btn');
    if (menu) menu.classList.add('hidden');
    if (button) {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Open Navigation Menu');
        button.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.addEventListener('click', function () {
        const isOpening = menu.classList.contains('hidden');
        menu.classList.toggle('hidden', !isOpening);
        menuButton.setAttribute('aria-expanded', String(isOpening));
        menuButton.setAttribute('aria-label', isOpening ? 'Close Navigation Menu' : 'Open Navigation Menu');
        menuButton.innerHTML = isOpening
            ? '<i class="fa-solid fa-xmark text-xl"></i>'
            : '<i class="fa-solid fa-bars text-xl"></i>';
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigationMenu));
});
