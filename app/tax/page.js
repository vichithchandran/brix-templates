import TaxHero from "@/components/TaxHero";
import TaxServices from "@/components/TaxServices";
import TaxProcess from "@/components/TaxProcess";
import TaxCTA from "@/components/TaxCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tax Services | GST & Income Tax",
  description: "Modern GST and Income Tax services: registration, returns, notices, and planning.",
};

export default function TaxPage() {
  return (
    <main>
      <TaxHero />
      <TaxServices />
      <TaxProcess />
      <TaxCTA />
      <Footer />
    </main>
  );
}
