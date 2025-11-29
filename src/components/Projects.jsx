import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import Modal from './Modal'
import { motion } from 'framer-motion'

export default function Projects() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(null)

  const openProject = (p) => {
    setActive(p)
    setOpen(true)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container-max mx-auto">
        <motion.h2 className="text-3xl font-bold gradient-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}>Projects</motion.h2>
        <p className="mt-2 muted">Selected work — click a card to view details.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} onClick={() => openProject(p)} style={{ cursor: 'pointer' }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} project={active} onClose={() => setOpen(false)} />
    </section>
  )
}
