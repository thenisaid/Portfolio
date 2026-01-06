export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  impact?: string; // Optional now as strictly defined impacts aren't in all resume items
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  descriptions: string[];
}

export interface Skill {
  name: string;
  description: string; // Can serve as the value list
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label?: string;
}