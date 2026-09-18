import ProductCard from './ProductCard'

function ProductGrid({ productos }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map(producto => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ProductGrid