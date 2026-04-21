"use client";

import { useRef, useState, useTransition } from "react";
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type SubscribeState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "already_subscribed" }
  | { status: "invalid_email" }
  | { status: "error"; message: string };

type Props = { variant?: "dark" | "light" };

export function NewsletterWidget({ variant = "dark" }: Props) {
  const [state, setState] = useState<SubscribeState>({ status: "idle" });
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const isDark = variant === "dark";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string).trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState({ status: "invalid_email" });
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json().catch(() => ({}));

        if (res.ok) {
          if (data.message === "You're already subscribed.") {
            setState({ status: "already_subscribed" });
          } else {
            setState({ status: "success" });
            formRef.current?.reset();
          }
        } else {
          setState({ status: "error", message: data.error ?? "Subscription failed. Please try again." });
        }
      } catch {
        setState({ status: "error", message: "Network error. Please try again." });
      }
    });
  }

  return (
    <div className={`relative overflow-hidden ${isDark ? "bg-[var(--color-navy-dark)]" : "bg-[var(--color-surface)] border border-[var(--color-surface-dark)]"}`}>
      {isDark && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 28px)` }} />
      )}
      <div className="relative z-10 px-5 py-8 sm:px-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <div className={`inline-flex items-center gap-2 mb-4 ${isDark ? "text-[var(--color-amber)]" : "text-[var(--color-ink-muted)]"}`}>
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">Legal Insights Newsletter</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-serif font-bold leading-tight ${isDark ? "text-white" : "text-[var(--color-navy-dark)]"}`}>
              Stay Ahead of Legal Developments That Affect Your Business
            </h2>
            <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-white/55" : "text-[var(--color-ink-muted)]"}`}>
              Practical commentary on South African commercial law, employment developments, and compliance updates — delivered to your inbox, no more than twice a month.
            </p>
          </div>
          <div>
            {state.status === "success" ? (
              <div className={`flex items-start gap-3 rounded-sm p-5 ${isDark ? "bg-white/8" : "bg-white border border-[var(--color-surface-dark)]"}`}>
                <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-emerald-400" aria-hidden="true" />
                <div>
                  <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-[var(--color-ink)]"}`}>You&rsquo;re subscribed</p>
                  <p className={`mt-1 text-sm ${isDark ? "text-white/55" : "text-[var(--color-ink-muted)]"}`}>
                    Welcome to Legal Insights. You&rsquo;ll hear from us when it matters.
                  </p>
                  <button onClick={() => setState({ status: "idle" })} className={`mt-3 text-xs underline underline-offset-2 transition-colors ${isDark ? "text-white/40 hover:text-white/70" : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"}`}>
                    Subscribe another address
                  </button>
                </div>
              </div>
            ) : state.status === "already_subscribed" ? (
              <div className={`flex items-start gap-3 rounded-sm p-5 ${isDark ? "bg-white/8" : "bg-white border border-[var(--color-surface-dark)]"}`}>
                <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-[var(--color-amber)]" aria-hidden="true" />
                <div>
                  <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-[var(--color-ink)]"}`}>You&rsquo;re already subscribed</p>
                  <p className={`mt-1 text-sm ${isDark ? "text-white/55" : "text-[var(--color-ink-muted)]"}`}>That address is already on our list — you&rsquo;re all set.</p>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-[1fr_1.4fr] gap-3 mb-3">
                  <input type="text" name="firstName" placeholder="First name" autoComplete="given-name"
                    className={`px-4 py-3 text-sm outline-none transition-colors ${isDark ? "bg-white/8 border border-white/15 text-white placeholder:text-white/30 focus:border-white/40" : "bg-white border border-[var(--color-surface-dark)] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-navy-muted)]"}`} />
                  <input type="email" name="email" placeholder="Email address" required autoComplete="email"
                    className={`px-4 py-3 text-sm outline-none transition-colors ${isDark ? "bg-white/8 border border-white/15 text-white placeholder:text-white/30 focus:border-white/40" : "bg-white border border-[var(--color-surface-dark)] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-navy-muted)]"}`} />
                </div>
                {(state.status === "error" || state.status === "invalid_email") && (
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                    <p className={`text-xs ${isDark ? "text-red-400" : "text-red-600"}`}>
                      {state.status === "invalid_email" ? "Please enter a valid email address." : state.message}
                    </p>
                  </div>
                )}
                <button type="submit" disabled={isPending}
                  className={`${isDark ? "btn-ghost" : "btn-secondary"} w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed`}>
                  {isPending ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Subscribing…</> : <>Subscribe to Legal Insights<ArrowRight className="h-4 w-4" aria-hidden="true" /></>}
                </button>
                <p className={`mt-3 text-[11px] leading-relaxed ${isDark ? "text-white/30" : "text-[var(--color-ink-faint)]"}`}>
                  Your information is handled in accordance with our <a href="/privacy" className={`underline underline-offset-2 transition-colors ${isDark ? "hover:text-white/50" : "hover:text-[var(--color-ink-muted)]"}`}>Privacy Policy</a>. POPIA compliant.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
