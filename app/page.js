import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />

       <div className="relative">
        <div
          className="absolute inset-0 bg-no-repeat z-[-1]"
          style={{
            backgroundImage: "url('/pngwing 24.svg')",
            backgroundSize: "1000px 1000px",
            backgroundPosition: "left -190px top 60px",
          }}
        ></div>

        <Features />
        <Testimonial />
      </div>

    <div className="relative">
            <div
            className="absolute inset-0 bg-no-repeat z-[-1]"
            style={{
              backgroundImage: "url('/pngwing 24.svg')",
              backgroundSize: "1000px 1000px",
              backgroundPosition: "right -290px top 60px",
            }}
          ></div>
          <FAQ />
          <Footer />
    </div>
   </div>
  );
}
