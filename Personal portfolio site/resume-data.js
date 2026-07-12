/* =====================================================================
   RESUME DATA — SIRF YE FILE EDIT KAREIN
   Jab resume update ho, bas neeche wale values change karein.
   index.html, script.js, style.css ko haath nahi lagana.
   ===================================================================== */

const resumeData = {

  // ---------- BASIC INFO ----------
  name: "Mahrukh Owais",
  role: "Robotics & Intelligent Systems Engineer",
  tagline: "Robotics & Intelligent Systems student building at the intersection of automation, AI, and systems engineering.",
  about: "Motivated undergraduate in Robotics & Intelligent Systems at Bahria University with hands-on expertise in kinematics, path planning, and automation. Currently interning with DecodeLabs on advanced robotics projects. Proficient in ROS 2, Gazebo, Python, C++, and MATLAB, with additional cross-functional experience in sales, client relations, and digital/technical skills.",

  // ---------- HERO SLIDESHOW ----------
  // Ye cards hero ke right side mein auto-rotate hoti hain.
  heroSlides: [
    { icon: "arm", title: "Robotics Engineering", desc: "6-DOF arm kinematics, path planning & motion control" },
    { icon: "brain", title: "Artificial Intelligence", desc: "Computer vision, NLP, and machine learning models" },
    { icon: "gear", title: "Industrial Automation", desc: "PLC logic, FSMs, and safety-critical control systems" },
    { icon: "code", title: "Full-Stack Builder", desc: "Shipping projects end-to-end, from idea to deployment" }
  ],

  // ---------- CONTACT ----------
  contact: {
    email: "maharukhh1@gmail.com",
    github: "https://github.com/maharukhh",
    linkedin: "https://linkedin.com/in/mahrukh-owais-49a8b7315"
  },

  // ---------- EXPERIENCE & EDUCATION ----------
  timeline: [
    {
      type: "Experience",
      title: "Artificial Intelligence (AI) Intern",
      place: "Decode Labs",
      duration: "7 Jul 2026 — 7 Aug 2026 · Remote",
      desc: "AI track internship focused on assigned projects, milestone delivery, and mentor-led sessions. Awarded a verified Certificate of Completion and Letter of Recommendation on successful completion."
    },
    {
      type: "Experience",
      title: "Online Internship — Robotics & Automation",
      place: "DecodeLabs",
      duration: "Jun 2026 — Jul 2026 (Ongoing)",
      desc: "6-DOF robotic arm kinematics & inverse kinematics, path planning & trajectory generation, ROS 2 and Gazebo simulation with collision detection, motion control & hardware interfaces."
    },
    {
      type: "Experience",
      title: "Sales Agent — Real Estate & Property Services",
      place: "4 Direction Developments, Dubai",
      duration: "Jan 2026 — Jun 2026",
      desc: "Client communication & relationship management, lead management & sales coordination."
    },
    {
      type: "Experience",
      title: "Lead Generator — Sales & Business Development",
      place: "Forever Dream Achievers",
      duration: "Nov 2025 — Jan 2026",
      desc: "Client prospecting, lead qualification, record management."
    },
    {
      type: "Education",
      title: "B.S. Robotics & Intelligent Systems",
      place: "Bahria University, Karachi",
      duration: "2024 — 2028",
      desc: "Undergraduate degree focused on robotics, automation, and intelligent systems."
    },
    {
      type: "Education",
      title: "HSC — Pre-Engineering",
      place: "Karachi Board of Intermediate Education",
      duration: "2023 — 2024",
      desc: ""
    },
    {
      type: "Education",
      title: "SSC — Class IX–X",
      place: "Karachi Board of Secondary Education",
      duration: "2021 — 2022",
      desc: ""
    }
  ],

  // ---------- PROJECTS ----------
  // GitHub link har card pe apne profile se generic diya hai — jab har
  // project ko alag repo mein upload kar dein, to us card ka "code" link
  // us specific repo ke URL se replace kar dein.
  projects: [
    {
      name: "Robotic Arm Kinematics & Path Planning",
      category: "Robotics Internship",
      desc: "6-DOF robotic arm simulation: forward/inverse kinematics via damped least squares, plus collision-aware trajectory generation using quintic time-scaling.",
      tags: ["Python", "NumPy", "Kinematics", "Matplotlib"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Autonomous Mobile Robot Navigation",
      category: "Robotics Internship",
      desc: "Simulated LiDAR builds a 2D occupancy grid in real time; A* pathfinding plans routes and dynamically re-plans when unexpected obstacles appear.",
      tags: ["Python", "A* Search", "SLAM", "LiDAR Simulation"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "PLC-Based Conveyor Sorting System",
      category: "Robotics Internship",
      desc: "Industrial control logic for a sorting conveyor: full I/O mapping, a finite state machine, debounce/edge-detection, and hardwired E-Stop safety interlocks.",
      tags: ["Python", "PLC Logic", "FSM", "Automation"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Rule-Based AI Chatbot",
      category: "AI Internship",
      desc: "Dictionary-driven chatbot with O(1) intent lookup (no if-elif ladder), two-stage intent mapping, and a continuous conversation loop.",
      tags: ["Python", "NLP Basics", "Dictionaries"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Iris Flower Classification",
      category: "AI Internship",
      desc: "K-Nearest Neighbors classifier on the Iris dataset following the Input→Process→Output framework, with confusion matrix and accuracy evaluation.",
      tags: ["Python", "scikit-learn", "KNN"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Tech Stack Recommender",
      category: "AI Internship",
      desc: "Content-based recommendation engine that matches a user's skills to the best-fit job roles using TF-IDF vectorization and cosine similarity.",
      tags: ["Python", "scikit-learn", "TF-IDF"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Building the Machine's Optic Nerve",
      category: "AI Internship",
      desc: "Computer vision pipeline with two paths: OCR text extraction (OpenCV + Tesseract) and object detection with a MobileNet-SSD deep learning model, both gated at ≥80% confidence.",
      tags: ["Python", "OpenCV", "OCR", "Object Detection"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "This Portfolio Website",
      category: "Personal Project",
      desc: "A fully data-driven personal site — one file holds all resume data and the entire page renders and updates from it automatically.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://maharukhh.github.io",
      code: "https://github.com/maharukhh/maharukhh.github.io"
    }
  ],

  // ---------- SKILLS (grouped by category) ----------
  skillGroups: [
    { category: "Programming", items: ["Python (NumPy, SciPy)", "C++", "MATLAB"] },
    { category: "Robotics", items: ["ROS 2", "Gazebo", "Inverse/Forward Kinematics", "Path Planning", "Collision Detection", "6-DOF Arm Control"] },
    { category: "CAD / Design", items: ["SolidWorks", "AutoCAD", "Multisim", "Proteus", "Xilinx"] },
    { category: "Embedded", items: ["Arduino", "Real-time Systems", "Sensor Integration", "Motor Control"] },
    { category: "AI / ML", items: ["Neural Networks", "Computer Vision (OpenCV)", "Prompt Engineering"] },
    { category: "Software & Tools", items: ["Git/GitHub", "Linux/Ubuntu", "LaTeX"] },
    { category: "Web / Digital", items: ["WordPress", "AI-Assisted Website Building", "Digital Design", "Video Editing"] },
    { category: "Business & Sales", items: ["Lead Generation", "Client Relations", "International Sales", "Real Estate", "Strategic Communication"] },
    { category: "Marketing", items: ["Social Media Marketing", "Freelancing (Fiverr)", "Content Creation"] },
    { category: "Core Competencies", items: ["Communication", "Problem Solving", "Critical Thinking", "Adaptability", "Teamwork", "Leadership", "Attention to Detail", "Analytical Thinking"] },
    { category: "Other", items: ["Data Entry", "Organizational Skills", "Fast Learner"] }
  ],

  // ---------- CERTIFICATIONS ----------
  certifications: [
    { name: "Technology Job Simulation", issuer: "Deloitte (via Forage)", date: "Jul 2026" },
    { name: "Python Developer", issuer: "SoloLearn", date: "Jul 2026" },
    { name: "Prompt Engineering", issuer: "SoloLearn", date: "Jul 2026" },
    { name: "Fiverr & Freelancing Skills", issuer: "Learning With Earning", date: "Feb 2026" },
    { name: "Social Media Sales Marketing Specialist", issuer: "Learning With Earning", date: "Feb 2026" },
    { name: "WordPress & AI Website Building", issuer: "Learning With Earning", date: "Feb 2026" }
  ],

  // ---------- LANGUAGES ----------
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Native" },
    { name: "Turkish", level: "Intermediate (Learning)" }
  ]

};
