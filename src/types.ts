export interface ServiceItem {
  title: string;
  description: string;
  items?: string[];
  link?: string;
  badge?: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date?: string;
  source?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  name: "Spatium Urgent Care",
  wellnessName: "Spatium Urgent Care & Wellness",
  primaryCareName: "Dawn Primary Care",
  address: "3595 Canton Rd, Suite 316, Marietta, GA 30066",
  phone: "(678) 932-2121",
  phoneNumeric: "678-932-2121",
  primaryPhone: "(678) 932-2138",
  primaryPhoneNumeric: "678-932-2138",
  email: "Hello@SpatiumUrgentCare.com",
  urgentCareHours: "Monday – Friday: 10:00 AM - 7:00 PM",
  weekendHours: "Saturday & Sunday: Closed",
  bookingUrl: "https://app.clientforge-ai.com/spatium-book",
  wellnessBookingUrl: "https://spatiumurgentcareandwellness.glossgenius.com/",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=3595+Canton+Rd+Suite+316+Marietta+GA+30066",
  facebookUrl: "https://www.facebook.com/profile.php?id=61553189734008",
  instagramUrl: "https://www.instagram.com/spatiumurgentcare?igsh=eWQzaGRqcnE1YWFs",
  cherryFinancingUrl: "https://files.withcherry.com/widgets/widget.js",
};
