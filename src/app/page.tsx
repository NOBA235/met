import Link from "next/link";

const images = {
  hero: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2400&auto=format&fit=crop",
  featured: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
  event1: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200&auto=format&fit=crop",
  event2: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
  event3: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop",
  event4: "https://images.unsplash.com/photo-1459749411177-041544806a28?q=80&w=1200&auto=format&fit=crop",
  pageant1: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop",
  pageant2: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  pageant3: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
  contestant1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  contestant2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  contestant3: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  contestant4: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop",
  founder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  gallery1: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1000&auto=format&fit=crop",
  gallery2: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
  gallery3: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000&auto=format&fit=crop",
  gallery4: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000&auto=format&fit=crop",
  gallery5: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
  gallery6: "https://images.unsplash.com/photo-1459749411177-041544806a28?q=80&w=1000&auto=format&fit=crop",
  video: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop",
  media1: "https://images.unsplash.com/photo-1504711434719-2267a1c1d0b4?q=80&w=800&auto=format&fit=crop",
  media2: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Meraki Entertainment event stage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
          <p className="text-[#c4a35a] text-xs tracking-[0.35em] uppercase mb-4">
            Events · Talent · Identity
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl">
            Where Talent
            <br />
            Takes the Stage.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
            Creating platforms for talent, confidence, fashion and entertainment across Nagaland.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#events"
              className="inline-flex items-center px-8 py-3.5 bg-white text-[#0f0f0f] text-xs tracking-[0.2em] uppercase hover:bg-[#c4a35a] hover:text-white transition-all duration-300"
            >
              Explore Events
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-3.5 border border-white/70 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#0f0f0f] transition-all duration-300"
            >
              Become a Contestant
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-[10px] tracking-[0.3em] uppercase flex flex-col items-center gap-2">
          <span>Scroll to explore</span>
          <span className="animate-bounce">↓</span>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="py-20 md:py-32 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
                Featured Platform
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0f0f0f] leading-tight">
                Mr Dimapur
              </h2>
              <p className="mt-6 text-[#6b6560] leading-relaxed max-w-md">
                A platform celebrating confidence, personality, talent and individuality.
                One of Nagaland&apos;s most recognized pageants, brought to life by Meraki Entertainment.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/#events"
                  className="inline-flex items-center px-6 py-3 bg-[#0f0f0f] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#c4a35a] transition-colors"
                >
                  Explore Mr Dimapur
                </Link>
                <Link
                  href="/#contestants"
                  className="inline-flex items-center px-6 py-3 border border-[#0f0f0f] text-[#0f0f0f] text-xs tracking-[0.15em] uppercase hover:bg-[#0f0f0f] hover:text-white transition-all"
                >
                  View Contestants
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
              <img
                src={images.featured}
                alt="Mr Dimapur stage"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm tracking-widest uppercase">Season 5 · 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR EVENTS */}
      <section id="events" className="py-20 md:py-28 bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
                Our Platforms
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">Our Events</h2>
            </div>
            <p className="text-[#a8a29e] max-w-sm text-sm leading-relaxed">
              From Dimapur to Kohima and beyond — platforms that celebrate the spirit of Nagaland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { name: "Mr Dimapur", desc: "Celebrating confidence and individuality in Dimapur.", year: "2025", img: images.event1 },
              { name: "Mr Kohima", desc: "Showcasing talent and personality from the capital.", year: "Recent", img: images.event2 },
              { name: "Mr Chümoukedima", desc: "A rising platform for the vibrant community of Chumu.", year: "2025", img: images.event3 },
              { name: "Ms Chumu", desc: "Empowering women through talent and representation.", year: "Coming", img: images.event4 },
            ].map((event) => (
              <div key={event.name} className="group relative overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[#c4a35a] text-[10px] tracking-[0.25em] uppercase mb-1">
                    {event.year}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl">{event.name}</h3>
                  <p className="mt-2 text-sm text-white/70 max-w-xs">{event.desc}</p>
                  <span className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-white/90 group-hover:text-[#c4a35a] transition-colors">
                    Explore Event →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#a8a29e] text-sm">
              Also presenting: <span className="text-white">Mr Nagaland</span> and special entertainment initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section id="upcoming" className="py-20 md:py-28 bg-[#f0ece4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              Calendar
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f0f0f]">What&apos;s Next</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white border border-[#e8e4dc] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-[#c4a35a] text-[10px] tracking-[0.25em] uppercase mb-1">
                  Registration Open
                </p>
                <h3 className="font-serif text-2xl text-[#0f0f0f]">Mr Dimapur 2026</h3>
                <p className="mt-2 text-sm text-[#6b6560]">
                  Dimapur, Nagaland · Coming Soon
                </p>
              </div>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0f0f0f] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#c4a35a] transition-colors shrink-0"
              >
                Register Now
              </Link>
            </div>

            <div className="bg-white border border-[#e8e4dc] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-[#6b6560] text-[10px] tracking-[0.25em] uppercase mb-1">
                  Coming Soon
                </p>
                <h3 className="font-serif text-2xl text-[#0f0f0f]">Mr Chümoukedima</h3>
                <p className="mt-2 text-sm text-[#6b6560]">
                  Chümoukedima, Nagaland · Details to be announced
                </p>
              </div>
              <span className="inline-flex items-center justify-center px-6 py-3 border border-[#d6d3d1] text-[#6b6560] text-xs tracking-[0.15em] uppercase shrink-0">
                Stay Tuned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PAGEANTS */}
      <section id="pageants" className="py-20 md:py-32 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              The Stage
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f0f0f]">
              More Than a Crown.
            </h2>
            <p className="mt-6 text-[#6b6560] leading-relaxed">
              Platforms that encourage confidence, individuality, talent and representation.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Men", img: images.pageant1 },
              { label: "Women", img: images.pageant2 },
              { label: "Talent", img: images.pageant3 },
              { label: "Special Events", img: images.gallery1 },
            ].map((cat) => (
              <div key={cat.label} className="group relative aspect-[3/4] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="font-serif text-xl md:text-2xl text-white tracking-wide">
                    {cat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTESTANTS */}
      <section id="contestants" className="py-20 md:py-28 bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              Faces of the Stage
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Meet the Contestants</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Mr Dimapur", "Mr Kohima", "Mr Chumu", "Ms Chumu", "Mr Nagaland"].map(
              (f, i) => (
                <button
                  key={f}
                  className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase border transition-colors ${
                    i === 0
                      ? "border-[#c4a35a] text-[#c4a35a]"
                      : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Contestant One", title: "Mr Dimapur 2025", loc: "Dimapur", img: images.contestant1 },
              { name: "Contestant Two", title: "Mr Dimapur 2025", loc: "Kohima", img: images.contestant2 },
              { name: "Contestant Three", title: "Mr Chumu 2025", loc: "Chümoukedima", img: images.contestant3 },
              { name: "Contestant Four", title: "Ms Chumu", loc: "Dimapur", img: images.contestant4 },
            ].map((c) => (
              <div key={c.name} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg">{c.name}</h3>
                <p className="text-xs text-[#c4a35a] tracking-wider mt-1">{c.title}</p>
                <p className="text-xs text-white/50 mt-0.5">{c.loc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/50">
            Placeholder profiles — replace with actual contestant information.
          </p>
        </div>
      </section>

      {/* LEGACY */}
      <section className="py-20 md:py-28 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              Hall of Fame
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f0f0f]">The Legacy</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Mr Dimapur", year: "2025", name: "Winner Name" },
              { title: "Mr Dimapur", year: "2024", name: "Winner Name" },
              { title: "Mr Chümoukedima", year: "2025", name: "Winner Name" },
            ].map((w, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square max-w-[280px] mx-auto overflow-hidden mb-6 bg-[#e8e4dc]">
                  <img
                    src={i === 0 ? images.contestant1 : i === 1 ? images.contestant2 : images.contestant3}
                    alt={w.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="text-[#c4a35a] text-[10px] tracking-[0.3em] uppercase">{w.year}</p>
                <h3 className="font-serif text-2xl mt-2 text-[#0f0f0f]">{w.title}</h3>
                <p className="text-sm text-[#6b6560] mt-1 tracking-wide">WINNER</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-[#6b6560]">
            Actual winner names and portraits to be updated with official records.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-32 bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={images.about}
                alt="Meraki event atmosphere"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Creating Platforms.
                <br />
                Building Confidence.
              </h2>
              <div className="mt-8 space-y-5 text-[#a8a29e] leading-relaxed">
                <p>
                  Meraki Entertainment creates events and platforms that bring together talent,
                  fashion, entertainment, community, youth and culture across Nagaland.
                </p>
                <p>
                  From Mr Dimapur and Mr Chümoukedima to talent competitions and entertainment
                  showcases, we exist to give emerging voices a stage and an audience.
                </p>
                <p>
                  Based in Nagaland, we work with contestants, partners and communities to
                  produce experiences that are memorable, professional and rooted in local spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 md:py-28 bg-[#f0ece4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              Leadership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0f0f0f] mb-12">
              Founder &amp; PR
            </h2>
            <div className="inline-block">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto overflow-hidden mb-6 bg-[#e8e4dc]">
                <img
                  src={images.founder}
                  alt="Thritong Sangtam"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#0f0f0f]">Thritong Sangtam</h3>
              <p className="text-sm text-[#6b6560] mt-2 tracking-wide">Founder &amp; PR</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              Visual Archive
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f0f0f]">Gallery</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Events", "Backstage", "Pageants", "Red Carpet", "Moments"].map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase border transition-colors ${
                  i === 0
                    ? "border-[#0f0f0f] text-[#0f0f0f]"
                    : "border-[#d6d3d1] text-[#6b6560] hover:border-[#0f0f0f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.gallery6].map(
              (src, i) => (
                <div key={i} className="group relative overflow-hidden aspect-[4/3]">
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-xs tracking-widest uppercase">Event Moment</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-20 md:py-28 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              On Camera
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Experience Meraki</h2>
          </div>

          <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden group cursor-pointer">
            <img
              src={images.video}
              alt="Event highlights"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex flex-wrap gap-6 text-xs tracking-[0.2em] uppercase text-white/80">
                <span>Event Highlights</span>
                <span>Backstage</span>
                <span>Contestant Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="py-20 md:py-28 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              Collaborate
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f0f0f]">
              Partner with Meraki
            </h2>
            <p className="mt-6 text-[#6b6560] leading-relaxed">
              Present your brand to engaged audiences through title, event, media and brand
              partnerships across our pageants and entertainment platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {["Title Partner", "Event Partner", "Media Partner", "Brand Partner"].map((tier) => (
              <div
                key={tier}
                className="border border-[#e8e4dc] bg-white p-6 text-center"
              >
                <div className="h-12 flex items-center justify-center mb-4">
                  <span className="text-[10px] tracking-[0.2em] text-[#a8a29e] uppercase">
                    Partner Logo
                  </span>
                </div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#0f0f0f]">{tier}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-[#0f0f0f] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#c4a35a] transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section id="media" className="py-20 md:py-28 bg-[#f0ece4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
              Coverage
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f0f0f]">
              In the Spotlight
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Mr Dimapur 2025 Grand Finale Coverage", date: "2025", type: "Press" },
              { title: "Event Announcement — Mr Chümoukedima", date: "2025", type: "News" },
              { title: "Behind the Scenes Feature", date: "Recent", type: "Interview" },
            ].map((item, i) => (
              <article key={i} className="bg-white border border-[#e8e4dc] overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={i === 0 ? images.media1 : i === 1 ? images.media2 : images.gallery3}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#c4a35a] mb-2">
                    {item.type} · {item.date}
                  </p>
                  <h3 className="font-serif text-lg text-[#0f0f0f] leading-snug">
                    {item.title}
                  </h3>
                  <span className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-[#6b6560] group-hover:text-[#c4a35a] transition-colors">
                    Read More →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-20 md:py-28 bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c4a35a] text-xs tracking-[0.3em] uppercase mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Follow the Journey</h2>
          <p className="text-[#a8a29e] mb-10">
            @meraki_entertainment2018
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 mb-12">
            {[images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.gallery6].map(
              (src, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt={`Instagram ${i + 1}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                  />
                </div>
              )
            )}
          </div>

          <a
            href="https://www.instagram.com/meraki_entertainment2018/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 border border-white/40 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#0f0f0f] transition-all"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="py-20 md:py-28 bg-[#f8f6f1]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f0f0f] mb-6">
            Let&apos;s Create Something Memorable.
          </h2>
          <p className="text-[#6b6560] mb-10">
            General enquiries, contestant information, sponsorship and media requests.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#0f0f0f] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#c4a35a] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
