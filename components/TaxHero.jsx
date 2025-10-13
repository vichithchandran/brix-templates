export default function TaxHero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,#5F82FF33,transparent),radial-gradient(1000px_500px_at_110%_10%,#24D1FF22,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,28,35,0)_0%,rgba(9,28,35,0.6)_40%,rgba(9,28,35,1)_100%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-[130px] py-28 md:py-36">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-[#5F82FF] font-semibold mb-4">Tax Services</p>
          <h1 className="font-1 text-4xl md:text-6xl leading-tight mb-6">
            GST and Income Tax Services, Simplified
          </h1>
          <p className="font-2 text-lg md:text-xl text-gray-200 max-w-2xl">
            Fast, compliant, and transparent tax filing and advisory for individuals and businesses.
            Get expert help with registrations, returns, notices, and planning.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="px-6 py-3 rounded-lg bg-[#5F82FF] text-[#002B45] font-semibold">Explore Services</a>
            <a href="#contact" className="px-6 py-3 rounded-lg border border-white/20">Talk to an Expert</a>
          </div>
        </div>
      </div>

      <div className="absolute right-[-120px] top-10 w-[520px] h-[520px] rounded-full bg-[#5F82FF22] blur-3xl" />
      <div className="absolute left-[-120px] bottom-10 w-[420px] h-[420px] rounded-full bg-[#24D1FF22] blur-3xl" />
    </section>
  );
}
