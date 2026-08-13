"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#events", label: "Events" },
  { href: "/#upcoming", label: "Upcoming" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const transparent = pathname === "/" && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        transparent
          ? "border-white/10 bg-transparent"
          : "border-[#d8d1c2] bg-[#f5f3ee]/94 backdrop-blur-md"
      }`}
    >
      <div className="container-shell">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="leading-none" onClick={() => setMobileOpen(false)}>
            <span className="flex items-center gap-3">
              <span
                className={`display-font flex h-9 w-9 items-center justify-center border text-lg leading-none ${
                  transparent
                    ? "border-[#e8dfcf]/42 text-[#e8dfcf]"
                    : "border-[#9c7833]/45 text-[#9c7833]"
                }`}
              >
                M
              </span>
              <span>
                <span
                  className={`block text-[15px] font-semibold uppercase ${
                    transparent ? "text-[#e8dfcf]" : "text-[#141414]"
                  }`}
                >
                  Meraki
                </span>
                <span
                  className={`mt-0.5 block text-[11px] ${
                    transparent ? "text-[#cfc5b4]" : "text-[#686157]"
                  }`}
                >
                  Entertainment
                </span>
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  transparent ? "text-[#cfc5b4] hover:text-[#e8dfcf]" : "text-[#393631] hover:text-[#9c7833]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/meraki_entertainment2018/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex ${
                transparent ? "text-[#cfc5b4] hover:text-[#e8dfcf]" : "text-[#393631] hover:text-[#9c7833]"
              }`}
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            <Link
              href="/register"
              className={`hidden min-h-10 items-center justify-center border px-4 text-sm font-semibold md:inline-flex ${
                transparent
                  ? "border-[#e8dfcf]/32 text-[#e8dfcf] hover:border-[#e8dfcf]/76"
                  : "border-[#d8d1c2] text-[#141414] hover:border-[#141414]"
              }`}
            >
              Register
            </Link>

            <button
              className={`inline-flex h-10 w-10 items-center justify-center border lg:hidden ${
                transparent
                  ? "border-[#e8dfcf]/32 text-[#e8dfcf]"
                  : "border-[#d8d1c2] text-[#141414]"
              }`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${mobileOpen ? "block" : "hidden"}`}>
        <div className="border-t border-[#d8d1c2] bg-[#f5f3ee] px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#d8d1c2]/70 py-3 text-sm font-medium text-[#141414]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
