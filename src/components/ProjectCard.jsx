import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ translateY: -8 }}
      transition={{ duration: 0.18 }}
      className="glass p-6 rounded-2xl neon-border card-glow"
    >
      <div className="h-40 rounded-xl bg-[#0b0e12] flex items-center justify-center text-slate-500 overflow-hidden">
        {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" /> : <span className="text-3xl">{project.title.charAt(0)}</span>}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-2 text-sm muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-md border border-slate-700 text-slate-200">{t}</span>)}
      </div>
    </motion.div>
  )
}
