import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 leading-relaxed"
          >
            I’m a full‑stack engineer with a passion for design systems, motion, and delightful user experiences.
            I work across the stack to deliver performant, accessible, and scalable products.
          </motion.p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Focus', value: 'Frontend, Design Systems' },
              { label: 'Stack', value: 'React, Node.js, Python' },
              { label: 'Location', value: 'Remote / Worldwide' },
            ].map((i) => (
              <div key={i.label} className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">{i.label}</p>
                <p className="font-medium text-gray-900">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
