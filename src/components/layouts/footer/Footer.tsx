import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Jewel Michael. All rights reserved.</p>
    </footer>
  )
}

export default Footer
