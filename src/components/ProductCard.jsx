import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ producto }) {
  const { agregarProducto } = useCart()

  return (
    <div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/producto/${producto.id}`}>
        <div className="aspect-square bg-stone-100 overflow-hidden">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/producto/${producto.id}`}>
          <h3 className="text-sm font-medium text-stone-800 truncate hover:underline">{producto.nombre}</h3>
        </Link>
        <p className="mt-1 text-base font-semibold text-stone-900">
          {producto.precio > 0 ? `$${producto.precio.toLocaleString('es-AR')}` : 'Consultar precio'}
        </p>
        {producto.precio > 0 && (
          <button
            onClick={() => agregarProducto(producto)}
            className="mt-3 w-full py-2 text-sm font-medium rounded-lg bg-stone-900 text-white hover:bg-stone-700 transition"
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard