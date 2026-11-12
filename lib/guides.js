import { IMG } from "./images";

// Plain-English guides that answer what Gainesville clients actually ask.
// Facts checked against Florida Statutes ch. 117, 689, 709, 732, 765 and the Florida Department of State (Nov 2026).
// Each section: { h, p: [paragraphs], ul?: [bullets] }

export const GUIDES = [
  {
    slug: "how-much-does-a-mobile-notary-cost-in-gainesville",
    title: "How Much Does a Mobile Notary Cost in Gainesville, FL?",
    description: "What mobile notary visits cost in Gainesville, why they cost more than a bank, Florida's $10 notary fee cap, and how to keep the price down.",
    category: "Pricing",
    image: IMG.inkStamps,
    related: ["/pricing", "/mobile-notary", "/online-notary"],
    sections: [
      { h: "The short answer", p: ["In Gainesville, a scheduled mobile notary visit with Stratton Collective starts at $75. Next day starts at $125, same day is $200 flat, and an emergency visit within the hour is $275 flat within 20 miles of Gainesville. Witnesses are $30 each, and printing up to 20 pages is free."] },
      { h: "Why a mobile notary costs more than a bank", p: ["Florida law caps the notary fee itself at $10 for each notarial act. What you pay a mobile notary covers everything else: driving to you, waiting at a hospital or jail, evenings and weekends, printing your documents, and bringing witnesses.", "A bank or shipping store may notarize for free or a small fee, but only during business hours, only at their counter, and many will not notarize wills, powers of attorney or real estate documents, or bring witnesses."] },
      { h: "What changes the price", ul: ["How soon you need us: scheduled visits cost less than same day or emergency visits", "Distance: Gainesville and nearby towns cost less than Lake City or Jacksonville", "Witnesses: Florida powers of attorney, wills and deeds need two", "Location: jail and prison visits are $175 because of check-in and wait times", "Number of signers and documents in a large package"] },
      { h: "How to keep the cost down", ul: ["Book 72 hours ahead when you can", "Have every signer's ID ready and the documents filled in but unsigned", "Bring your own witnesses if they are allowed for your document", "Ask about online notarization if you do not need us in person"] },
    ],
    faqs: [
      ["Is there a free notary in Gainesville?", "Some banks and credit unions notarize free for their customers during business hours. They often decline wills, powers of attorney and real estate documents and do not travel or provide witnesses."],
      ["Do you charge per signature?", "The visit price covers a normal appointment. Large loan packages or many signers may cost more, and we tell you before you book."],
    ],
  },
  {
    slug: "what-id-do-i-need-for-a-notary-in-florida",
    title: "What ID Do You Need to Get Something Notarized in Florida?",
    description: "The forms of ID a Florida notary can accept, what to do if your ID is expired or lost, and how credible witnesses work.",
    category: "Before your appointment",
    image: IMG.passport,
    related: ["/faq", "/hospital-notary-gainesville", "/jail-notary-gainesville"],
    sections: [
      { h: "IDs a Florida notary can accept", p: ["Under Florida Statute 117.05, a notary can rely on an ID that is current or was issued within the past five years and has a serial or ID number. Accepted IDs include:"], ul: ["A Florida driver license or Florida ID card", "A U.S. passport", "A foreign passport stamped by U.S. immigration authorities", "A driver license or state ID from another state, a U.S. territory, Canada or Mexico", "A U.S. military ID", "A veteran health ID card from the VA", "An inmate ID from the Florida Department of Corrections or the federal Bureau of Prisons, for inmates in custody", "An ID card issued by U.S. Citizenship and Immigration Services"] },
      { h: "What if my ID is expired?", p: ["An ID can be used if it was issued within the past five years, even if it has since expired, as long as it has an ID number and still looks like you. If it is older than that, you will need another option."] },
      { h: "What if I don't have any ID?", p: ["Florida allows identification by credible witnesses. One witness who personally knows both you and the notary, or two witnesses who show their own valid ID, can swear in writing that you are who you say you are. The witnesses cannot have a financial interest in the document.", "This is common for hospital patients and nursing home residents whose wallet is at home. Tell us when you book and we will plan for it."] },
      { h: "Inmates without ID", p: ["For someone in a jail or prison whose ID was taken at booking, Florida allows a sworn written statement from a law enforcement officer confirming the person's identity, in addition to inmate ID cards."] },
    ],
    faqs: [
      ["Can I use a photo of my ID on my phone?", "No. The notary needs to see the physical ID, or for online notarization, scan it through the identity check."],
      ["Is a school or work ID enough?", "Not on its own. Florida's list is specific. Use credible witnesses if you have nothing on the list."],
    ],
  },
  {
    slug: "how-to-get-a-florida-apostille",
    title: "How to Get a Florida Apostille: Step-by-Step Guide",
    description: "How to get an apostille on a Florida notarized document, birth certificate or diploma, where to send it, the state fee and common mistakes.",
    category: "Apostille",
    image: IMG.passportStamps,
    related: ["/apostille", "/online-notary"],
    sections: [
      { h: "What an apostille is", p: ["An apostille is a certificate attached to a document so it will be accepted in a country that belongs to the Hague Apostille Convention. In Florida, the Department of State, Division of Corporations is the only office that issues apostilles. A notary cannot issue one."] },
      { h: "Which documents Florida will apostille", ul: ["Documents notarized by a Florida notary public", "Florida birth, death and marriage certificates signed by the State Registrar", "Florida court records certified by a Clerk of Court", "Florida school transcripts with the registrar's signature notarized when issued", "Florida vehicle titles certified by the state"], p: ["Federal documents, like an FBI background check, go to the U.S. Department of State instead. Documents from another state go to that state."] },
      { h: "Step by step", ul: ["Get the document notarized correctly by a Florida notary, in English, or get a certified copy from the issuing office", "Fill out the Department of State's Apostille and Notarial Certificate Request Form, including the destination country", "Include payment. As of 2026 the state fee is $10 per document, by check or money order payable to the Florida Department of State", "Include a prepaid return envelope or air bill", "Mail or courier the packet to the Division of Corporations Apostille Section in Tallahassee"] },
      { h: "Common reasons apostilles get rejected", ul: ["The notary certificate is missing required wording or the notary's commission is expired", "The document is a photocopy notarized by the person who printed it", "The destination country is missing from the request", "The document came from another state"] },
    ],
    faqs: [
      ["How long does a Florida apostille take?", "Processing time varies by season. Check the Department of State website for current times, and plan extra time for mailing."],
      ["Can you notarize my document for an apostille online?", "Often yes, if the receiving country accepts electronic notarization. Ask the agency receiving your document first."],
    ],
  },
  {
    slug: "how-to-notarize-a-power-of-attorney-in-florida",
    title: "How to Sign and Notarize a Power of Attorney in Florida",
    description: "Florida's signing rules for powers of attorney: two witnesses, a notary, who can witness, what to bring, and hospital or online options.",
    category: "Estate planning",
    image: IMG.holdingHands,
    related: ["/power-of-attorney-in-florida", "/hospital-notary-gainesville", "/nursing-home-notary-gainesville"],
    sections: [
      { h: "Florida's rule", p: ["Under Florida Statute 709.2105, a power of attorney must be signed by the principal, signed by two subscribing witnesses, and acknowledged before a notary public. Missing any of these can make banks, title companies and hospitals refuse it."] },
      { h: "Who can be a witness", ul: ["Any competent adult who watches the principal sign", "Not the agent named in the document", "Many attorneys prefer witnesses who are not related to the principal", "We can bring two independent witnesses for $30 each"] },
      { h: "What to have ready", ul: ["The power of attorney, filled in but unsigned", "The principal's ID (see our ID guide)", "Two witnesses, or ask us to bring them", "The principal must be alert and able to understand what they are signing"] },
      { h: "Signing in the hospital or a care home", p: ["Many powers of attorney are signed after a sudden illness. We come to UF Health Shands, HCA Florida North Florida Hospital, the Malcom Randall VA and every nursing home in Alachua County. If the principal cannot physically sign, Florida allows another person to sign at their direction and in their presence."] },
      { h: "Can it be done online?", p: ["Florida allows remote online notarization, but powers of attorney with banking, investment or real estate powers have extra requirements when signed online. Call us before booking an online session for a power of attorney."] },
    ],
    faqs: [
      ["Does a Florida power of attorney expire?", "A durable power of attorney stays in effect if the principal becomes incapacitated, until it is revoked or the principal dies. Ask an attorney about your situation."],
      ["Can a notary write my power of attorney?", "No. Florida notaries who are not attorneys cannot draft legal documents or give legal advice."],
    ],
  },
  {
    slug: "how-online-notarization-works-in-florida",
    title: "How Online Notarization Works in Florida (Remote Online Notary Guide)",
    description: "What remote online notarization is, what you need, how identity checks work, which documents qualify and how to get your notarized PDF.",
    category: "Online notary",
    image: IMG.videoCall,
    related: ["/online-notary", "/travel-consent-letter-notary", "/uf-employees"],
    sections: [
      { h: "Is online notarization legal in Florida?", p: ["Yes. Florida law allows registered online notaries to notarize documents over live audio and video. You can be anywhere in the world, and the notarization is performed under Florida law."] },
      { h: "What you need", ul: ["A phone, tablet or computer with a camera and microphone", "A steady internet connection", "A valid government photo ID you can hold up to the camera", "Your document as a PDF, not yet signed"] },
      { h: "How a session works", ul: ["Book a time and upload your document", "Answer a short set of identity questions and scan your ID", "Join the live video call with the notary", "Sign electronically while the notary watches", "Download your notarized PDF right after"], p: ["Florida requires the session to be recorded and securely kept, which protects you if the document is ever questioned."] },
      { h: "Documents that work well online", ul: ["Affidavits and sworn statements", "Travel consent letters", "UF loyalty oaths and HR forms", "Many real estate and business documents", "Out of state family members signing a Florida document"] },
      { h: "Documents that need extra care", p: ["Wills, trusts and powers of attorney with banking or real estate powers have special rules online, and some receiving agencies still want wet ink. Check with whoever is receiving your document, or call us first."] },
    ],
    faqs: [
      ["Can someone outside the U.S. use a Florida online notary?", "Yes, as long as the receiving party accepts it. Some countries have their own rules, so ask them first."],
      ["What if I'm not good with technology?", "We walk you through it. If it isn't working, we can switch to an in-person visit in Alachua County."],
    ],
  },
  {
    slug: "how-to-sign-a-quit-claim-deed-in-alachua-county",
    title: "How to Sign and Record a Quit Claim Deed in Alachua County, FL",
    description: "What a Florida quit claim deed needs to be valid and recordable, the two witness rule, signing with a mobile notary and recording with the Alachua County Clerk.",
    category: "Real estate",
    image: IMG.houseModel,
    related: ["/quit-claim-deed-notary", "/real-estate", "/divorce-documents-notary"],
    sections: [
      { h: "What a quit claim deed does", p: ["A quit claim deed transfers whatever interest one person has in a property to someone else, without promising the title is clear. Families use them to add or remove a spouse, move a home into a trust, or transfer property after a divorce."] },
      { h: "Florida signing requirements", ul: ["The grantor signs in front of two witnesses", "Each witness's name and post office address are printed under their signature", "The grantor's signature is acknowledged before a notary", "The preparer's name and address appear on the deed"], p: ["Alachua County's Clerk of Court will reject deeds that are missing witnesses or the notary acknowledgment."] },
      { h: "Signing with a mobile notary", p: ["We come to your home or office anywhere in Alachua County and bring two witnesses for $30 each. If a spouse must also sign because of Florida homestead rules, both can sign in the same visit."] },
      { h: "Recording the deed", p: ["Once signed, the deed is recorded with the Clerk of Court in the county where the property sits. For Gainesville and all of Alachua County that is the Alachua County Clerk. Recording fees and Florida documentary stamp tax may apply, so check with the Clerk before you file."] },
      { h: "Get the deed prepared correctly", p: ["A notary cannot prepare deeds or give legal advice. Have a Florida attorney or title company prepare the deed, especially if there is a mortgage, a homestead, or a trust involved."] },
    ],
    faqs: [
      ["Can a family member be a witness on a deed?", "Florida law does not ban it, but independent witnesses avoid questions later. We can bring them."],
      ["Can a quit claim deed be signed online?", "Florida allows it with an online notary and witnesses, but check that your title company or the Clerk will accept it."],
    ],
  },
  {
    slug: "does-a-will-need-to-be-notarized-in-florida",
    title: "Does a Will Need to Be Notarized in Florida?",
    description: "Florida wills need two witnesses, not a notary. Here is why most people add a notarized self-proving affidavit and how to sign one at home or in the hospital.",
    category: "Estate planning",
    image: IMG.lastWill,
    related: ["/will-and-estate-notary", "/hospital-notary-gainesville", "/healthcare-documents-notary"],
    sections: [
      { h: "The short answer", p: ["No, a Florida will does not have to be notarized to be valid. Under Florida Statute 732.502, the person making the will must sign it at the end in front of two witnesses, and both witnesses sign in front of the person and each other."] },
      { h: "Why most people add a notary anyway", p: ["Florida Statute 732.503 lets you make the will self-proving. You and both witnesses sign an affidavit in front of a notary. When the will goes to probate, the court can accept it without tracking down the witnesses years later. That saves families time, money and stress."] },
      { h: "Signing a will with a mobile notary", ul: ["Have your attorney prepare the will and self-proving affidavit", "Arrange two adult witnesses, ideally people who inherit nothing, or ask us to bring them", "Everyone signs together in one sitting, at home, at the office or in the hospital", "Keep the original somewhere safe and tell your personal representative where it is"] },
      { h: "Hospital and hospice signings", p: ["Wills are often updated during a hospital stay. We come to UF Health Shands, North Florida Regional, the VA and Haven Hospice. The person must understand what they are signing at the time."] },
    ],
    faqs: [
      ["Can a will be signed online in Florida?", "Florida allows electronic wills with strict rules, including extra protections for vulnerable adults. Talk to your attorney before signing a will remotely."],
      ["Can a beneficiary witness my will?", "Florida does not automatically void it, but it is best practice to use witnesses who inherit nothing."],
    ],
  },
  {
    slug: "healthcare-surrogate-vs-power-of-attorney-florida",
    title: "Healthcare Surrogate vs. Power of Attorney in Florida: What's the Difference?",
    description: "The difference between a Florida healthcare surrogate, living will and durable power of attorney, and how each one is signed.",
    category: "Estate planning",
    image: IMG.seniorCouple,
    related: ["/healthcare-documents-notary", "/power-of-attorney-in-florida", "/hospital-notary-gainesville"],
    sections: [
      { h: "Durable power of attorney", p: ["A durable power of attorney lets your agent handle money and property: paying bills, banking, selling a car or home, dealing with insurance. In Florida it must be signed with two witnesses and a notary."] },
      { h: "Designation of healthcare surrogate", p: ["A healthcare surrogate makes medical decisions for you if you cannot. Under Florida Statute 765.202 it must be signed in front of two adult witnesses, and at least one of them cannot be your spouse or blood relative. The person you name as surrogate cannot be a witness. Notarization is not required by law, but many families add it."] },
      { h: "Living will", p: ["A living will states your wishes about life-prolonging treatment if you are terminally ill or permanently unconscious. It is also signed with two witnesses, with the same rule that at least one is not a spouse or blood relative."] },
      { h: "Do you need all three?", p: ["Most families sign all three together, so one person can handle finances and someone can make medical decisions without going to court for a guardianship. An estate planning attorney can tell you what fits your situation."] },
      { h: "Signing them together", p: ["We can witness and notarize all three in one visit at your home, a hospital or a care home, and bring both witnesses."] },
    ],
    faqs: [
      ["Can the same person be my agent and my surrogate?", "Yes. Many people name the same trusted person for both."],
      ["Does a HIPAA release do the same thing?", "No. A HIPAA authorization only lets doctors share information. It does not let anyone make decisions."],
    ],
  },
  {
    slug: "florida-vin-verification-form-82042",
    title: "Florida VIN Verification (Form HSMV 82042): Who Can Do It",
    description: "Bringing a car to Florida? Who can complete VIN verification form HSMV 82042, what the notary checks, and how a mobile notary comes to your car.",
    category: "Vehicles",
    image: IMG.parkingLot,
    related: ["/vin-verification-vehicle-title-notary", "/notary-in-parking-lot"],
    sections: [
      { h: "When you need it", p: ["If your vehicle was last titled in another state, Florida requires a VIN verification on form HSMV 82042 before the tax collector will issue a Florida title. New UF students, faculty and families moving to Gainesville run into this every August."] },
      { h: "Who can complete it", p: ["A Florida notary public can complete and sign the verification, along with law enforcement officers and licensed dealers. The notary has to physically see the vehicle and compare the VIN to your title or registration."] },
      { h: "What we check", ul: ["The VIN on the dashboard and door frame", "Your out of state title or registration", "Make, model, year and body type", "Odometer reading when required"] },
      { h: "We come to your car", p: ["Book a visit and we meet you wherever the car is parked: your apartment, office, a campus garage or a parking lot. It usually takes about ten minutes. Then take the form to the Alachua County Tax Collector with your other title paperwork."] },
    ],
    faqs: [
      ["Can a VIN verification be done online?", "No. The notary must inspect the vehicle in person."],
      ["Do I need an appointment at the Tax Collector too?", "Check the Alachua County Tax Collector's website for current appointment rules."],
    ],
  },
  {
    slug: "travel-consent-letter-for-minors",
    title: "Notarized Travel Consent Letter for Minors: What to Include",
    description: "When a child needs a travel consent letter, what it should say, why to notarize it, and how the other parent can sign online.",
    category: "Family",
    image: IMG.passport,
    related: ["/travel-consent-letter-notary", "/online-notary"],
    sections: [
      { h: "When a child needs one", p: ["U.S. Customs and Border Protection recommends a consent letter when a child travels internationally with only one parent, with grandparents, with a school group or with another adult. Airlines, cruise lines and other countries often ask for it, and many expect it to be notarized."] },
      { h: "What to include", ul: ["The child's full name, date of birth and passport number", "The traveling adult's name and relationship to the child", "Destination, travel dates and flight or cruise details", "Names, addresses and phone numbers of the parent or parents not traveling", "A statement that they consent to the trip", "The signature of each parent not traveling, notarized"] },
      { h: "Getting it notarized fast", p: ["The parent who is not traveling can sign online by video from anywhere, so you do not have to coordinate schedules across cities. We can also notarize in person anywhere in Alachua County."] },
    ],
    faqs: [
      ["Is a travel consent letter legally required?", "Not by U.S. law in every case, but border officers can ask for proof of consent, and some countries require it."],
      ["Do both parents need to sign if one is traveling?", "Usually only the parent who is not traveling signs. Check the destination country's rules."],
    ],
  },
  {
    slug: "how-to-get-a-document-notarized-for-an-inmate",
    title: "How to Get a Document Notarized for an Inmate in Alachua County",
    description: "How notary visits work at the Alachua County Jail and nearby jails and prisons: what to prepare, ID rules, timing and cost.",
    category: "Jail and prison",
    image: IMG.courthouse,
    related: ["/jail-notary-gainesville", "/alachua-county-jail-notary", "/florida-state-prison-notary"],
    sections: [
      { h: "Why families need a jail notary", p: ["When someone is arrested, bills, cars, leases and kids do not wait. A notarized power of attorney lets a family member handle money and property while the person is in custody. Other common documents are affidavits, vehicle title paperwork and consent forms for children."] },
      { h: "Step by step", ul: ["Get the inmate's full name and booking or inmate number", "Have the document prepared and ready, but unsigned", "Call or text us so we can confirm the facility's professional visit rules", "We schedule the visit, verify identity, witness the signature and notarize", "We return the signed original to you or mail it where it needs to go"] },
      { h: "How ID works in jail", p: ["Inmate IDs issued by the Florida Department of Corrections or federal Bureau of Prisons are accepted under Florida law. If an inmate's ID was taken at booking, Florida allows a sworn written statement from a law enforcement officer confirming identity. Each facility decides how it handles property IDs."] },
      { h: "County jails vs. state prisons", p: ["County jails like the Alachua County Jail on NE 39th Avenue can usually be scheduled within days. State prisons such as the Reception and Medical Center in Lake Butler or Union Correctional in Raiford take more lead time because the inmate's classification officer usually has to approve the visit."] },
      { h: "Cost", p: ["Jail and prison visits are $175 per visit, which covers travel, check-in and wait time. Witnesses are $30 each if the document needs them."] },
    ],
    faqs: [
      ["Can the notary bring the document in?", "Usually yes, after the facility inspects it."],
      ["Can a power of attorney be signed by an inmate?", "Yes, if the inmate understands it and Florida's witness and notary requirements are met."],
    ],
  },
  {
    slug: "what-a-florida-notary-can-and-cannot-do",
    title: "What a Florida Notary Can and Cannot Do",
    description: "What Florida notaries are allowed to do, what they must refuse, and why a notary cannot give legal advice or notarize for family.",
    category: "Notary basics",
    image: IMG.brassSeal,
    related: ["/what-is-a-notary-how-does-an-online-notary-work", "/faq"],
    sections: [
      { h: "What a notary does", ul: ["Confirms the signer's identity with ID or credible witnesses", "Makes sure the signer is signing willingly and appears to understand the document", "Administers oaths for sworn statements (jurats)", "Takes acknowledgments of signatures", "Certifies copies of certain documents", "Performs marriage ceremonies in Florida"] },
      { h: "What a Florida notary must refuse", p: ["Florida Statute 117.107 lists acts a notary may not do. A notary may not notarize:"], ul: ["A document that is incomplete or blank", "A signature when the signer does not appear in person or by approved video", "A signer who appears unable to understand the document", "The signature of the notary's own spouse, son, daughter, mother or father", "A document in which the notary has a financial interest or is a party"] },
      { h: "No legal advice", p: ["A Florida notary who is not an attorney cannot give legal advice, choose which form you need, or prepare legal documents. That protects you. For questions about what a document means, talk to a Florida attorney or the court's self help center."] },
      { h: "Photos and other things notaries can't certify", p: ["Florida notaries cannot notarize a photograph. They can notarize your signature on a written statement about the photo."] },
    ],
    faqs: [
      ["Can a notary refuse to notarize?", "Yes. Florida requires a notary to refuse in some situations, and a notary may refuse when something seems wrong."],
      ["Can my notary also be my witness?", "Florida courts have said there is nothing preventing a notary from also serving as a witness, but many title companies and attorneys prefer separate witnesses."],
    ],
  },
  {
    slug: "acknowledgment-vs-jurat-florida",
    title: "Acknowledgment vs. Jurat: Which Notarization Do You Need in Florida?",
    description: "The difference between an acknowledgment and a jurat in Florida, how to tell which your document needs, and what happens at the signing.",
    category: "Notary basics",
    image: IMG.fountainPen,
    related: ["/affidavit-notary", "/faq"],
    sections: [
      { h: "Acknowledgment", p: ["An acknowledgment confirms that you are who you say you are and that you signed willingly. You can sign before the appointment and acknowledge it in front of the notary, though it is best to wait. Deeds, powers of attorney and most contracts use acknowledgments."] },
      { h: "Jurat", p: ["A jurat means you swear or affirm that the contents are true, in front of the notary, and sign in the notary's presence. Affidavits, financial affidavits in divorce cases and sworn statements use jurats. Lying on a sworn statement can be perjury."] },
      { h: "How to tell which one you need", ul: ["Look at the wording above the notary's signature line", "\"Sworn to (or affirmed) and subscribed before me\" is a jurat", "\"Acknowledged before me\" is an acknowledgment", "If there is no certificate, you choose. A notary cannot choose for you, but can explain the difference"] },
    ],
    faqs: [
      ["Can I swear on something other than a Bible?", "Yes. You can affirm instead of swearing an oath. It has the same legal effect."],
    ],
  },
  {
    slug: "what-to-expect-at-a-home-closing-in-gainesville",
    title: "What to Expect at a Mobile Loan Signing in Gainesville",
    description: "How a mobile closing works for a Gainesville purchase or refinance: what to bring, how long it takes, which documents you'll sign and what happens after.",
    category: "Real estate",
    image: IMG.houseKeys,
    related: ["/real-estate", "/quit-claim-deed-notary"],
    sections: [
      { h: "Who sets up the signing", p: ["Your title company or lender schedules the signing agent, sends the loan package and tells you if funds are due. The signing agent is a notary trained in loan documents who meets you at home, at work or wherever is convenient."] },
      { h: "What to have ready", ul: ["Government photo ID for every borrower or seller", "Any instructions or checklist from your title company", "A cashier's check or wire confirmation if funds are due", "About an hour for a purchase or refinance package"] },
      { h: "What you will sign", ul: ["Closing Disclosure showing your final loan terms and costs", "Promissory note, your promise to repay", "Mortgage, which secures the loan against the home", "Deed, for sellers", "Affidavits and disclosures required by your lender and Florida law"], p: ["The signing agent explains what each document is and where to sign, but cannot explain loan terms or give legal advice. Questions about rates or fees go to your lender."] },
      { h: "After the signing", p: ["We return the signed package to the title company the same day. For a refinance, federal rules give you a three business day right to cancel before funding. For a purchase, the title company records the deed with the Alachua County Clerk."] },
    ],
    faqs: [
      ["Can I sign my closing documents online?", "Some lenders and title companies allow remote online closings. Ask your title company."],
    ],
  },
  {
    slug: "notary-for-uf-employees-and-new-hires",
    title: "UF New Hire Paperwork That Needs a Notary",
    description: "University of Florida forms that need notarizing, like the Florida loyalty oath and domestic partnership affidavit, and how to get them done before your first paycheck.",
    category: "UF and Gainesville",
    image: IMG.centuryTower,
    related: ["/uf-employees", "/online-notary", "/vin-verification-vehicle-title-notary"],
    sections: [
      { h: "The Florida loyalty oath", p: ["Florida Statute 876.05 requires public employees, including University of Florida faculty and staff, to sign a loyalty oath. If you cannot get to a UF HR office in person, you can have it notarized and submitted. New hires who are still moving to Gainesville often do this online by video."] },
      { h: "Benefits paperwork", ul: ["Affidavit of Domestic Partnership to add a partner to UF benefits, signed by both partners before a notary", "Affidavit of Termination of Domestic Partnership when a partnership ends", "Retirement forms submitted by mail or fax instead of online"] },
      { h: "Moving to Gainesville checklist", ul: ["Loyalty oath and HR forms notarized online before you arrive", "VIN verification for an out of state car before you title it in Florida", "Lease, utility or bank forms that need a notary", "International scholars: documents for your home country may need an apostille"] },
      { h: "How to get it done", p: ["Download the form from UF HR, fill it out but do not sign, and book an online or mobile appointment. We work evenings and weekends, so you do not have to take time off during your first week."] },
    ],
    faqs: [
      ["Can I notarize my UF loyalty oath online?", "Yes, with a Florida online notary, unless UF HR tells you to complete it in person."],
    ],
  },
  {
    slug: "how-to-sign-divorce-papers-in-florida",
    title: "Signing Florida Divorce Papers: Which Forms Need a Notary",
    description: "Which Florida divorce forms need to be notarized, how spouses can sign separately or online, and what to bring to the signing.",
    category: "Family",
    image: IMG.reviewingDocs,
    related: ["/divorce-documents-notary", "/quit-claim-deed-notary", "/guides/acknowledgment-vs-jurat-florida"],
    sections: [
      { h: "Forms that usually need a notary", p: ["Many Florida Supreme Court approved family law forms include a notary block. Common ones include:"], ul: ["Petition for Dissolution of Marriage", "Family Law Financial Affidavit, which you swear to under oath", "Marital Settlement Agreement", "Parenting Plan paperwork", "Answer to the petition, for the responding spouse"] },
      { h: "Each spouse can sign separately", p: ["Spouses do not need to sign at the same time or place. Each can be notarized on their own schedule, in person or online. This is often easier and less stressful."] },
      { h: "Don't forget the house and cars", p: ["If one spouse is keeping the home, a quit claim deed may be needed, and Florida deeds require two witnesses. Vehicle titles may also need to be signed over."] },
      { h: "What a notary cannot do", p: ["A notary cannot tell you which forms to file or how to fill them out. The Alachua County Clerk's self help center, a paralegal or a family law attorney can help with that."] },
    ],
    faqs: [
      ["Is the financial affidavit a jurat?", "Yes. You swear the information is true in front of the notary before signing."],
    ],
  },
];

export const guideBySlug = (slug) => GUIDES.find((g) => g.slug === slug);
export const GUIDE_DATE = "2026-11-12";
