import { IMG } from "./images";

// Each service gets its own page targeting one thing people search for.
export const SERVICES = [
  {
    slug: "power-of-attorney-in-florida",
    short: "Power of attorney",
    title: "Power of Attorney Notary in Gainesville, FL | Witnesses Provided",
    description:
      "Florida powers of attorney need two witnesses and a notary. We bring both to your home, hospital room or office in Gainesville, often the same day.",
    h1: "Power of attorney notary in Gainesville",
    lead: "Florida requires two witnesses and a notary for a power of attorney. We bring all three to you, at home, in the hospital or at work.",
    hero: IMG.holdingHands,
    side: IMG.manSigning,
    sections: [
      ["What Florida requires", "Under Florida Statute 709.2105, a power of attorney must be signed by the principal, signed by two witnesses, and acknowledged before a notary. The agent named in the document should not be a witness, and the notary cannot be one of the two witnesses. Without all of this, banks, hospitals and title companies can refuse to honor it."],
      ["We handle the hard part", "The hardest part is usually finding two independent witnesses at the same time and place. Tell us when you book and we bring them for $30 each. If the signer is in the hospital or a care facility, we coordinate with staff so the signing is calm and quick."],
      ["Durable, general, limited and more", "We notarize durable powers of attorney, general and limited powers of attorney, and the related healthcare surrogate designation. We do not draft or choose the document for you. Your attorney or an approved form does that, and we make sure it is signed correctly."],
    ],
    bring: ["The unsigned power of attorney", "A current government photo ID for the principal", "Two adult witnesses, or ask us to bring them"],
    faqs: [
      ["Does a Florida power of attorney have to be notarized?", "Yes. Florida Statute 709.2105 requires the principal's signature, two witnesses and a notary acknowledgment."],
      ["Can a family member be a witness?", "The agent cannot be a witness. Other adults can, but many attorneys prefer witnesses who are not related to the principal. We can provide independent witnesses."],
      ["Can a power of attorney be signed online?", "Sometimes. Florida has extra rules when a power of attorney with banking, investment or real estate powers is signed online. Call us first and we will tell you if online works for your document."],
      ["What if the principal cannot sign?", "Florida allows another person to sign at the principal's direction and in their presence, if the principal is alert and able to communicate. We will talk through it when you book."],
    ],
  },
  {
    slug: "apostille",
    short: "Apostille",
    title: "Florida Apostille Services in Gainesville | Notary and Apostille Help",
    description:
      "Need a document accepted in another country? We notarize it correctly and help you get a Florida apostille. Birth certificates, POAs, affidavits, diplomas.",
    h1: "Florida apostille help in Gainesville",
    lead: "Sending a document overseas? We notarize it the right way and help you request the Florida apostille, so it is not rejected abroad.",
    hero: IMG.passportStamps,
    side: IMG.sealedSignatures,
    sections: [
      ["What an apostille is", "An apostille is a certificate that lets a U.S. document be accepted in countries that belong to the Hague Apostille Convention. It confirms the signature and seal on the document are real. It does not verify what the document says."],
      ["How it works with a Florida notary", "For Florida notarized documents, the apostille is issued by the Florida Department of State. The notarization has to be done correctly first or the request can be rejected. We notarize with the right wording and help you prepare and send the request."],
      ["Common apostille documents", "Powers of attorney for property abroad, affidavits, consent letters, diplomas and transcripts, and Florida vital records like birth and marriage certificates. Federal documents such as FBI background checks go through the U.S. Department of State instead."],
    ],
    bring: ["Your document, unsigned if it needs notarizing", "A current government photo ID", "The country where the document will be used"],
    faqs: [
      ["Who issues a Florida apostille?", "The Florida Department of State. We notarize your document correctly and help you with the request."],
      ["My country is not in the Hague Convention. What now?", "Those countries usually need authentication and embassy legalization instead. Call us and we will explain the steps."],
      ["Can you apostille a document from another state?", "No. Documents from other states get their apostille from that state. Federal documents go through the U.S. Department of State."],
    ],
  },
  {
    slug: "real-estate",
    short: "Loan signings and real estate",
    title: "Loan Signing Agent Gainesville FL | Real Estate Notary",
    description:
      "Certified loan signing agent in Gainesville and Alachua County. Purchases, refinances, HELOCs, seller packages and deeds. Dual tray printing and fast scan backs.",
    h1: "Loan signing agent and real estate notary in Gainesville",
    lead: "On time, careful signings for title companies, lenders, buyers and sellers across Alachua County.",
    hero: IMG.houseKeys,
    side: IMG.houseBlueprint,
    sections: [
      ["For title companies and lenders", "Purchase, refinance, HELOC, reverse mortgage and seller packages. Dual tray laser printing for letter and legal, and quick scan backs."],
      ["For buyers and sellers", "Sign at home, at work or anywhere in Gainesville. Sellers who live out of state can often sign online."],
      ["Deeds", "Florida deeds need two witnesses and a notary to be recorded. We provide both."],
    ],
    bring: ["Government photo ID for every signer", "Any instructions from your title company", "Your checkbook if funds are due at signing"],
    faqs: [
      ["Do you print loan packages?", "Yes. Send the package and we print, sign, and return scan backs fast."],
      ["Can you do signings on weekends?", "Yes. We are open 7 days, 8am to 8pm."],
    ],
  },
  {
    slug: "quit-claim-deed-notary",
    short: "Quit claim deeds",
    title: "Quit Claim Deed Notary Gainesville FL | Two Witnesses Included",
    description:
      "Notarize a Florida quit claim or warranty deed in Gainesville. Florida deeds need two witnesses and a notary to record. We bring both. Same day.",
    h1: "Quit claim and warranty deed notary in Gainesville",
    lead: "Florida deeds need two witnesses and a notary before the clerk will record them. We bring the witnesses and the stamp.",
    hero: IMG.houseModel,
    side: IMG.mortgageDocs,
    sections: [
      ["What Florida requires for a deed", "Under Florida law, a deed must be signed in front of two witnesses, and the signature must be acknowledged before a notary for the Alachua County Clerk to record it. Witnesses' names and addresses are printed on the deed."],
      ["Common reasons for a quit claim", "Adding or removing a spouse, moving property into a trust or LLC, transfers between family members, and clearing up title after a divorce."],
      ["What we do not do", "A notary cannot prepare deeds or give legal advice. Have an attorney or title company prepare the deed, then we handle the signing."],
    ],
    bring: ["The unsigned deed", "Photo ID for every person signing", "Two witnesses, or ask us to bring them"],
    faqs: [
      ["Do both spouses have to sign?", "Often yes, because of Florida homestead rules. Ask the person who prepared your deed."],
      ["Where do I record the deed?", "With the Alachua County Clerk of Court, or the clerk in the county where the property sits."],
    ],
  },
  {
    slug: "will-and-estate-notary",
    short: "Wills and estate documents",
    title: "Will and Trust Notary Gainesville | Self-Proving Affidavit",
    description:
      "Witnesses and notary for Florida wills, self-proving affidavits, trusts, living wills and healthcare surrogates. We come to your home or hospital in Gainesville.",
    h1: "Will, trust and estate document notary in Gainesville",
    lead: "Florida wills need two witnesses, and a notarized self-proving affidavit makes probate much easier. We bring witnesses and notary together.",
    hero: IMG.lastWill,
    side: IMG.fountainPen,
    sections: [
      ["Why notarize a Florida will", "A Florida will is valid with two witnesses. Adding a self-proving affidavit, signed by you and the witnesses before a notary, means the witnesses usually do not need to be found later when the will goes through probate."],
      ["Estate documents we handle", "Wills and self-proving affidavits, revocable trusts and trust certifications, living wills, healthcare surrogate designations, and powers of attorney, often all in one visit."],
      ["At home, in hospital or online", "We come to homes, hospitals and senior living. Some estate documents can be signed online, but Florida has strict rules for wills done remotely, so call before booking online."],
    ],
    bring: ["Unsigned documents from your attorney", "Photo ID", "Two witnesses who are not beneficiaries, or ask us to bring them"],
    faqs: [
      ["Can a beneficiary witness my will?", "Florida law allows it in some cases, but it is better practice to use witnesses who inherit nothing. We can provide them."],
      ["Do you write wills?", "No. A notary cannot draft legal documents. Your attorney prepares them and we handle the signing."],
    ],
  },
  {
    slug: "healthcare-documents-notary",
    short: "Healthcare directives",
    title: "Healthcare Surrogate and Living Will Notary Gainesville",
    description:
      "Healthcare surrogate designations, living wills, advance directives and HIPAA forms signed with two witnesses and a notary in Gainesville. Same day.",
    h1: "Healthcare surrogate, living will and HIPAA notary",
    lead: "Make sure the right person can speak for you. We bring two witnesses and a notary so your healthcare documents are signed correctly.",
    hero: IMG.seniorCouple,
    side: IMG.hospitalLobby,
    sections: [
      ["What Florida requires", "Florida healthcare surrogate designations and living wills must be signed in front of two adult witnesses, and at least one should not be a spouse or blood relative. Notarization is not always required by law, but many hospitals, banks and families ask for it, and it makes the document harder to challenge."],
      ["Documents we sign", "Designation of healthcare surrogate, living will, advance directive, HIPAA authorization, Do Not Resuscitate related paperwork your doctor provides, and caregiver authorizations."],
    ],
    bring: ["Unsigned forms", "Photo ID", "Two witnesses, or ask us to bring them"],
    faqs: [
      ["Can my surrogate be a witness?", "No. The person you name as surrogate should not witness the document."],
      ["Can you come to the hospital for this?", "Yes. We do bedside signings every week."],
    ],
  },
  {
    slug: "vin-verification-vehicle-title-notary",
    short: "VIN verification and titles",
    title: "VIN Verification Notary Gainesville | Florida HSMV 82042",
    description:
      "Florida VIN verification (HSMV 82042) by a notary in Gainesville, plus bills of sale and title affidavits. We come to your car. Same day.",
    h1: "VIN verification and vehicle paperwork notary",
    lead: "Bringing a car from out of state? A Florida notary can complete your VIN verification form. We come to the vehicle.",
    hero: IMG.signingTable,
    side: IMG.penOnPaper,
    sections: [
      ["Florida VIN verification", "Vehicles titled in another state need a VIN verification on form HSMV 82042 before you can title them in Florida. A Florida notary can complete it by physically inspecting the vehicle and its VIN, so we come to wherever the car is parked."],
      ["Other vehicle documents", "Bills of sale, odometer and title related affidavits, powers of attorney for vehicle transfers, and boat and trailer paperwork."],
    ],
    bring: ["The vehicle, with the VIN visible", "Your out of state title or registration", "Photo ID"],
    faqs: [
      ["Does the car have to be there?", "Yes. The notary has to see the vehicle and the VIN in person."],
      ["Can you do it at my apartment?", "Yes, anywhere the car is parked in Gainesville and Alachua County."],
    ],
  },
  {
    slug: "travel-consent-letter-notary",
    short: "Travel consent letters",
    title: "Child Travel Consent Letter Notary Gainesville FL",
    description:
      "Notarized travel consent letters for children traveling with one parent, grandparents or school groups. Online or mobile notary in Gainesville, same day.",
    h1: "Notarized travel consent letters for minors",
    lead: "Traveling with a child without both parents? A notarized consent letter helps at the airport, the border and the cruise terminal.",
    hero: IMG.passport,
    side: IMG.reviewingDocs,
    sections: [
      ["Why notarize a travel consent", "U.S. Customs and Border Protection recommends that children traveling with one parent, or with someone other than their parents, carry a signed consent letter. Airlines, cruise lines and other countries often expect it to be notarized."],
      ["Fast for busy families", "The absent parent can sign online by video from anywhere, so you do not need to coordinate schedules. We can also meet you in person in Gainesville."],
    ],
    bring: ["The consent letter, unsigned", "Photo ID for the parent signing", "Copies of passports if your letter lists them"],
    faqs: [
      ["Can the other parent sign from another state?", "Yes. Online notarization works from anywhere."],
      ["Do grandparents need one?", "It is strongly recommended when children travel with anyone other than their parents."],
    ],
  },
  {
    slug: "affidavit-notary",
    short: "Affidavits and contracts",
    title: "Affidavit and Contract Notary Gainesville | Same Day Mobile",
    description:
      "Sworn affidavits, contracts, small claims forms, name changes, parenting plans and landlord tenant documents notarized in Gainesville. Mobile or online.",
    h1: "Affidavit, contract and court form notary",
    lead: "Sworn statements, contracts and court forms notarized at your home, office or online, often the same day.",
    hero: IMG.handshakeDocs,
    side: IMG.businessDoc,
    sections: [
      ["Documents we notarize", "Affidavits and sworn statements, contracts and agreements, small claims and county court forms, name change and parenting plan paperwork, landlord and tenant notices, lien waivers, and business forms."],
      ["Oaths and acknowledgments", "Some documents need you to swear an oath (a jurat), others just need your signature acknowledged. Your document usually says which. If not, you choose, and we explain the difference."],
    ],
    bring: ["Unsigned document", "Photo ID", "Any other signers and their IDs"],
    faqs: [
      ["Can you tell me which form to use?", "No. Notaries cannot give legal advice. The court self help center or an attorney can."],
      ["Can multiple people sign at different times?", "Yes. Each signer can be notarized separately."],
    ],
  },
];

export const serviceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
