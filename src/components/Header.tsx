"use client";

import { Github, Linkedin } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "techstack", label: "TECH STACK" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/sm-abbas19", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/smabbas-io/", label: "LinkedIn" },
];

export default function Header({ activeSection }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-[#ccd6f6] sm:text-5xl">
          <a href="/">Muhammad Abbas</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-[#ccd6f6] sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-[#8892b0]">
          I build intelligent software systems with a focus on the intersection of Backend Engineering and Applied AI; specifically leveraging Computer Vision and LLM Agents to solve real-world problems.
        </p>

        {/* Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link group flex items-center py-3 ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-[#8892b0] transition-all group-hover:w-16 group-hover:bg-[#ccd6f6] group-focus-visible:w-16 group-focus-visible:bg-[#ccd6f6]"></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${
                      activeSection === item.id
                        ? "text-[#ccd6f6]"
                        : "text-[#8892b0]"
                    } group-hover:text-[#ccd6f6] group-focus-visible:text-[#ccd6f6]`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        {socialLinks.map((social) => (
          <li key={social.label} className="text-xs">
            <a
              className="social-link block p-1 text-[#8892b0] hover:text-[#64ffda] transition-all hover:-translate-y-1"
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.label} (opens in a new tab)`}
            >
              <social.icon size={20} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
