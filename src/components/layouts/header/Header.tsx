import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

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
      </nav>
    </header>
  )
}

export default Header
