import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Program {
  title: string;
  description: string;
  image: string;
}

export interface Coach {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PricePlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ScheduleItem {
  day: string;
  classes: {
    time: string;
    name: string;
    type: 'gi' | 'nogi' | 'wrestling' | 'open';
  }[];
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Result {
  event: string;
  date: string;
  medals: {
    gold?: number;
    silver?: number;
    bronze?: number;
    athlete: string;
    category: string;
  }[];
}

export interface Product {
  name: string;
  price: string;
  image: string;
  category: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}