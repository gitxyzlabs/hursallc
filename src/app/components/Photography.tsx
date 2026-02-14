import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import beachPhoto from "figma:asset/86213babbdc5d21b5c97cc2b8380bf4119838c63.png";

const photos = [
  {
    id: 1,
    src: beachPhoto,
    category: "Travel",
    title: "Tropical Paradise",
    description: "Palm trees swaying over turquoise waters",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1682502922918-fed575428e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHN1bnNldCUyMGJlYWNofGVufDF8fHx8MTc2OTE0MTYzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Travel",
    title: "Sunset Beach",
    description: "Golden hour at a tropical beach",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1580895456895-cfdf02e4c23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHQlMjBsaWdodHN8ZW58MXx8fHwxNzY5MDI4MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Urban",
    title: "City Lights",
    description: "The urban landscape after dark",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1627439817761-0701265237d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NjkxNDE2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Portrait",
    title: "Natural Light Portrait",
    description: "Capturing emotion in natural light",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1732239613951-0f10063b4589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBtb3VudGFpbiUyMHZpc3RhfGVufDF8fHx8MTc2OTE0MTYzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Landscape",
    title: "Mountain Vista",
    description: "Majestic peaks and endless horizons",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1548566862-2c9b1fed780a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjkxMDM2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Urban",
    title: "Urban Architecture",
    description: "Modern design and geometric beauty",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1545298919-a4c40925bb42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYWVyaWFsfGVufDF8fHx8MTc2OTE0MTYzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Travel",
    title: "Ocean Waves",
    description: "Aerial view of the endless ocean",
  },
];

const categories = ["All", "Travel", "Urban", "Portrait", "Landscape"];

export function Photography() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof photos[0] | null>(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

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
          <h1 className="text-5xl md:text-6xl mb-6">Photography</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Capturing moments and telling stories through the lens. From tropical paradises to urban
            landscapes, each photo represents a unique perspective and creative vision.
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

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl bg-zinc-900"
              onClick={() => setLightboxImage(photo)}
            >
              {typeof photo.src === "string" ? (
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-sm text-emerald-400 mb-1">{photo.category}</div>
                <h3 className="text-xl mb-2">{photo.title}</h3>
                <p className="text-zinc-400 text-sm">{photo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">No photos in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {typeof lightboxImage.src === "string" ? (
                <ImageWithFallback
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                />
              ) : (
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                />
              )}
              <div className="mt-6 text-center">
                <div className="text-sm text-emerald-400 mb-2">{lightboxImage.category}</div>
                <h3 className="text-2xl mb-2">{lightboxImage.title}</h3>
                <p className="text-zinc-400">{lightboxImage.description}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
