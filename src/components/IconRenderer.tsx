import React from 'react';
import { 
  Smile, 
  Brain, 
  Heart, 
  Users, 
  Award, 
  ShieldCheck, 
  Video,
  Phone,
  MapPin,
  Mail,
  Instagram,
  Check,
  Calendar,
  Clock,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Smile: Smile,
  BrainCircuit: Brain,
  Heart: Heart,
  Users: Users,
  Award: Award,
  ShieldCheck: ShieldCheck,
  Video: Video,
  Phone: Phone,
  MapPin: MapPin,
  Mail: Mail,
  Instagram: Instagram,
  Check: Check,
  Calendar: Calendar,
  Clock: Clock,
  ExternalLink: ExternalLink,
  MessageSquare: MessageSquare
};

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export default function IconRenderer({ name, className, size = 24 }: IconRendererProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <Smile className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
