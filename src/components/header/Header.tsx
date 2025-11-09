import { Link, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { useTheme } from '@/components/theme/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Hamburger from '@/components/hamburger/Hamburger';
import Reveal from '../Reveal';

type NavLink = {
  label: string;
  path: string;
};

type HeaderProps = {
  logo: string;
  navLinks: NavLink[];
};

const Header = ({ logo, navLinks }: HeaderProps) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const [clipOrigin, setClipOrigin] = useState('100% 0%'); // default

  useEffect(() => {
    if (hamburgerRef.current) {
      const rect = hamburgerRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      setClipOrigin(`${x}px ${y}px`);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const getBreakpoint = () =>
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg'));

    const handleResize = () => {
      const breakpoint = getBreakpoint();
      if (window.innerWidth >= breakpoint) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <header className={styles.Wrapper}>
        <Reveal>
          <Link to="/" className={styles.logo}>{logo}</Link>
        </Reveal>

        {/* Desktop nav */}
        <nav className={`${styles.nav} ${styles.desktopOnly}`}>
          {navLinks.map((link, idx) => (
            <Reveal delay={0.1 * idx}>
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.linkItem} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </Reveal>
          ))}
          <span onClick={toggleTheme}>
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={styles.theme_sun}
                >
                  <Sun size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={styles.theme_moon}
                >
                  <Moon size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </span>
        </nav>

        {/* Mobile Hamburger */}
        <div className={styles.mobileOnly} ref={hamburgerRef}>
          <Hamburger isOpen={isMenuOpen} toggle={() => setIsMenuOpen(prev => !prev)} />
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: `circle(0% at ${clipOrigin})` }}
            animate={{ clipPath: `circle(150% at ${clipOrigin})` }}
            exit={{ clipPath: `circle(0% at ${clipOrigin})` }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={styles.mobileMenuOverlay}
          >
            <nav className={styles.mobileNav}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={location.pathname === link.path ? styles.activeMobile : ''}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + navLinks.length * 0.1 }}
                onClick={toggleTheme}
                className={styles.mobileThemeToggle}
              >
                {theme === 'light' ? <Sun size={40} /> : <Moon size={40} />}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
