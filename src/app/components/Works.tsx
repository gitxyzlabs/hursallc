import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "LVapp",
    category: "App Development",
    description: "A comprehensive Las Vegas guide app featuring nightclubs, events, restaurants, and local experiences. Built with modern React and real-time data integration.",
    image: "https://images.unsplash.com/photo-1670132898415-926edddb82d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXMlMjB2ZWdhcyUyMHN0cmlwJTIwbmlnaHR8ZW58MXx8fHwxNzY5MTE2NjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Photography Portfolio",
    category: "Photography",
    description: "Professional photography work including portraits, events, lifestyle, and creative editorial projects.",
    image: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMGNhbWVyYXxlbnwxfHx8fDE3NjkwNjM4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Portrait", "Events", "Editorial"],
  },
  {
    id: 3,
    title: "Music Production",
    category: "Music",
    description: "Original music production and composition across multiple genres, from electronic to acoustic arrangements.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY5MDI0MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Production", "Composition", "Sound Design"],
  },
  {
    id: 4,
    title: "Aviation Services",
    category: "Aviation",
    description: "Professional aviation services including flight operations, aerospace consulting, and aviation technology solutions.",
    image: "https://images.unsplash.com/photo-1520745405162-d4b5fb38df5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmlhdGlvbiUyMGFpcmNyYWZ0JTIwZmxpZ2h0fGVufDF8fHx8MTc2OTE0MTIyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Flight Operations", "Consulting", "Technology"],
  },
];

const categories = ["All", "App Development", "Photography", "Music", "Aviation"];

export function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-6">My Works</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A diverse collection of projects spanning technology, visual arts, music, and business.
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-emerald-400 text-zinc-950"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50 border border-zinc-800"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isPhotography = project.category === "Photography";
            const ProjectWrapper = isPhotography ? Link : "div";
            const wrapperProps = isPhotography ? { to: "/photography" } : {};

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <ProjectWrapper {...wrapperProps}>
                  <div className="mb-6 overflow-hidden rounded-2xl bg-zinc-900">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-emerald-400">{project.category}</div>
                    <h3 className="text-2xl group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ProjectWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Interested in working together?</h2>
          <p className="text-zinc-400 mb-8">
            I'm always open to discussing new projects and creative opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-emerald-400 text-zinc-950 rounded-full hover:bg-emerald-300 transition-all hover:scale-105"
          >
            Let's Connect
          </Link>
        </motion.div>
      </div>
    </div>
  );
}