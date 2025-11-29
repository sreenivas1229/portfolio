import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import myImage from "../assets/myImage.jpg";


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0d0f15]"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* TYPEWRITER NAME */}
          <div className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-200">
            <Typewriter
              options={{
                strings: ["Hi, I'm Your Name"],
                autoStart: true,
                loop: false,
                delay: 70,
                deleteSpeed: 60,
              }}
            />
          </div>

          {/* TYPEWRITER ROLE (STARTS AFTER NAME) */}
          <div className="mt-3 text-xl text-indigo-400 font-semibold">
            <Typewriter
              options={{
                strings: [
                  "Frontend Engineer",
                  "React Developer",
                  "UI/UX Designer",
                  "Creative Interface Builder",
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 40,
                pauseFor: 1200, // delay between words
              }}
            />
          </div>

          {/* DESCRIPTION (NO TYPING, CLEAN TEXT) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-4 text-lg text-slate-400"
          >
            I craft modern and high-performance web experiences with a focus on
            clean UI, smooth animations, and premium dark design.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-slate-700 text-slate-200 hover:text-white hover:border-indigo-500 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass p-8 rounded-2xl shadow-xl floaty"
        >
          <div className="w-40 h-40 rounded-full bg-indigo-600/10 mx-auto flex items-center justify-center text-indigo-400 text-4xl font-bold">
           <img
  src={myImage}
  alt="Profile"
  className="w-48 h-48 rounded-full object-cover shadow-lg"
/>
          </div>

          <div className="mt-6 text-center">
            <h3 className="font-semibold text-lg text-slate-200">
              UI Engineer | Aspiring FullStack Developer
            </h3>
            <p className="text-sm text-slate-400">
              Designing smart, modern & beautiful interfaces.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
