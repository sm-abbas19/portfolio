"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, FileText, Sun, Moon } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" }
];

const socialLinks = [
  { icon: Github, href: "https://github.com/sm-abbas19", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/smabbas-io/", label: "LinkedIn" },
  { icon: FileText, href: "/resume.pdf", label: "Resume" },
];

export default function Header({ activeSection }: HeaderProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    setIsDark(true);
  } else if (theme === 'light') {
    setIsDark(false);
  } else {
    // Default to system preference
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
}, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--lightest-slate)] sm:text-4xl">
          <a href="/">Syed Muhammad Abbas</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-[var(--lightest-slate)] sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-[var(--slate)]">
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
                  <span className="nav-indicator mr-4 h-px w-8 bg-[var(--slate)] transition-all group-hover:w-16 group-hover:bg-[var(--lightest-slate)] group-focus-visible:w-16 group-focus-visible:bg-[var(--lightest-slate)]"></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${
                      activeSection === item.id
                        ? "text-[var(--lightest-slate)]"
                        : "text-[var(--slate)]"
                    } group-hover:text-[var(--lightest-slate)] group-focus-visible:text-[var(--lightest-slate)]`}
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
              className="social-link block p-1 text-[var(--slate)] hover:text-[var(--green)] transition-all hover:-translate-y-1"
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.label} (opens in a new tab)`}
            >
              <social.icon size={20} />
            </a>
          </li>
        ))}
        <li className="text-xs">
          <button
            onClick={toggleTheme}
            className="block p-1 text-[var(--slate)] hover:text-[var(--green)] transition-all hover:-translate-y-1"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </li>
      </ul>
    </header>
  );
}