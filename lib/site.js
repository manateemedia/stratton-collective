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
  googleReviews: "https://g.page/r/CffU9dIYNqc8EBM",
  googleWriteReview: "https://g.page/r/CffU9dIYNqc8EBM/review",
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
  "Jail and prison visits: $175 per visit",
  "Scanning, emailing and mailing your finished documents",
];

// Real Google reviews, copied from the Google Business Profile (Nov 2026). Update as new ones come in.
export const REVIEWS = [
  { name: "Pam Thompson", when: "a year ago", text: "I had such a wonderful experience working with Nicolette! From start to finish, the process was seamless, professional, and stress-free. Communication was clear and the online notary session was quick, efficient, and handled…" },
  { name: "Troy Longman", when: "a year ago", text: "Nicolette provides a great notary service. Im an attorney and use her for all my notary needs. She coordinates with my clients and makes it simple on me. All my clients are extremely happy with how easy Nicolette makes the…" },
  { name: "W&B Villa Construction, LLC", when: "a year ago", text: "Some notary moments require patience and understanding, specially if you are going throught a divorce. Nicolette was extremely professional, patient, friendly and she walks you through the process with ease to make sure you…" },
  { name: "Nathan Stice", when: "a year ago", text: "Nicolette was amazing. She was able to clearly explain my role in the notary process. The process was easy, thorough, and her follow up with my finalized documentation was quick and easy to access. She was patient and spent…" },
  { name: "Sharon Brellis", when: "a year ago", text: "Nicolette is just the most professional, organized, kindest, definitely affordable and accommodating notary republic I’ve EVER worked with ….and I’ve had to use Notary Services so many, many times in my life! She quickly…" },
  { name: "Jarred Mussen", when: "a year ago", text: "Great experience! Nicolette was very efficient and made everything extremely smooth and simple for my real estate closing! :)" },
  { name: "S. R.", when: "a year ago", text: "The notary process was quick and easy. Very little wait time. Nicolette was very kind and professional. She had everything prepared and gave me time to review the documents before signing. Thank you for making this swift and…" },
  { name: "Katrina Naxera", when: "a year ago", text: "Nicolette was so wonderful! She was friendly, professional, and easy to talk to. She made me feel very safe. She's amazing at her job and deserves a raise!" },
  { name: "Sonia Shisgal", when: "2 years ago", text: "My husband and I recently got through a divorce and to have our documents notarized we've worked along with Nicollete. She was truly a gem, she took care of us both while others were giving us a hard time. She was patient and…" },
  { name: "Brizanelly Murillo", when: "a year ago", text: "Very professional, knowledgeable, helpful and sweet! Also super convenient to do it through a video conference and she was right on time! 10/10 recommend!" },
  { name: "Cliff Jordan", when: "a year ago", text: "Nicollet was amazing! More than fair price for the service, took her time to make sure the docs were filled out completley and correctly.…" },
  { name: "Agustin Quinones", when: "a year ago", text: "Nicolette is very welcoming and professional in regards to her services. She's very open in explaining the entire process and the expectations. It was nice meeting her and finalizing my documentation on-time." },
  { name: "Glen Grafwallner", when: "a year ago", text: "Such a pleasant experience. Easy and quick. Nicolette was very helpful and efficient. Asked me about my upcoming birthday adding a personal touch to the experience." },
  { name: "Dakota Sky", when: "2 years ago", text: "They were fast kind and patient. Very polite and an over all enjoyable experience in the midst of a lot of chaos. I was like a breath of fresh air. Thank you" },
  { name: "Amy Queen", when: "a year ago", text: "Nicolette was wonderful to work with. She was polite and very professional. She made everything I needed to do extremely easy for me. Thanks again Nicolette!" },
  { name: "Chris", when: "a year ago", text: "Very pleasant experience with Nicolette, going through this particular situation. She did make the process easy to get through. Would enjoy using her again......under different circumstances, of course, LOL. Would recommend!" },
  { name: "Carolin De La Rosa", when: "2 years ago", text: "Nicole was easy going and professional during our session, she clarified any questions asked . Therefore making me feel comfortable during the process. I Would highly recommend to others." },
  { name: "Evandro Patricio", when: "2 years ago", text: "My experience with Nicolette was inceredibly easy and pleasant. She made the process very easy, was knoweledgeble and courteous. I highly recomend her services!" },
  { name: "Debbie Garcia", when: "a year ago", text: "My appointment with Nicolette was super smooth and easy! I would definetly recommend this professional to anyone in search of a great service." },
  { name: "Catherine DeFrancesco", when: "a year ago", text: "Nicolette was professional and friendly. She made the process smooth and easy. Thank you. I would definitely recommend her." },
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
