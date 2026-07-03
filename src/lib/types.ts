export interface SkillItem {
  n: string;
  v: number;
}
export interface SkillCategory {
  cat: string;
  icon: string;
  items: SkillItem[];
}
export interface Service {
  i: string;
  t: string;
  d: string;
}
export interface Project {
  cat: string;
  tag: string;
  t: string;
  d: string;
  img: string;
  stack: string[];
  live: string;
  git: string;
  featured?: boolean;
}
export interface ExperienceItem {
  role: string;
  co: string;
  dur: string;
  pts: string[];
}
export interface Testimonial {
  q: string;
  n: string;
  p: string;
  img: string;
}
export interface Cert {
  i: string;
  t: string;
  org: string;
  date: string;
  link: string;
}



