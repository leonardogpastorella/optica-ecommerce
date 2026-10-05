import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ producto }) {
  const [hover, setHover] = useState(false)
  const [mostrarSegunda, setMostrarSegunda] = useState(false)
  const intervaloRef = useRef(null)

  const tieneSegundaFoto = Boolean(producto.imagen2)

  useEffect(() => {
    if (hover && tieneSegundaFoto) {
      intervaloRef.current = setInterval(() => {
        setMostrarSegunda(prev => !prev)
      }, 800)
    }
    return () => clearInterval(intervaloRef.current)
  }, [hover, tieneSegundaFoto])

  function handleMouseLeave() {
    setHover(false)
    setMostrarSegunda(false)
  }

  return (
    <Link
      to={`/producto/${producto.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[4/3] bg-rio-creamDark overflow-hidden flex items-center justify-center p-4">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className={`absolute max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 ${
            mostrarSegunda ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {tieneSegundaFoto && (
          <img
            src={producto.imagen2}
            alt={producto.nombre}
            className={`absolute max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 ${
              mostrarSegunda ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      <div className="pt-3">
  <p className="text-xs uppercase tracking-wide text-rio-taupe">
    {producto.categoria}
  </p>
  <h3 className="text-sm text-rio-green truncate mt-0.5">
    <span className="font-bold">{producto.marca}</span> {producto.nombre}
  </h3>
  <p className="mt-1 text-sm text-rio-green">
    {producto.precio > 0 ? `$${producto.precio.toLocaleString('es-AR')}` : 'Consultar precio'}
  </p>
</div>
    </Link>
  )
}

export default ProductCard