import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { supabase } from "./lib/supabase";
import Layout from "./components/Layout";
import About from "./pages/About";
import Heritage from "./pages/Heritage";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import { motion } from "framer-motion";
import ChatBot from "./pages/chatbot";
import { Clock, Users } from "lucide-react";

function App() {
  const [user, setUser] = useState(null);

  // Banner images for the visit section
  const bannerImages = [
    "/images/Gwalior-Fort.jpg",
    "/images/jai-vilas-palace.jpg",
    "/images/jainrock.jpg",
    "/images/teli-ka-mandir.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);

  // Preload banner images
  useEffect(() => {
    bannerImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [bannerImages]);

  // Rotate banner images with crossfade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((curr) => {
        setPrevImage(curr);
        const next = (curr + 1) % bannerImages.length;
        // Clear previous image after fade duration (1s)
        setTimeout(() => setPrevImage(null), 1000);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Slider images for the slider section
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderImages = [
    "Gwalior-Fort.jpg",
    "jai-vilas-palace.jpg",
    "gujari-mahal-pic.jpg",
    "teli-ka-mandir.jpg",
    "Sas_Bahu_Temple.jpg",
    "sun-temple.jpg",
  ];

  const nextSlide = () => {
    setSliderIndex((prev) => (prev + 1) % Math.ceil(sliderImages.length / 3));
  };

  const prevSlide = () => {
    setSliderIndex(
      (prev) =>
        (prev - 1 + Math.ceil(sliderImages.length / 3)) % Math.ceil(sliderImages.length / 3)
    );
  };

  const HomePage = () => {
    return (
      <>
        {/* Banner Section with Crossfade */}
        <div className="relative h-screen pt-16">
          {prevImage !== null && (
            <div
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                backgroundImage: `url(${bannerImages[prevImage]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0, // fading out
              }}
            />
          )}
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${bannerImages[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">GWALIOR HERITAGE</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Explore the mesmerizing beauty, rich history, and timeless architecture of Gwalior.
            </p>
            <button className="bg-white text-stone-900 px-8 py-3 rounded-md hover:bg-stone-200 transition font-medium">
              Discover More
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif mb-12 text-center">
              Discover the Wonders of Gwalior
            </h2>
            <div className="relative flex items-center justify-center">
              <button
                className="absolute left-0 bg-gray-800 text-white px-4 py-2 rounded-l-md"
                onClick={prevSlide}
              >
                &lt;
              </button>
              <div className="overflow-hidden w-3/4">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
                >
                  {sliderImages.map(
                    (image, index) =>
                      index % 3 === 0 && (
                        <div key={index} className="min-w-full flex justify-center">
                          {sliderImages.slice(index, index + 3).map((img, idx) => (
                            <img
                              key={idx}
                              src={`/images/${img}`}
                              alt="Gwalior Heritage"
                              className="w-1/3 h-64 object-cover rounded-lg shadow-lg mx-1"
                            />
                          ))}
                        </div>
                      )
                  )}
                </div>
              </div>
              <button
                className="absolute right-0 bg-gray-800 text-white px-4 py-2 rounded-r-md"
                onClick={nextSlide}
              >
                &gt;
              </button>
            </div>
          </div>
        </section>

        {/* Heritage Highlights Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif mb-12 text-center">Heritage Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Gwalior Fort",
                  desc: "One of India's most impenetrable forts, offering stunning views and a rich history.",
                  img: "Gwalior-Fort.jpg",
                },
                {
                  title: "Jai Vilas Palace",
                  desc: "A majestic blend of European architecture with one of the world's largest chandeliers.",
                  img: "jai-vilas-palace.jpg",
                },
                {
                  title: "Teli Ka Mandir",
                  desc: "A unique fusion of North and South Indian temple architecture.",
                  img: "teli-ka-mandir.jpg",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`/images/${item.img}`}
                    alt={item.title}
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Your Visit Section */}
        <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
          <div
            className="aspect-[4/3] mb-8 md:mb-0 rounded-lg"
            style={{
              backgroundImage: "url('/images/collage.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="bg-white p-8 md:p-12">
            <h2 className="text-3xl font-serif mb-6">PLAN YOUR VISIT</h2>
            <p className="text-stone-600 mb-8">
              Experience the grandeur of Gwalior's heritage sites. Our guided
              tours offer deep insights into the city's rich history and
              architectural marvels.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-stone-700 mr-3" />
                <span>Open daily: 9:00 AM - 5:30 PM</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-stone-700 mr-3" />
                <span>Guided tours available</span>
              </div>
            </div>
            <button className="bg-stone-900 text-white px-8 py-3 rounded-none hover:bg-stone-800 transition">
              Book a Tour
            </button>
          </div>
        </div>
      </div>
    </section>
      </>
    );
  };

  // Supabase authentication listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription?.unsubscribe();
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="heritage" element={<Heritage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="Info" element={<ChatBot />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
