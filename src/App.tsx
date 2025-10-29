import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './layout/TopNav'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollToTop from './hooks/useScrollToTop'

function AppContent() {
  // Scroll to top al cambiar de ruta (debe estar dentro de BrowserRouter)
  useScrollToTop();

  return (
    <>
      <TopNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
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
