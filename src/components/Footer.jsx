import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm muted">© {new Date().getFullYear()} Your Name</div>
        <div className="flex gap-4 items-center">
          <a href="#" className="text-slate-300">GitHub</a>
          <a href="#" className="text-slate-300">LinkedIn</a>
          <a href="#" className="text-slate-300">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
