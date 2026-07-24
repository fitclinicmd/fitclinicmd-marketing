import Link from "next/link";
import { Container, CTA } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="font-display text-5xl text-clinic/60">404</p>
      <h1 className="mt-4 text-3xl">We couldn&apos;t find that page.</h1>
      <p className="mx-auto mt-3 max-w-md text-ink-muted">
        The link may be out of date. Try starting from the beginning, or get in touch and
        we&apos;ll point you the right way.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <CTA href="/">Back to home</CTA>
        <CTA href="/contact" variant="secondary">
          Contact us
        </CTA>
      </div>
      <p className="mt-8 text-sm text-ink-muted">
        Looking for{" "}
        <Link href="/how-it-works" className="text-clinic underline underline-offset-4">
          how it works
        </Link>{" "}
        or{" "}
        <Link href="/pricing" className="text-clinic underline underline-offset-4">
          pricing
        </Link>
        ?
      </p>
    </Container>
  );
}
