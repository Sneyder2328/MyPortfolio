interface Localized {
  en: string;
  es: string;
}

export interface Capability {
  id: string;
  /** Matches an icon key in the Services section. */
  icon:
    | "dashboard"
    | "mobile"
    | "store"
    | "automation"
    | "chatbot"
    | "website";
  name: Localized;
  description: Localized;
}

export const capabilities: Capability[] = [
  {
    id: "gestion",
    icon: "dashboard",
    name: {
      en: "Management systems",
      es: "Sistemas de gestión",
    },
    description: {
      en: "Scheduling, orders, inventory, customers, payments and the reports you can't get today.",
      es: "Agenda, pedidos, inventario, clientes, cobros y los reportes que hoy no puedes sacar.",
    },
  },
  {
    id: "movil",
    icon: "mobile",
    name: {
      en: "Mobile apps",
      es: "Aplicaciones móviles",
    },
    description: {
      en: "Android and iOS, for your team out in the field or for your own customers.",
      es: "Android y iOS, para tu equipo en la calle o para tus propios clientes.",
    },
  },
  {
    id: "ventas",
    icon: "store",
    name: {
      en: "Online sales",
      es: "Ventas en línea",
    },
    description: {
      en: "Catalogs, online stores and order flows that work with how people actually pay here.",
      es: "Catálogos, tiendas y flujos de pedido que funcionan con las formas de pago que se usan aquí.",
    },
  },
  {
    id: "automatizacion",
    icon: "automation",
    name: {
      en: "Automation and integrations",
      es: "Automatización e integraciones",
    },
    description: {
      en: "Connect what you already use — WhatsApp, payments, spreadsheets, invoicing — so nobody retypes anything.",
      es: "Conectar lo que ya usas — WhatsApp, pagos, hojas de cálculo, facturación — para que nadie transcriba nada dos veces.",
    },
  },
  {
    id: "chatbots",
    icon: "chatbot",
    name: {
      en: "Chatbots and automated support",
      es: "Chatbots y atención automatizada",
    },
    description: {
      en: "Answer the same twenty questions around the clock, and hand off to a person when it matters.",
      es: "Responder las mismas veinte preguntas a toda hora, y pasar a una persona cuando de verdad hace falta.",
    },
  },
  {
    id: "web",
    icon: "website",
    name: {
      en: "Websites and landing pages",
      es: "Sitios web y landing pages",
    },
    description: {
      en: "Fast, findable on Google, and built to turn a visit into a conversation.",
      es: "Rápidos, que Google encuentre, y hechos para convertir una visita en una conversación.",
    },
  },
];

export interface ProcessStep {
  id: string;
  name: Localized;
  description: Localized;
}

export const processSteps: ProcessStep[] = [
  {
    id: "diagnostico",
    name: {
      en: "Diagnosis",
      es: "Diagnóstico",
    },
    description: {
      en: "45 minutes to understand how you work today and where the money is leaking. Free, no commitment.",
      es: "45 minutos para entender cómo trabajas hoy y por dónde se está yendo el dinero. Gratis y sin compromiso.",
    },
  },
  {
    id: "propuesta",
    name: {
      en: "A proposal built for you",
      es: "Propuesta hecha para ti",
    },
    description: {
      en: "Scope, timeline and price in writing, worked out for your situation. No closed packages — what you need is what you pay for.",
      es: "Alcance, tiempo y precio por escrito, calculados para tu situación. Sin paquetes cerrados: pagas por lo que necesitas.",
    },
  },
  {
    id: "entrega",
    name: {
      en: "Delivery in phases",
      es: "Entrega por fases",
    },
    description: {
      en: "You see working pieces from the first weeks, not a black box you wait months for.",
      es: "Ves partes funcionando desde las primeras semanas, no una caja negra que esperas meses.",
    },
  },
  {
    id: "soporte",
    name: {
      en: "Ongoing support",
      es: "Soporte continuo",
    },
    description: {
      en: "After delivery I stay available: hosting, backups, fixes and improvements as your business changes.",
      es: "Después de entregar sigo disponible: hosting, respaldos, ajustes y mejoras a medida que tu negocio cambia.",
    },
  },
];

/**
 * Rendered as chips, so the list reads as breadth rather than as a boundary.
 * Ordered with the priority niches first.
 */
export const industries: Localized[] = [
  { en: "Private practices", es: "Consultorios" },
  { en: "Clinics", es: "Clínicas" },
  { en: "Dentists", es: "Odontólogos" },
  { en: "Labs", es: "Laboratorios" },
  { en: "Gyms", es: "Gimnasios" },
  { en: "Academies", es: "Academias" },
  { en: "Distributors", es: "Distribuidoras" },
  { en: "Wholesalers", es: "Mayoristas" },
  { en: "Restaurants", es: "Restaurantes" },
  { en: "Transport and tourism", es: "Transporte y turismo" },
  { en: "Real estate", es: "Inmobiliarias" },
  { en: "Workshops", es: "Talleres" },
  { en: "Shops and retail", es: "Tiendas y comercios" },
];
