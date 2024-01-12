import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Information about the portfolio",
  keywords: ["About Page", "Cristian Marin", "Information"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About page</span>
    </>
  );
}
