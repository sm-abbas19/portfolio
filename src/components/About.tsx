export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] lg:sr-only">
          About
        </h2>
      </div>

      <div className="text-[#8892b0]">
        <p className="mb-4">
          I&apos;m a software engineer with a passion for building intelligent systems
          that actually work in the real world.
        </p>

        <p className="mb-4">
          Currently, I&apos;m wrapping up my final year at NUST, where I&apos;m
          building SecureVision; a
          real-time AI system that uses YOLOv11, BoTSORT, Pose Estimation,
          and Small Language Models to detect weapons, fights, and abandoned luggage
          on live camera feeds. It&apos;s been an exciting challenge combining multiple
          AI domains into one cohesive system.
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
