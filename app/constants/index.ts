import { Building2, Facebook, HardHat, Instagram, Key, Linkedin, Mail, MapPin, Phone, Wrench } from "lucide-react";
import type { ContactInfoItem, ProcessStep, Service, TeamMember, Testimonial, ValueItem } from "../types";

export { PROJECTS, PROJECT_FILTERS } from "./projects";

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
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/studio_innovarq' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/innovarq-studio/' }
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
    img: '/JENNY.webp',
    quote: '"La forma y el espacio son el arte para poder vivir en armonía."',
  },
  {
    id: 2,
    name: 'Arq. Breiner Joves',
    role: 'Diseñador Principal',
    img: '/BREINER.webp',
    quote: '"Diseño desde la necesidad para una vida en la comodidad permanente."',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'No solo construye espacios increíbles, también sabe cómo habitarlos con estilo. Arquitecta por dentro y por fuera. Detrás de cada gran obra hay una gran arquitecta. Y detrás de esos lentes, una mujer que diseña sueños. Gracias Jenny por ayudarme a cumplir mi sueño ❤️',
    author: 'Cari Solari',
    role: '',
    project: 'Obra Almagro',
  },
  {
    id: 2,
    quote: 'Nos acompañan en el diseño y en la obra de principio a fin. Se ocupan de todo, además de dejar mi casa como la quería. Gracias por escucharme en todo momento para lograr un hermoso resultado lleno de comodidad.',
    author: 'Elena Rodriguez',
    role: '',
    project: 'Obra Rivadavia',
  },
  {
    id: 3,
    quote: 'Desde el primer boceto hasta la última terminación, el equipo entendió exactamente lo que buscábamos. La comunicación fue clara en cada etapa y el resultado superó nuestras expectativas.',
    author: 'Martín Gauna',
    role: '',
    project: 'Casa Bosquecitos',
  },
  {
    id: 4,
    quote: 'Profesionalismo y calidez en partes iguales. Supieron traducir ideas muy generales en un espacio funcional, cálido y con mucha personalidad. Totalmente recomendables.',
    author: 'Valeria Cortez',
    role: '',
    project: 'Departamento Viamonte',
  },
  {
    id: 5,
    quote: 'La dirección de obra fue impecable: tiempos cumplidos, presupuesto respetado y una atención al detalle que se nota en cada rincón de la casa.',
    author: 'Diego Fernández',
    role: '',
    project: 'Casa Lomas',
  },
  {
    id: 6,
    quote: 'Lograron optimizar cada metro cuadrado del departamento sin perder calidez. Hoy es un espacio que refleja exactamente quiénes somos.',
    author: 'Sofía Almada',
    role: '',
    project: 'Departamento Entre Ríos',
  },
  {
    id: 7,
    quote: 'Confiamos el proyecto llave en mano y fue la mejor decisión. Un solo interlocutor, cero dolores de cabeza y un resultado final excelente.',
    author: 'Pablo Ibáñez',
    role: '',
    project: 'Obra Almagro',
  },
  {
    id: 8,
    quote: 'El baño quedó mucho mejor de lo que imaginábamos. Propusieron soluciones que no habíamos considerado y que hoy usamos todos los días.',
    author: 'Carolina Méndez',
    role: '',
    project: 'Reforma de Baño',
  },
  {
    id: 9,
    quote: 'Un equipo que escucha de verdad. Cada ajuste que pedimos durante la obra se resolvió con criterio profesional y buena predisposición.',
    author: 'Nicolás Suárez',
    role: '',
    project: 'Obra Rivadavia',
  },
];

export const CONTACT_ITEMS: ContactInfoItem[] = [
  { icon: MapPin, label: 'Ubicación', content: ['Capital Federal, Buenos Aires, Argentina'] },
  { icon: Phone, label: 'Teléfono', content: '+54 9 11 5598 - 1705' },
  { icon: Mail, label: 'Email', content: 'consultas.innovarquitectos@gmail.com' },
];

export const WHATSAPP_LINK_BASE = 'https://wa.me/541155981705?text=';
export const MESSAGE_TEMPLATE = '¡Hola Innovarq! Estoy interesado en sus servicios de arquitectura. Me gustaría obtener más información sobre cómo pueden ayudarme a transformar mi espacio. ¿Podrían contactarme para discutir los detalles? Gracias.';
export const CONTACT_WHATSAPP = (message: string) => `${WHATSAPP_LINK_BASE}${encodeURIComponent(message)}`;

export const CONTACT_TOPICS = ['Obra nueva', 'Remodelación', 'Interiorismo', 'Otra consulta'];

export const CONTACT_HOURS = ['Lunes — Viernes: 9:00 — 18:00 h', 'Sábados: 09:00 — 12:00 h'];

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