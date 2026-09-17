import ProductCard from './ProductCard'

function ProductGrid({ productos }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
      padding: '1rem'
    }}>
      {productos.map(producto => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ProductGrid