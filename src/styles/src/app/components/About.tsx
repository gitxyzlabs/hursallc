import { motion } from "motion/react";
import { Code2, Camera, Music2, Plane, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Innovation",
    description: "Constantly exploring new technologies and pushing the boundaries of what's possible.",
  },
  {
    icon: Camera,
    title: "Creativity",
    description: "Every project is an opportunity to create something unique and meaningful.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "Committed to delivering the highest quality across all disciplines.",
  },
  {
    icon: Music2,
    title: "Versatility",
    description: "Multi-disciplinary approach brings fresh perspectives to every project.",
  },
  {
    icon: Plane,
    title: "Growth",
    description: "Focused on continuous improvement and helping businesses scale.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Genuine enthusiasm for technology, art, and creative problem-solving.",
  },
];

const skills = [
  {
    category: "Technology",
    items: ["React", "TypeScript", "Node.js", "Mobile Development", "UI/UX Design"],
  },
  {
    category: "Creative",
    items: ["Photography", "Music Production", "Sound Design", "Visual Storytelling"],
  },
  {
    category: "Aviation",
    items: ["Flight Operations", "Aerospace Consulting", "Aviation Technology", "Safety Standards"],
  },
];

export function About() {
  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-6xl mb-6">About Hursa Limited</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Hursa Limited is a multi-disciplinary creative studio that bridges the gap between
                technology, visual arts, and business strategy. Founded on the belief that great work
                comes from diverse perspectives and genuine passion.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                From developing cutting-edge applications to capturing compelling images and producing
                original music, we bring a unique holistic approach to every project.
              </p>
            </div>
            <div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Our work spans multiple industries and creative fields, allowing us to draw inspiration
                and insights from diverse sources. This cross-pollination of ideas results in innovative
                solutions that stand out in their respective fields.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Whether it's building the next great app, capturing a perfect moment, or helping a
                business reach new heights, we approach each project with fresh eyes and dedication.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-4xl mb-4">Core Values</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
            The principles that guide everything we create.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-400/50 transition-all group"
                >
                  <Icon className="w-10 h-10 mb-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl mb-3 group-hover:text-emerald-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
            A diverse skill set spanning technology, creative arts, and business.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl"
              >
                <h3 className="text-2xl mb-6 text-emerald-400">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-400">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-4xl mb-4">The Approach</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
            A proven process that ensures quality results across all project types.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "Understanding your vision, goals, and the unique challenges you face.",
              },
              {
                number: "02",
                title: "Planning",
                description: "Developing a comprehensive strategy tailored to your specific needs.",
              },
              {
                number: "03",
                title: "Execution",
                description: "Bringing the project to life with meticulous attention to detail.",
              },
              {
                number: "04",
                title: "Refinement",
                description: "Iterating and optimizing to ensure the best possible outcome.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-emerald-400/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-zinc-800" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Work Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-zinc-800 mb-32"
        >
          {[
            { number: "LVapp", label: "Featured App" },
            { number: "100+", label: "Photos Captured" },
            { number: "Music", label: "Original Tracks" },
            { number: "Aviation", label: "Services" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-zinc-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl p-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Let's Create Something Amazing</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Ready to start your project? Whether it's an app, photography, music, or business strategy,
            I'd love to hear about it.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-emerald-400 text-zinc-950 rounded-full hover:bg-emerald-300 transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}