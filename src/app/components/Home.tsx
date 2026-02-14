import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-emerald-400 text-sm"
            >
              <Sparkles size={16} />
              <span>Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl tracking-tight"
            >
              Multi-Disciplinary
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Creative Studio
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
            >
              From app development to photography and music production. 
              Creating digital experiences and content across multiple mediums.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <Link
                to="/works"
                className="group px-8 py-4 bg-emerald-400 text-zinc-950 rounded-full hover:bg-emerald-300 transition-all hover:scale-105 flex items-center gap-2"
              >
                View Works
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zinc-700 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-zinc-700 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">What I Do</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A diverse portfolio spanning technology, visual arts, and sound
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "App Development",
                description: "Building modern web and mobile applications with cutting-edge technologies.",
                icon: "💻",
              },
              {
                title: "Photography",
                description: "Capturing moments and creating visual stories through the lens.",
                icon: "📸",
              },
              {
                title: "Music Production",
                description: "Creating and producing original music across multiple genres.",
                icon: "🎵",
              },
              {
                title: "Aviation",
                description: "Professional aviation services and aerospace expertise.",
                icon: "✈️",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-emerald-400/50 transition-all hover:bg-zinc-800/50"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
              <p className="text-zinc-400 text-lg">
                A selection of recent work across different disciplines
              </p>
            </div>
            <Link
              to="/works"
              className="hidden md:flex items-center gap-2 text-emerald-400 hover:gap-4 transition-all"
            >
              View All
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link to="/photography" className="block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-zinc-900">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1678393834156-f8aed69b05f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFsbSUyMHRyZWVzfGVufDF8fHx8MTc3MDk0NDExOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Tropical Beach Photography"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl mb-2 group-hover:text-emerald-400 transition-colors">
                  Photography
                </h3>
                <p className="text-zinc-400">
                  Capturing stunning moments and creating visual stories from tropical paradises to urban landscapes
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link to="/works" className="block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-zinc-900">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1670132898415-926edddb82d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXMlMjB2ZWdhcyUyMHN0cmlwJTIwbmlnaHR8ZW58MXx8fHwxNzY5MTE2NjExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="LVapp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl mb-2 group-hover:text-emerald-400 transition-colors">
                  LVapp
                </h3>
                <p className="text-zinc-400">
                  A comprehensive Las Vegas guide app featuring clubs, events, and local experiences
                </p>
              </Link>
            </motion.div>
          </div>

          <div className="flex md:hidden justify-center mt-8">
            <Link
              to="/works"
              className="flex items-center gap-2 text-emerald-400"
            >
              View All Works
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Let's Work Together
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need an app, visual content, or business strategy, let's create something amazing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-400 text-zinc-950 rounded-full hover:bg-emerald-300 transition-all hover:scale-105"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}