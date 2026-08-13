"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] pb-14 pt-28">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="heading">Let&apos;s talk about your event.</h1>
          <p className="body-copy mt-4">
            Use this form for general enquiries, contestant information, sponsorship and media
            requests.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-5">
            {[
              { title: "General", desc: "Questions about Meraki and upcoming platforms." },
              { title: "Contestants", desc: "Registration, eligibility and event details." },
              { title: "Partnerships", desc: "Sponsorship, brand and media opportunities." },
            ].map((item) => (
              <div key={item.title} className="border-b border-[#dedbd3] pb-5">
                <h2 className="text-sm font-semibold text-[#151515]">{item.title}</h2>
                <p className="mt-1 text-sm leading-6 text-[#6d6963]">{item.desc}</p>
              </div>
            ))}

            <div>
              <p className="text-sm font-semibold text-[#151515]">Social</p>
              <div className="mt-2 flex gap-4">
                <a
                  href="https://www.instagram.com/meraki_entertainment2018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6d6963] hover:text-[#8d7132]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@ThritongSangtam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6d6963] hover:text-[#8d7132]"
                >
                  YouTube
                </a>
              </div>
              <p className="mt-4 text-sm text-[#6d6963]">Nagaland, India</p>
            </div>
          </aside>

          <div>
            {submitted ? (
              <div className="surface-card p-6 text-center md:p-8">
                <h2 className="subheading">Message sent</h2>
                <p className="body-copy mt-2">Thank you. We will respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="surface-card space-y-5 p-5 md:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="form-label">Name *</label>
                    <input type="text" required className="form-field" />
                  </div>
                  <div>
                    <label className="form-label">Email *</label>
                    <input type="email" required className="form-field" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-field" />
                  </div>
                  <div>
                    <label className="form-label">Enquiry Type *</label>
                    <select required className="form-field">
                      <option value="">Select</option>
                      <option>General</option>
                      <option>Contestant</option>
                      <option>Sponsorship</option>
                      <option>Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea required rows={5} className="form-field resize-none" />
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
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
