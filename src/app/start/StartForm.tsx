"use client";

import { useActionState, useEffect } from "react";
import { submitBookingStart, type StartResult } from "./actions";
import { SERVICE_OPTIONS } from "@/lib/site";

const field =
  "w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-muted/60 focus:border-clinic focus:outline-hidden";

export default function StartForm() {
  const [state, action, pending] = useActionState<StartResult | undefined, FormData>(
    submitBookingStart,
    undefined,
  );

  // On success with a booking URL, forward the visitor to the scheduler.
  useEffect(() => {
    if (state?.ok && state.next) {
      const t = setTimeout(() => {
        window.location.assign(state.next!);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          First name
        </label>
        <input id="name" name="name" required autoComplete="given-name" className={field} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email address
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">
          Mobile number <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium">
          Which service are you interested in?
        </label>
        <select id="service" name="service" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose one…
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <label htmlFor="smsConsent" className="flex items-start gap-2 text-xs text-ink-muted">
        <input
          id="smsConsent"
          name="smsConsent"
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-ink/30 text-clinic focus:ring-clinic"
        />
        <span>
          It&apos;s okay to text me about my booking. Message and data rates may apply; reply STOP to
          opt out at any time.
        </span>
      </label>

      <p className="text-xs text-ink-muted">
        <strong>Please don&apos;t include medical details here.</strong> This step just gets your visit
        started — anything clinical happens securely with your provider after you book.
      </p>

      {state?.message && (
        <p
          role="status"
          className={`rounded-lg px-3 py-2 text-sm ${
            state.ok ? "bg-clinic-light text-clinic-deep" : "bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-clinic px-6 py-3 text-sm font-semibold text-white transition hover:bg-clinic-deep disabled:opacity-60"
      >
        {pending ? "Just a sec…" : "Continue to booking"}
      </button>
    </form>
  );
}
