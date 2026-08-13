"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#f8f6f1]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
            Applications
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#0f0f0f]">
            Ready for the Stage?
          </h1>
          <p className="mt-4 text-[#6b6560] max-w-md mx-auto">
            Registration details and eligibility requirements will be announced for each event.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-[#e8e4dc] p-10 text-center">
            <h2 className="font-serif text-2xl text-[#0f0f0f] mb-3">Application Received</h2>
            <p className="text-[#6b6560] mb-6">
              Thank you for your interest. Our team will review your application and be in touch.
            </p>
            <Link
              href="/"
              className="inline-flex px-6 py-3 bg-[#0f0f0f] text-white text-xs tracking-[0.15em] uppercase"
            >
              Return Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-[#e8e4dc] p-6 md:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  required
                  min={16}
                  max={40}
                  className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="City / District"
                  className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
                />
              </div>
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

            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                Instagram Handle
              </label>
              <input
                type="text"
                placeholder="@username"
                className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                Competition *
              </label>
              <select
                required
                className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1]"
              >
                <option value="">Select competition</option>
                <option>Mr Dimapur 2026</option>
                <option>Mr Chümoukedima</option>
                <option>Mr Kohima</option>
                <option>Ms Chumu</option>
                <option>Mr Nagaland</option>
                <option>Other / General Interest</option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                Short Introduction
              </label>
              <textarea
                rows={4}
                placeholder="Tell us a little about yourself..."
                className="w-full border border-[#e8e4dc] px-4 py-3 text-sm focus:outline-none focus:border-[#c4a35a] bg-[#f8f6f1] resize-none"
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-[#6b6560] mb-2">
                Photo Upload
              </label>
              <div className="border border-dashed border-[#d6d3d1] p-8 text-center bg-[#f8f6f1]">
                <p className="text-sm text-[#6b6560]">
                  Click or drag a portrait photo (demo only — no upload)
                </p>
                <input type="file" accept="image/*" className="mt-3 text-sm" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#0f0f0f] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#c4a35a] transition-colors"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
