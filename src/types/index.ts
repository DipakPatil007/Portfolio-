import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  liveDemoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: LucideIcon;
  level?: number; // Optional: 0-100 for proficiency bar
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  descriptionPoints: string[];
  logoUrl?: string;
  imageHint?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  logoUrl?: string;
  imageHint?: string;
}

export interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
}
