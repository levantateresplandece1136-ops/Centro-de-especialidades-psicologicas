import { Service, Stat, WhyUsItem, Testimonial, FAQItem } from './types';

export const CLINIC_INFO = {
  name: "Centro de Especialidades Psicológicas",
  shortName: "CEP",
  tagline: "Tu bienestar empieza aquí",
  specialties: "Especialistas en Terapia Cognitivo Conductual y Terapia Contextual de Tercera Generación",
  phone: "461 180 81 51",
  phoneFormatted: "+52 461 180 81 51",
  address: "Francisco Juárez #810, Celaya, Gto.",
  addressLink: "https://maps.google.com/?q=Francisco+Juarez+810,+Celaya,+Guanajuato",
  instagram: "@cepd_celaya",
  instagramUrl: "https://www.instagram.com/cepd_celaya",
  email: "gmv42@hotmail.com",
  schedule: "Lunes a Sábado: 9:00 AM - 8:00 PM (Previa cita)",
  whatsappLink: "https://wa.me/524611808151?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20de%20valoraci%C3%B3n."
};

export const STATS: Stat[] = [
  {
    id: "stat-1",
    value: "633+",
    label: "Pacientes Acompañados",
    description: "Procesos individuales, de pareja y familiares con un enfoque empático."
  },
  {
    id: "stat-2",
    value: "Híbrido",
    label: "Atención Presencial y En Línea",
    description: "Flexibilidad total de horarios en Celaya o videollamada segura."
  },
  {
    id: "stat-3",
    value: "10+",
    label: "Años de Experiencia",
    description: "Trayectoria profesional sólida respaldando cada uno de nuestros tratamientos."
  }
];

export const SERVICES: Service[] = [
  {
    id: "depression",
    title: "Depresión",
    description: "Espacio de apoyo para recuperar el interés, la vitalidad y el sentido de bienestar en tu día a día.",
    iconName: "Smile",
    details: [
      "Activación conductual para retomar actividades significativas",
      "Identificación y reestructuración de pensamientos limitantes",
      "Acompañamiento en procesos de duelo y pérdidas",
      "Desarrollo de resiliencia y autocuidado"
    ]
  },
  {
    id: "anxiety",
    title: "Ansiedad y Estrés",
    description: "Herramientas prácticas para regular la preocupación constante, los síntomas físicos y el estrés cotidiano.",
    iconName: "BrainCircuit",
    details: [
      "Técnicas de respiración y relajación fisiológica",
      "Manejo de ataques de pánico y fobias específicas",
      "Estrategias cognitivas para frenar la rumiación",
      "Mindfulness para la regulación emocional en el presente"
    ]
  },
  {
    id: "couples",
    title: "Terapia de Pareja",
    description: "Fortalecimiento de la comunicación, resolución de conflictos y reconstrucción del vínculo afectivo.",
    iconName: "Heart",
    details: [
      "Desarrollo de comunicación asertiva y no violenta",
      "Mediación y resolución constructiva de conflictos",
      "Reconstrucción de la confianza y superación de crisis",
      "Clarificación de acuerdos de convivencia y proyectos de vida"
    ]
  },
  {
    id: "family",
    title: "Terapia Familiar",
    description: "Acompañamiento para mejorar la convivencia, establecer límites saludables y superar crisis juntos.",
    iconName: "Users",
    details: [
      "Reestructuración de dinámicas familiares disfuncionales",
      "Establecimiento de límites claros y afectuosos",
      "Apoyo en transiciones difíciles (separaciones, mudanzas)",
      "Herramientas de crianza positiva para padres"
    ]
  }
];

export const WHY_US: WhyUsItem[] = [
  {
    id: "evidence",
    title: "Enfoque basado en evidencia",
    description: "Utilizamos técnicas científicamente probadas (TCC y Terapias de Tercera Generación) para garantizar resultados efectivos y medibles.",
    iconName: "Award"
  },
  {
    id: "certified",
    title: "Terapeutas certificados",
    description: "Profesionales titulados con posgrados, especialidades clínicas y constante actualización científica para brindarte la mejor atención ética.",
    iconName: "ShieldCheck"
  },
  {
    id: "flexibility",
    title: "Modalidad presencial y en línea",
    description: "Flexibilidad de sesiones en nuestro consultorio físico en una excelente zona de Celaya o desde la comodidad de tu hogar vía videollamada.",
    iconName: "Video"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "La terapia me dio herramientas reales que uso todos los días para manejar mi ansiedad. El trato es sumamente humano, respetuoso y profesional.",
    author: "Ana Sofía R.",
    location: "Celaya, Gto.",
    tag: "Terapia de Ansiedad"
  },
  {
    id: "test-2",
    quote: "Mi pareja y yo estábamos en un punto crítico. Gracias a las sesiones aprendimos a escucharnos sin atacarnos y reconstruimos nuestra relación sobre bases sólidas.",
    author: "Mauricio y Brenda",
    location: "Atención en línea",
    tag: "Terapia de Pareja"
  },
  {
    id: "test-3",
    quote: "Es un lugar donde de verdad te sientes escuchado y no juzgado. El enfoque práctico te ayuda a ver cambios desde las primeras semanas.",
    author: "Carlos M.",
    location: "Celaya, Gto.",
    tag: "Terapia Cognitivo Conductual"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Qué es la Terapia Cognitivo Conductual (TCC)?",
    answer: "Es un enfoque terapéutico práctico y centrado en el presente que ayuda a identificar y cambiar patrones de pensamiento y comportamiento que causan malestar emocional. Es uno de los métodos con mayor respaldo científico del mundo."
  },
  {
    id: "faq-2",
    question: "¿Qué son las Terapias Contextuales o de Tercera Generación?",
    answer: "Son terapias modernas (como la Terapia de Aceptación y Compromiso o ACT, y Mindfulness) que se enfocan no solo en cambiar los pensamientos, sino en cambiar la relación que tienes con ellos, promoviendo la aceptación y la acción orientada a tus valores personales."
  },
  {
    id: "faq-3",
    question: "¿Cuánto dura cada sesión de terapia?",
    answer: "Las sesiones individuales tienen una duración aproximada de 50 a 60 minutos. Las sesiones familiares o de pareja pueden extenderse de 60 a 75 minutos según las necesidades del proceso."
  },
  {
    id: "faq-4",
    question: "¿Cómo funciona la terapia en línea?",
    answer: "Se realiza a través de videollamadas seguras por Zoom o Google Meet. Solo necesitas un espacio privado y una conexión a internet estable. Tiene la misma efectividad clínica y científica que la terapia presencial."
  }
];
