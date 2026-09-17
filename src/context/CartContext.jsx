import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const COSTO_ENVIO = 6000

export function CartProvider({ children }) {
  const [items, setItems] = useState([]) // [{ ...producto, cantidad }]

  function agregarProducto(producto) {
    setItems(prev => {
      const existente = prev.find(item => item.id === producto.id)
      if (existente) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  function quitarProducto(id) {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  function cambiarCantidad(id, cantidad) {
    if (cantidad < 1) return
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, cantidad } : item))
    )
  }

  function vaciarCarrito() {
    setItems([])
  }

  const subtotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  const total = items.length > 0 ? subtotal + COSTO_ENVIO : 0
  const cantidadTotal = items.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        agregarProducto,
        quitarProducto,
        cambiarCantidad,
        vaciarCarrito,
        subtotal,
        total,
        cantidadTotal,
        costoEnvio: COSTO_ENVIO,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}