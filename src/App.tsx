import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollToTop from './hooks/useScrollToTop'
import Footer from './layout/Footer'

function AppContent() {
  // Scroll to top al cambiar de ruta (debe estar dentro de BrowserRouter)
  useScrollToTop();

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  // Inicializar Lenis globalmente
  useSmoothScroll(true);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
