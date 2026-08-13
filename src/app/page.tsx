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
    detail: "A new platform for poise, personality and representation.",
    img: "/event2.jpeg",
  },
];

const process = [
  ["Auditions", "Registration, screening and contestant communication."],
  ["Grooming", "Walk-throughs, media preparation and stage readiness."],
  ["Finale", "A polished event experience for audience, contestants and partners."],
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
      <section className="relative min-h-[740px] overflow-hidden bg-[#10100f] text-white">
        <Image
          src="/event1.jpeg"
          alt="Meraki Entertainment winners on stage"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,15,0.82)_0%,rgba(16,16,15,0.5)_42%,rgba(16,16,15,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#10100f] to-transparent" />

        <div className="container-shell relative z-10 flex min-h-[740px] items-end pb-12 pt-28 md:pb-18">
          <div className="max-w-3xl">
            <p className="motion-rise mb-5 text-sm font-medium text-[#cdbf98]">
              Pageant organization in Nagaland
            </p>
            <h1 className="display motion-rise motion-delay-1 text-[#e8dfcf]">
              <span className="block">Meraki</span>
              <span className="block">Entertainment</span>
            </h1>
            <p className="motion-rise motion-delay-2 mt-7 max-w-lg text-base leading-8 text-[#cfc5b4]">
              Represent your roots. Rise to the stage. A refined platform for pageants,
              talent and cultural presence.
            </p>
            <div className="button-row motion-rise motion-delay-3 mt-9">
              <Link href="/register" className="btn btn-light">
                Apply for 2026
              </Link>
              <Link href="/contact" className="btn btn-ghost-light">
                Partner Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8cebd] bg-[#10100f] py-7 text-white">
        <div className="container-shell flex flex-col gap-3 text-sm text-[#cfc5b4] md:flex-row md:items-center md:justify-between">
          <span>Mr Dimapur 2026 registration interest is open.</span>
          <Link href="/register" className="text-link text-white">
            Start Application
          </Link>
        </div>
      </section>

      <section className="section bg-[#f7f4ee]">
        <div className="container-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="eyebrow">The Platform</p>
            <h2 className="headline">Represent Nagaland. Rise with presence.</h2>
          </div>
          <p className="body-copy max-w-2xl md:justify-self-end">
            Meraki Entertainment creates pageant and entertainment platforms with a clean
            organizational standard: clear communication, elegant visuals, considered production
            and a stage where contestants feel prepared.
          </p>
        </div>
      </section>

      <section id="upcoming" className="section bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">Now Preparing</p>
            <h2 className="heading">Mr Dimapur 2026</h2>
            <p className="body-copy mt-6 max-w-xl">
              A focused pageant experience for contestants, partners and audiences. Registration
              details, eligibility and finale announcements will be shared through official Meraki
              channels.
            </p>

            <div className="mt-8 grid gap-5 border-y border-[#d8cebd] py-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-[#6d655b]">Location</p>
                <p className="mt-1 font-semibold text-[#161412]">Dimapur</p>
              </div>
              <div>
                <p className="text-sm text-[#6d655b]">Format</p>
                <p className="mt-1 font-semibold text-[#161412]">Pageant</p>
              </div>
              <div>
                <p className="text-sm text-[#6d655b]">Status</p>
                <p className="mt-1 font-semibold text-[#161412]">Interest Open</p>
              </div>
            </div>

            <div className="button-row mt-8">
              <Link href="/register" className="btn btn-primary">
                Apply Now
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Sponsorship
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.96fr_1.04fr]">
            <div className="image-frame group relative aspect-[4/5] sm:mt-16">
              <Image
                src="/event5.jpeg"
                alt="Mr Dimapur contestant visual"
                fill
                sizes="(min-width: 1024px) 340px, 50vw"
                className="image-zoom object-cover photo-focus-face"
              />
            </div>
            <div className="image-frame group relative aspect-[4/5]">
              <Image
                src="/e.jpeg"
                alt="Mr Dimapur contestant visual"
                fill
                sizes="(min-width: 1024px) 380px, 50vw"
                className="image-zoom object-cover photo-focus-face"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="section bg-[#f7f4ee]">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Events</p>
              <h2 className="heading">Platforms with pageant discipline.</h2>
            </div>
            <Link href="/contact" className="text-link text-[#161412]">
              Work With Meraki
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {platforms.map((platform) => (
              <article key={platform.name} className="group">
                <div className="image-frame relative aspect-[4/5]">
                  <Image
                    src={platform.img}
                    alt={platform.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="image-zoom object-cover photo-focus-center"
                  />
                </div>
                <div className="border-b border-[#d8cebd] py-5">
                  <h3 className="display-font text-3xl text-[#161412]">{platform.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6d655b]">{platform.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section bg-[#10100f] text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="image-frame relative aspect-[5/4]">
            <Image
              src="/event4.jpeg"
              alt="Meraki winner moment"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover photo-focus-center"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-[#d7c797]">Organisation</p>
            <h2 className="heading max-w-xl text-white">A stage should feel graceful before it feels loud.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#cfc5b4]">
              The Meraki experience is built around preparation: contestants are guided, partners
              are presented with taste and every visual moment is shaped for public memory.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {process.map(([title, copy]) => (
                <div key={title} className="border-t border-white/18 pt-5">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#cfc5b4]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section bg-[#f7f4ee]">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="heading">Composed moments, not clutter.</h2>
            </div>
            <a
              href="https://www.instagram.com/meraki_entertainment2018/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-[#161412]"
            >
              View Instagram
            </a>
          </div>

          <div className="grid auto-rows-[190px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4">
            {gallery.map((item, index) => (
              <div key={item.src} className={`image-frame group relative ${item.className}`}>
                <Image
                  src={item.src}
                  alt={`Meraki event photography ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className={`image-zoom object-cover ${item.focus}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-white">
        <div className="container-shell grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#ede7dc]">
              <Image
                src="/founder.jpeg"
                alt="Thritong Sangtam"
                fill
                sizes="80px"
                className="object-cover photo-focus-top"
              />
            </div>
            <div>
              <p className="text-sm text-[#6d655b]">Founder and PR</p>
              <h2 className="display-font text-2xl text-[#161412]">Thritong Sangtam</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <p className="body-copy max-w-2xl">
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
