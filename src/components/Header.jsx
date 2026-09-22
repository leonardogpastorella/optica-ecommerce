import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const CATEGORIAS = ['Lentes de Sol', 'Receta Premium', 'Receta Eco', 'Clip-on']

function Header({ onAbrirCarrito, categoriaActiva, onSeleccionarCategoria }) {
  const { cantidadTotal } = useCart()
  const [menuAbierto, setMenuAbierto] = useState(false)

  function seleccionar(categoria) {
    onSeleccionarCategoria(categoria)
    setMenuAbierto(false)
  }

  return (
    <header className="sticky top-0 z-30 bg-rio-cream/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo-verde.svg" alt="Río Anteojos" className="h-15 w-auto" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => seleccionar(null)}
            className={`text-xs tracking-wide uppercase transition ${
              !categoriaActiva ? 'text-rio-green font-semibold' : 'text-rio-taupe hover:text-rio-green'
            }`}
          >
            Todos
          </button>
          {CATEGORIAS.map(cat => (
            <button
              key={cat}
              onClick={() => seleccionar(cat)}
              className={`text-xs tracking-wide uppercase transition ${
                categoriaActiva === cat ? 'text-rio-green font-semibold' : 'text-rio-taupe hover:text-rio-green'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onAbrirCarrito}
            className="relative p-2 text-rio-green hover:text-rio-greenLight transition"
            aria-label="Abrir carrito"
          >
            <span className="text-2xl">🛒</span>
            {cantidadTotal > 0 && (
              <span className="absolute -top-1 -right-1 bg-rio-green text-rio-cream text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cantidadTotal}
              </span>
            )}
          </button>

          {/* Botón hamburguesa (solo mobile) */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 text-rio-green"
            aria-label="Abrir menú"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      {menuAbierto && (
        <nav className="md:hidden flex flex-col border-t border-stone-200 bg-rio-cream">
          <button
            onClick={() => seleccionar(null)}
            className={`text-left px-4 py-3 text-sm uppercase tracking-wide border-b border-stone-100 ${
              !categoriaActiva ? 'font-semibold text-rio-green' : 'text-rio-taupe'
            }`}
          >
            Todos
          </button>
          {CATEGORIAS.map(cat => (
            <button
              key={cat}
              onClick={() => seleccionar(cat)}
              className={`text-left px-4 py-3 text-sm uppercase tracking-wide border-b border-stone-100 last:border-0 ${
                categoriaActiva === cat ? 'font-semibold text-rio-green' : 'text-rio-taupe'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header