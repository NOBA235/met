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
    <footer className="bg-[#111111] text-[#f7f7f4]">
      <div className="container-shell py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <span className="block text-lg font-semibold">Meraki</span>
              <span className="mt-1 block text-sm text-[#b7b2aa]">Entertainment</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-[#b7b2aa]">
              Events, pageants and talent platforms produced in Nagaland.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#b7b2aa] hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/meraki_entertainment2018/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#b7b2aa] hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@ThritongSangtam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#b7b2aa] hover:text-white"
              >
                YouTube
              </a>
            </div>
            <p className="mt-4 text-sm text-[#b7b2aa]">Nagaland, India</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-[#8f8980]">
          Copyright {new Date().getFullYear()} Meraki Entertainment. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
