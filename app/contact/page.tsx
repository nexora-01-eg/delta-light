import type { Metadata } from "next";
import ContactFinal from "@/components/ContactFinal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "تواصل | دلتا لايت",
  description: "مش عارف تختار الإضاءة المناسبة؟ ابعتلنا تفاصيل المساحة — دلتا لايت.",
};

export default function ContactPage() {
  return (
    <main className="pt-28">
      <ContactFinal />
      <Footer />
    </main>
  );
}
