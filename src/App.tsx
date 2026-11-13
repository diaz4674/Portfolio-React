import { useEffect, useState } from 'react'
import { aiSkills, jobs, links, stack, streamTools } from './data'

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* storage blocked */ }
  }, [dark])
  return (
    <button
      onClick={() => setDark(d => !d)}
      className="chip cursor-pointer"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span aria-hidden>{dark ? '☀️' : '🌙'}</span>
      <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

function LiveBadge({ label = 'LIVE' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-pink px-2 py-0.5 font-mono text-[11px] font-medium tracking-wider text-white">
      <span className="live-dot h-2 w-2 rounded-full bg-white" />
      {label}
    </span>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b-[2.5px] border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-xl font-extrabold">
          mdiaz<span className="text-pink">.dev</span>
        </a>
        <div className="hidden items-center gap-6 font-bold md:flex">
          <a href="#work" className="hover:text-pink">Work</a>
          <a href="#projects" className="hover:text-pink">Projects</a>
          <a href="#ai" className="hover:text-pink">AI tooling</a>
          <a href="#play" className="hover:text-pink">Off the clock</a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={links.resume} className="chip bg-sun! text-ink!" target="_blank" rel="noreferrer">
            📄 <span>Resume</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.25fr_1fr] md:pt-20">
      <div>
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <LiveBadge label="OPEN TO WORK" />
          <span className="chip">🌉 SF Bay Area · Remote</span>
        </div>
        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I'm Miguel.
          <br />
          I build web apps that are{' '}
          <span className="relative inline-block">
            <span className="relative z-10">fun to use</span>
            <span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 rounded bg-sun sm:h-5" />
          </span>
          .
        </h1>
        <p className="muted mt-6 max-w-xl text-lg leading-relaxed">
          Frontend-focused full-stack engineer with <b className="text-[var(--text)]">7 years</b> of shipping production SaaS
          with React, Next.js, and TypeScript on top of Node.js and Ruby on Rails APIs. Lately: AI-assisted features and
          Claude Code skills that take the busywork out of shipping.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={links.email} className="sticker sticker-hover bg-pink! px-5 py-3 font-bold text-white!">
            Say hi 👋
          </a>
          <a href={links.resume} target="_blank" rel="noreferrer" className="sticker sticker-hover px-5 py-3 font-bold">
            Download resume
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className="sticker sticker-hover px-5 py-3 font-bold">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="sticker sticker-hover px-5 py-3 font-bold">
            LinkedIn
          </a>
        </div>
      </div>

      {/* "Stream card" portrait */}
      <div className="relative mx-auto w-full max-w-sm">
        <div className="sticker rotate-2 overflow-hidden p-3">
          <div className="mb-3 flex items-center justify-between px-1">
            <LiveBadge />
            <span className="font-mono text-xs muted">mdiaz.dev/cam</span>
          </div>
          <img
            src="/miguel.jpg"
            alt="Miguel Diaz smiling"
            width={460}
            height={460}
            className="aspect-square w-full rounded-xl border-[2.5px] border-[var(--line)] object-cover"
          />
          <div className="mt-3 flex items-center justify-between px-1 text-sm font-bold">
            <span>Miguel Diaz</span>
            <span className="muted">Software Engineer</span>
          </div>
        </div>
        <span className="chip float absolute -left-6 top-10 bg-cyan! text-ink!" style={{ ['--r' as string]: '-6deg' }}>
          ⚛️ React + TS
        </span>
        <span className="chip float absolute -right-4 top-1/2 bg-mint! text-ink!" style={{ ['--r' as string]: '5deg', animationDelay: '1.2s' }}>
          🖨️ 3D printer owner
        </span>
        <span className="chip float absolute -bottom-4 left-8 bg-sun! text-ink!" style={{ ['--r' as string]: '-3deg', animationDelay: '2.4s' }}>
          🐈 2 cats, 0 bugs*
        </span>
      </div>
    </section>
  )
}

