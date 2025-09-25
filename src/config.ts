/**
 * Site-wide configuration constants
 */

export const SITE_CONFIG = {
  // Contact Information
  WHATSAPP_PHONE: "5519996395866",
  EMAIL: "institutorizomasi@gmail.com",

  // URLs
  SITE_URL: "https://institutorizoma.com.br",
  WHATSAPP_BASE_URL: "https://wa.me/5519996395866",

  // Company Information
  COMPANY_NAME: "Instituto Rizoma de Saúde Integral",

  // Address
  ADDRESS: {
    street: "R. Maria Ferreira Antunes, 26",
    city: "Campinas",
    state: "SP",
    zipCode: "13084-180",
    country: "BR",
    neighborhood: "Barão Geraldo"
  },

  // Geolocation
  GEO: {
    latitude: "-22.8649",
    longitude: "-47.0739"
  },

  // Business Hours
  OPENING_HOURS: "Mo-Fr 08:00-18:00",

  // SEO
  DEFAULT_META: {
    title: "Instituto Rizoma de Saúde Integral",
    description: "Instituto Rizoma de Saúde Integral oferece cuidado multidisciplinar em saúde mental com psicologia, psiquiatria, grupos terapêuticos e medicina de família em Campinas. Atendimento humanizado e personalizado.",
    keywords: "psicologia campinas, psiquiatria campinas, grupos terapeuticos campinas, medicina família campinas, saúde mental, terapia, atendimento psicológico, instituto rizoma"
  }
} as const;

/**
 * Helper functions for WhatsApp URLs
 */
export const whatsappHelpers = {
  /**
   * Generate WhatsApp URL with optional message
   */
  getWhatsappUrl: (message?: string, phone?: string) => {
    const phoneNumber = phone || SITE_CONFIG.WHATSAPP_PHONE;
    const baseUrl = `https://wa.me/${phoneNumber}`;

    if (message) {
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }

    return baseUrl;
  },

  /**
   * Get default WhatsApp URL
   */
  getDefaultWhatsappUrl: () => SITE_CONFIG.WHATSAPP_BASE_URL
};