import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'A data-rich dashboard with animations and real-time charts.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'E-commerce Experience',
    description: 'Clean storefront with optimized checkout flow and analytics.',
    tags: ['Next.js', 'Stripe', 'Vercel'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Reusable UI components with accessibility baked in.',
    tags: ['Storybook', 'Radix UI', 'TypeScript'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="text-gray-600 mt-2">A snapshot of things I loved building recently.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-purple-100" />
              <div className="mt-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">{p.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                  </div>
                  <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-600 transition" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
