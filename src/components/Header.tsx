import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Menu, LogIn, UserPlus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { AuthModal } from './AuthModal';

export default function Header() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuthClick = (mode: "login" | "register") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "Heritage", path: "/heritage" },
    { name: "Gallery", path: "/gallery" },
    { name: "Info", path: "/Info" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm fixed w-full z-50 border-b border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-8 w-8 text-stone-700" />
                <span className="ml-2 text-xl font-serif">Gwalior Darshan</span>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <motion.div key={item.name}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`text-stone-600 hover:text-stone-900 ${
                      location.pathname === item.path ? 'text-stone-900 font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {user ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSignOut}
                  className="bg-stone-900 text-white px-4 py-2 rounded-none hover:bg-stone-800"
                >
                  Sign Out
                </motion.button>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAuthClick("login")}
                    className="flex items-center space-x-2 text-stone-600 hover:text-stone-900"
                  >
                    <LogIn className="h-5 w-5" />
                    <span>Sign In</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAuthClick("register")}
                    className="flex items-center space-x-2 bg-stone-900 text-white px-4 py-2 rounded-none hover:bg-stone-800"
                  >
                    <UserPlus className="h-5 w-5" />
                    <span>Register</span>
                  </motion.button>
                </>
              )}
            </div>

            <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
              <Menu className="h-6 w-6 text-stone-700" />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
      />
    </>
  );
}