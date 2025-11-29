import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 section-neon">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="text-3xl font-extrabold gradient-text">About Me</h2>
            <p className="mt-4 text-slate-300">
              I'm a frontend engineer specializing in modern, dark-first interfaces,
              performant React apps, and delightful micro-interactions. I focus on
              pixel-perfect UI, accessibility, and fast delivery.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-5 rounded-xl neon-border">
                <h4 className="font-semibold text-slate-100">Experience</h4>
                <p className="mt-2 muted text-sm">3+ years building production React applications.</p>
              </div>

              <div className="glass p-5 rounded-xl neon-border">
                <h4 className="font-semibold text-slate-100">Tools</h4>
                <p className="mt-2 muted text-sm">React, Vite, Tailwind, Framer Motion, Figma, Recharts</p>
              </div>
            </div>
          </div>

          {/* right-side floating skills */}
          <div className="flex flex-col gap-4 items-center">
            <div className="glass rounded-2xl p-6 w-full neon-border floaty">
              <h3 className="text-lg font-semibold text-slate-100">What I build</h3>
              <p className="mt-2 muted text-sm">Interactive dashboards, landing pages, design systems, and motion-rich interfaces.</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {['React','Tailwind','Framer Motion','TypeScript','Figma','Three.js'].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-200">{t}</span>
                ))}
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              <div className="glass p-4 rounded-lg neon-border">
                <div className="text-sm muted">Availability</div>
                <div className="font-semibold text-slate-100 mt-1">Freelance & Full-time</div>
              </div>
              <div className="glass p-4 rounded-lg neon-border">
                <div className="text-sm muted">Location</div>
                <div className="font-semibold text-slate-100 mt-1">India</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
