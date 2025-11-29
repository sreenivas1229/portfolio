import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ open, project, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-slate-100">{project?.title}</h3>
                <p className="mt-2 muted">{project?.description}</p>
              </div>

              <button onClick={onClose} className="p-2 rounded-md border border-slate-700">Close</button>
            </div>

            {project?.image ? (
              <img src={project.image} alt={project.title} className="modal-img mt-4 rounded-md" />
            ) : (
              <div className="modal-img mt-4 rounded-md flex items-center justify-center text-slate-500">No image</div>
            )}

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex gap-2 flex-wrap">
                {project?.tags?.map(tag => <span key={tag} className="text-xs px-2 py-1 rounded-md border border-slate-700 text-slate-200">{tag}</span>)}
              </div>

              <div className="flex gap-2">
                <a href={project?.link || '#'} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-indigo-600 text-white">View</a>
                <a href="#" className="px-4 py-2 rounded-md border">GitHub</a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
