import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import StatCounter from "@/components/StatCounter";
import {
  IMG,
  QUICK_LINKS,
  EXPECT,
  STATS,
  TESTIMONIALS,
  FAQ,
  MAP_SRC,
  YOUTUBE_ID,
  SAMPLE_LESSON_URL,
} from "@/lib/content";

export default function SchoolsPage() {
  return (
    <main className="overflow-x-hidden">
      <Nav />

      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[92vh] items-center pt-20">
        <Image
          src={IMG.hero}
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/40 to-cream" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow mb-5">For Schools</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              A whole-school approach to digital wellness
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
              When it comes to tech, you need a whole-school shift—one that sticks,
              one that supports your values, and one that doesn’t require you to
              build it from scratch.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#discoverycall" className="btn-primary">Book a Discovery</a>
              <a href="#whattoexpect" className="btn-ghost">See the curriculum</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- QUICK LINKS ---------- */}
      <section className="border-y border-ink/10 bg-sand/60">
        <div className="container-x grid divide-ink/10 py-2 md:grid-cols-3 md:divide-x">
          {QUICK_LINKS.map((q, i) => (
            <Reveal key={q.label} delay={i * 0.08}>
              <a
                href={q.href}
                className="group flex items-center justify-between gap-4 px-2 py-6 md:px-8"
              >
                <span className="font-display text-lg text-ink">{q.label}</span>
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-ink/20 text-ink transition-all group-hover:bg-clay group-hover:text-cream">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WHAT TO EXPECT ---------- */}
      <section id="whattoexpect" className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow mb-4">What to Expect</p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Meaningful lessons, real coaching, a community of practice.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
                JOMO equips schools to lead students toward healthy tech habits and
                Christ-centered living—blending Scripture, health science, and
                practical strategies.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#discoverycall" className="btn-primary">Book a Discovery</a>
                <a href={SAMPLE_LESSON_URL} target="_blank" rel="noreferrer" className="btn-ghost">
                  See Sample Lesson
                </a>
              </div>
              <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
                <Image src={IMG.expect} alt="" fill unoptimized className="object-cover" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Accordion items={EXPECT} singleOpen />
          </Reveal>
        </div>
      </section>

      {/* ---------- IMPACT ---------- */}
      <section id="schoolimpact" className="relative py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-10 rounded-[2rem] bg-sand/70 px-6 py-14 sm:px-12 md:grid-cols-3 md:gap-6">
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>

          <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative aspect-[5/4] overflow-hidden rounded-3xl">
              <Image src={IMG.impact} alt="" fill unoptimized className="object-cover" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4">The Impact at Schools</p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                From awareness to <span className="text-clay">action.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Across campuses, JOMO is helping students rediscover balance, focus,
                and joy in a world full of digital noise. Through hands-on workshops
                and school-wide challenges, we empower young people to pause, reflect,
                and build healthier relationships with their devices.
              </p>
              <a href="#discoverycall" className="btn-primary mt-8">Book a Discovery</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- MAP ---------- */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="eyebrow mb-4">Used in 35+ cities and counting</p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Schools all over North America are bringing joy into reality on their campuses.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-ink/10 shadow-sm">
              <iframe
                src={MAP_SRC}
                title="Map of schools using JOMO"
                className="h-[420px] w-full sm:h-[520px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section id="what-schools-say" className="bg-sage/10 py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-4">What Schools Say</p>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Classrooms that feel lighter, and more connected.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.school} delay={i * 0.1}>
                <figure className="flex h-full flex-col overflow-hidden rounded-3xl bg-cream shadow-sm ring-1 ring-ink/5">
                  <div className="relative aspect-[4/3]">
                    <Image src={IMG[t.img]} alt={t.school} fill unoptimized className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-sm font-semibold text-sage">{t.school}</p>
                    <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/80">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-5 border-t border-ink/10 pt-4 text-sm">
                      <span className="font-semibold text-ink">{t.name}</span>
                      <span className="block text-ink/60">{t.role}</span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VIDEO ---------- */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">A Student Story</p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Hear from King’s Christian Collegiate
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                What began as a challenge to put phones away became a movement of joy,
                presence, and friendship—reminding students that the best moments
                happen offline.
              </p>
              <a href="#discoverycall" className="btn-primary mt-8">Book a Discovery</a>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-ink shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                  title="Hear from King’s Christian Collegiate"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-sand/60 py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-ink/70">
              Can’t find what you’re looking for?{" "}
              <a href="https://www.experiencejomo.com/contact" className="font-semibold text-clay underline-offset-4 hover:underline">
                Contact us
              </a>{" "}
              and we’ll be happy to help.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={FAQ} singleOpen={false} />
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section id="discoverycall" className="py-24 md:py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-clay px-6 py-16 text-center sm:px-12 md:py-24">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                Book a Discovery Call
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-cream/85">
                Book a call and you’ll receive a free guide to use with your students today.
              </p>
              <a
                href="https://www.experiencejomo.com/schools#discoverycall"
                className="mt-9 inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Schedule your call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
