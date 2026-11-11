// Location pages. Each one has its own local details so Google sees unique pages, not copies.
export const TOWNS = [
  {
    slug: "gainesville-florida",
    name: "Gainesville",
    county: "Alachua County",
    intro:
      "Gainesville is home base. We come to your house, apartment, office, hospital room or coffee shop anywhere in town, usually the same day.",
    places: ["University of Florida", "UF Health Shands", "North Florida Regional Medical Center", "Malcom Randall VA Medical Center", "Butler Plaza", "Haile Plantation", "Downtown Gainesville", "Tower Road", "Duckpond", "Millhopper"],
    focus: [
      ["UF faculty, staff and students", "Loyalty oaths, domestic partnership affidavits, I-9 help, and documents for international students and scholars."],
      ["Hospital and senior living visits", "Bedside notarizations at UF Health Shands, North Florida Regional, the VA and assisted living facilities around town."],
      ["Real estate and closings", "Deeds, closing packages and loan signings for Gainesville title companies, lenders and buyers."],
    ],
  },
  {
    slug: "newberry-florida",
    name: "Newberry",
    county: "Alachua County",
    intro:
      "Newberry is a quick drive west of Gainesville. We meet you at home, at the farm, or at your office, often the same day.",
    places: ["Downtown Newberry", "Jonesville", "Oakmont", "Newberry Village", "Champions Park area", "SW 250th St corridor"],
    focus: [
      ["New construction and land", "Deeds, closing documents and contractor paperwork for one of the fastest growing towns in the county."],
      ["Families and estates", "Powers of attorney, healthcare directives and wills witnessing at your kitchen table."],
      ["Farms and small businesses", "Bills of sale, affidavits, lien waivers and business forms."],
    ],
  },
  {
    slug: "high-springs-florida",
    name: "High Springs",
    county: "Alachua County",
    intro:
      "We travel to High Springs for in person signings and offer online notarization when the drive does not make sense for you.",
    places: ["Downtown High Springs", "Ginnie Springs area", "Poe Springs area", "US 441 corridor", "Santa Fe River area"],
    focus: [
      ["Property and land", "Deeds, quit claims and closing paperwork for homes and acreage."],
      ["Estate planning", "Powers of attorney and healthcare documents with witnesses arranged."],
      ["Vehicle and boat paperwork", "Bills of sale and title related affidavits."],
    ],
  },
  {
    slug: "alachua-florida",
    name: "Alachua",
    county: "Alachua County",
    intro:
      "From Main Street to Progress Park, we bring the notary to you in the City of Alachua.",
    places: ["Main Street Alachua", "Progress Park", "Turkey Creek", "US 441", "Santa Fe area"],
    focus: [
      ["Business and biotech", "HR onboarding forms, affidavits and agreements for companies in Progress Park."],
      ["Home closings", "Deeds and loan signings for buyers, sellers and refinances."],
      ["Families", "Powers of attorney, travel consent letters and healthcare directives."],
    ],
  },
  {
    slug: "archer-florida",
    name: "Archer",
    county: "Alachua County",
    intro:
      "Archer is about 20 minutes southwest of Gainesville. We come out for same day and scheduled appointments.",
    places: ["Downtown Archer", "SR 24 corridor", "SR 45 corridor", "Rural Archer"],
    focus: [
      ["Land and homes", "Deeds, quit claims and closing documents."],
      ["Estate planning", "Powers of attorney and healthcare surrogate forms with witnesses."],
      ["Everyday forms", "Affidavits, bills of sale and consent letters."],
    ],
  },
  {
    slug: "hawthorne-florida",
    name: "Hawthorne",
    county: "Alachua County",
    intro:
      "We serve Hawthorne and east Alachua County with mobile visits or a quick online session.",
    places: ["Downtown Hawthorne", "SR 20 corridor", "Lochloosa area", "Grove Park"],
    focus: [
      ["Property", "Deeds and closing documents for homes and land."],
      ["Families", "Powers of attorney, healthcare directives and guardianship forms."],
      ["Vehicles", "Bills of sale and title affidavits."],
    ],
  },
  {
    slug: "micanopy-florida",
    name: "Micanopy",
    county: "Alachua County",
    intro:
      "Micanopy is a short drive south of Gainesville on US 441. We come to you, or you can sign online.",
    places: ["Historic Micanopy", "US 441 corridor", "Paynes Prairie area", "Wacahoota"],
    focus: [
      ["Homes and land", "Deeds, quit claims and closing paperwork."],
      ["Estate planning", "Powers of attorney and healthcare documents."],
      ["Small business", "Affidavits, contracts and business forms."],
    ],
  },
  {
    slug: "waldo-florida",
    name: "Waldo",
    county: "Alachua County",
    intro:
      "We travel to Waldo and northeast Alachua County for scheduled and same day appointments.",
    places: ["Downtown Waldo", "US 301 corridor", "Santa Fe Lake area", "Lake Alto area"],
    focus: [
      ["Property", "Deeds and closing documents."],
      ["Families", "Powers of attorney and healthcare documents with witnesses."],
      ["Vehicles", "Bills of sale and title affidavits."],
    ],
  },
  {
    slug: "lake-city-florida",
    name: "Lake City",
    county: "Columbia County",
    intro:
      "We serve Lake City and Columbia County with scheduled mobile appointments and online notarization any day of the week.",
    places: ["Downtown Lake City", "Lake City Medical Center", "Lake City VA Medical Center", "US 90 corridor", "I-75 and US 90 area"],
    focus: [
      ["Hospital and VA visits", "Bedside notarizations for patients and families."],
      ["Real estate", "Deeds and loan signings for Columbia County closings."],
      ["Estate planning", "Powers of attorney and healthcare documents."],
    ],
  },
  {
    slug: "jacksonville-florida",
    name: "Jacksonville",
    county: "Duval County",
    intro:
      "For Jacksonville clients we offer Florida online notarization by live video, plus scheduled mobile appointments in Northeast Florida.",
    places: ["Riverside", "Avondale", "San Marco", "Southside", "Northside", "the Beaches", "Orange Park", "Fleming Island", "Ponte Vedra"],
    focus: [
      ["Military and VA", "Powers of attorney and affidavits for families at NAS Jacksonville and Naval Station Mayport."],
      ["Hospitals", "Documents for patients at Baptist, UF Health Jacksonville and Mayo Clinic."],
      ["Real estate", "Deeds and loan signings across Duval County."],
    ],
  },
];

export const townBySlug = (slug) => TOWNS.find((t) => t.slug === slug);
