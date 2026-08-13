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
    <div className="min-h-screen bg-background pb-16 pt-28">
      <div className="container-shell max-w-2xl">
        <div className="mb-10">
          <p className="eyebrow">Applications</p>
          <h1 className="type-section">Register your interest</h1>
          <p className="type-body mt-5 max-w-md">
            Share your basic details and the Meraki team will follow up with event requirements.
          </p>
        </div>

        {submitted ? (
          <div className="surface-card p-6 md:p-8">
            <h2 className="type-title">Application received</h2>
            <p className="type-body mt-3 max-w-md">
              Thank you for your interest. Our team will review your details and be in touch.
            </p>
            <Link href="/" className="btn btn-secondary mt-6">
              Return home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="surface-card space-y-5 p-5 md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="form-label">Full name *</label>
                <input type="text" required className="form-field" />
              </div>
              <div>
                <label className="form-label">Age *</label>
                <input type="number" required min={16} max={40} className="form-field" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="form-label">Location *</label>
                <input
                  type="text"
                  required
                  placeholder="City / District"
                  className="form-field"
                />
              </div>
              <div>
                <label className="form-label">Phone *</label>
                <input type="tel" required className="form-field" />
              </div>
            </div>

            <div>
              <label className="form-label">Email *</label>
              <input type="email" required className="form-field" />
            </div>

            <div>
              <label className="form-label">Competition *</label>
              <select required className="form-field">
                <option value="">Select competition</option>
                <option>Mr Dimapur 2026</option>
                <option>Mr Chumoukedima</option>
                <option>Mr Kohima</option>
                <option>Ms Chumu</option>
                <option>Mr Nagaland</option>
                <option>Other / General Interest</option>
              </select>
            </div>

            <div>
              <label className="form-label">Short introduction</label>
              <textarea
                rows={4}
                placeholder="Tell us a little about yourself"
                className="form-field resize-none"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
