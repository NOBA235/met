import Image from "next/image";
import Link from "next/link";

const platforms = [
  {
    name: "Mr Dimapur",
    detail: "The flagship pageant platform by Meraki Entertainment.",
    img: "/event1.jpeg",
  },
  {
    name: "Mr Kohima",
    detail: "A regional stage for confidence, talent and presentation.",
    img: "/event3.jpeg",
  },
  {
    name: "Ms Chumu",
    detail: "A platform for poise, personality and representation.",
    img: "/event2.jpeg",
  },
];

const process = [
  ["Auditions", "Registration, screening and contestant communication."],
  ["Grooming", "Walk-throughs, media preparation and stage readiness."],
  ["Finale", "A polished event experience for audiences, contestants and partners."],
];

const gallery = [
  { src: "/event1.jpeg", className: "md:col-span-2 md:row-span-2", focus: "photo-focus-top" },
  { src: "/event3.jpeg", className: "", focus: "photo-focus-center" },
  { src: "/event4.jpeg", className: "", focus: "photo-focus-center" },
  { src: "/event2.jpeg", className: "", focus: "photo-focus-top" },
  { src: "/s5.jpeg", className: "", focus: "photo-focus-top" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[720px] overflow-hidden bg-dark text-ivory">
        <Image
          src="/event1.jpeg"
          alt="Meraki Entertainment winners on stage"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="hero-bottom-fade absolute inset-x-0 bottom-0 h-40" />

        <div className="container-shell relative z-10 flex min-h-[720px] items-end pb-14 pt-28">
          <div className="max-w-3xl">
            <p className="motion-rise mb-5 text-sm font-medium text-dark-muted">
              Meraki Entertainment / Nagaland
            </p>
            <h1 className="type-hero motion-rise motion-delay-1 text-ivory/90">
              Meraki Entertainment
            </h1>
            <p className="type-body motion-rise motion-delay-2 mt-7 max-w-xl text-dark-muted">
              Producing pageants, talent platforms and cultural events across Nagaland.
            </p>
            <div className="button-row motion-rise motion-delay-2 mt-8">
              <Link href="/register" className="btn btn-light">
                Apply for 2026
              </Link>
              <Link href="/contact" className="text-link self-center text-dark-muted hover:text-ivory">
                Partner enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-dark py-7 text-ivory">
        <div className="container-shell flex flex-col gap-3 text-sm text-dark-muted md:flex-row md:items-center md:justify-between">
          <span>Mr Dimapur 2026 registration interest is open.</span>
          <Link href="/register" className="text-link text-ivory">
            Start application
          </Link>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start" data-reveal>
          <div>
            <p className="eyebrow">The platform</p>
            <h2 className="type-section">About Meraki</h2>
          </div>
          <p className="type-body max-w-2xl md:justify-self-end">
            Meraki Entertainment creates pageant and entertainment platforms with a clear
            organisational standard: considered production, strong photography, careful contestant
            communication and events rooted in local cultural presence.
          </p>
        </div>
      </section>

      <section id="upcoming" className="section bg-surface">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div data-reveal>
            <p className="eyebrow">Upcoming</p>
            <h2 className="type-section">Mr Dimapur 2026</h2>
            <p className="type-body mt-6 max-w-xl">
              A focused pageant experience for contestants, partners and audiences. Registration
              details, eligibility and finale announcements will be shared through official Meraki
              channels.
            </p>

            <div className="mt-8 grid gap-5 border-y border-line py-6 sm:grid-cols-3">
              <div>
                <p className="type-meta">Location</p>
                <p className="mt-1 text-sm font-medium text-foreground">Dimapur</p>
              </div>
              <div>
                <p className="type-meta">Format</p>
                <p className="mt-1 text-sm font-medium text-foreground">Pageant</p>
              </div>
              <div>
                <p className="type-meta">Status</p>
                <p className="mt-1 text-sm font-medium text-foreground">Registration open</p>
              </div>
            </div>

            <div className="button-row mt-8">
              <Link href="/register" className="btn btn-primary">
                Apply now
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Partner enquiry
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.96fr_1.04fr]" data-reveal data-reveal-delay="1">
            <div className="image-frame group relative aspect-[4/5] sm:mt-16">
              <Image
                src="/event5.jpeg"
                alt="Mr Dimapur contestant visual"
                fill
                sizes="(min-width: 1024px) 340px, 50vw"
                className="image-soft object-cover photo-focus-face"
              />
            </div>
            <div className="image-frame group relative aspect-[4/5]">
              <Image
                src="/e.jpeg"
                alt="Mr Dimapur contestant visual"
                fill
                sizes="(min-width: 1024px) 380px, 50vw"
                className="image-soft object-cover photo-focus-face"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="section bg-background">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="eyebrow">Events</p>
              <h2 className="type-section">Our pageants</h2>
            </div>
            <Link href="/contact" className="text-link text-foreground">
              Work with Meraki
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {platforms.map((platform) => (
              <article key={platform.name} className="group" data-reveal data-reveal-delay="1">
                <div className="image-frame relative aspect-[4/5]">
                  <Image
                    src={platform.img}
                    alt={platform.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="image-soft object-cover photo-focus-center"
                  />
                </div>
                <div className="border-b border-line py-5">
                  <h3 className="type-title text-foreground">{platform.name}</h3>
                  <p className="type-body mt-3 text-sm">{platform.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section bg-dark text-ivory">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="image-frame relative aspect-[5/4]" data-reveal>
            <Image
              src="/event4.jpeg"
              alt="Meraki winner moment"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover photo-focus-center"
            />
          </div>

          <div data-reveal data-reveal-delay="1">
            <p className="eyebrow text-dark-muted">Organisation</p>
            <h2 className="type-section max-w-2xl text-ivory">How we work</h2>
            <p className="type-body mt-6 max-w-2xl text-dark-muted">
              The Meraki experience is built around preparation: contestants are guided, partners
              are presented with taste and every visual moment is shaped for public memory.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {process.map(([title, copy]) => (
                <div key={title} className="border-t border-ivory/20 pt-5">
                  <h3 className="type-title text-ivory">{title}</h3>
                  <p className="type-body mt-3 text-sm text-dark-muted">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section bg-background">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="type-section">Selected moments</h2>
            </div>
            <a
              href="https://www.instagram.com/meraki_entertainment2018/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-foreground"
            >
              View Instagram
            </a>
          </div>

          <div className="grid auto-rows-[190px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4">
            {gallery.map((item, index) => (
              <div
                key={item.src}
                className={`image-frame group relative ${item.className}`}
                data-reveal
                data-reveal-delay={index % 2 === 0 ? "1" : "2"}
              >
                <Image
                  src={item.src}
                  alt={`Meraki event photography ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className={`image-soft object-cover ${item.focus}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-surface">
        <div className="container-shell grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center" data-reveal>
          <div className="flex items-center gap-4">
            <div className="image-frame relative h-20 w-20 shrink-0">
              <Image
                src="/founder.jpeg"
                alt="Thritong Sangtam"
                fill
                sizes="80px"
                className="object-cover photo-focus-top"
              />
            </div>
            <div>
              <p className="type-meta">Founder and PR</p>
              <h2 className="display-font text-2xl text-foreground">Thritong Sangtam</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <p className="type-body max-w-2xl">
              For contestant applications, sponsorship, media requests or a new pageant/event
              conversation, reach the Meraki team directly.
            </p>
            <Link href="/contact" className="btn btn-primary md:justify-self-end">
              Contact Meraki
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
