import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass sticky top-0 z-50 border-b border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
              SR
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-slate-200">Sreenivas Reddy</span>
              <div className="text-xs text-slate-400">Frontend Engineer</div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-slate-300 hover:text-indigo-400 transition">About</a>
            <a href="#projects" className="text-slate-300 hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition">Contact</a>

            <a
              href="/resume.pdf"
              className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-md border border-slate-700 text-slate-200"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU DROPDOWN (OUTSIDE NAV!!) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-b border-slate-800 px-6 py-4 space-y-4 z-[60] fixed w-full"
          >
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block text-slate-200 hover:text-indigo-400 transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="block text-slate-200 hover:text-indigo-400 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-slate-200 hover:text-indigo-400 transition"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              className="block w-full text-center px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