function StackTicker() {
  const items = [...stack, ...stack]
  return (
    <div className="overflow-hidden border-y-[2.5px] border-[var(--line)] bg-plum py-3 text-white dark:bg-violet">
      <div className="marquee flex w-max gap-8 whitespace-nowrap font-display text-lg font-bold">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-8">
            {s}
            <span aria-hidden className="text-sun">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionTitle({ kicker, title, id }: { kicker: string; title: string; id: string }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <p className="font-mono text-sm font-medium text-pink">{kicker}</p>
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  )
}

function Work() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle id="work" kicker="// where I've shipped" title="Work history" />
      <ol className="space-y-8">
        {jobs.map((job, i) => (
          <li key={job.company} className="sticker p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span
                  className="chip mb-3 text-ink!"
                  style={{ background: job.color }}
                >
                  EP {String(jobs.length - i).padStart(2, '0')} · {job.tag}
                </span>
                <h3 className="font-display text-2xl font-extrabold sm:text-3xl">{job.company}</h3>
                <p className="muted font-bold">{job.role}</p>
              </div>
              <span className="font-mono text-sm muted">{job.dates}</span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {job.bullets.map(b => (
                <li key={b} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45" style={{ background: job.color }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle id="projects" kicker="// things I built for fun (and real users)" title="Projects" />

      <article className="sticker overflow-hidden">
        <div className="grid md:grid-cols-[1.3fr_1fr]">
          <a
            href="https://too-many-streams.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="block border-b-[2.5px] border-[var(--line)] bg-plum p-4 md:border-b-0 md:border-r-[2.5px]"
          >
            <div className="overflow-hidden rounded-lg border-2 border-white/20">
              <div className="flex items-center gap-1.5 bg-night px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink" />
                <span className="h-2.5 w-2.5 rounded-full bg-sun" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                <span className="ml-3 font-mono text-[11px] text-white/60">too-many-streams.vercel.app</span>
              </div>
              <img
                src="/toomanystreams-shot.jpg"
                alt="TooManyStreams home screen: watch multiple Twitch and YouTube streams at once"
                loading="lazy"
                width={1440}
                height={900}
                className="w-full"
              />
            </div>
          </a>
          <div className="flex flex-col p-6 sm:p-8">
            <div className="mb-3 flex flex-wrap gap-2">
              <LiveBadge label="LIVE SITE" />
              <span className="chip">Featured</span>
            </div>
            <h3 className="font-display text-3xl font-extrabold">TooManyStreams</h3>
            <p className="muted mt-3 leading-relaxed">
              A multi-stream viewer for Twitch and YouTube Live. Build your own stream wall, switch the main audio,
              rearrange streams, and follow live events in one tab.
            </p>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li>✦ Drag-and-drop stream wall with theater and focus layouts</li>
              <li>✦ Browser-only Twitch OAuth + Twitch API live discovery</li>
              <li>✦ Prerendered SEO pages and unit-tested store logic</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {['React 19', 'Zustand', 'Tailwind CSS', 'Vite', 'Vercel'].map(t => (
                <span key={t} className="chip font-mono text-[11px]!">{t}</span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <a href="https://too-many-streams.vercel.app" target="_blank" rel="noreferrer" className="sticker sticker-hover bg-violet! px-4 py-2 font-bold text-white!">
                Open the app ↗
              </a>
              <a href="https://github.com/diaz4674/TooManyStreams" target="_blank" rel="noreferrer" className="sticker sticker-hover px-4 py-2 font-bold">
                View code
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className="sticker sticker-hover mt-8 grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-center">
        <div className="grid h-20 w-20 place-items-center rounded-2xl border-[2.5px] border-[var(--line)] bg-sun text-4xl" aria-hidden>
          🏦
        </div>
        <div>
          <h3 className="font-display text-2xl font-extrabold">Poppy Central</h3>
          <p className="muted mt-2 leading-relaxed">
            An internal banking app that generates client-ready account-opening documents as PDFs, with saved, editable
            projects. Built with React and Python/Flask, it cut new-account generation time by{' '}
            <b className="text-[var(--text)]">80%</b>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://github.com/diaz4674/Poppy-Central" target="_blank" rel="noreferrer" className="chip hover:bg-sun!">Frontend repo ↗</a>
            <a href="https://github.com/diaz4674/poppy-backend" target="_blank" rel="noreferrer" className="chip hover:bg-sun!">Backend repo ↗</a>
          </div>
        </div>
      </article>
    </section>
  )
}

function AiTooling() {
  return (
    <section className="border-y-[2.5px] border-[var(--line)] bg-violet/10 dark:bg-violet/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle id="ai" kicker="// teaching the robots our workflow" title="AI tooling" />
        <p className="muted -mt-4 mb-10 max-w-2xl text-lg leading-relaxed">
          I write Claude Code skills: small, reusable playbooks that let an AI agent run real engineering workflows the
          way a teammate would.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {aiSkills.map((s, i) => (
            <div key={s.name} className="sticker sticker-hover p-6" style={{ transform: `rotate(${[-1, 0.8, -0.5][i]}deg)` }}>
              <p className="font-mono text-sm">
                <span className="text-pink">/</span>
                {s.name}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider muted">{s.where}</p>
              <p className="mt-4 leading-relaxed">{s.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OffTheClock() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle id="play" kicker="// side quests" title="Off the clock" />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="sticker sticker-hover p-6 md:col-span-1">
          <div className="text-4xl" aria-hidden>🖨️</div>
          <h3 className="mt-3 font-display text-2xl font-extrabold">3D modeling & printing</h3>
          <p className="muted mt-2 leading-relaxed">
            I sculpt designs in ZBrush, send them to my 3D printer, and watch them come to life layer by layer.
          </p>
          <a href={links.prints} target="_blank" rel="noreferrer" className="chip mt-4 hover:bg-mint!">#miggyprints ↗</a>
        </div>
        <div className="sticker sticker-hover p-6 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="text-4xl" aria-hidden>🎥</div>
            <LiveBadge label="ON AIR" />
          </div>
          <h3 className="mt-3 font-display text-2xl font-extrabold">Stream tools I've built</h3>
          <p className="muted mt-2 leading-relaxed">Little Node.js and browser-source apps that make live streams more fun.</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {streamTools.map(t => (
              <li key={t.name} className="rounded-xl border-2 border-[var(--line)] p-4">
                <p className="font-bold">{t.name}</p>
                <p className="muted mt-1 text-sm leading-relaxed">{t.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="muted mt-8 text-center text-sm">
        *The cats are the bugs. I love them anyway. 🐈🐈
      </p>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="sticker relative overflow-hidden bg-pink! p-8 text-white sm:p-14">
        <div aria-hidden className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[2.5px] border-[var(--line)] bg-sun" />
        <div aria-hidden className="absolute -bottom-16 right-24 h-32 w-32 rotate-12 rounded-3xl border-[2.5px] border-[var(--line)] bg-cyan" />
        <div className="relative max-w-2xl">
          <p className="font-mono text-sm font-medium text-white/80">// your move</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            Let's build something people actually enjoy.
          </h2>
          <p className="mt-4 text-lg text-white/90">
            I'm looking for remote Frontend and Full-Stack roles. The fastest way to reach me is email.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.email} className="sticker sticker-hover px-5 py-3 font-bold text-ink! bg-white!">
              ✉️ {links.emailText}
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="sticker sticker-hover px-5 py-3 font-bold text-ink! bg-sun!">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 chip">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <StackTicker />
        <Work />
        <Projects />
        <AiTooling />
        <OffTheClock />
        <Contact />
      </main>
      <footer className="border-t-[2.5px] border-[var(--line)] py-8 text-center text-sm muted">
        Built with React, TypeScript, and Tailwind CSS · © {new Date().getFullYear()} Miguel Diaz
      </footer>
    </>
  )
}
