export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryLabel: string;
  date: string;
  dateISO: string;
  readTime: number;
  image: string;
  imageAlt: string;
  tags: string[];
  featured: boolean;
}

export interface Category {
  id: string;
  label: string;
  count: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type SocialPlatform = "whatsapp" | "twitter" | "linkedin" | "facebook";
