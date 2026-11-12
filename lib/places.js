import { IMG } from "./images";

// Facilities we travel to. Addresses verified Nov 2026 from facility and government sites.
// We are not affiliated with any of these facilities.

export const HOSPITALS = [
  {
    slug: "uf-shands-hospital-notary",
    name: "UF Health Shands Hospital",
    short: "UF Health Shands",
    address: "1600 SW Archer Rd, Gainesville, FL 32608",
    city: "Gainesville",
    image: IMG.hospitalRoom,
    intro: "Bedside notary at UF Health Shands Hospital, including UF Health Shands Children's Hospital and Select Specialty Hospital on the same campus. Same day, often within the hour.",
    notes: [
      "We meet patients in their room, a family lounge or any space the unit allows.",
      "UF Health Shands Children's Hospital is a hospital within the Shands campus at the same address, so parents and guardians can sign without leaving their child's floor.",
      "Select Specialty Hospital is on the 5th floor of the Shands building. We visit long-term acute care patients there too.",
      "Tell us the room number and building when you book. Construction can affect parking and entrances, so we build in extra time.",
    ],
  },
  {
    slug: "uf-health-heart-vascular-neuromedicine-hospital-notary",
    name: "UF Health Heart & Vascular and Neuromedicine Hospitals",
    short: "UF Health Heart & Vascular",
    address: "1505 SW Archer Rd, Gainesville, FL 32608",
    city: "Gainesville",
    image: IMG.hospitalBed,
    intro: "Notary visits for patients and families at the UF Health Heart & Vascular Hospital and Neuromedicine Hospital on Archer Road, across from the main Shands campus.",
    notes: [
      "Heart surgery and stroke recovery often bring sudden paperwork: powers of attorney, healthcare surrogates and HIPAA releases. We can usually come the same day.",
      "Neuromedicine patients must be alert and able to understand what they are signing. If timing matters, call and we will plan around the care team.",
    ],
  },
  {
    slug: "uf-health-cancer-hospital-notary",
    name: "UF Health Shands Cancer Hospital",
    short: "UF Health Cancer Hospital",
    address: "1515 SW Archer Rd, Gainesville, FL 32608",
    city: "Gainesville",
    image: IMG.holdingHands,
    intro: "Gentle, same day notary visits for patients and families at UF Health Shands Cancer Hospital on Archer Road.",
    notes: [
      "We often help with wills and self-proving affidavits, living wills, healthcare surrogates and powers of attorney so families can focus on care.",
      "We work around treatment schedules and will come back if the patient is too tired to sign.",
    ],
  },
  {
    slug: "north-florida-hospital-notary",
    name: "HCA Florida North Florida Hospital",
    short: "HCA Florida North Florida Hospital",
    address: "6500 W Newberry Rd, Gainesville, FL 32605",
    city: "Gainesville",
    image: IMG.hospitalLobby,
    intro: "Bedside notary at HCA Florida North Florida Hospital (formerly North Florida Regional Medical Center) on West Newberry Road. Same day visits, 7 days a week.",
    notes: [
      "Many families still call it North Florida Regional. It is the same hospital at 6500 W Newberry Rd.",
      "We meet patients in their room or a waiting area and bring witnesses when the document needs them.",
    ],
  },
  {
    slug: "malcom-randall-va-notary",
    name: "Malcom Randall VA Medical Center",
    short: "Malcom Randall VA",
    address: "1601 SW Archer Rd, Gainesville, FL 32608",
    city: "Gainesville",
    image: IMG.seniorCouple,
    intro: "Notary visits for veterans and their families at the Malcom Randall VA Medical Center in Gainesville, part of the VA North Florida/South Georgia Healthcare System.",
    notes: [
      "We help veterans sign powers of attorney, healthcare surrogates, affidavits, vehicle and property documents, and paperwork for family members.",
      "VA facilities have visitor check-in rules. Tell us the ward and room when you book and we will handle check-in.",
    ],
  },
  {
    slug: "uf-health-shands-rehab-hospital-notary",
    name: "UF Health Shands Rehab Hospital",
    short: "UF Health Shands Rehab",
    address: "4101 NW 89th Blvd, Gainesville, FL 32606",
    city: "Gainesville",
    image: IMG.signingTable,
    intro: "Notary visits at UF Health Shands Rehab Hospital in northwest Gainesville for patients recovering from strokes, injuries and surgery.",
    notes: [
      "Rehab stays are a common time to update powers of attorney and healthcare documents before going home. We schedule around therapy sessions.",
      "UF Health Shands Psychiatric Hospital shares this address. We can visit patients there when the care team agrees the patient can understand and sign.",
    ],
  },
  {
    slug: "lake-city-hospital-notary",
    name: "HCA Florida Lake City Hospital",
    short: "HCA Florida Lake City Hospital",
    address: "340 NW Commerce Dr, Lake City, FL 32055",
    city: "Lake City",
    image: IMG.hospitalRoom,
    intro: "Scheduled bedside notary visits at HCA Florida Lake City Hospital (formerly Lake City Medical Center) in Columbia County.",
    notes: [
      "Lake City is about 45 minutes from Gainesville, so we schedule visits ahead. For urgent needs, call and we will tell you the soonest time.",
      "Family members who are far away can often join by video with online notarization.",
    ],
  },
  {
    slug: "lake-city-va-medical-center-notary",
    name: "Lake City VA Medical Center",
    short: "Lake City VA",
    address: "619 S Marion Ave, Lake City, FL 32025",
    city: "Lake City",
    image: IMG.seniorCouple,
    intro: "Notary visits for veterans at the Lake City VA Medical Center, including hospice and long term care residents.",
    notes: [
      "We schedule Lake City visits ahead and can often pair them with other appointments in Columbia County.",
      "Bring the veteran's ID or tell us if it is held by the facility so we can plan identification.",
    ],
  },
];

