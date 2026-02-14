import { Outlet, Link, NavLink } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/works", label: "Works" },
    { path: "/photography", label: "Photography" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            HURSA<span className="text-emerald-400"> LIMITED</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive ? "text-emerald-400" : "text-zinc-400 hover:text-zinc-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-zinc-900 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-zinc-800 bg-zinc-950"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg transition-colors ${
                      isActive ? "text-emerald-400" : "text-zinc-400 hover:text-zinc-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} hursa.xyz. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
