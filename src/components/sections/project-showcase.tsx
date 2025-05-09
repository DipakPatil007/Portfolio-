import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types';
import { Eye, Github } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with Stripe integration and admin dashboard.',
    imageUrl: 'https://picsum.photos/seed/ecomm/600/400',
    imageHint: 'e-commerce website',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'Tailwind CSS'],
    liveDemoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and notifications.',
    imageUrl: 'https://picsum.photos/seed/taskapp/600/400',
    imageHint: 'task manager interface',
    tags: ['React', 'Firebase', 'Material UI', 'Node.js'],
    liveDemoUrl: '#',
  },
  {
    id: 'proj3',
    title: 'Portfolio Website V1',
    description: 'My previous personal portfolio website built with vanilla HTML, CSS, and JS.',
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    imageHint: 'portfolio design',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: '#',
  },
   {
    id: 'proj4',
    title: 'AI Powered Blog Generator',
    description: 'A platform that uses generative AI to help users create blog posts.',
    imageUrl: 'https://picsum.photos/seed/aiblog/600/400',
    imageHint: 'AI writing tool',
    tags: ['Python', 'Flask', 'OpenAI API', 'React'],
    liveDemoUrl: '#',
    repoUrl: '#',
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="h-16 overflow-hidden text-ellipsis">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 border-t pt-4">
                {project.liveDemoUrl && (
                  <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </Link>
                )}
                {project.repoUrl && (
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
