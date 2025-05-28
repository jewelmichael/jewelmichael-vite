import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import { useTheme } from '@/components/components/theme/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

type NavLink = {
  label: string
  path: string
}

type HeaderProps = {
  logo: string
  navLinks: NavLink[]
}

const Header = ({ logo, navLinks }: HeaderProps) => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.Wrapper}>
      <Link to="/" className={styles.logo}>{logo}</Link>
      <nav className={styles.nav}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.linkItem} ${location.pathname === link.path ? styles.active : ''}`}
          >
            {link.label}
          </Link>
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
    </header>
  )
}

export default Header
