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
          y: isOpen ? 8 : 0,
          top: isOpen ? '2.5px' : '5px',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
      <motion.span
        className={`${styles.bar} ${styles.bar2}`}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
          width: isOpen ? '30px' : '18px',
          bottom: isOpen ? '2.5px' : '5px',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </button>
  );
}
