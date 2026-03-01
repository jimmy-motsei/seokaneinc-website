import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting | Seokane Incorporated",
  description: "Redirect route.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