export const JAILS = [
  {
    slug: "alachua-county-jail-notary",
    name: "Alachua County Jail",
    short: "Alachua County Jail",
    address: "3333 NE 39th Ave, Gainesville, FL 32609",
    city: "Gainesville",
    kind: "county",
    image: IMG.courthouse,
    intro: "Notary visits at the Alachua County Jail, run by the Alachua County Sheriff's Office, for powers of attorney, affidavits and family paperwork.",
    notes: [
      "Professional visits follow the jail's own schedule and rules. We confirm the inmate's name and booking number, then arrange the visit with the facility.",
      "The inmate's ID is usually held in property. The jail decides how it can be used for identification, and we plan around their process.",
    ],
  },
  {
    slug: "columbia-county-jail-notary",
    name: "Columbia County Detention Facility",
    short: "Columbia County Jail",
    address: "389 NW Quinten St, Lake City, FL 32055",
    city: "Lake City",
    kind: "county",
    image: IMG.paperStack,
    intro: "Scheduled notary visits at the Columbia County jail in Lake City for inmates who need documents signed.",
    notes: [
      "We schedule Lake City visits ahead and confirm the facility's professional visit rules first.",
    ],
  },
  {
    slug: "bradford-county-jail-notary",
    name: "Bradford County Jail",
    short: "Bradford County Jail",
    address: "945-A N Temple Ave, Starke, FL 32091",
    city: "Starke",
    kind: "county",
    image: IMG.courthouse,
    intro: "Notary visits at the Bradford County Jail in Starke, about 30 minutes northeast of Gainesville.",
    notes: [
      "The jail's office keeps weekday business hours. We coordinate the visit with staff before driving out.",
    ],
  },
  {
    slug: "levy-county-jail-notary",
    name: "Levy County Jail",
    short: "Levy County Jail",
    address: "9150 NE 80th Ave, Bronson, FL 32621",
    city: "Bronson",
    kind: "county",
    image: IMG.paperStack,
    intro: "Notary visits at the Levy County Detention Bureau in Bronson, southwest of Gainesville.",
    notes: [
      "We confirm the inmate's details and the facility's professional visit process before scheduling.",
    ],
  },
  {
    slug: "gilchrist-county-jail-notary",
    name: "Gilchrist County Jail",
    short: "Gilchrist County Jail",
    address: "9239 S US Hwy 129, Trenton, FL 32693",
    city: "Trenton",
    kind: "county",
    image: IMG.courthouse,
    intro: "Notary visits at the Gilchrist County Jail in Trenton, west of Gainesville.",
    notes: [
      "Small jails often need extra notice for professional visits. Call early and we will arrange it.",
    ],
  },
  {
    slug: "florida-state-prison-notary",
    name: "Florida state prisons near Gainesville",
    short: "State prisons",
    address: "Union, Bradford, Columbia and Gilchrist counties",
    city: "North Central Florida",
    kind: "prison",
    image: IMG.paperStack,
    intro: "We do notary visits at Florida Department of Corrections prisons near Gainesville, $175 per visit. We coordinate with the institution so the trip is not wasted.",
    facilities: [
      ["Reception and Medical Center", "7765 S CR 231, Lake Butler, FL 32054"],
      ["Union Correctional Institution", "7819 NW 228th St, Raiford, FL"],
      ["Florida State Prison", "23916 NW 83rd Ave, Raiford, FL 32083"],
      ["Columbia Correctional Institution", "216 SE Corrections Way, Lake City, FL 32025"],
      ["Lake City Correctional Facility", "7906 E US Hwy 90, Lake City, FL 32055"],
      ["Lancaster Correctional Institution", "3449 SW State Road 26, Trenton, FL 32693"],
    ],
    notes: [
      "State prisons control all visits. The inmate usually starts the request through their classification officer, and we work with the institution and family to get the visit approved.",
      "We confirm timing, identification and what documents can be brought in before we drive out.",
      "Call or text first so we can start the approval with the institution. Prison visits take more lead time than county jails.",
    ],
  },
];

