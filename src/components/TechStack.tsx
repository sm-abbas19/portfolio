export default function TechStack() {
  const technologies = [
    "Python",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Docker",
    "PostgreSQL",
    "Linux",
    "Roboflow",
    "C++",
    "Java",
    "AWS (SageMaker, MLOps)",
  ];

  return (
    <section
      id="techstack"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Tech Stack"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6]">
          Tech Stack
        </h2>
      </div>

      <div>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="flex items-center rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium leading-5 text-[#64ffda]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
