import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import '@/styles/styles.scss'

const App = () => {
  const location = useLocation()

  return (
    <>
      <Header
        navLinks={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Works', path: '/works' },
          { label: 'Contact', path: '/contact' },
        ]}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default App
