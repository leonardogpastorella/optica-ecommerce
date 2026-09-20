import { NUMERO_WHATSAPP } from './WhatsAppCheckout'

function FloatingWhatsAppButton() {
  const mensaje = encodeURIComponent('Hola, quiero hacer una consulta sobre los productos.')
  const link = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] shadow-lg flex items-center justify-center transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 3C9.374 3 4 8.373 4 15.002c0 2.65.868 5.1 2.338 7.084L5 29l7.1-1.86a11.94 11.94 0 0 0 3.9.66h.004c6.63 0 12.004-5.373 12.004-12.002C28.008 8.373 22.634 3 16.004 3zm0 21.82a9.8 9.8 0 0 1-4.994-1.37l-.358-.213-4.212 1.103 1.125-4.104-.233-.372a9.78 9.78 0 0 1-1.5-5.86c0-5.42 4.412-9.83 9.836-9.83 5.424 0 9.836 4.41 9.836 9.83s-4.412 9.816-9.5 9.816zm5.4-7.36c-.296-.148-1.75-.864-2.022-.963-.272-.099-.47-.148-.668.148-.198.297-.767.963-.94 1.16-.173.198-.346.223-.642.075-.296-.148-1.25-.46-2.38-1.467-.88-.784-1.474-1.752-1.647-2.048-.173-.297-.018-.457.13-.604.134-.133.297-.347.446-.52.148-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.148-.667-1.607-.914-2.202-.24-.578-.485-.5-.667-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.017-1.04 2.48 0 1.463 1.065 2.876 1.213 3.074.148.198 2.096 3.2 5.08 4.487.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.75-.715 1.997-1.406.247-.69.247-1.28.173-1.406-.074-.124-.272-.198-.568-.346z" />
      </svg>
    </a>
  )
}

export default FloatingWhatsAppButton