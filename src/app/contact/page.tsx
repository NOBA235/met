"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#0f0f0f]">
            Let&apos;s Create Something Memorable.
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            {[
              { title: "General Enquiries", desc: "Questions about Meraki and our work." },
              { title: "Contestant Enquiries", desc: "Registration, eligibility and event details." },
              { title: "Sponsorship", desc: "Partnership and brand collaboration opportunities." },
              { title: "Media / PR", desc: "Press, interviews and media requests." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm tracking-[0.15em] uppercase text-[#0f0f0f] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b6560]">{item.desc}</p>
              </div>
            ))}

            <div className="pt-6 border-t border-[#e8e4dc]">
              <p className="text-sm text-[#6b6560] mb-3">Follow us</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/meraki_entertainment2018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f0f0f] hover:text-[#c4a35a] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@ThritongSangtam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f0f0f] hover:text-[#c4a35a] transition-colors"
                >
                  YouTube
                </a>
              </div>
              <p className="mt-6 text-sm text-[#6b6560]">Nagaland, India</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-[#e8e4dc] p-10 text-center">
                <h2 className="font-serif text-2xl text-[#0f0f0f] mb-3">Message Sent</h2>
                <p className="text-[#6b6560]">
                  Thank you. We will respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-[#e8e4dc] p-6 md:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                      Enquiry Type *
                    </label>
                    <select
                      required
                      className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
                    >
                      <option value="">Select</option>
                      <option>General Enquiries</option>
                      <option>Contestant Enquiries</option>
                      <option>Sponsorship</option>
                      <option>Media / PR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#0f0f0f] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#c4a35a] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
