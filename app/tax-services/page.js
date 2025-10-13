import TaxServiceHero from "@/components/TaxServiceHero";
import TaxServices from "@/components/TaxServices";
import TaxCalculator from "@/components/TaxCalculator";
import TaxBenefits from "@/components/TaxBenefits";
import TaxProcess from "@/components/TaxProcess";
import TaxCTA from "@/components/TaxCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TaxServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <TaxServiceHero />
        <TaxServices />
        <TaxCalculator />
        <TaxBenefits />
        <TaxProcess />
        <TaxCTA />
      </main>
      
      <Footer />
    </div>
  );
}