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
          I&apos;m a software engineer at the intersection of full stack engineering and applied AI, with a focus on building systems that actually work in the real world.
        </p>
      </div>
    </section>
  );
}