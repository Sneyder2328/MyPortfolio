type UmamiTracker = {
  track: (eventName: string, data?: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    umami?: UmamiTracker;
  }
}

export function trackEvent(
  eventName: string,
  data?: Record<string, unknown>
): void {
  if (!import.meta.env.PROD) return;
  if (typeof window === "undefined") return;

  window.umami?.track(eventName, data);
}

