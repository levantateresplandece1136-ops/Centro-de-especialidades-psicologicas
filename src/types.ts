export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentFormInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  modality: 'presencial' | 'linea' | '';
  message: string;
}
