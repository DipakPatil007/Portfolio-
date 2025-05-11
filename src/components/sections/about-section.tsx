import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Skill, Experience, Education, SkillCategory } from '@/types';
import { Layers, Lightbulb, Users, Smartphone, Coffee, Code, Wind, Terminal, BarChartBig, Filter, Search, Server, Flame, Network, Database, Container, Anchor, Wrench, Github, Cloud, Gauge, AreaChart, Brain, TestTubeDiagonal, Settings} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';


const newIntroParagraph = "I'm Dipak Patil, a dedicated Full-Stack Developer with a passion for crafting innovative and user-centric digital solutions. My journey in technology is driven by a constant curiosity and a desire to solve complex problems with elegant and efficient code. I thrive in collaborative environments, transforming ideas into tangible products that not only meet user needs but also exceed expectations. With a strong foundation in both front-end and back-end technologies, I'm committed to continuous learning and staying at the forefront of industry trends to deliver high-quality software.";

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
    id: 'mobile-app',
    title: 'Mobile Application Development',
    icon: Smartphone,
    description: 'Crafting amazing application that ensuring robust and scalable solutions across the entire stack.',
  },
  {
    id: 'problem-solving',
    title: 'Creative Problem-Solving',
    icon: Lightbulb,
    description: 'Analyzing complex challenges and devising innovative, effective solutions. I enjoy tackling puzzles and finding elegant answers to tough questions.',
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    icon: Users,
    description: 'Working effectively within diverse teams, fostering a positive and productive environment. I believe strong communication is key to successful projects.',
  },
];

const skillCategoriesData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Smartphone, // Using Smartphone as a generic "display" icon, can be Palette too
    skills: [
      { id: 'html', name: 'HTML5', icon: Code },
      { id: 'css', name: 'CSS3', icon: Code }, // Replaced Palette with Code for consistency with other code-related skills
      { id: 'javascript', name: 'JavaScript (ES6+)', icon: Code },
      { id: 'typescript', name: 'TypeScript', icon: Code },
      { id: 'react', name: 'React', icon: Code }, // Brain could be for AI/ML, Code is more generic
      { id: 'nextjs', name: 'Next.js', icon: Code },
      { id: 'tailwind', name: 'Tailwind CSS', icon: Wind },
      { id: 'redux', name: 'Redux', icon: Settings }, // Settings for state management
    ],
  },
  {
    id: 'frontend',
    name: 'Front End',
    icon: Smartphone,
    skills: [
      { id: 'Html', name: 'Html/css/js', icon: Smartphone },
      { id: 'react', name: 'React', icon: Smartphone },
      { id: 'typescript', name: 'TypeScript', icon: Code },
      { id: 'javascript', name: 'JavaScript', icon: Code },
      { id: 'bootstrap', name: 'Bootstrap', icon: Wind },
      { id: 'tailwind_mobile', name: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: Code },
      { id: 'expressjs', name: 'Express.js', icon: Code },
      { id: 'python', name: 'Python', icon: Code },
      { id: 'django', name: 'Django', icon: Code },
      { id: 'restapi', name: 'RESTful APIs', icon: Network },
      { id: 'graphql', name: 'GraphQL', icon: Network },
    ],
  },
  {
    id: 'database',
    name: 'Databases',
    icon: Database,
    skills: [
      { id: 'mongodb', name: 'MongoDB', icon: Database },
      { id: 'postgresql', name: 'PostgreSQL', icon: Database },
      { id: 'mysql', name: 'MySQL', icon: Database },
      { id: 'firebase', name: 'Firebase', icon: Flame },
    ],
  },
  {
    id: 'devopsTesting',
    name: 'DevOps &amp; Testing',
    icon: Settings, // Using Settings as a general CI/CD, tools icon
    skills: [
      { id: 'git', name: 'Git &amp; GitHub', icon: Github },
      { id: 'docker', name: 'Docker', icon: Container },
      { id: 'aws', name: 'AWS (EC2, S3)', icon: Cloud },
      { id: 'jest', name: 'Jest', icon: TestTubeDiagonal },
      { id: 'rtl', name: 'React Testing Library', icon: TestTubeDiagonal },
      { id: 'ci-cd', name: 'CI/CD', icon: Wrench },
    ],
  },
];

const experienceData: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2021 - Present',
    logoUrl: 'https://picsum.photos/50/50?grayscale&seed=techinc', // Scaled
    imageHint: 'company logo tech',
    descriptionPoints: [
      'Developed and maintained client iOS application using Swift and SwiftUI',
      'Collaborated with designers to implement responsive UIs by utilizing the autolayout',
      'Integrated third-party APIs for enhanced functionality.',
      'Integrated push notification'
    ],
  },
  {
    id: 'exp2',
    role: 'Full-Stack Developer',
    company: 'Web Innovators LLC',
    duration: 'Jun 2018 - Dec 2020',
    logoUrl: 'https://picsum.photos/50/50?grayscale&seed=webinnov', // Scaled
    imageHint: 'company logo web',
    descriptionPoints: [
      'Developed and maintained client websites using React and Node.js.',
      'Collaborated with designers to implement responsive UIs.',
      'Integrated third-party APIs for enhanced functionality',
    ],
  }
];

