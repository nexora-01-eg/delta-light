import type { Metadata } from "next";
import "./globals.css";
import ExperienceShell from "@/components/ExperienceShell";
import { BUSINESS } from "@/data/content";

export const metadata: Metadata = {
  title: "دلتا لايت | Delta Light — الإضاءة تصنع المكان",
  description:
    "دلتا لايت — معرض الإضاءة المعمارية في شبين الكوم، المنوفية. نجف مودرن وكلاسيك وليد وكريستال، ماجنتيك تراك، سبوتات، أباليك، إضاءة خارجية وتشطيبات كهرباء. ادخل إلى الضوء.",
  keywords: [
    "دلتا لايت", "Delta Light", "نجف شبين الكوم", "إضاءة شبين الكوم",
    "محلات إضاءة شبين الكوم", "نجف المنوفية", "إضاءة مودرن المنوفية",
    "إضاءة فلل", "إضاءة منازل", "نجف مودرن", "نجف ليد", "ماجنتيك", "أباليك",
  ],
  openGraph: {
    title: "دلتا لايت — LIGHT CREATES SPACE",
    description: "معرض رقمي غامر للإضاءة المعمارية. ادخل إلى الضوء.",
    type: "website",
    locale: "ar_EG",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Delta Light — دلتا لايت",
  description: "Premium lighting showroom and lighting solutions provider.",
  telephone: BUSINESS.phoneIntl,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Talaat Harb Street",
    addressLocality: "Shebin El-Kom",
    addressRegion: "Monufia",
    addressCountry: "EG",
  },
  sameAs: [BUSINESS.instagram, BUSINESS.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        <ExperienceShell>{children}</ExperienceShell>
      </body>
    </html>
  );
}
