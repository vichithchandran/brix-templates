import taxProcess from "@/data/taxProcess.json";

export default function TaxProcess() {
  const blocks = [
    {
      id: "gst",
      label: "GST Filing Process",
      steps: taxProcess.gst,
      accent: "from-[#5F82FF22]",
    },
    {
      id: "incomeTax",
      label: "Income Tax Filing Process",
      steps: taxProcess.incomeTax,
      accent: "from-[#24D1FF22]",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_0%,#24D1FF22,transparent)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-[130px]">
        <h2 className="font-1 text-3xl md:text-5xl mb-10">How it works</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blocks.map((block) => (
            <div key={block.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-3 text-2xl mb-4">{block.label}</h3>
              <ol className="space-y-4">
                {block.steps.map((s) => (
                  <li key={s.step} className="flex gap-4 items-start">
                    <div className="mt-1 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5F82FF22] to-transparent border border-white/10">
                      <span className="font-semibold">{s.step}</span>
                    </div>
                    <div>
                      <p className="font-3 text-lg font-semibold">{s.title}</p>
                      <p className="font-4 text-gray-300">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
