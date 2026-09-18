import { useCart } from '../context/CartContext'
import { generarLinkWhatsApp } from './WhatsAppCheckout'

function CartDrawer({ abierto, onClose }) {
  const { items, quitarProducto, cambiarCantidad, subtotal, total, costoEnvio } = useCart()

  if (!abierto) return null

  function handleFinalizar() {
    const link = generarLinkWhatsApp(items, subtotal, costoEnvio, total)
    window.open(link, '_blank')
  }

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />
      <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
          <h2 className="text-base font-semibold uppercase tracking-wide text-stone-800">
            Tu carrito
          </h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none text-stone-500 hover:text-stone-800 transition"
            aria-label="Cerrar carrito"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 && (
            <p className="text-stone-400 text-sm text-center py-10">
              Todavía no agregaste productos.
            </p>
          )}

          {items.map(item => (
            <div
              key={item.id}
              className="flex gap-3 py-4 border-b border-stone-100 last:border-0"
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-16 h-16 object-cover rounded-lg bg-stone-100"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-stone-800 truncate">{item.nombre}</p>
                <p className="text-sm text-stone-600 mt-0.5">
                  ${item.precio.toLocaleString('es-AR')}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border border-stone-200 rounded-lg">
                    <button
                      onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                      className="w-7 h-7 flex items-center justify-center text-stone-600 hover:bg-stone-50"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm">{item.cantidad}</span>
                    <button
                      onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                      className="w-7 h-7 flex items-center justify-center text-stone-600 hover:bg-stone-50"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => quitarProducto(item.id)}
                    className="ml-auto text-xs text-red-600 hover:text-red-800 transition"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-stone-200 bg-stone-50">
            <div className="flex justify-between text-sm text-stone-600">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString('es-AR')}</span>
            </div>
            <div className="flex justify-between text-sm text-stone-600 mt-1">
              <span>Envío (Gran Mendoza)</span>
              <span>${costoEnvio.toLocaleString('es-AR')}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-stone-900 mt-2 mb-4">
              <span>Total</span>
              <span>${total.toLocaleString('es-AR')}</span>
            </div>
            <button
              onClick={handleFinalizar}
              className="w-full py-3 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#1ebe5a] transition"
            >
              Finalizar compra por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer