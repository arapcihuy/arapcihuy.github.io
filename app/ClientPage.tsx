"use client"

import Image from "next/image"
import { Home, Instagram, Github, Linkedin, Twitter, Mail, Sun, Moon, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

export default function ClientPage() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState<"all" | "web" | "mobile" | "design">("all")

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  if (!mounted) {
    return null
  }

  const experienceData = [
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
        "Designed and developed websites for various clients including small businesses and startups. Created wireframes, mockups, and prototypes using Figma and Adobe XD. Implemented designs using React, Vue.js, and various CSS frameworks. Maintained ongoing client relationships and provided technical support.",
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
      logoClass: "-translate-x-4", // posisi yang sebelumnya lebih center
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
        "Developed and maintained the company profile website for PT. Cakra Bahana Sakti, covering landing page, product catalog, services, contact, and company information. Responsible for both frontend and backend implementation, ensuring a modern, responsive design and optimal SEO. Collaborated closely with stakeholders to deliver scalable and maintainable solutions.",
    },
  ]

  const skillsData = {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP"],
    frameworks: ["React", "Next.js", "Vue.js", "Laravel", "Tailwind CSS", "Bootstrap"],
    tools: ["Git", "Figma", "Adobe XD", "VS Code", "Webpack", "Vercel", "Netlify"],
    databases: ["MySQL", "MongoDB", "Firebase"],
  }

  const projectsData = [
    {
      title: "Rumah Kinclong",
      description:
        "Developed a mobile application for booking home cleaning services with real-time scheduling and service tracking. Implemented user-friendly interfaces and secure payment integrations.",
      video: "/videos/cleaning-app.mp4",
      isVideo: true,
      tags: ["React Native", "Firebase", "Redux", "Stripe"],
      link: "#",
      github: "#",
      category: "mobile",
    },
    {
      title: "Quondam E-commerce Website Design",
      description:
        "Created a modern, user-friendly e-commerce concept with Figma, prioritizing smooth navigation and efficient product search.",
      video: "/videos/marketplace-app.mp4",
      isVideo: true,
      tags: ["Figma", "UI/UX", "E-commerce"],
      link: "#",
      github: "#",
      category: "web",
    },
    {
      title: "Rumbeldirgantara",
      description:
        "Developed and maintained a tutoring website for elementary school students focusing on simplicity, responsiveness, and easy navigation for parents. Visit their website at rumbeldirgantara.com.",
      video: "/videos/task-management.mov",
      isVideo: true,
      tags: ["Vue.js", "Firebase", "Vuex"],
      link: "https://rumbeldirgantara.com",
      github: "https://github.com/arapcihuy/jarialjabar",
      category: "web",
    },
    {
      title: "PT. Cakra Bahana Sakti Website",
      description:
        "Company profile website for PT. Cakra Bahana Sakti, a leading provider of substation accessories and industrial engineering solutions. Features include landing page, product catalog, services, contact, and company information. Designed for modern, responsive, and user-friendly experience.",
      video: "/videos/cbs-demo.mp4", // Pastikan nama file sesuai dengan file video Anda
      isVideo: true,
      tags: ["Next.js", "React", "Tailwind CSS", "Company Profile"],
      link: "https://www.cakrabahanasakti.com/",
      github: "#", // Ganti jika ada repo publik
      category: "web",
    },
  ]

  const filteredProjects =
    activeTab === "all" ? projectsData : projectsData.filter((project) => project.category === activeTab)

  const educationData = [
    {
      title: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      logo: "/channels4_profile.jpg",
      period: "February 2023 - July 2023",
      role: "Cloud Computing",
      grade: "Grade A",
      description:
        "Participated in the Bangkit Academy program, focusing on Cloud Computing. Gained expertise in Google Cloud Platform services, including data processing, machine learning, and infrastructure management. Collaborated on projects and achieved a Grade A for performance.",
      delay: "0s",
      type: "Certification"
    },
    {
      title: "Universitas Islam Indonesia",
      logo: "/1279831.png",
      period: "2021 - Current",
      role: "Computer Science",
      degree: "Bachelor's Degree",
      description:
        "Graduated with a Bachelor's degree in Computer Science with focus on web technologies and user interface design. Completed thesis on \"Improving User Experience in Web Applications Through Modern Frontend Frameworks\". Participated in various coding competitions and hackathons. Served as a teaching assistant for Web Programming courses.",
      delay: "0.1s",
      type: "University"
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Theme toggle button */}
      <div className="fixed top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <div className="relative w-5 h-5">
            <Sun
              className={`w-5 h-5 text-gray-600 dark:text-gray-400 absolute transition-all duration-300 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
            />
            <Moon
              className={`w-5 h-5 text-gray-600 dark:text-gray-400 absolute transition-all duration-300 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
            />
          </div>
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12 animate-fade-in">
          <div className="flex-1 pr-8">
            <h1 className="text-5xl font-bold text-black dark:text-white mb-3 transition-colors duration-300">
              Hi, I'm Rasyid <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Frontend Developer - UI/UX Designer. Passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-800 transition-all duration-300 hover:ring-gray-200 dark:hover:ring-gray-700 hover:scale-105">
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                width={96}
                height={96}
                className="w-full h-full object-cover transition-transform duration-300 scale-125 hover:scale-150"
                priority
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">About</h2>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3 transition-colors duration-300">
            <p>
              I'm a Frontend Developer with{" "}
              <a href="#projects" className="underline decoration-2 underline-offset-2 decoration-black dark:decoration-white transition-colors duration-300">
                3+ years of experience specializing in React and modern JavaScript frameworks
              </a>{" "}
              to build responsive and interactive web applications. My toolkit includes React, Next.js, TypeScript, and
              various CSS frameworks including Tailwind CSS. I enjoy solving complex UI challenges and creating
              intuitive user experiences.{" "}
              <a href="#projects" className="underline decoration-2 underline-offset-2 decoration-black dark:decoration-white transition-colors duration-300">
                I've worked on various projects ranging from e-commerce platforms to company portfolios and educational
                websites
              </a>{" "}
              that demonstrate my ability to deliver high-quality solutions. I'm always eager to learn new technologies
              and improve my skills.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 transition-colors duration-300">
            Skills
          </h2>

          <div className="space-y-6">
            {/* Languages */}
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-medium text-black dark:text-white mb-3 transition-colors duration-300">
                Languages
              </h3>
              <div className="flex flex-wrap gap-1">
                {skillsData.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-medium text-black dark:text-white mb-3 transition-colors duration-300">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-1">
                {skillsData.frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-lg font-medium text-black dark:text-white mb-3 transition-colors duration-300">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-1">
                {skillsData.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-lg font-medium text-black dark:text-white mb-3 transition-colors duration-300">
                Databases
              </h3>
              <div className="flex flex-wrap gap-1">
                {skillsData.databases.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 transition-colors duration-300">
            My Projects
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["all", "web", "mobile", "design"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "all" | "web" | "mobile" | "design")}
                className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-white rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 animate-slide-up transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  {project.isVideo ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                    />
                  ) : (
                    <Image
                      src={"/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-black dark:text-black mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-900 mb-3 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work/Project Experience */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 transition-colors duration-300">
            Work/Project Experience
          </h2>

          <div className="space-y-4">
            {experienceData.map((item, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: item.delay }}>
                <div
                  className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg p-3 -m-3 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleExpanded(index)}
                >
                  <div
                    className={`w-16 h-16 ${item.bgColor || "bg-gray-200"} rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg ${item.title === "MySkill" || item.title === "Rumbeldirgantara" || item.title === "Rumah Kinclong" ? "bg-white border border-gray-300 overflow-hidden" : item.title === "Quondam" ? "overflow-hidden" : ""}`}
                  >
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`${item.title} Logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/placeholder.svg'; }}
                      />
                    ) : (
                      <span className="text-gray-700 font-medium text-base">{item.title.split(' ').map(w => w[0]).join('')}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-black dark:text-white transition-colors duration-300 flex items-center gap-2">
                            {item.title}
                            {/* Arrow that appears on hover and rotates when expanded */}
                            <span
                              className={`inline-flex items-center justify-center w-4 h-4 text-gray-400 dark:text-gray-500 transition-all duration-300 ${
                                expandedItems.includes(index)
                                  ? "opacity-100 rotate-90 text-gray-600 dark:text-gray-300"
                                  : "opacity-0 group-hover:opacity-100 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                              }`}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-transform duration-300"
                              >
                                <path
                                  d="M4 2L8 6L4 10"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </h3>
                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded transition-colors duration-300">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          {item.role}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500 ml-4 flex-shrink-0 transition-colors duration-300">
                        {item.period}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems.includes(index) ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-14 pr-3 pb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 transition-colors duration-300">
            Education
          </h2>

          <div className="space-y-4">
            {educationData.map((item, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: item.delay }}>
                <div
                  className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg p-3 -m-3 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleExpanded(index + 1000)} // Using large index to avoid conflict with experienceData
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg bg-white border border-gray-300`}
                  >
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`${item.title} Logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-gray-700 font-medium text-xl">{item.logo}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-black dark:text-white transition-colors duration-300 flex items-center gap-2">
                            {item.title}
                            <span
                              className={`inline-flex items-center justify-center w-4 h-4 text-gray-400 dark:text-gray-500 transition-all duration-300 ${
                                expandedItems.includes(index + 1000)
                                  ? "opacity-100 rotate-90 text-gray-600 dark:text-gray-300"
                                  : "opacity-0 group-hover:opacity-100 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                              }`}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-transform duration-300"
                              >
                                <path
                                  d="M4 2L8 6L4 10"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </h3>
                          {item.type && (
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded transition-colors duration-300">
                              {item.type}
                            </span>
                          )}
                        </div>
                        {item.role && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0.5 transition-colors duration-300">
                            {item.role}
                          </p>
                        )}
                        {item.grade && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                            {item.grade}
                          </p>
                        )}
                        {item.degree && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                            {item.degree}
                          </p>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500 ml-4 flex-shrink-0 transition-colors duration-300">
                        {item.period}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems.includes(index + 1000) ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-14 pr-3 pb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16 animate-slide-up text-center mx-auto max-w-3xl" style={{ animationDelay: "0.9s" }}>
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-black dark:bg-gray-800 dark:text-gray-300 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-4xl font-bold text-black dark:text-white mb-6 leading-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
            Want to chat? Just shoot me a dm with a direct question on{" "}
            <a
              href="https://www.instagram.com/r.asyidahmad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Instagram
            </a>
            {" "}and I'll respond whenever I can. I will ignore all soliciting.
          </p>
        </section>

        {/* Floating Navigation Bar */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-float">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-1">
              {[
                { icon: Home, label: "Home", href: "#" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/r.asyidahmad/" },
                { icon: Github, label: "GitHub", href: "https://github.com/arapcihuy" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rasyid-ahmad-840b8b250/" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                { icon: Mail, label: "Email", href: "mailto:rasyidahmad180@gmail.com" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 active:scale-95 group relative"
                  aria-label={item.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {item.label}
                  </div>
                </a>
              ))}

              {/* Theme toggle in floating bar */}
              <button
                onClick={toggleTheme}
                className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 active:scale-95 group relative"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  <Sun
                    className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
                  />
                  <Moon
                    className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
                  />
                </div>

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {isDark ? "Light mode" : "Dark mode"}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
