export const NUMERO_WHATSAPP = '5492613380337'




export function generarLinkWhatsApp(items, subtotal, envio, total) {
  const lineasProductos = items
    .map(item => `${item.sku} ${item.nombre} - $${item.precio.toLocaleString('es-AR')} x${item.cantidad}`)
    .join('\n')

  const mensaje =
    `Hola, quiero realizar este pedido:\n` +
    `${lineasProductos}\n\n` +
    `Subtotal: $${subtotal.toLocaleString('es-AR')}\n` +
    `Envío: $${envio.toLocaleString('es-AR')}\n` +
    `Total: $${total.toLocaleString('es-AR')}`

  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`
}