export const CARE_HOMES = {
  "Skilled nursing and rehab": [
    ["Park Meadows Health & Rehabilitation Center", "3250 SW 41st Pl, Gainesville, FL 32608"],
    ["Plaza Health and Rehab", "4842 SW Archer Rd, Gainesville, FL 32608"],
    ["Gainesville Health and Rehabilitation", "4000 SW 20th Ave, Gainesville, FL 32607"],
    ["Terrace Healthcare and Rehabilitation Center", "7207 SW 24th Ave, Gainesville, FL 32608"],
    ["Palm Garden of Gainesville", "227 SW 62nd Blvd, Gainesville, FL 32607"],
    ["Parklands Care Center", "1000 SW 16th Ave, Gainesville, FL 32601"],
    ["Magnolia Ridge Health and Rehabilitation Center", "6517 NW 39th Ave, Gainesville, FL 32606"],
    ["Aspire at North Florida", "6700 NW 10th Pl, Gainesville, FL 32605"],
    ["Oak Hammock skilled nursing", "2660 SW 53rd Ln, Gainesville, FL 32608"],
    ["Williston Care Center", "300 NW 1st Ave, Williston, FL 32696"],
  ],
  "Assisted living and memory care": [
    ["Oak Hammock at the University of Florida", "5100 SW 25th Blvd, Gainesville, FL 32608"],
    ["The Windsor of Gainesville", "3605 NW 83rd St, Gainesville, FL 32606"],
    ["The Gables of Gainesville", "1415 Fort Clarke Blvd, Gainesville, FL 32606"],
    ["The Village at Gainesville", "8000 NW 27th Blvd, Gainesville, FL 32606"],
    ["Trustwell Living at Hunters Crossing Place", "4601 NW 53rd Ave, Gainesville, FL 32653"],
    ["Radiance of Gainesville memory care", "4607 NW 53rd Ave, Gainesville, FL 32606"],
    ["Charter Senior Living of Gainesville", "1001 SW 62nd Blvd, Gainesville, FL 32607"],
    ["Atrium at Gainesville", "2431 NW 41st St, Gainesville, FL 32606"],
  ],
  "Hospice": [
    ["Haven Hospice", "4200 NW 90th Blvd, Gainesville, FL 32606"],
  ],
};

