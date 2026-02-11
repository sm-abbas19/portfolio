import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Syed Muhammad Abbas | Software Engineer",
  description: "I build intelligent, scalable software systems with expertise in Computer Vision, NLP, and backend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
  <head>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const theme = localStorage.getItem('theme');
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else if (theme === 'light') {
              document.documentElement.classList.remove('dark');
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.documentElement.classList.add('dark');
            }
          })();
        `,
      }}
    />
  </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}