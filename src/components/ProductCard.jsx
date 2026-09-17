import { useCart } from '../context/CartContext'

function ProductCard({ producto }) {
  const { agregarProducto } = useCart()

  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3 style={{ fontSize: '1rem', margin: '0.5rem 0' }}>{producto.nombre}</h3>
      <p style={{ fontWeight: 'bold' }}>
        {producto.precio > 0 ? `$${producto.precio.toLocaleString('es-AR')}` : 'Consultar precio'}
      </p>
      {producto.precio > 0 && (
        <button onClick={() => agregarProducto(producto)}>
          Agregar al carrito
        </button>
      )}
    </div>
  )
}

export default ProductCard