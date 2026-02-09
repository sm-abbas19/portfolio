export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--navy)] px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 transition-colors duration-300">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--lightest-slate)] transition-colors duration-300 lg:sr-only">
        About
      </h2>
      </div>

      <div className="text-[var(--slate)]">
        <p className="mb-4">
          I&apos;m a software engineer with a passion for building intelligent systems
          that actually work in the real world.
        </p>

        <p className="mb-4">
          Currently, I am architecting SecureVision, a real-time AI system for my FYP that fuses Computer Vision (YOLOv11) with Small Language Models to detect threats with high precision. I am also exploring Agentic Workflows, recently building autonomous infrastructure agents.
        </p>

        <p className="mb-4">
          Outside of work, I have led operations for Bunyaad Pakistan
          social initiatives, mentored freshmen at NUST, and held leadership roles in multiple student societies. I believe in building
          things that matter and sharing knowledge along the way.
        </p>

        <p>
          When I&apos;m not coding, you&apos;ll probably find me binge-watching TV shows,
          hanging out with friends, or learning German.
        </p>
      </div>
    </section>
  );
}