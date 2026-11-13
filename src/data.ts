export const links = {
  email: 'mailto:diaz4674@gmail.com',
  emailText: 'diaz4674@gmail.com',
  github: 'https://github.com/diaz4674',
  linkedin: 'https://www.linkedin.com/in/diaz4674',
  resume: '/Miguel_Diaz_Resume.pdf',
  prints: 'https://www.instagram.com/explore/tags/miggyprints/',
}

export const stack = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Zustand', 'Tailwind CSS',
  'Node.js', 'Express', 'Ruby on Rails', 'Python', 'GraphQL', 'REST APIs',
  'Jest', 'Vitest', 'Playwright', 'Storybook', 'Vite', 'AWS', 'Claude Code',
]

export type Job = {
  company: string
  role: string
  dates: string
  tag: string
  color: string
  bullets: string[]
}

export const jobs: Job[] = [
  {
    company: 'Respondology',
    role: 'Software Engineer',
    dates: 'Aug 2021 – Nov 2026',
    tag: 'Social-media moderation SaaS',
    color: 'var(--color-pink)',
    bullets: [
      'Built and shipped React, Next.js, and TypeScript features across a social-media moderation platform backed by Ruby on Rails REST APIs.',
      'Built Claude Code skills that automate engineering workflows: a dev-publish skill for build and deploy steps and an AI code-review skill that checks diffs against team standards.',
      'Developed AI-assisted moderation features, including spam-profile analysis configuration, feature entitlements, and account-level controls.',
      'Engineered resilient social-post previews for Facebook, Instagram, TikTok, and YouTube with embed-eligibility checks, blank-state detection, loading timeouts, and graceful fallback UI.',
      'Diagnosed and fixed async UI timing issues, broken embeds, and React state-update loops across the stack.',
    ],
  },
  {
    company: 'Ledgerfire',
    role: 'Software Engineer',
    dates: 'Nov 2019 – Aug 2021',
    tag: 'Fintech',
    color: 'var(--color-cyan)',
    bullets: [
      'Led a shared React component library extending Material-UI, improving UI consistency and feature speed.',
      'Built React/Redux interfaces from wireframes with UX and leadership, turning product goals into features.',
      'Integrated the Plaid API and auth flow; built Node.js/Express REST services for customer financial data.',
      'Ran engineering standups and the Jira delivery workflow; reported progress directly to company leadership.',
    ],
  },
  {
    company: 'Poppy Bank',
    role: 'Senior New Accounts',
    dates: 'Nov 2017 – Nov 2019',
    tag: 'Where it started',
    color: 'var(--color-sun)',
    bullets: [
      'Built an internal React and Python/Flask account-opening application that cut new-account generation time by 80%.',
    ],
  },
]

export const aiSkills = [
  {
    name: 'dev-publish',
    where: 'Respondology',
    blurb: 'A Claude Code skill that runs the build and deploy steps for the team on command.',
  },
  {
    name: 'code-review',
    where: 'Respondology',
    blurb: 'An AI code-review skill that checks diffs against team standards and reports issues.',
  },
  {
    name: 'verify',
    where: 'TooManyStreams',
    blurb: 'Lets Claude launch the app and drive it end to end in real Chrome via Puppeteer, including mobile layouts and picture-in-picture gestures.',
  },
]

export const streamTools = [
  { name: 'Stream timer', blurb: 'OBS overlay plus a remote control panel, synced in real time.' },
  { name: 'Giveaway wheels', blurb: 'Chat commands feed de-duplicated entry lists that spin live on stream.' },
  { name: 'Random emote overlay', blurb: 'Fires a random dance GIF and sound on a timer for a stream challenge.' },
]
