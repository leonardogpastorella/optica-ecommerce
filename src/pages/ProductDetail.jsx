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
    return <p className="text-center text-rio-taupe py-16">Cargando...</p>
  }

  const producto = productos.find(p => String(p.id) === id)

  if (!producto) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-rio-taupe mb-4">No encontramos ese producto.</p>
        <Link to="/" className="text-rio-green underline">Volver al catálogo</Link>
      </div>
    )
  }

  const fotos = [producto.imagen, producto.imagen2, producto.imagen3].filter(Boolean)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-sm text-rio-taupe hover:text-rio-green transition">
        ← Volver al catálogo
      </Link>

      <div className="mt-4 grid sm:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square bg-rio-creamDark rounded-2xl overflow-hidden flex items-center justify-center p-4">
            <img
              src={fotos[fotoActiva]}
              alt={producto.nombre}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {fotos.length > 1 && (
            <div className="flex gap-2 mt-3">
              {fotos.map((foto, i) => (
                <button
                  key={i}
                  onClick={() => setFotoActiva(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                    fotoActiva === i ? 'border-rio-green' : 'border-transparent'
                  }`}
                >
                  <img src={foto} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-rio-taupe">{producto.categoria}</p>
          <h1 className="text-2xl font-semibold text-rio-green mt-1">{producto.nombre}</h1>
          <p className="text-xl font-semibold text-rio-green mt-3">
            {producto.precio > 0 ? `$${producto.precio.toLocaleString('es-AR')}` : 'Consultar precio'}
          </p>
          {producto.descripcion && (
            <p className="text-sm text-rio-taupe mt-4 leading-relaxed">{producto.descripcion}</p>
          )}
          {producto.precio > 0 && (
            <button
              onClick={() => agregarProducto(producto)}
              className="mt-6 w-full py-3 rounded-lg bg-rio-green text-rio-cream font-medium hover:bg-rio-greenLight transition"
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