import React, { useState } from 'react'
import { ThemeProvider } from '@/components/theme/ThemeContext'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Loader from '@/components/loader/Loader'

const Root = () => {
  const [startLoader, setStartLoader] = useState(true)

  return (
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
          {startLoader && (
            <Loader onComplete={() => setStartLoader(false)} />
          )}
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)