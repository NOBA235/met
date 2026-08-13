import Link from "next/link";

const footerLinks = [
  { href: "/#events", label: "Events" },
  { href: "/#upcoming", label: "Upcoming" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-ivory">
      <div className="container-shell py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="display-font flex h-10 w-10 items-center justify-center border border-ivory/30 text-xl leading-none">
                M
              </span>
              <span>
                <span className="display-font block text-[22px] leading-[0.9] text-ivory">Meraki</span>
                <span className="mt-1 block text-[10px] font-medium text-dark-muted">Entertainment</span>
              </span>
            </Link>
            <p className="type-body mt-5 max-w-sm text-dark-muted">
              Events, pageants and talent platforms produced in Nagaland.
            </p>
          </div>

          <div>
            <h4 className="type-meta mb-3 text-dark-muted">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-dark-muted hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="type-meta mb-3 text-dark-muted">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/meraki_entertainment2018/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark-muted hover:text-ivory"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@ThritongSangtam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark-muted hover:text-ivory"
              >
                YouTube
              </a>
            </div>
            <p className="type-meta mt-4 text-dark-muted">Nagaland, India</p>
          </div>
        </div>

        <div className="type-meta mt-10 border-t border-ivory/10 pt-5 text-dark-muted">
          Copyright {new Date().getFullYear()} Meraki Entertainment. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
