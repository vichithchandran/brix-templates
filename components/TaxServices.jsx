"use client";
import { useState } from "react";
import taxServices from "@/data/taxServices.json";

export default function TaxServices() {
  const [activeTab, setActiveTab] = useState("gst");

  const tabs = [
    { id: "gst", label: "GST" },
    { id: "incomeTax", label: "Income Tax" },
  ];

  const items = taxServices[activeTab] || [];

  return (
    <section id="services" className="relative py-20 md:py-28 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,#5F82FF22,transparent)]" />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-[130px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-10">
          <div>
            <h2 className="font-1 text-3xl md:text-5xl">Services we offer</h2>
            <p className="font-2 text-gray-300 max-w-2xl mt-3">
              Choose a category to see tailored services for your needs.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1 w-fit">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2 rounded-lg transition font-semibold ${
                  activeTab === t.id ? "bg-[#5F82FF] text-[#002B45]" : "text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.id}
              className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#5F82FF66] transition"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#5F82FF22] to-transparent" />
              <h3 className="font-3 text-2xl font-semibold mb-2 relative z-10">{s.title}</h3>
              <p className="font-4 text-gray-300 relative z-10">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
