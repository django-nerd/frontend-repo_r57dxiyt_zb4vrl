import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
              <span className="font-semibold tracking-tight">Your Name</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-gray-200" />
              <div className="flex items-center gap-3">
                <a href="https://github.com/" target="_blank" className="p-2 rounded-lg hover:bg-gray-100" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" className="p-2 rounded-lg hover:bg-gray-100" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Email"><Mail size={18} /></a>
              </div>
            </nav>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-gray-100 px-4 pb-4">
              <nav className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-gray-700 py-2" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="https://github.com/" target="_blank" className="p-2 rounded-lg hover:bg-gray-100" aria-label="GitHub"><Github size={18} /></a>
                  <a href="https://linkedin.com/" target="_blank" className="p-2 rounded-lg hover:bg-gray-100" aria-label="LinkedIn"><Linkedin size={18} /></a>
                  <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Email"><Mail size={18} /></a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
