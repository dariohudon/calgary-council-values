import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const DESCRIPTION =
  "Explore how Calgary City Council has voted on issues like housing, taxation, transit, governance, and community planning using reviewed public voting records.";

export const metadata: Metadata = {
  title: "Calgary Council Values",
  description: DESCRIPTION,
  openGraph: {
    title: "Calgary Council Values",
    description: DESCRIPTION,
    siteName: "Calgary Council Values",
  },
  twitter: {
    card: "summary",
    title: "Calgary Council Values",
    description: DESCRIPTION,
  },
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
