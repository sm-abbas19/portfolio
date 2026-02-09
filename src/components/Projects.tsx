import { projects } from "@/data/projects";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--navy)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--lightest-slate)] lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {featuredProjects.map((project) => (
            <li key={project.id} className="mb-12">
              <div className="project-card group relative gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 rounded-lg p-4 -mx-4">
                <div className="z-10">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-[var(--lightest-slate)] hover:text-[var(--green)] focus-visible:text-[var(--green)] group/link text-base"
                      href={project.url}
                      target={project.url !== "#" ? "_blank" : undefined}
                      rel={project.url !== "#" ? "noreferrer noopener" : undefined}
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className="project-title">
                        {project.title}
                        {project.inProgress && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-yellow-400/10 px-2 py-0.5 text-xs font-medium text-yellow-600 dark:text-yellow-300">
                            In Progress
                          </span>
                        )}
                        {project.url !== "#" && (
                          <ArrowUpRight
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          />
                        )}
                      </span>
                    </a>
                  </h3>
                  {project.description && (
                    <p className="mt-2 text-sm leading-normal text-[var(--slate)]">
                      {project.description}
                    </p>
                  )}
                  {project.stars && (
                    <p className="mt-2 text-sm leading-normal text-[var(--slate)]">
                      ⭐ {project.stars.toLocaleString()}
                    </p>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <div className="skill-tag flex items-center rounded-full bg-[var(--green-tint)] px-3 py-1 text-xs font-medium leading-5 text-[var(--green)]">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-[var(--lightest-slate)] hover:text-[var(--green)] focus-visible:text-[var(--green)] group"
            href="https://github.com/sm-abbas19?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-[var(--green)] motion-reduce:transition-none">
                View Full Project Archive
              </span>
              <span className="whitespace-nowrap">
                <ArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}