// PUBLIC legal document registry for the marketing zone.
//
// ⚠️ SYNC NOTE: the patient application (`fitclinicmd-com`) holds the
// authoritative registry — it is what records the version a patient consented
// to. When a document is approved or its version bumped THERE, mirror it here.
// The version numbers must match; a patient must be able to read on the public
// site exactly the version they agreed to in the app.
//
// Unlike the app registry, this one does NOT carry the internal drafting
// checklists — those are working notes for counsel, not public content. Until a
// document is approved the public page says so plainly.

export type PublicLegalStatus = "PENDING" | "PUBLISHED";

export type PublicLegalDoc = {
  slug: string;
  title: string;
  summary: string;
  version: string;
  status: PublicLegalStatus;
  effectiveDate: string | null;
  /** Approved text, in order. Populated when status is PUBLISHED. */
  sections?: { heading: string; body: string }[];
};

// Mirrored from fitclinicmd-com/src/lib/legal.ts — approved by counsel (Michael
// Roth) effective 2026-08-01. Section bodies are copied verbatim from the
// authoritative app registry; keep them in sync when the app version bumps.
export const PUBLIC_LEGAL_DOCS: PublicLegalDoc[] = [
  {
    slug: "privacy",
    title: "Notice of Privacy Practices",
    summary:
      "How medical information about you may be used and disclosed, and how you can get access to it.",
    version: "1.0",
    status: "PUBLISHED",
    effectiveDate: "2026-08-01",
    sections: [
      {
        heading: "Required header statement",
        body: "THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.",
      },
      {
        heading: "How we may use and disclose your health information",
        body: "We may use and disclose your protected health information (PHI) for treatment, payment, and health care operations. For treatment, we share your information with the providers and pharmacies involved in your care — for example, sending your prescription to our partner compounding pharmacy so it can be filled and shipped to you, and sharing your record with the clinical records/e-prescribing platform we use. For payment, we use your information to bill and process payment for your care; the payment processor receives only the amount charged and an internal identifier, not your diagnosis or medication. For health care operations, we use information to run and improve our services. We work with vendors ('business associates') — including our partner pharmacies, clinical records/EHR platform, hosting and database providers, email and video-visit vendors, and, where controlled substances are prescribed, our e-prescribing/PDMP vendor — who agree by contract to protect your information. We may also use or disclose your information when permitted or required by law (for example, public-health activities, health-oversight, judicial or law-enforcement requests). Uses and disclosures not described in this notice — including most uses of psychotherapy notes, uses for marketing, and any sale of PHI — will be made only with your written authorization, which you may revoke at any time.",
      },
      {
        heading: "Your rights",
        body: "You have the right to: inspect and obtain a copy of your health information; request that we amend information you believe is incorrect or incomplete; receive an accounting of certain disclosures we have made; request restrictions on how we use or disclose your information; request that we communicate with you in a specific way or at a specific location; be notified if there is a breach of your unsecured PHI; and obtain a paper copy of this notice on request even if you agreed to receive it electronically.",
      },
      {
        heading: "Our duties",
        body: "We are required by law to maintain the privacy of your PHI, to provide you with this notice of our legal duties and privacy practices, and to abide by the terms of the notice currently in effect. We are required to notify affected individuals following a breach of unsecured PHI. We reserve the right to change this notice and to make the revised notice effective for information we already have as well as any information we receive in the future; the current notice is always posted on our website with its effective date.",
      },
      {
        heading: "Complaints",
        body: "If you believe your privacy rights have been violated, you may file a complaint with us using the contact information below, with the Secretary of the U.S. Department of Health and Human Services, Office for Civil Rights, or with the department of health of the state in which you receive care. You will not be retaliated against in any way for filing a complaint.",
      },
      {
        heading: "Contact and effective date",
        body: "This Notice is provided by Medvora LLC. To exercise any of your rights, to ask questions, or to file a complaint, contact our Privacy Officer at the contact information published on our website. This Notice is effective as of the date shown above.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    summary: "The agreement between you and Medvora LLC for use of this service.",
    version: "1.0",
    status: "PUBLISHED",
    effectiveDate: "2026-08-01",
    sections: [
      {
        heading: "Who we are and what this is",
        body: "This platform is operated by Medvora LLC ('we', 'us', or the 'Company'). We provide technology and administrative services that connect you with independent, licensed health care providers; we do not ourselves practice medicine or provide medical care. Medical care is provided by the independent providers, who exercise their own professional judgment and are solely responsible for the care they deliver. These providers are retained to deliver care in the states where they are licensed, and they — not the Company — decide whether any treatment is appropriate for you.",
      },
      {
        heading: "Eligibility and accounts",
        body: "You must be at least 18 years old and physically located in a U.S. state where we offer services to create an account and receive care. You agree to provide accurate, current, and complete information and to keep it up to date. You are responsible for maintaining the security of your account credentials and for all activity under your account. Do not share your account or use anyone else's.",
      },
      {
        heading: "Subscriptions, automatic renewal and cancellation",
        body: "Most treatment is offered as an automatically renewing subscription. Before you are charged, we present the price, the billing interval, and the date of your first charge, and you must affirmatively agree to them. YOUR SUBSCRIPTION RENEWS AUTOMATICALLY: at the end of each billing interval, the payment method on file is charged the then-current subscription price, without further notice unless required by law, until you cancel. You may cancel at any time from your account; cancellation stops future charges and takes effect at the end of the current paid interval. If a payment fails, we may retry it and will attempt to notify you; if payment is not resolved within the grace period, the subscription is paused. This section is intended to satisfy the federal Restore Online Shoppers' Confidence Act (ROSCA) and applicable state automatic-renewal laws; the disclosures and affirmative-consent step are also presented in the checkout flow.",
      },
      {
        heading: "Medical disclaimer and no emergency use",
        body: "Information provided through the platform is for general informational purposes and is not medical advice. A provider-patient relationship is formed only when a licensed provider accepts you as a patient through a visit. This service is not for emergencies; if you have a medical emergency, call 911 or go to the nearest emergency department. This language is consistent with the Informed Consent to Telehealth.",
      },
      {
        heading: "Medication, pharmacy and shipping",
        body: "If a provider prescribes medication, it is prepared and dispensed by a licensed third-party compounding pharmacy and shipped to you. Compounded medications are prepared for an individual patient and are not FDA-approved. You are responsible for providing an accurate shipping address and for proper storage of your medication on receipt. If your order does not arrive, is delayed by weather or a shipping problem, or arrives damaged, contact us and we will make it right with a replacement or a refund where appropriate. Every order is held for review before it is sent to the pharmacy. Because compounded medications are made specifically for you, medication that you have received cannot be returned.",
      },
      {
        heading: "Payment, refunds and disputes",
        body: "Payments are processed by a third-party payment processor; by providing a payment method you authorize us and our processor to charge it for amounts you owe. Refunds, where available, are described at the point of purchase and in the applicable sections above. If you believe you were charged in error, contact us before initiating a chargeback so we can resolve it.",
      },
      {
        heading: "Acceptable use and intellectual property",
        body: "You agree to use the platform only for its intended purpose and in compliance with law, and not to misuse, disrupt, reverse-engineer, or gain unauthorized access to it or to other users' information. All content and software on the platform is owned by the Company or its licensors; you receive a limited, revocable, non-exclusive license to use the service for your own care.",
      },
      {
        heading: "Disclaimers and limitation of liability",
        body: "The platform is provided 'as is' and 'as available.' To the fullest extent permitted by law, the Company disclaims warranties not expressly stated here. Nothing in these Terms limits any liability that cannot be limited under applicable law, and these Terms do not limit the independent providers' professional responsibility for the care they provide. Subject to those limits, the Company's total aggregate liability arising out of or relating to the platform will not exceed the amount you paid to the Company in the twelve (12) months before the event giving rise to the claim.",
      },
      {
        heading: "Dispute resolution and governing law",
        body: "These Terms are governed by the laws of the State of Arizona, without regard to conflict-of-laws rules. Any dispute arising out of or relating to these Terms or the services — other than a matter that qualifies for small-claims court — will be resolved by binding individual arbitration seated in Arizona and administered under the rules of a recognized arbitration provider, rather than in court. You and the Company waive the right to a jury trial, and agree that claims may be brought only in an individual capacity and not as a plaintiff or class member in any class, collective, or representative proceeding. You may opt out of this arbitration agreement by notifying us in writing within 30 days of first accepting these Terms; opting out does not affect any other part of these Terms. Where arbitration does not apply, the state and federal courts located in Arizona have exclusive jurisdiction and venue.",
      },
      {
        heading: "Changes to these terms and contact",
        body: "We may update these Terms from time to time. When we do, we will post the updated Terms with a new effective date and, where required, notify you. Your continued use of the platform after an update means you accept the updated Terms. Questions about these Terms can be directed to the Company using the contact information published on our website.",
      },
    ],
  },
  {
    slug: "telehealth-consent",
    title: "Informed Consent to Telehealth",
    summary:
      "What a telehealth visit is, its limits and risks, and what you agree to before being seen.",
    version: "1.0",
    status: "PUBLISHED",
    effectiveDate: "2026-08-01",
    sections: [
      {
        heading: "What telehealth is and how visits work",
        body: "Telehealth means receiving care from a licensed provider remotely, using technology rather than an in-person office visit. On this platform your care may involve a secure online medical intake, a live video visit, and secure messaging with your care team. A provider licensed in the state where you are located reviews your information and, where appropriate, meets with you by video before making any treatment decision. We verify your identity when you create your account and again in connection with your visit; you agree to provide accurate identifying information and not to use another person's identity or account.",
      },
      {
        heading: "Benefits, limitations and risks",
        body: "Telehealth can make care more convenient and accessible. It also has limits you should understand. Your provider does not perform a hands-on physical examination and relies on the information you report and on any laboratory results. If the information you provide is incomplete or inaccurate, the provider's assessment may be affected, which can lead to a diagnosis or treatment that is not right for you. Technology can also fail: a visit may be interrupted, delayed, or of poor quality. Your provider may determine that telehealth is not appropriate for your situation and may decline to treat you by telehealth and recommend that you be seen in person.",
      },
      {
        heading: "Alternatives to telehealth",
        body: "Telehealth is one option for your care, not the only one. You may choose to see a provider in person at any time — instead of, or in addition to, using this service — and you may stop using telehealth at any point.",
      },
      {
        heading: "Not for emergencies",
        body: "This service is not for emergencies. If you are experiencing a medical emergency, call 911 or go to your nearest emergency department immediately. Visits and messages are not monitored around the clock, and you should never rely on this platform for urgent or emergency care.",
      },
      {
        heading: "Prescribing — scope and limits",
        body: "A prescription is never guaranteed. A provider will prescribe medication only if, in their independent clinical judgment, it is appropriate for you. Medications offered through this service are compounded preparations prepared by a licensed compounding pharmacy (503A/503B). Compounded medications are not reviewed or approved by the U.S. Food and Drug Administration. A provider may only treat and prescribe for patients located in a state where that provider is licensed. Some medications, including testosterone and other hormone therapies, are controlled substances; where these are offered, they are prescribed only in compliance with applicable federal and state law, including examination, registration, prescription-drug-monitoring, and electronic-prescribing requirements, and only by a provider authorized to prescribe them in your state.",
      },
      {
        heading: "Fees, billing and cancellation",
        body: "This is a cash-pay service. We do not bill health insurance, and your treatment is not covered or reimbursed by insurance through this platform. Most treatment is provided on a recurring subscription: you agree that the payment method on file will be charged automatically at the stated price and interval until you cancel. You may cancel at any time from your account, and cancellation stops future charges. Because medication is compounded and dispensed specifically for you, medication that you have received is generally not refundable; but if an order does not arrive, is delayed by weather or a shipping problem, or arrives damaged, contact us and we will make it right with a replacement or a refund where appropriate. Any applicable refund policy is described at the time of purchase and in the Terms of Service.",
      },
      {
        heading: "Privacy, records and recording",
        body: "Your health information is handled as described in our Notice of Privacy Practices, which explains how your information may be used and disclosed and the rights you have. A clinical record of your visit and treatment is created and retained as required by law. Video visits are not recorded unless you are told otherwise and, where required, your consent is obtained first.",
      },
      {
        heading: "Consent, withdrawal and acknowledgement",
        body: "You may withdraw your consent to receive care by telehealth at any time, and doing so will not affect your right to seek care in the future. By agreeing, you confirm that you are at least 18 years old, that you have read and understood this consent, that you have had the opportunity to ask questions, and that you agree to receive care by telehealth on the terms described here. Some states impose additional telehealth-consent requirements; where they apply, the additional required disclosures are presented to you before you consent.",
      },
    ],
  },
];

export function getPublicLegalDoc(slug: string): PublicLegalDoc | undefined {
  return PUBLIC_LEGAL_DOCS.find((d) => d.slug === slug);
}
