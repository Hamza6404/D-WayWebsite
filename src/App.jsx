import React from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const bodyFont = {
  fontFamily: 'Trebuchet MS, Avenir Next, Avenir, Segoe UI, sans-serif',
}

const focusCards = [
  {
    number: '01',
    title: 'Mentorship',
    text: 'Real guidance from people who understand the community and know how to support youth with consistency, care, and real life advice.',
  },
  {
    number: '02',
    title: 'Wellness',
    text: 'Movement, healthy living, confidence building, and safe spaces that help youth feel grounded, seen, and strong.',
  },
  {
    number: '03',
    title: 'Creative Programming',
    text: 'Arts, storytelling, content, design, expression, and hands on experiences that help young people build identity and voice.',
  },
  {
    number: '04',
    title: 'Leadership & Life Skills',
    text: 'Workshops, exposure, and opportunities that help youth grow into leaders in their schools, communities, and future careers.',
  },
]

const rollingPhotos = [
  '/images/solo2.jpg',
  '/images/duo1.jpg',
  '/images/solo3.jpg',
  '/images/duo2.jpg',
  '/images/solo4.jpg',
  '/images/duo3.jpg',
  '/images/solo5.jpg',
  '/images/duo4.jpg',
  '/images/solo6.jpg',
  '/images/duo5.jpg',
  '/images/solo7.jpg',
  '/images/duo6.jpg',
  '/images/solo8.jpg',
  '/images/duo7.jpg',
  '/images/solo10.jpg',
  '/images/duo8.jpg',
  '/images/duo9.jpg',
  '/images/duo10.jpg',
  '/images/duo11.jpg',
]

const headshotsTop = [
  '/images/headshot1.jpg',
  '/images/headshot2.jpg',
  '/images/headshot3.jpg',
  '/images/headshot4.jpg',
]

const headshotsMiddle = [
  '/images/headshot5.jpg',
  '/images/headshot6.jpg',
  '/images/headshot7.jpg',
  '/images/headshot8.jpg',
]

const headshotsBottom = [
  '/images/headshot9.jpg',
  '/images/headshot10.jpg',
  '/images/headshot11.jpg',
  '/images/headshot12.jpg',
]

const bgImageStyle = (url, position = 'center') => ({
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
})

