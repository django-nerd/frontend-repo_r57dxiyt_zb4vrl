import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 ring-1 ring-white/10 shadow-sm">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white"
          >
            Let’s build something together
          </motion.h2>
          <p className="mt-3 text-gray-300">I’m open to freelance work and interesting collaborations.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href="mailto:you@example.com" className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-gray-900 text-sm font-medium shadow hover:bg-gray-100 transition">Email Me</a>
            <a href="https://cal.com/" target="_blank" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-white text-sm font-medium shadow hover:bg-blue-700 transition">Book a Call</a>
          </div>
        </div>
      </div>
    </section>
  )
}
