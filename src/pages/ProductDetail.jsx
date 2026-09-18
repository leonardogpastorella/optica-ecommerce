import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCatalog } from '../hooks/useCatalog'
import { useCart } from '../context/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const { productos, loading } = useCatalog()
  const { agregarProducto } = useCart()
  const [fotoActiva, setFotoActiva] = useState(0)

  if (loading) {
    return <p className="text-center text-stone-500 py-16">Cargando...</p>
  }

  const producto = productos.find(p => String(p.id) === id)

  if (!producto) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-stone-500 mb-4">No encontramos ese producto.</p>
        <Link to="/" className="text-stone-800 underline">Volver al catálogo</Link>
      </div>
    )
  }

  const fotos = [producto.imagen, producto.imagen2, producto.imagen3].filter(Boolean)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-sm text-stone-500 hover:text-stone-800 transition">
        ← Volver al catálogo
      </Link>

      <div className="mt-4 grid sm:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden">
            <img
              src={fotos[fotoActiva]}
              alt={producto.nombre}
              className="w-full h-full object-cover"
            />
          </div>
          {fotos.length > 1 && (
            <div className="flex gap-2 mt-3">
              {fotos.map((foto, i) => (
                <button
                  key={i}
                  onClick={() => setFotoActiva(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                    fotoActiva === i ? 'border-stone-800' : 'border-transparent'
                  }`}
                >
                  <img src={foto} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-stone-400">{producto.categoria}</p>
          <h1 className="text-2xl font-semibold text-stone-900 mt-1">{producto.nombre}</h1>
          <p className="text-xl font-semibold text-stone-800 mt-3">
            {producto.precio > 0 ? `$${producto.precio.toLocaleString('es-AR')}` : 'Consultar precio'}
          </p>
          {producto.descripcion && (
            <p className="text-sm text-stone-600 mt-4 leading-relaxed">{producto.descripcion}</p>
          )}
          {producto.precio > 0 && (
            <button
              onClick={() => agregarProducto(producto)}
              className="mt-6 w-full py-3 rounded-lg bg-stone-900 text-white font-medium hover:bg-stone-700 transition"
            >
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail