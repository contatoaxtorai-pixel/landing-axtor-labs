
// GA4 and Meta Pixel are loaded via CDN in index.html.
// We declare them here to inform TypeScript about their existence on the window object.
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: object) => void;
    fbq?: (command: string, eventName: string, params?: object) => void;
  }
}

export enum Events {
  VIEW_CONTENT = 'view_content',
  GENERATE_LEAD = 'generate_lead',
  WHATSAPP_CLICK = 'whatsapp_click',
  FORM_SUBMIT = 'form_submit',
}

export const trackEvent = (eventName: Events, params: object = {}) => {
  console.log(`Tracking event: ${eventName}`, params);
  
  // GA4 event
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel event
  if (typeof window.fbq === 'function') {
    // Standard events mapping
    const pixelEventMap: { [key: string]: string } = {
      [Events.VIEW_CONTENT]: 'ViewContent',
      [Events.GENERATE_LEAD]: 'Lead',
      [Events.WHATSAPP_CLICK]: 'Contact',
      [Events.FORM_SUBMIT]: 'SubmitApplication'
    };
    
    const pixelEvent = pixelEventMap[eventName] || eventName;

    if (Object.values(pixelEventMap).includes(pixelEvent)) {
      window.fbq('track', pixelEvent, params);
    } else {
      // For custom events
      window.fbq('trackCustom', eventName, params);
    }
  }
};
