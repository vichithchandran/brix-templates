import TaxHero from "@/components/TaxHero";
import GSTServices from "@/components/GSTServices";
import IncomeTaxServices from "@/components/IncomeTaxServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import TaxCTA from "@/components/TaxCTA";
import Footer from "@/components/Footer";

export default function TaxServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <TaxHero />

      {/* GST Services Section with Background */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-no-repeat z-[-1]"
          style={{
            backgroundImage: "url('/pngwing 24.svg')",
            backgroundSize: "1000px 1000px",
            backgroundPosition: "left -190px top 60px",
          }}
        ></div>
        <GSTServices />
      </div>

      {/* Income Tax Services Section */}
      <IncomeTaxServices />

      {/* Why Choose Us Section with Background */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-no-repeat z-[-1]"
          style={{
            backgroundImage: "url('/pngwing 24.svg')",
            backgroundSize: "1000px 1000px",
            backgroundPosition: "right -290px top 60px",
          }}
        ></div>
        <WhyChooseUs />
      </div>

      {/* Call to Action Section */}
      <TaxCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
