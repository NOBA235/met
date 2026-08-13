import Link from "next/link";

const events = [
  {
    name: "Mr Dimapur",
    detail: "A flagship pageant for confidence, presentation and individuality.",
    timing: "2026 registration",
    img: "/event1.jpeg",
  },
  {
    name: "Mr Kohima",
    detail: "A regional platform for talent and stage presence.",
    timing: "Regional edition",
    img: "/event2.jpeg",
  },
  {
    name: "Mr Chumoukedima",
    detail: "A growing platform for contestants from the Chumoukedima community.",
    timing: "Upcoming",
    img: "/event3.jpeg",
  },
  {
    name: "Ms Chumu",
    detail: "A platform focused on representation, confidence and personality.",
    timing: "Coming soon",
    img: "/event4.jpeg",
  },
];

const gallery = [
  "/event5.jpeg",
  "/event1.jpeg",
  "/event2.jpeg",
  "/event3.jpeg",
  "/event4.jpeg",
  "/s5.jpeg",
];

const services = [
  {
    title: "Pageants",
    copy: "Complete show planning, contestant coordination and finale production.",
  },
  {
    title: "Events",
    copy: "Stage-led cultural, entertainment and community experiences.",
  },
  {
    title: "Partnerships",
    copy: "Sponsor, media and brand collaborations built around engaged audiences.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex h-[82vh] min-h-[520px] max-h-[720px] items-end overflow-hidden bg-[#111111]">
        <img
          src="/event1.jpeg"
          alt="Meraki Entertainment event stage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />

        <div className="container-shell relative z-10 pb-12 pt-28 md:pb-16">
          <p className="mb-3 text-sm font-semibold text-white/72">Nagaland based event production</p>
          <h1 className="display text-white">Meraki Entertainment</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/78">
            Professional pageants and entertainment platforms for talent, identity and community.
          </p>
          <div className="button-row mt-7">
            <Link href="/#events" className="btn btn-light">
              View Events
            </Link>
            <Link href="/contact" className="btn btn-ghost-light">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight border-b border-[#dedbd3] bg-white">
        <div className="container-shell grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title}>
              <h2 className="text-base font-semibold text-[#151515]">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#6d6963]">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="upcoming" className="section bg-[#f7f7f4]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="surface-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/event5.jpeg"
                alt="Mr Dimapur event"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow">Registration Open</p>
            <h2 className="heading">Mr Dimapur 2026</h2>
            <p className="body-copy mt-4 max-w-xl">
              The next edition is being prepared for contestants across Nagaland. Registration,
              eligibility and schedule details will be shared through Meraki&apos;s official channels.
            </p>

            <div className="mt-6 grid gap-3 border-y border-[#dedbd3] py-5 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-[#151515]">Location</p>
                <p className="text-sm text-[#6d6963]">Dimapur</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#151515]">Focus</p>
                <p className="text-sm text-[#6d6963]">Pageant</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#151515]">Status</p>
                <p className="text-sm text-[#6d6963]">Applications open</p>
              </div>
            </div>

            <div className="button-row mt-6">
              <Link href="/register" className="btn btn-primary">
                Register
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Partner Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="section bg-white">
        <div className="container-shell">
          <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1fr] md:items-end">
            <div>
              <p className="eyebrow">Platforms</p>
              <h2 className="heading">Events with a clear stage identity.</h2>
            </div>
            <p className="body-copy md:max-w-md md:justify-self-end">
              Meraki keeps each platform focused, produced and easy to understand for contestants,
              audiences and partners.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => (
              <article key={event.name} className="surface-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-[#8d7132]">{event.timing}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#151515]">{event.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6d6963]">{event.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section bg-[#111111] text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#c8b36f]">Our Work</p>
            <h2 className="heading max-w-xl text-white">
              Built in Nagaland. Produced with intention.
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-[#b7b2aa] md:text-base">
              <p>
                Meraki Entertainment creates pageants, talent showcases and event experiences that
                feel organized, current and rooted in local community.
              </p>
              <p>
                The focus is simple: give contestants a credible platform, give partners a polished
                environment and give audiences a memorable show.
              </p>
            </div>
          </div>

          <div className="surface-card surface-card-dark p-4">
            <div className="flex items-center gap-4">
              <img
                src="/founder.jpeg"
                alt="Thritong Sangtam"
                className="h-24 w-24 rounded object-cover"
              />
              <div>
                <p className="text-sm text-[#b7b2aa]">Founder and PR</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Thritong Sangtam</h3>
                <p className="mt-2 text-sm text-[#b7b2aa]">Meraki Entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section bg-[#f7f7f4]">
        <div className="container-shell">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="heading">Recent moments</h2>
            </div>
            <a
              href="https://www.instagram.com/meraki_entertainment2018/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#151515] hover:text-[#8d7132]"
            >
              View Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((src, index) => (
              <div key={src} className="surface-card aspect-[4/3]">
                <img
                  src={src}
                  alt={`Meraki event moment ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="section-tight bg-white">
        <div className="container-shell grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Collaborate</p>
            <h2 className="heading">Partnerships, sponsorship and media.</h2>
            <p className="body-copy mt-3 max-w-2xl">
              For sponsorship, contestant information, media requests or event enquiries, contact
              the Meraki team directly.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary md:justify-self-end">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
