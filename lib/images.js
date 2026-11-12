// Photos are served from Unsplash's CDN (free license, sized on the fly).
// Swap any of these for real photos of Stratton Collective appointments when you have them.
const u = (id) => `https://images.unsplash.com/photo-${id}`;

export const IMG = {
  stampOnDoc: { src: u("1619418602850-35ad20aa1700"), alt: "Notary stamp resting on a signed document" },
  brassSeal: { src: u("1526979887034-612a597add81"), alt: "Brass notary seal embosser" },
  inkStamps: { src: u("1593448806592-409752fd816b"), alt: "Rubber stamps and an ink pad on a desk" },
  sealedSignatures: { src: u("1589330694653-ded6df03f754"), alt: "Signed document with an official red seal" },
  woodStamp: { src: u("1774891937400-b5e32f719fae"), alt: "Notary stamp on a desk" },
  twoWomenSigning: { src: u("1562564055-71e051d33c19"), alt: "Client signing paperwork while the notary watches" },
  manSigning: { src: u("1763729805496-b5dbf7f00c79"), alt: "Man signing a legal document with a pen" },
  penOnPaper: { src: u("1450101499163-c8848c66ca85"), alt: "Person signing a document at a desk" },
  reviewingDocs: { src: u("1775163024488-e88e4a71179f"), alt: "Two people reviewing documents at a table" },
  handshakeDocs: { src: u("1681505531034-8d67054e07f6"), alt: "Handshake over signed contract papers" },
  paperStack: { src: u("1771758249853-415175dc29b9"), alt: "Stack of legal papers and files" },
  businessDoc: { src: u("1758518730327-98070967caab"), alt: "Professional showing a document to a client" },
  writingClose: { src: u("1521791055366-0d553872125f"), alt: "Close up of a hand signing a page" },
  signingTable: { src: u("1603796846097-bee99e4a601f"), alt: "Signing documents at a table" },
  hospitalRoom: { src: u("1512678080530-7760d81faba6"), alt: "Hospital room with bed and visitor couch" },
  hospitalBed: { src: u("1778151270902-cb0ca572f2ee"), alt: "Modern hospital room" },
  hospitalLobby: { src: u("1519494026892-80bbd2d6fd0d"), alt: "Hospital lobby reception" },
  holdingHands: { src: u("1584515933487-779824d29309"), alt: "Holding the hand of an older family member" },
  seniorCouple: { src: u("1761839257647-df30867afd54"), alt: "Smiling older couple sitting together" },
  houseKeys: { src: u("1759428679273-11d914866394"), alt: "Hand holding house keys at a closing" },
  houseModel: { src: u("1560518883-ce09059eeffa"), alt: "Small house model and keys on a table" },
  houseBlueprint: { src: u("1560520653-9e0e4c89eb11"), alt: "House model on mortgage paperwork" },
  mortgageDocs: { src: u("1562654501-a0ccc0fc3fb1"), alt: "Mortgage documents on a desk" },
  passport: { src: u("1581553673739-c4906b5d0de8"), alt: "Open passport with travel stamps" },
  passportStamps: { src: u("1764625239088-50a840a1353b"), alt: "Passport pages with official stamps" },
  videoCall: { src: u("1612831455359-970e23a1e4e9"), alt: "Person on a video call on a laptop" },
  laptopCall: { src: u("1588196749597-9ff075ee6b5b"), alt: "Laptop open to a video meeting" },
  lastWill: { src: u("1528752477378-485b46bedcde"), alt: "Last will and testament document" },
  fountainPen: { src: u("1455390582262-044cdead277a"), alt: "Fountain pen signing on paper" },
  centuryTower: { src: u("1589824194213-36d8d089d5ac"), alt: "Century Tower at the University of Florida in Gainesville" },
  ufBuilding: { src: u("1650149044619-76a58289b9e7"), alt: "Brick building on the University of Florida campus" },
  paynesPrairie: { src: u("1695528652163-4aaa9e92325e"), alt: "Wetland at sunset near Gainesville, Florida" },
  springsOaks: { src: u("1609369752265-fafb640d9cf4"), alt: "Oak trees over a North Florida spring" },
  marshGazebo: { src: u("1709833785355-da6c0fc58c5d"), alt: "Boardwalk shelter over a North Central Florida marsh" },
  livingRoom: { src: u("1554995207-c18c203602cb"), alt: "Bright living room with a couch and coffee table" },
  officeMeeting: { src: u("1517048676732-d65bc937f952"), alt: "Coworkers around a table with papers at the office" },
  cafeTable: { src: u("1542372147193-a7aca54189cd"), alt: "Coffee shop table with a coffee and pastry" },
  parkingLot: { src: u("1636241166300-b801e6ddc0f4"), alt: "Parking lot with cars in Florida" },
  courthouse: { src: u("1773433392027-2dff23126d86"), alt: "Neoclassical courthouse columns" },
};

// Build a sized CDN URL
export const img = (image, w = 1200, h) =>
  `${image.src}?auto=format&fit=crop&crop=entropy&q=70&w=${w}${h ? `&h=${h}` : ""}`;

export const srcSet = (image, ratio) =>
  [480, 800, 1200, 1600].map((w) => `${img(image, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`).join(", ");
