import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Loader.module.scss'

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [startReveal, setStartReveal] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const startCurtain = setTimeout(() => setStartReveal(true), 1400) // match line animation
    const cleanup = setTimeout(() => {
      setDone(true)
      onComplete()
    }, 2600) // cleanup after curtains have slid

    return () => {
      clearTimeout(startCurtain)
      clearTimeout(cleanup)
    }
  }, [])


  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className={styles.loader}
          style={{
            background: startReveal ? 'transparent' : 'var(--color-primary-dark-bg)',
            pointerEvents: 'none', // ensures no blocking
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Line */}
          {!startReveal && (
            <motion.div
              className={styles.line}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          )}

          {/* Curtains */}
          {startReveal && (
            <>
              <motion.div className={`${styles.panel} ${styles.left}`}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.segment}
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      delay: 0.0005 * i, // stagger from top to bottom
                    }}
                  />
                ))}
              </motion.div>

              <motion.div className={`${styles.panel} ${styles.right}`}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.segment}
                    initial={{ x: 0 }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      delay: 0.0005 * i, // stagger from top to bottom
                    }}
                  />
                ))}
              </motion.div>
            </>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
