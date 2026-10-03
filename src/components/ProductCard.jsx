import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ producto }) {
  const { agregarProducto } = useCart()
  const [hover, setHover] = useState(false)
  const [mostrarSegunda, setMostrarSegunda] = useState(false)
  const intervaloRef = useRef(null)

  const tieneSegundaFoto = Boolean(producto.imagen2)

  useEffect(() => {
    if (hover && tieneSegundaFoto) {
      intervaloRef.current = setInterval(() => {
        setMostrarSegunda(prev => !prev)
      }, 800) // cada 1.2s alterna
    }

    return () => {
      clearInterval(intervaloRef.current)
    }
  }, [hover, tieneSegundaFoto])

  function handleMouseLeave() {
    setHover(false)
    setMostrarSegunda(false) // vuelve a la primera foto al sacar el mouse
  }

  return (
    <div
      className="group bg-rio-cream rounded-2xl border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/producto/${producto.id}`}>
        <div className="relative aspect-square bg-rio-creamDark overflow-hidden rounded-2xl flex items-center justify-center p-3">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className={`absolute max-w-full max-h-full object-contain transition-opacity duration-700 ${
              mostrarSegunda ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {tieneSegundaFoto && (
            <img
              src={producto.imagen2}
              alt={producto.nombre}
              className={`absolute max-w-full max-h-full object-contain transition-opacity duration-700 ${
                mostrarSegunda ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/producto/${producto.id}`}>
          <h3 className="text-sm text-rio-green truncate hover:underline">
            <span className="font-bold">{producto.marca}</span> {producto.nombre}
          </h3>
        </Link>
        <p className="mt-1 text-base font-semibold text-rio-green">
          {producto.precio > 0 ? `$${producto.precio.toLocaleString('es-AR')}` : 'Consultar precio'}
        </p>
        {producto.precio > 0 && (
          <button
            onClick={() => agregarProducto(producto)}
            className="mt-3 w-full py-2 text-sm font-medium rounded-lg bg-rio-green text-rio-cream hover:bg-rio-greenLight transition"
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard