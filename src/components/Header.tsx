import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { AuthModal } from './AuthModal';

export default function Header() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setMobileMenuOpen(false);
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

            {/* Desktop nav */}
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

            {/* Mobile menu toggle */}
            <motion.div
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-stone-700" />
              ) : (
                <Menu className="h-6 w-6 text-stone-700" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="md:hidden bg-white border-t border-stone-200 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-stone-700 hover:text-stone-900 ${
                      location.pathname === item.path ? 'font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="text-left bg-stone-900 text-white px-4 py-2 hover:bg-stone-800"
                  >
                    Sign Out
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleAuthClick("login")}
                      className="flex items-center space-x-2 text-stone-700 hover:text-stone-900"
                    >
                      <LogIn className="h-5 w-5" />
                      <span>Sign In</span>
                    </button>
                    <button
                      onClick={() => handleAuthClick("register")}
                      className="flex items-center space-x-2 bg-stone-900 text-white px-4 py-2 hover:bg-stone-800"
                    >
                      <UserPlus className="h-5 w-5" />
                      <span>Register</span>
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
      />
    </>
  );
}
