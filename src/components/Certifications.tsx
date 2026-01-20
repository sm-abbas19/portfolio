import { certifications } from "@/data/certifications";
import { Award, ArrowUpRight } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Certifications"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] lg:sr-only">
          Certifications
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {certifications.map((cert) => (
            <li key={cert.id} className="mb-6">
              <div className="experience-card group relative flex items-start gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 rounded-lg p-4 -mx-4">
                <div className="flex-shrink-0 mt-1">
                  <Award className="h-5 w-5 text-[#64ffda]" />
                </div>
                <div className="z-10">
                  <h3 className="font-medium leading-snug text-[#ccd6f6]">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-[#ccd6f6] hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                      href={cert.issuerUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${cert.title} by ${cert.issuer} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {cert.title}
                        <ArrowUpRight
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-[#8892b0]">{cert.issuer}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
