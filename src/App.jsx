import { useState } from 'react'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import { useCatalog } from './hooks/useCatalog'
import { useCart } from './context/CartContext'

function App() {
  const { productos, loading, error } = useCatalog()
  const { cantidadTotal } = useCart()
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.3rem' }}>Óptica - Catálogo</h1>
        <button onClick={() => setCarritoAbierto(true)} style={{ position: 'relative', border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
          🛒
          {cantidadTotal > 0 && (
            <span style={{
              position: 'absolute', top: -4, right: -8,
              background: 'red', color: 'white', borderRadius: '50%',
              fontSize: '0.7rem', width: '18px', height: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {cantidadTotal}
            </span>
          )}
        </button>
      </header>

      {loading && <p style={{ textAlign: 'center' }}>Cargando catálogo...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>Hubo un error al cargar el catálogo.</p>}
      {!loading && !error && <ProductGrid productos={productos} />}

      <CartDrawer abierto={carritoAbierto} onClose={() => setCarritoAbierto(false)} />
    </div>
  )
}

export default App