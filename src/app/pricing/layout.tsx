import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Discovery Packages | Seokane Inc.",
  description: "Explore our Explorer and Deep Dive discovery packages for specialized market research.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
