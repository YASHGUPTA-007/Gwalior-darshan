import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: "jai-vilas-palace.jpg", title: "Jai Vilas Palace" },
    { src: "gujari-mahal-pic.jpg", title: "Gujari Mahal" },
    { src: "teli-ka-mandir.jpg", title: "Teli ka Mandir" },
    { src: "Gwalior-Fort.jpg", title: "Gwalior Fort" },
    { src: "Sas_Bahu_Temple.jpg", title: "Sas Bahu Temple" },
    { src: "sun-temple.jpg", title: "Sun Temple" },
    { src: "british-era.jpg", title: "British Era" },
    { src: "collage.webp", title: "Collage" },
    { src: "gujari-mahal.jpg", title: "Gujari Mahal (Alternate)" },
    { src: "inside-gwalior-fort.jpg", title: "Inside Gwalior Fort" },
    { src: "man-singh-palace.jpg", title: "Man Singh Palace" },
    { src: "Singh-museum.jpg", title: "Singh Museum" },
    { src: "tansentombb.jpg", title: "Tomb of Tansen" },
    { src: "padavli.png", title: "Padavali Temple" },
    { src: "kalkanmath.jpeg", title: "Kakanmath Temple" },
    { src: "gopachal.webp", title: "Gopachal Parvat" },
    { src: "surajkund.jpg", title: "Suraj Kund" },
    { src: "badalmaharaj.jpg", title: "Badal Mahal Gate" },
    { src: "hathipol.jpg", title: "Hathi Pol" },
    { src: "chaturburj.jpg", title: "Chaturbhuj Temple " },
    { src: "vikrammahal.jpg", title: "Vikram Mahal" },
    { src: "chhatris.jpg", title: "Chhatris of Scindia Dynasty" },
    { src: "koteshwar.jpg", title: "Koteshwar Temple" },
    { src: "jainrock.jpg", title: "Jain Rock Sculptures" },
];


  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif mb-12 text-center"
        >
          Gallery
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-[4/3] relative group"
            >
              <img
                src={`/images/${image.src}`}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <h3 className="text-white text-xl font-serif">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}