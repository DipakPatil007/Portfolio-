import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../app/images/profilepic.png'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full scroll-mt-16 bg-grid-pattern-hero overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] py-12 md:py-20 lg:py-0">

          {/* Left Column: Text and Buttons */}
          <div className="lg:w-3/5 xl:w-1/2 text-center lg:text-left z-10">
            <p className="text-lg md:text-xl font-medium text-muted-foreground animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Hello, 👋 I&apos;m
            </p>
            <h1 className="mt-1 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Dipak Patil
            </h1>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-accent animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              Mobile App Developer | Full-Stack Developer
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              I create modern and responsive mobile application and web application with a focus on user experience and performance. Passionate about turning ideas into reality through code.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <Link href="#projects" passHref>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  View My Work
                </Button>
              </Link>
              <Link href="https://drive.google.com/file/d/1-KGbm-GV0w6FyDZJnwvjZc8jCXzZI44f/view" target="_blank" rel="noopener noreferrer" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-foreground hover:bg-accent/10 hover:text-accent shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FileText className="mr-2 h-5 w-5" /> Download CV
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-2/5 xl:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            <div className="relative w-[18.75rem] h-[18.75rem] md:w-[25rem] md:h-[25rem] lg:w-[28.125rem] lg:h-[28.125rem]">
              <Image
                src={profileImage}
                alt="Dipak Patil - Professional"
                width={500}
                height={500}
                className="rounded-full object-cover shadow-2xl border-[0.25rem] border-card animate-float hero-image-glow"
                data-ai-hint="professional portrait illustration"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

