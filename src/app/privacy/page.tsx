import type { Metadata } from "next";
import Link from "next/link";
import { SitePage } from "@/components/site/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy Policy | Seokane Incorporated",
  description:
    "How Seokane Incorporated collects, uses, and protects personal information in compliance with POPIA.",
};

export default function PrivacyPage() {
  return (
    <SitePage>
      <section className="section-padding bg-surface-light">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-ink-muted">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-site max-w-3xl space-y-8 text-ink-muted leading-relaxed">

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">Introduction</h2>
            <p>
              Seokane Incorporated respects your privacy. This policy explains how we
              collect, use, and protect personal information submitted through this
              website, in compliance with the Protection of Personal Information Act
              (POPIA), Act 4 of 2013.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">What We Collect</h2>
            <p>
              We collect name, email address, phone number, and matter details submitted
              through our contact form. We do not collect any information without your
              knowledge or consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">How We Use It</h2>
            <p>
              Information you submit is used only to assess and respond to your legal
              inquiry. We do not sell, share, or use your information for marketing
              purposes without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">How We Protect It</h2>
            <p>
              All information is handled securely and accessed only by authorised
              members of our practice. We do not store form submissions in third-party
              databases.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">Your Rights Under POPIA</h2>
            <p>
              You have the right to access, correct, or request deletion of your
              personal information at any time. To exercise these rights, contact us at{" "}
              <a
                href="mailto:city@seokaneinc.co.za"
                className="text-navy hover:text-amber transition-colors"
              >
                city@seokaneinc.co.za
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-navy-dark mb-3">Contact</h2>
            <p>
              Seokane Incorporated<br />
              1 Maxwell Drive, Sunninghill, Johannesburg, 2191<br />
              <a
                href="mailto:city@seokaneinc.co.za"
                className="text-navy hover:text-amber transition-colors"
              >
                city@seokaneinc.co.za
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-surface-dark">
            <Link href="/contact" className="btn-secondary">
              Return to Contact
            </Link>
          </div>

        </div>
      </section>
    </SitePage>
  );
}
