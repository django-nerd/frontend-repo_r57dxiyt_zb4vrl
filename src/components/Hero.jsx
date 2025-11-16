import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-black/5">Available for Freelance</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Your Name</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              I design and build modern web experiences focused on performance, accessibility, and delightful interactions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-white text-sm font-medium shadow hover:bg-black transition">View Projects</a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-gray-900 text-sm font-medium shadow ring-1 ring-black/5 hover:bg-gray-50 transition">Contact Me</a>
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
