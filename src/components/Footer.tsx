export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-[#8892b0] sm:pb-0">
      <p>
        Design inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          className="font-medium text-[#ccd6f6] hover:text-[#64ffda] focus-visible:text-[#64ffda]"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang
        </a>{" "}
        
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-[#ccd6f6] hover:text-[#64ffda] focus-visible:text-[#64ffda]"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-[#ccd6f6] hover:text-[#64ffda] focus-visible:text-[#64ffda]"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-[#ccd6f6] hover:text-[#64ffda] focus-visible:text-[#64ffda]"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        . Coded from scratch in VSCode.
      </p>
    </footer>
  );
}
