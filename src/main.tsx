import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Loader from '@/components/components/loader/Loader'

const Root = () => {
  const [startLoader, setStartLoader] = useState(true)

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes />
        {startLoader && (
          <Loader onComplete={() => setStartLoader(false)} />
        )}
      </BrowserRouter>
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)