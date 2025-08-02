const jobList = [
  {
    id: 1,
    salary: 1200,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full-time",
    posted: "2 days ago",
    description: `
      We are looking for a passionate Frontend Developer to join our team. 
      You’ll work on building modern, performant web applications using React, 
      TypeScript, and modern tooling.

      Responsibilities:
      - Develop UI components
      - Collaborate with designers and backend developers
      - Ensure high performance and responsiveness
    `,
    requirements: [
      "2+ years of experience with React",
      "Strong CSS and JavaScript fundamentals",
      "Familiarity with Git and Agile development",
      "Experience with responsive web design",
    ],
  },
  {
    id: 2,
    salary: 1200,
    title: "Backend Engineer",
    company: "CloudOps Inc.",
    location: "San Francisco, CA",
    type: "Contract",
    posted: "1 week ago",
    description: `
      As a Backend Engineer at CloudOps Inc., you'll be responsible for building and maintaining the server-side infrastructure for our cloud applications. 
      You will work with Python, Node.js, and AWS to ensure the stability and scalability of our services.

      Responsibilities:
      - Develop server-side logic and APIs
      - Integrate third-party services
      - Maintain and optimize cloud infrastructure
    `,
    requirements: [
      "2+ years of experience with Node.js or Python",
      "Strong knowledge of database systems (SQL and NoSQL)",
      "Experience with cloud platforms like AWS or GCP",
      "Familiarity with CI/CD pipelines",
    ],
  },
  {
    id: 3,
    salary: 1200,
    title: "UI/UX Designer",
    company: "PixelPerfect",
    location: "Berlin, Germany",
    type: "Part-time",
    posted: "3 days ago",
    description: `
      PixelPerfect is looking for a talented UI/UX Designer to join our team. You'll be responsible for designing visually appealing and user-friendly interfaces.
      Experience with Figma, Adobe XD, and prototyping tools is required.

      Responsibilities:
      - Create high-fidelity mockups and prototypes
      - Collaborate with developers to ensure a smooth handoff
      - Conduct user testing and iterate designs
    `,
    requirements: [
      "Proven experience as a UI/UX Designer or similar role",
      "Expertise in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating design skills",
      "Experience with user testing and usability studies",
    ],
  },
  {
    id: 4,
    salary: 1200,
    title: "DevOps Specialist",
    company: "DeployNow",
    location: "Austin, TX",
    type: "Full-time",
    posted: "4 days ago",
    description: `
      As a DevOps Specialist at DeployNow, you'll oversee the automation of the deployment process, ensuring a smooth CI/CD pipeline. 
      You'll be working closely with developers to implement infrastructure as code and manage cloud environments.

      Responsibilities:
      - Automate infrastructure provisioning and deployment
      - Manage cloud environments and infrastructure as code
      - Ensure high availability and scalability of systems
    `,
    requirements: [
      "Experience with AWS, GCP, or Azure cloud platforms",
      "Strong knowledge of containerization (Docker, Kubernetes)",
      "Experience with CI/CD tools like Jenkins or GitLab CI",
      "Familiarity with infrastructure as code tools (Terraform, Ansible)",
    ],
  },
  {
    id: 5,
    salary: 1200,
    title: "Mobile App Developer",
    company: "AppVenture",
    location: "Toronto, Canada",
    type: "Full-time",
    posted: "5 days ago",
    description: `
      AppVenture is seeking a Mobile App Developer with experience in iOS and Android development. You will work on innovative mobile applications, 
      leveraging your expertise in Swift, Kotlin, and cross-platform tools like Flutter or React Native.

      Responsibilities:
      - Develop and maintain iOS and Android applications
      - Write clean, efficient, and maintainable code
      - Work closely with product and design teams to implement new features
    `,
    requirements: [
      "Experience with iOS (Swift) and Android (Kotlin) development",
      "Familiarity with cross-platform development (Flutter, React Native)",
      "Strong understanding of mobile design principles",
      "Experience with REST APIs and third-party libraries",
    ],
  },
  {
    id: 6,
    salary: 1200,
    title: "Product Manager",
    company: "Visionary Labs",
    location: "New York, NY",
    type: "Full-time",
    posted: "1 week ago",
    description: `
      As a Product Manager at Visionary Labs, you will lead product strategy and work cross-functionally with engineering, design, and marketing teams.
      You'll drive the product roadmap, define features, and be the voice of the customer.

      Responsibilities:
      - Define product vision and strategy
      - Lead cross-functional teams to deliver product features
      - Analyze market trends and customer feedback to inform decisions
    `,
    requirements: [
      "Proven experience as a Product Manager or similar role",
      "Strong communication and leadership skills",
      "Experience with Agile development methodologies",
      "Ability to analyze data and make data-driven decisions",
    ],
  },
  {
    id: 7,
    salary: 1200,
    title: "Machine Learning Engineer",
    company: "AI Horizon",
    location: "Remote",
    type: "Contract",
    posted: "6 days ago",
    description: `
      AI Horizon is looking for a Machine Learning Engineer to develop and deploy machine learning models. You’ll work on cutting-edge research and 
      practical applications of machine learning and AI, focusing on scalability and performance.

      Responsibilities:
      - Build and deploy machine learning models
      - Work with large datasets and data pipelines
      - Implement machine learning algorithms in production environments
    `,
    requirements: [
      "Experience with machine learning frameworks like TensorFlow or PyTorch",
      "Strong knowledge of data structures and algorithms",
      "Experience with Python and libraries like NumPy, Pandas, and Scikit-learn",
      "Ability to work with large datasets and distributed systems",
    ],
  },
];

export default jobList;
