/** Digits only, international format — required by the wa.me short link. */
export const WHATSAPP_NUMBER = "584145551727";

const PREFILLED_MESSAGE = {
  en: "Hi Sneyder, I saw your site and I'd like to talk about a system for my business.",
  es: "Hola Sneyder, vi tu página y quiero conversar sobre un sistema para mi negocio.",
} as const;

export function whatsappLink(language: "en" | "es", topic?: string) {
  const message = topic
    ? `${PREFILLED_MESSAGE[language]} (${topic})`
    : PREFILLED_MESSAGE[language];

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
