"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Building,
  CircleDollarSign,
  Compass,
  Cpu,
  Landmark,
  ShieldCheck,
  Sparkles,
  Swords,
  Target,
  Users,
  Workflow,
} from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Foundational Ethos',
    description:
      'A permanent software core enforcing fairness, integrity, and transparent rule-based systems with immutable audit trails.',
  },
  {
    icon: Landmark,
    title: 'Identity & Governance Infrastructure',
    description:
      'Cryptographic identity, merit-based governance, and contribution scoring that reward legitimacy over hierarchy.',
  },
  {
    icon: Cpu,
    title: 'Invocation & Deployment Layer',
    description:
      'Secure cloud orchestration, low-resource AI invocation, and ethical logistics systems for resilient public infrastructure.',
  },
  {
    icon: Users,
    title: 'Justice & Legacy',
    description:
      'Species-inclusive governance, sacred distribution, and social entrepreneurship tools to uphold dignity and shared stewardship.',
  },
];

const roadmap = [
  'Idea & Conceptualization',
  'Prototype Development',
  'Pilot Testing',
  'Partnerships & Early Adoption',
  'Funding & Investment',
  'Launch',
  'Scaling & Expansion',
  'Legacy & Sustainability',
];

const features = [
  {
    title: 'Role-based accountability',
    description: 'Distributed logic for transparent responsibility and stewardship.',
  },
  {
    title: 'Immutable audit logs',
    description: 'Every decision leaves a traceable, verifiable impact history.',
  },
  {
    title: 'YAML-driven modularity',
    description: 'Configurable structures for scalable deployment across regions and institutions.',
  },
  {
    title: 'Sovereign infrastructure',
    description: 'Ethical protocols that protect autonomy, trust, and public wellbeing.',
  },
];

const stats = [
  { value: '24/7', label: 'Ethical monitoring' },
  { value: '∞', label: 'Principled accountability' },
  { value: '0', label: 'Corruption by design' },
  { value: '1', label: 'Shared global charter' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(77,102,219,0.3),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.2),transparent_22%)]" />
        <div className="absolute inset-0 -z-10 bg-grid bg-[length:48px_48px] opacity-20" />

        <header className="container-shell flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 font-black text-lg text-slate-950 shadow-glow">
              M
            </div>
            <div>
              <div className="text-lg font-black tracking-[0.16em] text-slate-100">MJSOVEREIGN</div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <Link href="#ethos">Ethos</Link>
            <Link href="#governance">Governance</Link>
            <Link href="#roadmap">Roadmap</Link>
            <Link href="#legacy">Legacy</Link>
          </nav>

          <Link
            href="#launch"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-indigo-400 hover:bg-indigo-500/10"
          >
            Launch Initiative
          </Link>
        </header>

        <div className="container-shell grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200">
              <Sparkles className="h-4 w-4" />
              The Ethical Invocation Constitution
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                A sovereign platform for <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">ethical governance</span> and finance.
              </h1>

              <p className="max-w-2xl text-lg text-slate-300">
                “Where every script is a verdict, every invocation a vote, and every log a legacy.”
              </p>

              <p className="max-w-xl text-base text-slate-400">
                Write the soul of a nation. Invoke the dignity of all beings. Build institutions that are transparent, resilient, and worthy of trust.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#launch"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Explore the charter <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-emerald-400/60 hover:bg-emerald-500/10"
              >
                View roadmap
              </Link>
            </div>

            <div className="grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-2xl p-4 text-center shadow-xl">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-2 text-xs text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-panel relative overflow-hidden rounded-[28px] border border-indigo-200/20 p-5 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-400/15" />
              <div className="relative rounded-[22px] border border-white/10 bg-slate-900/80 p-6">
                <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400">
                  <span>Core Network</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Building, label: 'Ethical engine', status: 'Operational' },
                    { icon: CircleDollarSign, label: 'Purpose registry', status: 'Verified' },
                    { icon: Workflow, label: 'Governance fabric', status: 'Synced' },
                    { icon: Compass, label: 'Invocation matrix', status: 'Ready' },
                  ].map(({ icon: Icon, label, status }) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-indigo-500/10 p-2 text-indigo-200">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-slate-200">{label}</span>
                      </div>
                      <span className="text-xs text-emerald-300">{status}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-4">
                  <div className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-200">Legacy Ledger</div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xl font-black text-white">96%</div>
                      <div className="text-[10px] text-slate-300">Trust index</div>
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">142</div>
                      <div className="text-[10px] text-slate-300">Invocations</div>
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">33</div>
                      <div className="text-[10px] text-slate-300">Regions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="ethos" className="container-shell py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">Foundational Ethos</p>
          <h2 className="section-heading text-white">A charter for transparent, humane innovation.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="glass-panel rounded-3xl p-6"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-indigo-500/10 p-3 text-indigo-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="text-sm leading-7 text-slate-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="governance" className="border-y border-white/10 bg-slate-900/60 py-20">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Identity & Governance Infrastructure</p>
            <h2 className="section-heading text-white">Systems built for legitimacy, trust, and collective stewardship.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: BadgeCheck, title: 'Decentralized signature engine', text: 'Cryptographic validation for digital constitutions and agreements, removing ambiguity from authority.' },
              { icon: Target, title: 'Merit-based governance', text: 'Authority is earned through contribution and trust, not inherited hierarchy.' },
              { icon: Blocks, title: 'Contribution scoring', text: 'Adaptive fairness algorithms recalibrate participation to uplift overlooked communities.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Invocation & Deployment Layer</p>
          <h2 className="section-heading text-white">Operational systems that support sovereignty at scale.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Workflow, title: 'Cloud terminals', text: 'Sovereign-grade orchestration for secure cloud governance and resilient operations.' },
            { icon: Cpu, title: 'AI invocation', text: 'Low-resource intelligence frameworks that allow communities to benefit from advanced automation.' },
            { icon: Compass, title: 'Ethical travel & logistics', text: 'Sustainable mobility and logistics planning for public trust and environmental care.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-500/10 to-slate-900/80 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="bg-slate-900/40 py-20">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">Roadmap</p>
            <h2 className="section-heading text-white">Idea → Impact → Global adoption</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 text-sm font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="legacy" className="container-shell py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">Justice & Legacy</p>
          <h2 className="section-heading text-white">A future where technology serves humanity and every living being.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">Master Orchestrator</h3>
            <ul className="space-y-4 text-slate-300">
              {features.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm">{item.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="launch" className="rounded-3xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/15 via-slate-950 to-emerald-500/10 p-8">
            <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-200">
              <Swords className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Closing Declaration</h3>
            <p className="text-slate-200">
              MJSovereign is not merely a project. It is a charter for the future. We commit to building systems that embody dignity, transparency, and resilience. We anchor innovation in ethics. We leave a legacy where technology serves humanity and all living beings.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Public URL</div>
              <div className="mt-2 text-lg font-semibold text-white">https://MJ-Ahmad.github.io/mjs</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
