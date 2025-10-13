"use client";
import { useState } from "react";

export default function TaxCTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "GST", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_100%,#5F82FF22,transparent)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-[130px]">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="font-1 text-3xl md:text-5xl mb-4">Talk to a tax expert</h2>
            <p className="font-2 text-gray-300 max-w-xl">
              Share your needs and we’ll get back within 24 hours. No spam.
            </p>
          </div>

          <form onSubmit={onSubmit} className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" placeholder="Full name" value={form.name} onChange={onChange} className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
              <input name="email" placeholder="Email" value={form.email} onChange={onChange} className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
              <select name="service" value={form.service} onChange={onChange} className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none">
                <option value="GST">GST</option>
                <option value="Income Tax">Income Tax</option>
                <option value="TDS/TCS">TDS/TCS</option>
              </select>
            </div>
            <textarea name="message" rows={4} placeholder="Brief about your requirement" value={form.message} onChange={onChange} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none" />
            <button type="submit" className="px-6 py-3 rounded-lg bg-[#5F82FF] text-[#002B45] font-semibold">Request callback</button>
            {submitted && <p className="text-green-300">Thanks! We will reach out shortly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
