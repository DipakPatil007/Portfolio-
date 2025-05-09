import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full scroll-mt-20 py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Parallax Background Image */}
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Abstract Background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 z-0 opacity-30 animate-slow-zoom"
        data-ai-hint="abstract background"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      
      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            John Doe
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl md:text-2xl">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <p className="mt-4 max-w-xl mx-auto text-md text-muted-foreground sm:text-lg">
            Crafting beautiful and functional web experiences. Passionate about clean code, intuitive design, and continuous learning.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#projects">
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                Download CV <Download className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
