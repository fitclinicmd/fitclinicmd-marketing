"use client";

import { useActionState } from "react";
import { submitContact, type ContactResult } from "./actions";

const field =
  "w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-muted/60 focus:border-clinic focus:outline-none";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactResult | undefined, FormData>(
    submitContact,
    undefined,
  );

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          How can we help?
        </label>
        <textarea id="message" name="message" required rows={5} className={`${field} resize-y`} />
        <p id="phi-warning" className="mt-2 text-xs text-ink-muted">
          <strong>Please don&apos;t include medical details.</strong> This form is for general
          questions only and isn&apos;t a secure medical channel. Once you have an account, use
          secure messaging in your patient portal for anything clinical.
        </p>
      </div>

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
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
