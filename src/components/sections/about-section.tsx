import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Skill, Experience, Education } from '@/types';
import { Briefcase, GraduationCap, Code, Server, Palette, Database, Zap, Layers, ServerCog, Figma as FigmaIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const newIntroParagraph = "I'm John Doe, a dedicated Full-Stack Developer with a passion for crafting innovative and user-centric digital solutions. My journey in technology is driven by a constant curiosity and a desire to solve complex problems with elegant and efficient code. I thrive in collaborative environments, transforming ideas into tangible products that not only meet user needs but also exceed expectations. With a strong foundation in both front-end and back-end technologies, I'm committed to continuous learning and staying at the forefront of industry trends to deliver high-quality software.";

interface Competency {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const competenciesData: Competency[] = [
  {
    id: 'fsd',
    title: 'Full-Stack Development',
    icon: Layers,
    description: 'Crafting seamless digital experiences from front-end UIs to back-end APIs, ensuring robust and scalable solutions across the entire stack.',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design & Prototyping',
    icon: Palette, 
    description: 'Designing intuitive, engaging, and visually appealing user interfaces. Focusing on user-centered design principles to create delightful experiences.',
  },
  {
    id: 'api',
    title: 'API & System Architecture',
    icon: ServerCog,
    description: 'Developing secure, efficient APIs and designing resilient system architectures that support complex applications and data flows.',
  },
];


const skillsData: Skill[] = [
  { id: 'react', name: 'React', icon: Code },
  { id: 'nextjs', name: 'Next.js', icon: Code },
  { id: 'typescript', name: 'TypeScript', icon: Code },
  { id: 'nodejs', name: 'Node.js', icon: Server },
  { id: 'tailwind', name: 'Tailwind CSS', icon: Palette },
  { id: 'figma', name: 'Figma', icon: FigmaIcon },
  { id: 'postgres', name: 'PostgreSQL', icon: Database },
  { id: 'prisma', name: 'Prisma', icon: Zap },
];

const experienceData: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2021 - Present',
    logoUrl: 'https://picsum.photos/40/40?grayscale&seed=techinc',
    imageHint: 'company logo tech',
    descriptionPoints: [
      'Led development of key features for a SaaS platform.',
      'Mentored junior developers and conducted code reviews.',
      'Improved application performance by 20% through optimizations.',
    ],
  },
  {
    id: 'exp2',
    role: 'Full-Stack Developer',
    company: 'Web Innovators LLC',
    duration: 'Jun 2018 - Dec 2020',
    logoUrl: 'https://picsum.photos/40/40?grayscale&seed=webinnov',
    imageHint: 'company logo web',
    descriptionPoints: [
      'Developed and maintained client websites using React and Node.js.',
      'Collaborated with designers to implement responsive UIs.',
      'Integrated third-party APIs for enhanced functionality.',
    ],
  },
];

const educationData: Education[] = [
  {
    id: 'edu1',
    degree: 'M.S. in Computer Science',
    institution: 'University of Advanced Technology',
    duration: '2016 - 2018',
    logoUrl: 'https://picsum.photos/40/40?grayscale&seed=uat',
    imageHint: 'university logo UAT',
    description: 'Focused on software engineering and machine learning.',
  },
  {
    id: 'edu2',
    degree: 'B.S. in Information Technology',
    institution: 'State College',
    duration: '2012 - 2016',
    logoUrl: 'https://picsum.photos/40/40?grayscale&seed=statecol',
    imageHint: 'university logo state',
    description: 'Graduated with honors, active in coding club.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16">
          About Me
        </h2>

        {/* Profile Image and Main Description */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <Image
              src="https://picsum.photos/seed/newportrait/350/400" 
              alt="John Doe - Profile Picture"
              width={350}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold mb-4 text-primary_old_remove_or_replace_with_accent">A Bit About Me</h3> {/* Consider using accent color if primary is too dark for a heading here */}
            <div className="space-y-4 text-muted-foreground text-lg">
                {newIntroParagraph.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competenciesData.map((competency) => (
              <Card key={competency.id} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 bg-card">
                <CardHeader className="items-center text-center">
                  <competency.icon className="h-12 w-12 mb-3 text-accent" />
                  <CardTitle className="text-xl">{competency.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{competency.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies I Work With Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4">
            {skillsData.map((skill) => (
              <Badge
                key={skill.id}
                variant="secondary"
                className="text-base px-5 py-3 flex items-center gap-2.5 shadow-md hover:shadow-lg transition-shadow cursor-default bg-card hover:bg-secondary/80 border-transparent"
              >
                {skill.icon && <skill.icon className="h-6 w-6 text-primary" />}
                <span className="font-medium">{skill.name}</span>
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Experience & Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">My Journey</h3>
          <div className="grid gap-10 md:grid-cols-2">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Briefcase className="mr-3 h-7 w-7 text-accent" /> Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="flex items-start gap-4">
                    {exp.logoUrl && (
                      <Image
                        src={exp.logoUrl}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="rounded-lg mt-1 border"
                        data-ai-hint={exp.imageHint || "company logo"}
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-lg">{exp.role}</h4>
                      <p className="text-md text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground/80">{exp.duration}</p>
                      <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.descriptionPoints.map((point, i) => <li key={i}>{point}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <GraduationCap className="mr-3 h-7 w-7 text-accent" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {educationData.map((edu) => (
                  <div key={edu.id} className="flex items-start gap-4">
                     {edu.logoUrl && (
                      <Image
                        src={edu.logoUrl}
                        alt={`${edu.institution} logo`}
                        width={48}
                        height={48}
                        className="rounded-lg mt-1 border"
                        data-ai-hint={edu.imageHint || "university logo"}
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-md text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground/80">{edu.duration}</p>
                      {edu.description && <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
