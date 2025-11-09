import { motion } from 'framer-motion';
import styles from './Hamburger.module.scss';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export default function Hamburger({ isOpen, toggle }: Props) {
  return (
    <button onClick={toggle} className={styles.wrapper} aria-label="Toggle menu">
      {/* Top Line */}
      <motion.span
        className={`${styles.bar} ${styles.bar1}`}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 9 : 0,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
      {/* Middle Line */}
      <motion.span
        className={`${styles.bar} ${styles.bar2}`}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Bottom Line */}
      <motion.span
        className={`${styles.bar} ${styles.bar3}`}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -9 : 0,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </button>
  );
}
