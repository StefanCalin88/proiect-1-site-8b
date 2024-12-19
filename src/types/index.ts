import { ReactNode } from 'react';

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: ReactNode;
}

export interface NavLink {
  href: string;
  label: string;
}