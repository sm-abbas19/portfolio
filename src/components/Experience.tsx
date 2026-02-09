import { experiences } from "@/data/experience";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--navy)]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--lightest-slate)] lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp) => (
            <li key={exp.id} className="mb-12">
              <div className="experience-card group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 rounded-lg p-4 -mx-4">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--slate)] sm:col-span-2"
                  aria-label={exp.dateRange}
                >
                  {exp.dateRange}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-[var(--lightest-slate)]">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-[var(--lightest-slate)] hover:text-[var(--green)] focus-visible:text-[var(--green)] group/link text-base"
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ArrowUpRight
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    {exp.positions && (
                      <div>
                        {exp.positions.map((position, index) => (
                          <div
                            key={index}
                            className="text-[var(--slate)] text-sm"
                            aria-hidden="true"
                          >
                            {position}
                          </div>
                        ))}
                      </div>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-[var(--slate)]">
                    {exp.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.skills.map((skill) => (
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
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-[var(--green)] motion-reduce:transition-none">
                View Full Resume
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