export interface Program {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  intensity: 'Medium' | 'High' | 'Elite';
  duration: string;
  caloriesBurn: string;
  image: string;
  benefits: string[];
  trainer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'weights' | 'cardio' | 'yoga' | 'recovery';
  imageUrl: string;
  aspect: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  highlightMetric: string;
  metricLabel: string;
  timeframe: string;
  program: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
}
