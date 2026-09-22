import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowToBuy from './components/HowToBuy'
import { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import ProductDetail from './pages/ProductDetail'
import { useCatalog } from './hooks/useCatalog'

function App() {
  const { productos, loading, error } = useCatalog()
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [categoriaActiva, setCategoriaActiva] = useState(null)

  const productosFiltrados = useMemo(() => {
    if (!categoriaActiva) return productos
    return productos.filter(p => p.categoria === categoriaActiva)
  }, [productos, categoriaActiva])

  return (
    <div className="min-h-screen bg-rio-cream">
      <Header
        onAbrirCarrito={() => setCarritoAbierto(true)}
        categoriaActiva={categoriaActiva}
        onSeleccionarCategoria={setCategoriaActiva}
      />

      <Routes>
<Route
  path="/"
  element={
    <>
    <Hero />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {loading && <p className="text-center text-stone-500 py-16">Cargando catálogo...</p>}
        {error && <p className="text-center text-red-600 py-16">Hubo un error al cargar el catálogo.</p>}
        {!loading && !error && productosFiltrados.length === 0 && (
          <p className="text-center text-stone-500 py-16">No hay productos en esta categoría.</p>
        )}
        {!loading && !error && productosFiltrados.length > 0 && (
          <ProductGrid productos={productosFiltrados} />
        )}
      </main>

      <HowToBuy />
       <FloatingWhatsAppButton />
    </>
  }
/>
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
      
      <Footer />

      <CartDrawer abierto={carritoAbierto} onClose={() => setCarritoAbierto(false)} />
    </div>
  )
}

export default App