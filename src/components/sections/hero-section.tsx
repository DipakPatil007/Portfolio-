import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative w-full scroll-mt-16 bg-grid-pattern overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] py-12 md:py-20 lg:py-0 lg:gap-16 xl:gap-24">
          {/* Left Column: Text and Buttons */}
          <div className="lg:w-3/5 xl:w-1/2 text-center lg:text-left">
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground animate-fadeIn" style={{animationDelay: '0.2s'}}>
              Hi! <span role="img" aria-label="waving hand">👋</span>
            </p>
            <h1 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-fadeIn" style={{animationDelay: '0.4s'}}>
              I&apos;m <span className="text-accent">Dipak Patil</span>,
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fadeIn" style={{animationDelay: '0.6s'}}>
              A Full-Stack Developer & Mobile Application developer, who loves intuitive, clean and modern technologies.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fadeIn" style={{animationDelay: '0.8s'}}>
              <Link href="#contact" passHref>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  suppressHydrationWarning
                >
                  Get in Touch
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" passHref>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="w-full sm:w-auto text-foreground hover:bg-accent/10 hover:text-accent shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  suppressHydrationWarning
                >
                  <FileText className="mr-2 h-5 w-5" /> RESUME
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-2/5 xl:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 animate-fadeIn" style={{animationDelay: '1s'}}>
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
              <Image
                src="https://picsum.photos/seed/animehero/500/500"
                alt="John Doe"
                width={450}
                height={450}
                className="rounded-full object-cover shadow-2xl border-4 border-card"
                data-ai-hint="anime portrait illustration"
                priority
              />
               <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}