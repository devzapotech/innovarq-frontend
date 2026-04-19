import { Building2, Facebook, HardHat, Instagram, Key, Linkedin, Wrench } from "lucide-react";
import type { Project, Service, TeamMember, Testimonial } from "../types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Casa Horizonte',
    location: 'Valle de Bravo, México',
    category: 'Residencial',
    year: '2024',
    img: '/project_1.jpeg',
    size: 'large',
  },
  {
    id: 2,
    name: 'Torre Lumina',
    location: 'Monterrey, N.L.',
    category: 'Comercial',
    year: '2023',
    img: '/project_2.jpeg',
    size: 'small',
  },
  {
    id: 3,
    name: 'Penthouse Cielo',
    location: 'Ciudad de México',
    category: 'Interiorismo',
    year: '2024',
    img: '/project_3.jpeg',
    size: 'small',
  },
  {
    id: 4,
    name: 'Residencia Valle',
    location: 'Guadalajara, Jal.',
    category: 'Residencial',
    year: '2023',
    img: '/project_4.jpeg',
    size: 'large',
  },
  {
    id: 5,
    name: 'Plaza Nexo',
    location: 'CDMX, México',
    category: 'Comercial',
    year: '2022',
    img: '/project_5.jpeg',
    size: 'small',
  },
  {
    id: 6,
    name: 'Estudio Nakama',
    location: 'Querétaro, Qro.',
    category: 'Interiorismo',
    year: '2024',
    img: '/project_6.jpeg',
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
  { num: '180+', label: 'Proyectos completados' },
  { num: '15', label: 'Ciudades en México' },
  { num: '98%', label: 'Clientes satisfechos' },
  { num: '12', label: 'Premios de arquitectura' },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Andrés Iturbe',
    role: 'Director Creativo & Fundador',
    img: '/member_1.jpeg',
    quote: '"La arquitectura es la voluntad de la época traducida al espacio."',
  },
  {
    id: 2,
    name: 'Valentina Cruz',
    role: 'Diseñadora Principal',
    img: '/member_2.jpeg',
    quote: '"Diseñar es crear relaciones; entre personas, entre espacios, entre mundos."',
  },
  {
    id: 3,
    name: 'Marcos Fuentes',
    role: 'Director de Obra',
    img: '/member_1.jpeg',
    quote: '"La excelencia constructiva no es un lujo, es el estándar mínimo que merecen nuestros clientes."',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'Innovarq transformó nuestra visión en algo mucho mejor de lo que imaginábamos. La atención al detalle y la creatividad son incomparables. Cada rincón de la casa cuenta una historia.',
    author: 'Carlos Mendoza',
    role: 'Director General, Grupo Apex',
    project: 'Casa Horizonte, Valle de Bravo',
  },
  {
    id: 2,
    quote: 'El proceso fue fluido, transparente y muy profesional. No solo entregaron un espacio hermoso, sino que transformaron nuestra forma de vivir. El resultado superó todas nuestras expectativas.',
    author: 'Ana Sofía Ramírez',
    role: 'Propietaria, Residencia Valle',
    project: 'Residencia Valle, Guadalajara',
  },
  {
    id: 3,
    quote: 'Diseñaron nuestra sede corporativa con una sensibilidad única. El espacio ahora refleja perfectamente nuestra identidad como empresa y ha mejorado radicalmente el bienestar de nuestro equipo.',
    author: 'Roberto Villarreal',
    role: 'CEO, Nexo Group',
    project: 'Plaza Nexo, Ciudad de México',
  },
];
