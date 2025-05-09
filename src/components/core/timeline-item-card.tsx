import type { Education, Experience } from '@/types';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Building } from 'lucide-react';

interface TimelineItemCardProps {
  item: Education | Experience;
  type: 'education' | 'experience';
  index: number; // The number to display in the dot
  totalItems: number; // Total items in this timeline section
  position: 'left' | 'right'; // Defines which side the card should be on desktop
}

export default function TimelineItemCard({ item, type, index, totalItems, position }: TimelineItemCardProps) {
  const isEducation = type === 'education';
  const data = item as Education & Experience; // Cast to access common and specific fields safely

  const titleText = isEducation ? data.degree : data.role;
  const subtitleText = isEducation ? data.institution : data.company;
  
  let descriptionContent = '';
  if (isEducation) {
    descriptionContent = data.description || '';
  } else if (data.descriptionPoints) {
    descriptionContent = data.descriptionPoints.join('. ') + (data.descriptionPoints.length > 0 ? '.' : '');
  }

  const CardComponent = () => (
    <div className={`w-full rounded-lg bg-card p-5 shadow-xl relative transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] ${position === 'left' ? 'md:text-right' : 'md:text-left'}`}>
      <Badge 
        variant="secondary" 
        className={`absolute top-3 text-xs py-1 px-2 
                    ${position === 'left' ? 'md:left-3 md:right-auto right-3' : 'right-3'}`}
      >
        {data.duration}
      </Badge>
      
      <h3 className="mb-1 text-xl font-semibold text-foreground">{titleText}</h3>
      
      <div className={`mb-3 flex items-center text-sm text-muted-foreground ${position === 'left' ? 'md:flex-row-reverse' : ''}`}>
        <Building size={16} className="mx-2" /> 
        <span>{subtitleText}</span>
      </div>
      
      <p className="text-sm text-muted-foreground">{descriptionContent}</p>
      
      {data.logoUrl && (
        <div className={`mt-3 flex ${position === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
          <Image 
            src={data.logoUrl} 
            alt={`${subtitleText} logo`} 
            width={32} 
            height={32} 
            className="rounded-sm border object-contain"
            data-ai-hint={data.imageHint || (isEducation ? "university logo" : "company logo")}
          />
        </div>
      )}
    </div>
  );

  return (
    // Main container for a timeline item (row)
    // Default: Dot on left, Card on right (mobile)
    // Desktop (md): Alternates based on 'position' prop
    <div className={`flex items-start md:items-stretch mb-8 md:space-x-0 
                     ${position === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      
      {/* Card Area (takes 50% width on desktop) */}
      <div className={`w-full md:w-1/2 ${position === 'left' ? 'md:pr-6' : 'md:pl-6'}`}>
        <CardComponent />
      </div>

      {/* Timeline Gutter (Dot and connecting lines) - always in the middle on desktop */}
      <div className={`hidden md:flex flex-col items-center w-10 shrink-0 mx-2`}>
        {/* Line above dot */}
        <div className={`w-0.5 flex-1 ${index === 1 ? 'bg-transparent' : 'bg-muted-foreground/30'}`}></div>
        {/* Dot */}
        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-card text-accent font-semibold shadow-md shrink-0">
          {index}
        </div>
        {/* Line below dot */}
        <div className={`w-0.5 flex-1 ${index === totalItems ? 'bg-transparent' : 'bg-muted-foreground/30'}`}></div>
      </div>
      
      {/* Spacer Area (takes 50% width on desktop, ensures gutter is centered) */}
      {/* This div is a placeholder on the opposite side of the card on desktop */}
      <div className="hidden md:block md:w-1/2"></div>


      {/* Mobile-only Dot and line - visible only on small screens */}
      <div className="flex flex-col items-center w-10 shrink-0 mr-4 md:hidden">
         {/* Line above dot */}
         <div className={`w-0.5 h-4 ${index === 1 ? 'bg-transparent' : 'bg-muted-foreground/30'}`}></div>
        {/* Dot */}
        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-card text-accent font-semibold shadow-md shrink-0">
          {index}
        </div>
        {/* Line below dot */}
        <div className={`w-0.5 flex-1 ${index === totalItems ? 'bg-transparent' : 'bg-muted-foreground/30'}`}></div>
      </div>
    </div>
  );
}
