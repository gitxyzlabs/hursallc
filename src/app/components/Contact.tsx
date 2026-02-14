import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl mb-6">Get in Touch</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
            Fill out the form below or reach out through any of our contact channels.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-zinc-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-zinc-50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-zinc-50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-zinc-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-zinc-50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-zinc-50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-emerald-400 text-zinc-950 rounded-lg hover:bg-emerald-300 transition-all hover:scale-[1.02]"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl mb-6">Contact Information</h2>
              <p className="text-zinc-400 mb-8">
                Prefer to reach out directly? Here's how you can contact us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-emerald-400/50 transition-all group">
                <div className="p-3 bg-emerald-400/10 rounded-lg group-hover:bg-emerald-400/20 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="mb-2 group-hover:text-emerald-400 transition-colors">Email</h3>
                  <a
                    href="mailto:hello@hursa.xyz"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    hello@hursa.xyz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-emerald-400/50 transition-all group">
                <div className="p-3 bg-emerald-400/10 rounded-lg group-hover:bg-emerald-400/20 transition-colors">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="mb-2 group-hover:text-emerald-400 transition-colors">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-emerald-400/50 transition-all group">
                <div className="p-3 bg-emerald-400/10 rounded-lg group-hover:bg-emerald-400/20 transition-colors">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="mb-2 group-hover:text-emerald-400 transition-colors">Location</h3>
                  <p className="text-zinc-400">
                    San Francisco, CA
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-zinc-800">
              <h3 className="mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-xl">
              <h3 className="mb-2">Response Time</h3>
              <p className="text-zinc-400 text-sm">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