export const EVERYDAY = [
  {
    slug: "notary-at-your-home",
    short: "Your home",
    title: "Home Notary Visits Gainesville FL | Notary Comes to Your House",
    description: "A mobile notary comes to your house, apartment or dorm in Gainesville and Alachua County. Same day, evenings and weekends. Witnesses and printing available.",
    h1: "A notary at your kitchen table",
    lead: "Stay home. Tell us the time and what you're signing, and one of our notaries comes to your house, apartment, condo or dorm.",
    image: IMG.livingRoom,
    side: IMG.twoWomenSigning,
    good: ["Families signing powers of attorney, wills and healthcare documents together", "Parents with kids at home or no time to drive across town", "Anyone with limited mobility or no car", "Sellers and buyers signing closing documents at home"],
    tips: ["Clear a table and have good lighting", "Have every signer's ID ready", "Don't sign anything before we arrive", "Pets are fine. We love dogs."],
  },
  {
    slug: "notary-at-your-office",
    short: "Your work",
    title: "Office Notary Gainesville FL | Notary Comes to Your Workplace",
    description: "Skip the trip. A mobile notary comes to your office, job site or business in Gainesville for employee forms, contracts, lien waivers and closings.",
    h1: "A notary at your office or job site",
    lead: "Don't take time off. We come to your desk, conference room, job site or front counter, and you're back to work in about 15 minutes.",
    image: IMG.officeMeeting,
    side: IMG.businessDoc,
    good: ["Busy professionals on a lunch break", "Businesses with several employees who need forms notarized", "Contractors signing lien waivers and affidavits on site", "Title companies, law offices and property managers"],
    tips: ["Book a quiet room if you can", "Tell us how many people are signing", "Ask about regular visits for your business"],
  },
  {
    slug: "notary-at-coffee-shop",
    short: "A coffee shop",
    title: "Meet a Notary at a Coffee Shop or Library in Gainesville",
    description: "Meet a mobile notary at a Gainesville coffee shop, library, restaurant or other public place. Quick, convenient and on your schedule.",
    h1: "Meet a notary at a coffee shop",
    lead: "Pick a coffee shop, library, restaurant or any public spot that's easy for you. We'll meet you there and be done before your coffee gets cold.",
    image: IMG.cafeTable,
    side: IMG.writingClose,
    good: ["People who'd rather not have a visitor at home", "Meeting halfway between two signers", "Students and UF staff near campus", "A quick signing between errands"],
    tips: ["Choose a spot with a table and seating", "Send us the exact location when you book", "Quiet corners work best for private documents"],
  },
  {
    slug: "notary-in-parking-lot",
    short: "A parking lot",
    title: "Curbside Notary Gainesville | Meet in a Parking Lot",
    description: "Curbside mobile notary in Gainesville. Meet us in a parking lot and sign from your car. Fast for VIN verifications, single documents and busy days.",
    h1: "Curbside notary in any parking lot",
    lead: "In a hurry? Meet us in a parking lot and sign right from your car. Perfect for one quick document or a VIN verification.",
    image: IMG.parkingLot,
    side: IMG.penOnPaper,
    good: ["One or two quick documents", "VIN verifications, since the car is right there", "Signers who can't easily leave the car", "Meeting between work and home"],
    tips: ["Pick a well-lit lot with a landmark", "Text us your car's make and color when you arrive", "Have your ID out and ready"],
  },
];

export const PLACE_HUBS = [
  ...EVERYDAY.map((e) => ({ slug: e.slug, title: e.short, image: e.image })),
  { slug: "hospital-notary-gainesville", title: "Hospitals", image: IMG.hospitalRoom },
  { slug: "jail-notary-gainesville", title: "Jails and prisons", image: IMG.courthouse },
  { slug: "nursing-home-notary-gainesville", title: "Nursing homes and assisted living", image: IMG.seniorCouple },
];

export const placeBySlug = (slug) => HOSPITALS.find((p) => p.slug === slug) || JAILS.find((p) => p.slug === slug);
export const isHospital = (p) => HOSPITALS.includes(p);

export const everydayBySlug = (slug) => EVERYDAY.find((e) => e.slug === slug);
