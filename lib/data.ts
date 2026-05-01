import { Home, Instagram, Github, Linkedin, Twitter, Mail } from "lucide-react"

export const experienceData = [
  {
    title: "MySkill",
    logo: "/download (2).png",
    bgColor: "bg-white",
    type: "Project",
    role: "Frontend Developer",
    period: "January 2023 - Present",
    delay: "0.1s",
    description:
      "Developing and maintaining web applications using React and Next.js. Implementing responsive designs and ensuring cross-browser compatibility. Collaborating with the design team to create intuitive user interfaces. Optimizing applications for maximum speed and scalability.",
  },
  {
    logo: "/placeholder-logo.png",
    bgColor: "bg-green-600",
    title: "Freelance",
    type: "Work",
    role: "UI/UX Designer & Frontend Developer",
    period: "June 2021 - December 2022",
    delay: "0.2s",
    description:
      "Designed and developed websites for various clients including small businesses and startups. Created wireframes, mockups, and prototypes using Figma and Adobe XD. Implemented designs using React, Vue.js, and various CSS frameworks.",
  },
  {
    title: "Quondam",
    logo: "/quondam-logo.png",
    bgColor: "bg-white",
    type: "Project",
    role: "Web Development Instructor",
    period: "March 2021 - May 2022",
    delay: "0.3s",
    description:
      "Developed and managed an innovative online learning platform, including interactive courses, student progress tracking, and secure e-commerce functionalities for educational resources.",
  },
  {
    title: "Rumah Kinclong",
    logo: "/Tangkapan Layar 2025-06-13 pukul 16.43.20.png",
    logoClass: "-translate-x-4",
    bgColor: "bg-white",
    type: "Project",
    role: "Frontend Developer",
    period: "October 2020 - February 2021",
    delay: "0.4s",
    description:
      "Developed a mobile application for booking home cleaning services with real-time scheduling and service tracking. Implemented user-friendly interfaces and secure payment integrations.",
  },
  {
    title: "Rumbeldirgantara",
    logo: "/Cropped_Image.png",
    bgColor: "bg-white",
    type: "Work",
    role: "Fullstack Developer",
    period: "August 2022 - Present",
    delay: "0.1s",
    description:
      "Developed and maintained a tutoring website for elementary school students focusing on simplicity, responsiveness, and easy navigation for parents. Visit their website at rumbeldirgantara.com.",
  },
  {
    title: "PT. Cakra Bahana Sakti",
    logo: "/logo-cbs.png",
    bgColor: "bg-white",
    type: "Work",
    role: "Fullstack Developer",
    period: "2025",
    delay: "0.5s",
    description:
      "Developed and maintained the company profile website for PT. Cakra Bahana Sakti, covering landing page, product catalog, services, contact, and company information.",
  },
  {
    title: "PT Ontiyus Karya Mulia",
    logo: "/ontiyus-logo-full.png",
    bgColor: "bg-white",
    type: "Project",
    role: "Fullstack Developer",
    period: "2026",
    delay: "0.8s",
    description:
      "Developed a comprehensive information portal and internal management system for PT Ontiyus Karya Mulia in collaboration with Universitas Gadjah Mada (UGM).",
  },
  {
    title: "CIMEDs Portal (Concept)",
    logo: "/placeholder-logo.png",
    bgColor: "bg-blue-600",
    type: "Project",
    role: "Fullstack Developer",
    period: "2025-2026",
    delay: "0.9s",
    description:
      "Developed a medical information system portal (CIMEDs) for health data integration in collaboration with Universitas Gadjah Mada (UGM). Built with TypeScript.",
  },
]

export const skillsData = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP", "Dart", "C++"],
  frameworks: ["React", "Next.js", "Angular", "Vue.js", "Flutter", "Ionic", "Capacitor", "Laravel", "Tailwind CSS", "Bootstrap", "Express.js"],
  tools: ["Git", "GitHub", "Figma", "Adobe XD", "VS Code", "Vite", "Webpack", "Vercel", "Netlify", "Firebase", "Node.js", "ESP32", "Fastlane"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore"],
}

export const galleryData = [
  {
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=1000",
    title: "Deep Focus Sessions",
    alt: "Developer desk at night"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    title: "Wireframing Concepts",
    alt: "Notepad with UI sketches"
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    title: "Architecture Design",
    alt: "Nexus Analytics Dashboard Mockup"
  }
]