const educationData: Education[] = [
  {
    id: 'edu1',
    degree: 'M.S. in Computer Science',
    institution: 'University of Advanced Technology',
    duration: '2016 - 2018',
    logoUrl: 'https://picsum.photos/40/40?grayscale&seed=uat', // Scaled
    imageHint: 'university logo UAT',
    description: 'Focused on software engineering and machine learning.',
  },
  {
    id: 'edu2',
    degree: 'B.S. in Information Technology',
    institution: 'State College',
    duration: '2012 - 2016',
    logoUrl: 'https://picsum.photos/40/40?grayscale&seed=statecol', // Scaled
    imageHint: 'university logo state',
    description: 'Graduated with honors, active in coding club.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-20 py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16 section-fade-in">
          About Me
        </h2>

        {/* Profile Image and Main Description */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center mb-20 section-fade-in profile-card-hover">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <Image
              src="https://picsum.photos/seed/newportrait/438/500" 
              alt="John Doe - Profile Picture"
              width={438} // Scaled from 350
              height={500} // Scaled from 400
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold mb-4 text-accent">A Bit About Me</h3>
            <div className="space-y-4 text-muted-foreground text-lg p-4">
                {newIntroParagraph.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mb-20 section-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-fade-in">
            {competenciesData.map((competency) => (
              <Card key={competency.id} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-card border-animation">
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

        {/* Technical Skills Section */}
        <div className="mb-20 section-fade-in">
          <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
            Technical <span className="text-accent">Skills</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I&apos;ve gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.
          </p>
          <div className="grid md:grid-cols-2 gap-8 stagger-fade-in">
            {skillCategoriesData.map((category) => (
              <Card key={category.id} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] bg-card overflow-hidden border-animation">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
                  <category.icon className="h-7 w-7 text-accent" />
                  <CardTitle className="text-xl font-semibold">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.id}
                      variant="outline"
                      className="px-3 py-1.5 text-sm flex items-center gap-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 tech-icon-hover"
                    >
                      {skill.icon && <skill.icon className="h-4 w-4 text-accent" />}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* My Journey Section */}
        <div className="section-fade-in">
          <h3 className="text-3xl font-bold text-center mb-16 text-foreground">My Journey</h3>
          
          {/* EDUCATION JOURNEY */}
          <div className="mb-20">
            <h4 className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-12 text-accent">
              EDUCATION
            </h4>
            <div className="relative container mx-auto w-full max-w-4xl px-4">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2 hidden md:block timeline-item-animate" style={{ animationDelay: '0.1s' }}></div>
              {educationData.map((edu, idx) => (
                <div key={edu.id} className={`mb-12 flex md:items-center w-full timeline-item-animate`} style={{ animationDelay: `${(idx * 0.2) + 0.2}s` }}>
                  <div className={`w-full md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:ml-auto md:pl-8 md:text-left' : 'md:mr-auto md:pr-8 md:text-right'}`}>
                    <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] bg-card profile-card-hover">
                       <CardHeader className={`pb-3 ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                        <div className="flex items-center gap-3">
                           {edu.logoUrl && (
                            <Image src={edu.logoUrl} alt={`${edu.institution} logo`} width={40} height={40} className="rounded-sm border object-contain" data-ai-hint={edu.imageHint || "university logo"} />
                          )}
                          <CardTitle className="text-lg font-semibold">{edu.degree}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <Badge variant="secondary" className="text-xs">{edu.duration}</Badge>
                      </CardHeader>
                      <CardContent className={`${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        {edu.description && <p className="text-sm text-muted-foreground">{edu.description}</p>}
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-accent rounded-full items-center justify-center text-accent-foreground font-bold shadow-md">
                    {idx + 1}
                  </div>
                   <div className="md:hidden flex-shrink-0 w-10 h-10 mr-4 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-md">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE JOURNEY */}
          <div>
            <h4 className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-12 text-accent">
              EXPERIENCE
            </h4>
             <div className="relative container mx-auto w-full max-w-4xl px-4">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2 hidden md:block timeline-item-animate" style={{ animationDelay: '0.1s' }}></div>
              {experienceData.map((exp, idx) => (
                <div key={exp.id} className={`mb-12 flex md:items-center w-full timeline-item-animate`} style={{ animationDelay: `${(idx * 0.2) + 0.2}s` }}>
                  <div className={`w-full md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:ml-auto md:pl-8 md:text-left' : 'md:mr-auto md:pr-8 md:text-right'}`}>
                    <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] bg-card profile-card-hover">
                       <CardHeader className={`pb-3 ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                        <div className="flex items-center gap-3">
                          {exp.logoUrl && (
                            <Image src={exp.logoUrl} alt={`${exp.company} logo`} width={50} height={50} className="rounded-sm border object-contain" data-ai-hint={exp.imageHint || "company logo"}/>
                          )}
                          <CardTitle className="text-lg font-semibold">{exp.role}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <Badge variant="secondary" className="text-xs">{exp.duration}</Badge>
                      </CardHeader>
                      <CardContent className={`${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.descriptionPoints.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-accent rounded-full items-center justify-center text-accent-foreground font-bold shadow-md">
                    {idx + 1}
                  </div>
                  <div className="md:hidden flex-shrink-0 w-10 h-10 mr-4 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-md">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}