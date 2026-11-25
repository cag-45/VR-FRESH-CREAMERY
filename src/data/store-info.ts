import { StoreInfo } from "@/types";

export const STORE_INFO: StoreInfo = {
  brandName: "VR FRESH CREAMERY",
  tagline: "FRESH CREAM GELATO — Freshness in Every Scoop.",
  phone: "+91 99481 44296",
  whatsapp: "+91 99481 44296",
  email: "vrfreshcreamery@gmail.com",
  address: {
    street: "H.No - 6-34/7, Sai Aishwarya Colony Road No - 9",
    area: "Parvathapur, Bibi Shaeb Maqta, PO: Medipalli",
    city: "Medchal-Malkajgiri, Telangana",
    pincode: "500098",
    landmark: "Near Medipalli",
  },
  timings: {
    weekdays: "11:00 AM – 11:00 PM",
    weekends: "11:00 AM – 11:30 PM",
    openStatusText: "Open Now • Fresh Batches Ready",
  },
  socialLinks: {
    instagram: "https://instagram.com/vrfreshcreamery",
    facebook: "https://facebook.com/vrfreshcreamery",
    googleMaps: "https://maps.google.com/?q=VR+Fresh+Creamery+Medipalli+Telangana",
  },
};

/**
 * Returns a clean, working WhatsApp URL.
 * International WhatsApp wa.me links must use standard digits without '+' or duplicate country codes.
 * India country code: 91, Mobile: 9948144296 -> 919948144296
 */
export const getWhatsAppUrl = (message?: string): string => {
  const baseUrl = "https://wa.me/919948144296";
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};
