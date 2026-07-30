import Link from "next/link";
import { Section, Eyebrow } from "./ui";

// Goal-first entry: patients pick the outcome they're after, not a drug.
// Copy here is intentionally NAVIGATIONAL and process-descriptive — the
// regulated efficacy claims live on the treatment detail pages, behind the
// counsel-gated <Claim> component. Only goals that map to the actual launch
// menu (weight management + hormone therapy) are shown; nothing is implied
// that isn't offered.
const GOALS: {
  href: string;
  goal: string;
  body: string;
  icon: React.ReactNode;
  subtle?: boolean;
}[] = [
  {
    href: "/treatments/weight-management",
    goal: "Lose weight",
    body: "A provider-supervised weight-management program — evaluated first, prescribed only when it's appropriate for you, and delivered to your door.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 20a8 8 0 1 1 16 0" strokeLinecap="round" />
        <path d="M12 12l3-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/treatments/hormone-therapy",
    goal: "Balance your hormones",
    body: "Hormone therapy, guided by bloodwork and monitored by your provider over time — never prescribed on symptoms alone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M12 3v6M12 15v6M5 12h14" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    href: "/how-it-works",
    goal: "Not sure yet?",
    body: "Start with a visit. A licensed provider reviews your goals and helps you decide what's appropriate — a prescription is never guaranteed.",
    subtle: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.7.3-.9.7-.9 1.4M12 17h.01" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function GoalCards() {
  return (
    <Section className="border-t border-ink/10 bg-white" id="goals">
      <div className="mb-10 max-w-2xl">
        <Eyebrow>Start with your goal</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">What brings you here?</h2>
        <p className="mt-3 text-ink-muted">
          Pick the goal that fits. A licensed provider decides what treatment — if any — is right for
          you.
        </p>
      </div>
      <ul className="grid gap-6 md:grid-cols-3">
        {GOALS.map((g) => (
          <li key={g.href}>
            <Link
              href={g.href}
              className={`group flex h-full flex-col rounded-xl2 border border-ink/10 bg-white p-6 shadow-[0_1px_2px_rgba(15,27,45,.04)] transition hover:border-clinic hover:shadow-[0_6px_20px_rgba(14,124,134,.10)] ${
                g.subtle ? "bg-sand/60" : ""
              }`}
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-clinic-light text-clinic [&>svg]:h-6 [&>svg]:w-6">
                {g.icon}
              </span>
              <h3 className="text-xl">{g.goal}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-muted">{g.body}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2 group-hover:text-clinic-deep">
                Explore <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
