import { Building2, Facebook, HardHat, Instagram, Key, Linkedin, Mail, MapPin, Phone, Wrench } from "lucide-react";
import type { ContactInfoItem, ProcessStep, Project, Service, TeamMember, Testimonial, ValueItem } from "../types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Casa Bosquecitos',
    location: 'Provincia Buenos Aires',
    category: 'Residencial',
    year: '2021',
    img: '/bosquecitos.webp',
    size: 'large',
  },
  {
    id: 2,
    name: 'Casa Lomas',
    location: 'Provincia Buenos Aires',
    category: 'Comercial',
    year: '2026',
    img: '/lomas.jpg',
    size: 'small',
  },
  {
    id: 3,
    name: 'Departament Entre Ríos',
    location: 'Capital Federal',
    category: 'Interiorismo',
    year: '2026',
    img: '/entre_rios.png',
    size: 'small',
  },
  {
    id: 4,
    name: 'Departamento Viamonte',
    location: 'Capital Federal',
    category: 'Residencial',
    year: '2025',
    img: '/viamonte.jpg',
    size: 'large',
  },
  {
    id: 5,
    name: 'Baños',
    location: '',
    category: 'Comercial',
    year: '2022',
    img: '/baños.png',
    size: 'small',
  },
  {
    id: 6,
    name: 'Interiorismo',
    location: 'Querétaro, Qro.',
    category: 'Interiorismo',
    year: '2024',
    img: '/interiorismo.png',
    size: 'small',
  },
];

export const PROJECT_FILTERS = ['Todos', 'Residencial', 'Comercial', 'Interiorismo'];

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: 'Diseño Arquitectónico',
    desc: 'Creamos espacios únicos que fusionan estética y funcionalidad. Desde la concepción del concepto hasta los planos constructivos.',
    num: '01',
  },
  {
    icon: Wrench,
    title: 'Remodelaciones',
    desc: 'Transformamos espacios existentes con una visión contemporánea. Respetamos la esencia y la elevamos a un nuevo nivel de diseño.',
    num: '02',
  },
  {
    icon: HardHat,
    title: 'Dirección de Obra',
    desc: 'Supervisamos cada etapa del proceso constructivo con rigor técnico. Garantizamos calidad, tiempos y presupuestos.',
    num: '03',
  },
  {
    icon: Key,
    title: 'Proyectos Llave en Mano',
    desc: 'Gestionamos el proyecto de principio a fin. Diseño, construcción y entrega. Tu único punto de contacto.',
    num: '04',
  },
];

export const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export const SOCIAL = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
];

export const KEYWORDS = ['Innovación', 'Sostenibilidad', 'Diseño Integral'];

export const STATS = [
  { num: '100+', label: 'Proyectos completados' },
  { num: '98%', label: 'Clientes satisfechos' },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Arq. Jennyfer Simone',
    role: 'Directora Creativa & Fundadora',
    img: '/JENNY.png',
    quote: '"La forma y el espacio son el arte para poder vivir en armonía."',
  },
  {
    id: 2,
    name: 'Arq. Breiner Joves',
    role: 'Diseñador Principal',
    img: '/BREINER.png',
    quote: '"Diseño desde la necesidad para una vida en la comodidad permanente."',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'No solo construye espacios increíbles, también sabe cómo habitarlos con estilo. Arquitecta por dentro y por fuera. Detrás de cada gran obra hay una gran arquitecta. Y detrás de esos lentes, una mujer que diseña sueños.Gracias Jenny por ayudarme a cumplir mi sueño ❤️',
    author: 'Cari Solari',
    role: '',
    project: 'Obra Almagro',
  },
  {
    id: 2,
    quote: 'Nos acompañan en el diseño y en la obra de principio a fin. Se ocupan de todo, además de dejar mi casa como la quería. Gracias por escucharme en todo momento para lograr un hermoso resultado lleno de comodidad. ',
    author: 'Elena Rodriguez',
    role: '',
    project: 'Obra Rivadavia',
  }
];

export const CONTACT_ITEMS: ContactInfoItem[] = [
  { icon: MapPin, label: 'Ubicación', content: ['Av. Presidente Masaryk 111', 'Polanco, Ciudad de México, 11560'] },
  { icon: Phone, label: 'Teléfono', content: '+52 (55) 4500-1234' },
  { icon: Mail, label: 'Email', content: 'hola@innovarq.mx' },
];

export const WHATSAPP_LINK_BASE = 'https://wa.me/541123197085?text=';
export const MESSAGE_TEMPLATE = '¡Hola Innovarq! Estoy interesado en sus servicios de arquitectura. Me gustaría obtener más información sobre cómo pueden ayudarme a transformar mi espacio. ¿Podrían contactarme para discutir los detalles? Gracias.';
export const CONTACT_WHATSAPP = (message: string) => `${WHATSAPP_LINK_BASE}${encodeURIComponent(message)}`;

export const CONTACT_HOURS = ['Lunes — Viernes: 9:00 — 18:00 h', 'Sábados: 10:00 — 14:00 h'];

export const STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Concepto',
    desc: 'Escuchamos y analizamos. Entendemos tus necesidades, el entorno y el propósito del espacio para definir una visión estratégica del proyecto.',
  },
  {
    num: '02',
    title: 'Diseño',
    desc: 'Transformamos la visión en propuestas visuales. Desarrollamos planos, renders y volumétrías que comunican la esencia del espacio.',
  },
  {
    num: '03',
    title: 'Planificación',
    desc: 'Definimos materiales, procesos constructivos, presupuesto y cronograma. Todo calculado para garantizar viabilidad y precisión.',
  },
  {
    num: '04',
    title: 'Ejecución',
    desc: 'Materializamos el diseño con supervisión técnica constante. Cada detalle es cuidado para que el resultado supere las expectativas.',
  },
];

export const VALUES: ValueItem[] = [
  { title: 'Diseño centrado en el cliente', desc: 'Cada decisión de diseño parte de entender profundamente a las personas que habitarán el espacio.' },
  { title: 'Optimización de costos y tiempos', desc: 'Gestionamos los recursos con inteligencia, sin comprometer la calidad ni la visión creativa del proyecto.' },
  { title: 'Arquitectura que trasciende', desc: 'Creamos obras que perduran en el tiempo, que generan impacto emocional y definen el carácter de un lugar.' },
];

export const MINI_STATS = [
  { num: '98%', label: 'Satisfacción' },
  { num: '12+', label: 'Años' },
  { num: '180+', label: 'Proyectos' },
];