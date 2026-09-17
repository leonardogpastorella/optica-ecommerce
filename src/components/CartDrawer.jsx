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
      {/* Fondo oscuro para cerrar al tocar afuera */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 40,
        }}
      />
      {/* Panel lateral */}
      <div style={{
        position: 'fixed', top: 0, right: 0,
        width: '90%', maxWidth: '380px', height: '100%',
        background: 'white', zIndex: 50,
        display: 'flex', flexDirection: 'column',
        boxShadow: '-2px 0 8px rgba(0,0,0,0.15)',
      }}>
        <div style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Tu carrito</h2>
          <button onClick={onClose} style={{ border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
          {items.length === 0 && <p style={{ color: '#888' }}>Todavía no agregaste productos.</p>}

          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
              <img src={item.imagen} alt={item.nombre} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>{item.nombre}</p>
                <p style={{ margin: '0.25rem 0', fontSize: '0.85rem' }}>${item.precio.toLocaleString('es-AR')}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}>+</button>
                  <button onClick={() => quitarProducto(item.id)} style={{ marginLeft: 'auto', color: '#c00', border: 'none', background: 'none', cursor: 'pointer' }}>
                    Quitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div style={{ padding: '1rem', borderTop: '1px solid #eee' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
              <span>Subtotal</span><span>${subtotal.toLocaleString('es-AR')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
              <span>Envío (Gran Mendoza)</span><span>${costoEnvio.toLocaleString('es-AR')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.05rem', margin: '0.5rem 0' }}>
              <span>Total</span><span>${total.toLocaleString('es-AR')}</span>
            </div>
            <button
              onClick={handleFinalizar}
              style={{ width: '100%', padding: '0.75rem', background: '#25D366', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
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