export const projectsData = [
  {
    title: "Nexus Analytics Dashboard",
    description: "A high-performance analytics platform with real-time data visualization and futuristic dark mode UI.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    isVideo: false,
    tags: ["React", "D3.js", "Next.js", "Tailwind"],
    link: "#",
    github: "#",
    category: "web",
  },
  {
    title: "Rumah Kinclong",
    description: "Mobile application for booking home cleaning services with real-time scheduling.",
    video: "/videos/cleaning-app.mp4",
    isVideo: true,
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#",
    category: "mobile",
  },
  {
    title: "Quondam E-commerce",
    description: "Modern e-commerce concept with Figma, prioritizing smooth navigation.",
    video: "/videos/marketplace-app.mp4",
    isVideo: true,
    tags: ["Figma", "UI/UX", "E-commerce"],
    link: "#",
    github: "#",
    category: "design",
  },
  {
    title: "Rumbeldirgantara",
    description: "Tutoring website for elementary school students. Visit rumbeldirgantara.com.",
    video: "/videos/task-management.mov",
    isVideo: true,
    tags: ["Vue.js", "Firebase", "Vuex"],
    link: "https://rumbeldirgantara.com",
    github: "https://github.com/arapcihuy/jarialjabar",
    category: "web",
  },
  {
    title: "PT. Cakra Bahana Sakti",
    description: "Company profile website for PT. Cakra Bahana Sakti.",
    video: "/videos/cbs-demo.mp4",
    isVideo: true,
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://www.cakrabahanasakti.com/",
    github: "#",
    category: "web",
  },
  {
    title: "PT Ontiyus Karya Mulia",
    description: "Information portal and internal management system for PT Ontiyus Karya Mulia.",
    video: "/videos/pt-ontiyus.mp4",
    isVideo: true,
    tags: ["Next.js", "React", "TypeScript"],
    link: "https://pt-ontiyus-karya-mulia.vercel.app",
    github: "https://github.com/arapcihuy/pt-ontiyus-karya-mulia",
    category: "web",
  },
  {
    title: "CIMEDs Portal (Concept)",
    description: "Medical information system portal (CIMEDs) developed with UGM.",
    video: "/videos/cimeds-portal.mp4",
    isVideo: true,
    tags: ["TypeScript", "Medical System", "UGM"],
    link: "#",
    github: "https://github.com/arapcihuy/CIMEDs-portal",
    category: "web",
  },
]

export const educationData = [
  {
    title: "Bangkit Academy",
    logo: "/channels4_profile.jpg",
    period: "February 2023 - July 2023",
    role: "Cloud Computing",
    grade: "Grade A",
    description: "Graduated with Distinction (Grade A) from the prestigious Google-led Bangkit Academy. Specialized in Cloud Computing, mastering Google Cloud Platform (GCP) architecture, deploying scalable web applications, and implementing robust backend infrastructure for modern systems.",
    delay: "0s",
    type: "Certification",
  },
  {
    title: "Cybersecurity Essentials",
    logo: "/Cisco_logo_blue_2016.svg.png",
    period: "July 2024",
    role: "Cisco Networking Academy",
    description: "Completed an intensive Cisco Networking Academy certification program. Acquired hands-on knowledge in network defense, cryptography principles, and identifying system vulnerabilities to secure IT infrastructure against modern cyber threats.",
    delay: "0.05s",
    type: "Certification",
    link: "/certificates/cybersecurity-essentials.pdf",
  },
  {
    title: "Universitas Islam Indonesia",
    logo: "/1279831.png",
    period: "2021 - Current",
    role: "Computer Science",
    degree: "Bachelor's Degree",
    description: "Pursuing a Bachelor's Degree in Computer Science with a strong focus on Software Engineering, Web Technologies, and UI/UX Design. Actively involved in building innovative fullstack projects and participating in academic technology research.",
    delay: "0.1s",
    type: "University",
  },
  {
    title: "Merdeka Siber",
    logo: "/logo-merdeka-siber.png",
    period: "2024",
    role: "Cybersecurity Talent",
    description: "Participated in the national cybersecurity talent development program. Trained in practical penetration testing, incident response, and web application security auditing, adhering to industry standards for protecting digital assets and infrastructure.",
    delay: "0.15s",
    type: "Certification",
    link: "/certificates/merdeka-siber.pdf",
  },
]

export const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/r.asyidahmad/" },
  { icon: Github, label: "GitHub", href: "https://github.com/arapcihuy" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rasyid-ahmad-840b8b250/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:rasyidahmad180@gmail.com" },
]
