import Footer from "@/components/Footer";

export default function TaxPage() {
  const gstServices = [
    { title: "GST Registration", desc: "New/Amendment, composition, LUT, migration" },
    { title: "GST Return Filing", desc: "GSTR-1, 3B, 9/9C with reconciliations" },
    { title: "Input Tax Credit", desc: "2A/2B reconciliation, mismatch resolution" },
    { title: "E‑Way Bill", desc: "Generation, extension, audit readiness" },
    { title: "GST Notices", desc: "Replies, audits, appeals, advisory" },
    { title: "GST Advisory", desc: "Place of supply, rate fitment, structuring" },
  ];

  const incomeTaxServices = [
    { title: "ITR Filing", desc: "ITR-1 to ITR-7 for individuals & entities" },
    { title: "Tax Planning", desc: "Optimize regime, deductions, capital gains" },
    { title: "TDS", desc: "Returns, corrections, Form 16/16A, 26Q, 24Q" },
    { title: "Advance Tax", desc: "Calculations, reminders, challan support" },
    { title: "Notices & Scrutiny", desc: "Section 143(1), 139(9), 143(2), faceless" },
    { title: "AIS/26AS Review", desc: "Match incomes, resolve mismatches" },
  ];

  const steps = [
    { id: 1, title: "Book a free consult", text: "Tell us about your business and goals" },
    { id: 2, title: "Share documents", text: "Secure portal + checklist, no email chaos" },
    { id: 3, title: "We prepare & review", text: "Senior review, compliance + savings focus" },
    { id: 4, title: "e-File & confirm", text: "On-time filing, payment challans & ack" },
    { id: 5, title: "Post‑filing support", text: "Notice handling and year‑round support" },
  ];

  const faqs = [
    {
      q: "Which GST returns are mandatory?",
      a: "Most regular taxpayers file GSTR‑1 (sales) monthly/quarterly and GSTR‑3B monthly. Annual return GSTR‑9 is applicable above thresholds; 9C where audit applies.",
    },
    {
      q: "Old vs New tax regime—how to choose?",
      a: "We compare your deductions (80C, HRA, home loan, etc.) and income profile to recommend a regime that minimizes lifetime tax, not just this year.",
    },
    {
      q: "Do you assist with notices?",
      a: "Yes. We draft replies, gather evidence, represent on faceless portals, and follow‑through until closure.",
    },
    {
      q: "Timelines for a new GST registration?",
      a: "Typically 3–7 working days post complete documentation. Timelines vary by jurisdiction and verifications.",
    },
    {
      q: "What documents are required for ITR filing?",
      a: "PAN, Aadhaar, Form 16/16A, AIS, bank statements, capital gains statements, deductions proofs, rent/HRA, and loan statements as applicable.",
    },
  ];

  return (
    <div className="text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[130px] pt-28 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E3543] via-transparent to-transparent opacity-70" />
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/Ellipse 47.svg')",
            backgroundPosition: "left -60px top -60px",
            backgroundSize: "220px 220px",
            opacity: 0.25,
          }}
        />
        <div className="relative max-w-5xl">
          <span className="px-3 py-1 rounded-full text-xs tracking-wide bg-[#5F82FF]/20 text-[#AFC1FF] border border-[#5F82FF]/30">Modern Compliance</span>
          <h1 className="font-1 text-4xl md:text-5xl lg:text-[56px] leading-tight mt-4">
            Tax Services for Businesses & Individuals
          </h1>
          <p className="font-2 text-[18px] md:text-[20px] text-gray-300 mt-4 max-w-3xl">
            End‑to‑end services across <span className="text-[#5F82FF] font-semibold">GST</span> and
            <span className="text-[#5F82FF] font-semibold"> Income Tax</span> — filings, reconciliations, notices,
            advisory and planning. Transparent pricing. Expert support.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#contact" className="px-5 py-3 bg-[#5F82FF] rounded-lg font-semibold text-[#001E32]">Get Free Consultation</a>
            <a href="#services" className="px-5 py-3 rounded-lg border border-white/20">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[130px] pb-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* GST Column */}
          <div>
            <h2 className="font-1 text-[32px] mb-3">GST</h2>
            <p className="font-2 text-gray-300 mb-6 max-w-xl">Stay compliant with precise filings, proactive reconciliations, and fast resolution on notices.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {gstServices.map((s) => (
                <div key={s.title} className="rounded-2xl bg-[#1F54644D] p-5 border border-white/10 hover:border-[#5F82FF]/40 transition">
                  <h3 className="font-3 text-xl mb-1">{s.title}</h3>
                  <p className="font-4 text-sm text-gray-200">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Income Tax Column */}
          <div>
            <h2 className="font-1 text-[32px] mb-3">Income Tax</h2>
            <p className="font-2 text-gray-300 mb-6 max-w-xl">For individuals, startups and MSMEs—accurate returns and year‑round tax efficiency.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {incomeTaxServices.map((s) => (
                <div key={s.title} className="rounded-2xl bg-[#1F54644D] p-5 border border-white/10 hover:border-[#5F82FF]/40 transition">
                  <h3 className="font-3 text-xl mb-1">{s.title}</h3>
                  <p className="font-4 text-sm text-gray-200">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[130px] py-20">
        <h2 className="font-1 text-[32px] md:text-[40px] mb-8">How it works</h2>
        <div className="relative border-l border-white/10 pl-6 ml-2">
          {steps.map((step) => (
            <div key={step.id} className="mb-10">
              <div className="absolute -left-2 mt-2 w-3 h-3 rounded-full bg-[#5F82FF]" style={{ top: `${(step.id - 1) * 72}px` }} />
              <h3 className="font-3 text-xl">{step.title}</h3>
              <p className="font-4 text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[130px] pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: "₹1,499", note: "Individuals", items: ["ITR‑1/ITR‑2", "AIS review", "Tax regime advice"] },
            { name: "Business", price: "₹2,999", note: "GST", items: ["GSTR‑1 & 3B", "2B reconciliation", "E‑way bill help"] },
            { name: "Premium", price: "Custom", note: "Advisory", items: ["Capital gains planning", "Notice handling", "Quarterly review"] },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl bg-[#1F54644D] p-6 border border-white/10">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-3 text-2xl">{p.name}</h3>
                <span className="font-2 text-[#AFC1FF]">{p.note}</span>
              </div>
              <div className="font-1 text-3xl mb-4">{p.price}<span className="text-base font-4 text-gray-300"> {p.price === "Custom" ? "" : "/ filing"}</span></div>
              <ul className="space-y-3 text-sm">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#5F82FF]">✓</span><span>{i}</span></li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-md bg-[#5F82FF] text-[#001E32] font-semibold">Get started</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[130px] pb-24">
        <div className="rounded-[32px] p-8 md:p-10 bg-[#E4E4E42E] border border-white/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-1 text-[32px] md:text-[40px] mb-3">Talk to a tax expert</h2>
              <p className="font-2 text-gray-300 mb-6">Book a free 15‑minute call. We’ll review your case and share a clear next‑steps plan.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#5F82FF]">✓</span>Same‑day response</li>
                <li className="flex items-start gap-2"><span className="text-[#5F82FF]">✓</span>Transparent timelines & fees</li>
                <li className="flex items-start gap-2"><span className="text-[#5F82FF]">✓</span>WhatsApp & email updates</li>
              </ul>
            </div>
            <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input className="px-4 py-3 rounded-md text-black" placeholder="Full name" />
              <input className="px-4 py-3 rounded-md text-black" placeholder="Email" type="email" />
              <input className="px-4 py-3 rounded-md text-black" placeholder="Phone" />
              <select className="px-4 py-3 rounded-md text-black">
                <option>GST</option>
                <option>Income Tax</option>
                <option>Both</option>
              </select>
              <textarea className="px-4 py-3 rounded-md text-black" placeholder="Tell us briefly about your requirement" rows={4} />
              <button className="bg-[#5F82FF] text-[#002B45] py-3 rounded-md font-semibold">Request callback</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[130px] pb-28">
        <h2 className="font-1 text-[32px] md:text-[40px] mb-6">FAQs</h2>
        <div className="rounded-2xl bg-[#5E767F] p-6 md:p-8 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-[#091C23]/30 last:border-0 py-3">
              <summary className="cursor-pointer font-3 text-lg md:text-xl list-none flex items-center justify-between">
                <span>{f.q}</span>
                <span className="ml-4 text-[#002B45] bg-[#AFC1FF] rounded-full w-6 h-6 inline-flex items-center justify-center">+</span>
              </summary>
              <p className="font-4 text-[#252525] bg-white rounded-md p-4 mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
