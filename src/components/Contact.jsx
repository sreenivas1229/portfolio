import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 section-neon">
      <div className="container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="glass p-6 rounded-2xl neon-border">
          <h3 className="text-xl font-semibold text-slate-100">Let’s work together</h3>
          <p className="mt-2 muted">I'm available for freelance projects and full-time roles. Reach out and let's talk about your idea.</p>

          <div className="mt-6">
            <div className="text-sm muted">Email</div>
            <a href="mailto:you@domain.com" className="block mt-1 text-slate-100 font-medium">psreenu33@gmail.com</a>

            <div className="mt-4 text-sm muted">Locations</div>
            <div className="mt-1 text-slate-100">Remote · India</div>

            <div className="mt-6 flex gap-3">
              <a className="btn-neon" href="#" aria-label="Github">GitHub</a>
              <a className="btn-neon" href="https://www.linkedin.com/in/sreenivas-reddy-353860192/" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="md:col-span-2 glass p-6 rounded-2xl neon-border" onSubmit={(e) => { e.preventDefault(); alert('Thanks — I will get back to you!') }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" className="p-3 bg-transparent border border-slate-800 rounded-md" required />
            <input name="email" type="email" placeholder="Email" className="p-3 bg-transparent border border-slate-800 rounded-md" required />
            <input name="subject" placeholder="Subject" className="p-3 bg-transparent border border-slate-800 rounded-md md:col-span-2" />
            <textarea name="message" placeholder="Tell me about the project" className="p-3 bg-transparent border border-slate-800 rounded-md md:col-span-2 h-36" required />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm muted">Or email me directly at <a href="mailto:psreenu33@gmail.com" className="text-slate-100">psreenu33@gmail.com</a></div>
            <button type="submit" className="px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg">Send Message</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
