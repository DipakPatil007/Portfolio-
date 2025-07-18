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
    title: 'Online Interview Assessment System',
    description: 'Developed a robust online interview platform using MERN stack and Socket.io, featuring seamless live video calling, real-time collaborative code editor with instant synchronization, live code compilation for immediate feedback, secure user authentication and session management, interview scheduling with automated email notifications.',
    imageUrl: 'https://picsum.photos/seed/ecomm/600/400',
    imageHint: 'interview platform interface',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Socket.io'],
    // liveDemoUrl: '#',
    repoUrl: 'https://github.com/DipakPatil007/Online-Interview-Assessment-main',
  },
  {
    id: 'proj2',
    title: 'Fitness App',
    description: 'Developed a cross-platform fitness app using React Native, Expo, and TypeScript, featuring authentication, workout tracking, and dynamic content from Sanity.io. Integrated Clerk for secure user management and OpenAI for AI-powered exercise guidance. Designed a modular, responsive UI with Nativewind and deployed to iOS, Android, and web via EAS.',
    imageUrl: 'https://picsum.photos/seed/taskapp/600/400',
    imageHint: 'fitness app interface',
    tags: ['React Native', 'JavaScript', 'Nativewind', 'Expo', 'TypeScript', 'Sanity.io', 'Clerk', 'OpenAI'],
    // liveDemoUrl: '#',
    repoUrl: 'https://github.com/DipakPatil007/fitness-app-expo-react-native-starter-nativewind-typescript',
  },
  {
    id: 'proj3',
    title: 'Github Followers',
    description: 'Built an iOS app using UIKit and the MVVM design pattern, integrating the GitHub REST API to display user profiles, repositories, followers, and following lists. Features include dynamic user search, lazy- loaded lists using UITableView, image caching for efficient performance, and smooth navigation through user details.Ensured modular architecture with reusable components and clean separation of concerns',
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    imageHint: 'portfolio design',
    tags: ['Swift', 'UIKit', 'Storyboard', 'MVVM'],
    repoUrl: 'https://github.com/DipakPatil007/GitHubFollowers',
  },
  {
    id: 'proj4',
    title: 'Smart Spend Application',
    description: 'Built an application using Next.js and taildwind css',
    imageUrl: 'https://picsum.photos/seed/aiblog/600/400',
    imageHint: 'AI writing tool',
    tags: ['Next.js', 'TypeScript', 'Tailwind css'],
    // liveDemoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj5',
    title: 'Expense App',
    description: 'Built an React native and Expo application to track the monthly expenses using Expo framework, Nativewind css and NeonDatabase for Postgre Sql and backend in express.js',
    imageUrl: 'https://picsum.photos/seed/aiblog/600/400',
    imageHint: 'expense ',
    tags: ['React Native', 'Expo framework', 'Nativewind css', 'NeonDB', 'Express.js', 'Clerk Authention'],
    liveDemoUrl: '#',
    repoUrl: '#',
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="w-full scroll-mt-20 py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-105 project-card-hover border-animation">
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
                <CardDescription className="h-30 overflow-hidden text-ellipsis">{project.description}</CardDescription>
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
                    <Button variant="outline" size="sm">
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
