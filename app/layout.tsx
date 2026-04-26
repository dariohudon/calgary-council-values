import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Calgary Council Values Matcher",
  description:
    "Compare Calgary City Council voting records against your civic values using transparent public methodology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070b18] text-white">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
