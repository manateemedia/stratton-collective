// One place for every business detail. Change it here and it updates everywhere.
export const SITE = {
  name: "Stratton Collective",
  legalName: "Stratton Collective Mobile and Online Notary",
  url: "https://strattoncollective.org",
  phone: "(352) 443-6272",
  phoneHref: "tel:+13524436272",
  smsHref: "sms:+13524436272",
  email: "info@strattoncollective.org",
  city: "Gainesville",
  region: "FL",
  postalCode: "32608",
  hoursText: "Open 7 days, 8am to 8pm",
  hoursSchema: "Mo-Su 08:00-20:00",
  reviewCount: 104,
  rating: "5.0",
  // Booking links
  bookMobile: "https://calendly.com/nicoletteflnotary/mobilenotary",
  bookOnline: "https://calendly.com/nicoletteflnotary/in-person-mobile-notary-clone",
  // Google review links (swap in the short g.page link from Google Business Profile)
  googleReviews:
    "https://www.google.com/search?q=Stratton+Collective+Mobile+and+Online+Notary+Gainesville+FL",
  googleWriteReview:
    "https://www.google.com/search?q=Stratton+Collective+Mobile+and+Online+Notary+Gainesville+FL",
  sameAs: [],
};

export const PRICING = [
  { name: "Basic", when: "72 hours notice", price: "From $75", note: "Price depends on location and documents." },
  { name: "Next day", when: "Within 24 hours", price: "From $125", note: "Price depends on location and documents." },
  { name: "Same day", when: "Within 4 to 8 hours", price: "$200 flat", note: "Within 20 miles of Gainesville." },
  { name: "Emergency", when: "Within the hour", price: "$275 flat", note: "Within 20 miles of Gainesville. Call to confirm." },
];

export const ADDONS = [
  "Witnesses: $30 each in person, $15 each online",
  "Printing: free up to 20 pages",
  "Scanning, emailing and mailing your finished documents",
];

export const REVIEWS = [
  { name: "Pam Thompson", text: "From start to finish, the process was seamless, professional, and stress free. The online notary session was quick and efficient." },
  { name: "Alex Romano", text: "Very quick, efficient, friendly, and professional. Would highly recommend Nicolette." },
  { name: "alysoup", text: "Very quick and easy. No stress, very kind and helpful." },
  { name: "Chris", text: "Very pleasant experience with Nicolette, going through this particular situation." },
  { name: "Richard Fisher", text: "Quick and very pleasant." },
  { name: "Merrill Slepica", text: "Easy to accomplish." },
];

export const DOCUMENTS = [
  ["Power of attorney", "General, durable and limited POAs, signed with two witnesses as Florida requires."],
  ["Healthcare documents", "Advance directives, living wills, healthcare surrogate forms and HIPAA releases."],
  ["Real estate", "Quit claim deeds, warranty deeds, mortgage and closing documents."],
  ["Loan signings", "Purchases, refinances and HELOCs for title companies and lenders."],
  ["Court and family", "Small claims, name changes, parenting plans, landlord and tenant forms."],
  ["Affidavits and contracts", "Sworn statements, simple contracts, lien waivers and business forms."],
  ["UF and state employee forms", "Florida loyalty oath, domestic partnership affidavits and retirement forms."],
  ["Apostille", "Notarization plus help getting your Florida apostille for use abroad."],
];