const overlayImageStyle = (url, position = 'center') => ({
  backgroundImage: `linear-gradient(rgba(34,23,15,0.16), rgba(34,23,15,0.3)), url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
})

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  React.useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 0)
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function SparklesIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
      <path d="M5 17v4" />
      <path d="M7 19H3" />
    </svg>
  )
}

function ArrowRightIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  )
}

function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MarqueeRow() {
  const labels = Array.from(
    { length: 12 },
    () => 'Mentorship • Creativity • Leadership • Wellness • Community •'
  )

  return (
    <div className="flex w-max">
      {labels.map((label, i) => (
        <div key={i} className="px-8 text-2xl font-black uppercase md:text-4xl">
          {label}
        </div>
      ))}
      {labels.map((label, i) => (
        <div key={`dup-${i}`} className="px-8 text-2xl font-black uppercase md:text-4xl">
          {label}
        </div>
      ))}
    </div>
  )
}

function SmoothWave({
  topColor = '#f8f2e8',
  bottomColor = '#efe4d3',
  flip = false,
  accent = '#f72ea4',
}) {
  return (
    <div className={`relative h-28 overflow-hidden md:h-40 ${flip ? 'scale-y-[-1]' : ''}`}>
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <rect width="1440" height="220" fill={topColor} />
        <path
          d="M0,120 C180,210 330,210 520,150 C720,85 880,25 1100,70 C1260,105 1350,150 1440,185 L1440,220 L0,220 Z"
          fill={accent}
        />
        <path
          d="M0,155 C230,198 420,220 680,220 C910,220 1140,195 1440,150 L1440,220 L0,220 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}

function HeadshotTile({ src }) {
  return (
    <div
      className="aspect-[3/4] min-h-[220px]"
      style={bgImageStyle(src, 'top')}
    />
  )
}

function FocusCard({ card, index }) {
  return (
    <motion.div
      whileHover={{ y: -12, rotate: index % 2 === 0 ? -2 : 2, scale: 1.015 }}
      transition={{ duration: 0.22 }}
      className="group flex min-h-[260px] cursor-default flex-col justify-between rounded-[2.2rem] bg-white/90 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-sm"
    >
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f2e8] font-black">
          {card.number}
        </div>
        <h3
          className="text-3xl font-black uppercase leading-none transition-transform duration-200 group-hover:translate-x-1"
          style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
        >
          {card.title}
        </h3>
      </div>

      <p
        className="mt-5 text-base leading-7 text-[#22170f]/85 transition-transform duration-200 group-hover:translate-y-1"
        style={bodyFont}
      >
        {card.text}
      </p>
    </motion.div>
  )
}

function SkiVideoFrame() {
  return (
    <div className="mx-auto mt-6 w-full max-w-[760px]">
      <video
        src="/DWAYSKI.mp4"
        muted
        loop
        playsInline
        controls
        preload="metadata"
        className="block aspect-video w-full rounded-[2rem] border-[8px] border-[#1e3a8a] bg-black object-cover shadow-[0_25px_70px_rgba(0,0,0,0.16)]"
      />
    </div>
  )
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0f172a] text-[#f8f2e8] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 md:px-8">
        <Link to="/" className="inline-flex items-center">
          <img
            src="/images/TRANSPRNCY_1.png"
            alt="D-Way logo"
            className="h-12 w-auto md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold uppercase tracking-[0.2em] text-[#f8f2e8] md:flex">
          <a href="/#about" className="hover:opacity-60">About</a>
          <Link to="/impact" className="hover:opacity-60">Impact</Link>
          <Link to="/focus" className="hover:opacity-60">Focus</Link>
          <Link to="/gallery" className="hover:opacity-60">Gallery</Link>
          <a href="#contact" className="hover:opacity-60">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#22170f] px-4 py-10 text-[#f8f2e8] md:px-8 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] bg-[#2c2018] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0b526]">Contact us</p>
          <h2
            className="mt-2 text-2xl font-black uppercase leading-none md:text-4xl"
            style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
          >
            Let’s build with the community.
          </h2>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <a
            href="mailto:dwayprograms@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-[#f8f2e8] px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#22170f] transition-transform hover:-translate-y-1"
          >
            <MailIcon className="h-4 w-4" />
            dwayprograms@gmail.com
          </a>

          <a
            href="https://instagram.com/dwayprograms"
            className="inline-flex items-center gap-3 rounded-full border border-[#f8f2e8]/25 px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#f8f2e8] transition-transform hover:-translate-y-1"
          >
            <InstagramIcon className="h-4 w-4" />
            @dwayprograms
          </a>
        </div>
      </div>
    </section>
  )
}

function Home() {
  React.useEffect(() => {
    const existing = document.querySelector('script[data-model-viewer="true"]')
    if (existing) return

    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
    script.setAttribute('data-model-viewer', 'true')
    document.head.appendChild(script)
  }, [])

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#22170f] text-[#f8f2e8]">
        <div
          className="absolute inset-0"
          style={overlayImageStyle('/images/group-photo8.jpg', 'center')}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 pb-12 pt-24 md:px-8">
          <motion.div
            animate={{ y: [0, -18, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex h-[320px] w-[320px] items-center justify-center md:h-[560px] md:w-[560px]"
          >
            <div className="absolute inset-0 rounded-full bg-[#f8f2e8]/10 blur-3xl" />
            <div className="absolute inset-[12%] rounded-full bg-[#f0b526]/25 blur-2xl" />

            <model-viewer
              src="/D-Way Logo 3d.glb"
              alt="D-Way 3D logo"
              auto-rotate
              auto-rotate-delay="0"
              rotation-per-second="18deg"
              camera-controls
              disable-zoom
              interaction-prompt="none"
              shadow-intensity="1"
              exposure="1.1"
              camera-orbit="0deg 75deg 105%"
              field-of-view="26deg"
              style={{ width: '100%', height: '100%', background: 'transparent' }}
            />
          </motion.div>
        </div>
      </section>

      <SmoothWave topColor="#22170f" bottomColor="#f8f2e8" accent="#f72ea4" />

      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-[#f8f2e8] text-[#22170f]">
        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 md:px-8 md:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#dbeafe] px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[#1e3a8a]"
              >
                <SparklesIcon className="h-4 w-4" />
                Youth mentorship and community programming
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-[4rem] font-black uppercase leading-[0.88] sm:text-[5.2rem] md:text-[6.1rem] lg:text-[6.6rem]"
                style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
              >
                Built By
                <span className="block text-[#1e3a8a]">Youth</span>
                <span className="block text-[#f97316]">for Youth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-2xl text-[1.05rem] leading-8 md:text-[1.18rem]"
                style={bodyFont}
              >
                D-Way creates programming for young people in underserved inner city communities. Through mentorship, wellness, creativity, leadership, and real opportunities, we build spaces where youth can feel supported, connected, and pushed to grow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="/#about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a] px-6 py-4 font-bold uppercase tracking-[0.16em] text-[#f8f2e8] transition-transform hover:-translate-y-1"
                >
                  Explore D-Way <ArrowRightIcon className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="rounded-full bg-[#f97316] px-6 py-4 font-bold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1"
                >
                  Contact us
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                <div className="rounded-[1.8rem] bg-[#dbeafe] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1e3a8a]">Rooted</p>
                  <p className="mt-2 text-sm leading-6 text-[#1f2937]" style={bodyFont}>
                    Built around real relationships and community trust.
                  </p>
                </div>

                <div className="rounded-[1.8rem] bg-[#eff6ff] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1d4ed8]">Creative</p>
                  <p className="mt-2 text-sm leading-6 text-[#1f2937]" style={bodyFont}>
                    Programs that feel expressive, relevant, and youth centered.
                  </p>
                </div>

                <div className="rounded-[1.8rem] bg-[#ffedd5] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ea580c]">Impact</p>
                  <p className="mt-2 text-sm leading-6 text-[#1f2937]" style={bodyFont}>
                    Experiences that create confidence, memories, and momentum.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative min-h-[420px] md:min-h-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 top-8 h-[82%] w-[82%] overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.14)]"
                style={overlayImageStyle('/images/founders.jpg', 'center')}
              />

              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="absolute bottom-0 right-0 h-[42%] w-[52%] overflow-hidden rounded-[2rem] border-[6px] border-[#f8f2e8] shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
                style={bgImageStyle('/images/group-photo3.jpg', 'center')}
              />

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [2, 4, 2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[8%] top-[8%] rounded-full bg-[#1e3a8a] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
              >
                inner city youth
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#22170f] py-4 text-[#f8f2e8]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
        >
          <MarqueeRow />
        </motion.div>
      </section>

      <section className="overflow-hidden bg-[#f8f2e8] py-8 md:py-10">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="flex w-max gap-4 md:gap-6"
        >
          {[...rollingPhotos, ...rollingPhotos].map((src, i) => (
            <div
              key={i}
              className={`shrink-0 overflow-hidden rounded-[2rem] ${
                i % 4 === 0
                  ? 'h-[280px] w-[260px] md:h-[420px] md:w-[340px]'
                  : i % 4 === 1
                    ? 'h-[280px] w-[240px] md:h-[420px] md:w-[300px]'
                    : i % 4 === 2
                      ? 'h-[280px] w-[280px] md:h-[420px] md:w-[360px]'
                      : 'h-[280px] w-[230px] md:h-[420px] md:w-[280px]'
              }`}
              style={bgImageStyle(src, 'top')}
            />
          ))}
        </motion.div>
      </section>

      <SmoothWave topColor="#f8f2e8" bottomColor="#efe4d3" accent="#f72ea4" flip />

      <section id="about" className="scroll-mt-28 bg-[#efe4d3] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d94b32]">About D-Way</p>
              <h2
                className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] md:text-7xl"
                style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
              >
                Built from community,
                <span className="block text-[#1e2457]">for inner city youth.</span>
              </h2>

              <p
                className="mt-8 max-w-3xl text-[1.05rem] leading-8 text-[#22170f]/85 md:text-[1.18rem]"
                style={bodyFont}
              >
                D-Way creates programming for young people in underserved inner city communities. We focus on building spaces that feel safe, inspiring, creative, and rooted in real relationships.
              </p>

              <p
                className="mt-5 max-w-3xl text-[1.05rem] leading-8 text-[#22170f]/85 md:text-[1.18rem]"
                style={bodyFont}
              >
                From mentorship and wellness to leadership, events, and creative programming, the goal is to give youth access to opportunities, support systems, and experiences that are often missing around them.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-h-[220px] rounded-[2.5rem] bg-[#f0b526] p-8 text-[#22170f] shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
                <p
                  className="text-3xl font-black uppercase"
                  style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
                >
                  Rooted
                </p>
                <p className="mt-4 text-[1rem] leading-7" style={bodyFont}>
                  Built around real people, real neighborhoods, and real relationships that make youth feel like they belong.
                </p>
              </div>

              <div className="min-h-[220px] rounded-[2.5rem] bg-[#d94b32] p-8 text-white shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
                <p
                  className="text-3xl font-black uppercase"
                  style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
                >
                  Creative
                </p>
                <p className="mt-4 text-[1rem] leading-7" style={bodyFont}>
                  Programming that feels energetic, expressive, and relevant to how young people actually move through the world.
                </p>
              </div>

              <div className="overflow-hidden rounded-[2.5rem] shadow-[0_20px_65px_rgba(0,0,0,0.14)] sm:col-span-2">
                <div className="h-[360px] w-full" style={bgImageStyle('/images/group-photo10.jpg', 'center')} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

function Impact() {
  return (
    <>
      <section className="bg-[#f8f2e8] px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d94b32]">
                Program Impact
              </p>
              <h2
                className="mt-3 text-5xl font-black uppercase leading-none md:text-7xl"
                style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
              >
                Events that move
                <span className="block text-[#1e2457]">the community.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-[1.05rem] leading-8 text-[#22170f]/85" style={bodyFont}>
              D-Way programming is built around real experiences that bring young people together,
              create memories, and make support feel tangible. From sports to creative sessions to
              group outings, our work is about showing youth what is possible when community is built with intention.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <div className="rounded-[2.2rem] bg-[#1e2457] p-8 text-[#f8f2e8] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <p className="text-5xl font-black">200+</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-[#f0b526]">
                Youth engaged
              </p>
            </div>

            <div className="rounded-[2.2rem] bg-[#d94b32] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <p className="text-5xl font-black">Multiple</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-[#f0b526]">
                Signature experiences
              </p>
            </div>

            <div className="rounded-[2.2rem] bg-[#f0b526] p-8 text-[#22170f] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <p className="text-5xl font-black">Year-round</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em]">
                Community centered programming
              </p>
            </div>

            <div className="rounded-[2.2rem] bg-[#dbeafe] p-8 text-[#1e3a8a] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <p className="text-5xl font-black">Real</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em]">
                Experiences and exposure
              </p>
            </div>
          </div>

          <div className="mt-14 space-y-16">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d94b32]">
                  Basketball Tournament
                </p>
                <h3
                  className="mt-3 text-4xl font-black uppercase leading-none md:text-5xl"
                  style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
                >
                  High energy, high turnout, real community.
                </h3>
                <p className="mt-6 text-[1.05rem] leading-8 text-[#22170f]/85" style={bodyFont}>
                  Our basketball tournament brought youth together through competition, connection,
                  and a strong community atmosphere. It created a space where energy, teamwork,
                  and pride could all live in the same room.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">160+</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Event reach
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Annual</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Major tournament
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Real</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Community energy
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-[2.2rem] shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                <div className="aspect-[4/5]" style={bgImageStyle('/images/still1.jpg', 'center')} />
                <div className="aspect-[4/5]" style={bgImageStyle('/images/group-photo3.jpg', 'center')} />
                <div className="aspect-[4/5]" style={bgImageStyle('/images/still6.jpg', 'center')} />
                <div className="aspect-[4/5]" style={bgImageStyle('/images/solo8.jpg', 'center')} />
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="order-2 grid grid-cols-2 gap-0 overflow-hidden rounded-[2.2rem] shadow-[0_25px_70px_rgba(0,0,0,0.12)] lg:order-1">
                <div className="aspect-[4/5]" style={bgImageStyle('/images/solo2.jpg', 'center')} />
                <div className="aspect-[4/5]" style={bgImageStyle('/images/solo3.jpg', 'center')} />
                <div className="aspect-[4/5]" style={bgImageStyle('/images/group-photo8.jpg', 'center')} />
                <div className="aspect-[4/5]" style={bgImageStyle('/images/duo10.jpg', 'center')} />
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d94b32]">
                  Workshops
                </p>
                <h3
                  className="mt-3 text-4xl font-black uppercase leading-none md:text-5xl"
                  style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
                >
                  Hands-on learning that brings people together.
                </h3>
                <p className="mt-6 text-[1.05rem] leading-8 text-[#22170f]/85" style={bodyFont}>
                  Workshops like Cook-Day gave youth the chance to learn, collaborate, and build confidence in a space
                  that felt social, practical, and fun. It was one of those experiences where skill building
                  and community happened at the same time.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Weekly</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Workshop days
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Hands-on</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Learning
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Real</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Teamwork
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d94b32]">
                  Ski Trip
                </p>
                <h3
                  className="mt-3 text-4xl font-black uppercase leading-none md:text-5xl"
                  style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
                >
                  New experiences,
                  <span className="block text-[#1e3a8a]">big memories.</span>
                </h3>

                <p className="mt-6 text-[1.05rem] leading-8 text-[#22170f]/85" style={bodyFont}>
                  Our ski trip gave youth the chance to try something new, step outside of their normal environment,
                  and build confidence through a shared experience that felt exciting, memorable, and different from everyday life.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Annual</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Ski trip
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">New</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Exposure
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Shared</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Experiences
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] p-0">
                <SkiVideoFrame />
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d94b32]">
                  Trips + Arts Sessions
                </p>
                <h3
                  className="mt-3 text-4xl font-black uppercase leading-none md:text-5xl"
                  style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
                >
                  Joy, expression, and memories that last.
                </h3>
                <p className="mt-6 text-[1.05rem] leading-8 text-[#22170f]/85" style={bodyFont}>
                  Some experiences are about pure joy and exposure. Wonderland gave youth a chance to
                  get out, celebrate, and make memories together. Our arts sessions created room for
                  expression, creativity, and confidence in a different way.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Multiple</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Experience types
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Creative</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Expression
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <p className="text-3xl font-black">Joy</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d94b32]">
                      Shared moments
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-0 overflow-hidden rounded-[2.2rem] shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                <div className="aspect-[3/4]" style={bgImageStyle('/images/group-photo1.jpg', 'center')} />
                <div className="aspect-[3/4]" style={bgImageStyle('/images/duo9.jpg', 'center')} />
                <div className="aspect-[3/4]" style={bgImageStyle('/images/group-photo5.jpg', 'center')} />
                <div className="aspect-[3/4]" style={bgImageStyle('/images/solo5.jpg', 'center')} />
                <div className="aspect-[3/4]" style={bgImageStyle('/images/duo11.jpg', 'center')} />
                <div className="aspect-[3/4]" style={bgImageStyle('/images/solo7.jpg', 'center')} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

function Focus() {
  return (
    <>
      <section className="bg-[#efe4d3] px-4 pb-20 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d94b32]">
                What we focus on
              </p>
              <h2
                className="mt-3 text-4xl font-black uppercase leading-none md:text-6xl"
                style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
              >
                The kind of support
                <span className="block text-[#1e2457]">we build around youth.</span>
              </h2>
            </div>

            <p className="max-w-xl text-[1.05rem] leading-8 text-[#22170f]/85" style={bodyFont}>
              The work is not one thing. It is mentorship, care, creativity, wellness, leadership,
              and the kind of programming that makes young people feel supported in real ways.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {focusCards.map((card, index) => (
              <FocusCard key={card.number} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

function Gallery() {
  return (
    <>
      <section className="bg-[#22170f] pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="px-4 pb-10 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0b526]">Gallery</p>
                <h2
                  className="mt-3 text-5xl font-black uppercase leading-none text-[#f8f2e8] md:text-7xl"
                  style={{ fontFamily: 'Comic Sans MS, Marker Felt, Chalkboard SE, cursive' }}
                >
                  Faces of D-Way
                </h2>
              </div>

              <p className="max-w-2xl text-[1.05rem] leading-8 text-[#f8f2e8]/80" style={bodyFont}>
                Faces, stories, and moments that show the people at the heart of D-Way.
              </p>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-0 md:grid-cols-4">
          {headshotsTop.map((src, i) => (
            <HeadshotTile key={`top-${i}`} src={src} />
          ))}
          {headshotsMiddle.map((src, i) => (
            <HeadshotTile key={`mid-${i}`} src={src} />
          ))}
          {headshotsBottom.map((src, i) => (
            <HeadshotTile key={`bot-${i}`} src={src} />
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f2e8] text-[#22170f]">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}