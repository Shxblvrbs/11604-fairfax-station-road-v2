import "./globals.css";
import { Alegreya } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

const alegreya = Alegreya({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-alegreya',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alegreya.variable}`}>
      <body className="bg-[#070815] text-white">

      <AnimatedGridPattern
        x={200}
        y={50}
        numSquares={30}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(670px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[90%] skew-y-12 text-yellow-300/70",
        )}
      />

        <main className="mt-10">
          {children}
        </main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
