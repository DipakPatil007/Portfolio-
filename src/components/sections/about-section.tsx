import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { Skill, Experience, Education } from '@/types';
import { Briefcase, GraduationCap, Code, Server, Palette, Database, Zap } from 'lucide-react';

const skillsData: Skill[] = [
  { id: 'react', name: 'React', icon: Code, level: 90 },
  { id: 'nextjs', name: 'Next.js', icon: Code, level: 85 },
  { id: 'typescript', name: 'TypeScript', icon: Code, level: 90 },
  { id: 'nodejs', name: 'Node.js', icon: Server, level: 80 },
  { id: 'tailwind', name: 'Tailwind CSS', icon: Palette, level: 95 },
  { id: 'figma', name: 'Figma', icon: Palette, level: 75 },
  { id: 'postgres', name: 'PostgreSQL', icon: Database, level: 70},
  { id: 'prisma', name: 'Prisma', icon: Zap, level: 80 },
];

const experienceData: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2021 - Present',
    logoUrl: 'https://picsum.photos/40/40?grayscale',
    imageHint: 'company logo',
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
    logoUrl: 'https://picsum.photos/40/40?grayscale',
    imageHint: 'company logo',
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
    logoUrl: 'https://picsum.photos/40/40?grayscale',
    imageHint: 'university logo',
    description: 'Focused on software engineering and machine learning.',
  },
  {
    id: 'edu2',
    degree: 'B.S. in Information Technology',
    institution: 'State College',
    duration: '2012 - 2016',
    logoUrl: 'https://picsum.photos/40/40?grayscale',
    imageHint: 'university logo',
    description: 'Graduated with honors, active in coding club.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12">
          About Me
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1 flex flex-col items-center">
            <Image
              src="https://picsum.photos/seed/portrait/300/300"
              alt="John Doe - Profile Picture"
              width={240}
              height={240}
              className="rounded-full shadow-xl mb-6"
              data-ai-hint="profile picture"
            />
            <p className="text-center text-muted-foreground max-w-md">
              Hello! I&apos;m John, a passionate software developer with a knack for creating elegant and efficient solutions. I thrive on challenges and enjoy working on projects that make a difference. When I&apos;m not coding, you can find me exploring new technologies or hiking in nature.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Zap className="mr-2 h-6 w-6 text-accent" /> Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillsData.map((skill) => (
                  <div key={skill.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {skill.icon && <skill.icon className="mr-2 h-5 w-5 text-primary" />}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Briefcase className="mr-2 h-6 w-6 text-accent" /> Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experienceData.map((exp) => (
                    <div key={exp.id} className="flex items-start gap-4">
                      {exp.logoUrl && (
                        <Image
                          src={exp.logoUrl}
                          alt={`${exp.company} logo`}
                          width={40}
                          height={40}
                          className="rounded-md mt-1"
                          data-ai-hint={exp.imageHint || "company logo"}
                        />
                      )}
                      <div>
                        <h3 className="font-semibold">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <p className="text-xs text-muted-foreground/80">{exp.duration}</p>
                        <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {exp.descriptionPoints.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <GraduationCap className="mr-2 h-6 w-6 text-accent" /> Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="flex items-start gap-4">
                       {edu.logoUrl && (
                        <Image
                          src={edu.logoUrl}
                          alt={`${edu.institution} logo`}
                          width={40}
                          height={40}
                          className="rounded-md mt-1"
                          data-ai-hint={edu.imageHint || "university logo"}
                        />
                      )}
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground/80">{edu.duration}</p>
                        {edu.description && <p className="mt-1 text-sm text-muted-foreground">{edu.description}</p>}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
