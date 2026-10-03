function Maintenance() {
  return (
    <div className="min-h-screen bg-rio-cream flex flex-col items-center justify-center px-4 text-center">
      <img src="/logo-verde.svg" alt="Río Anteojos" className="h-16 w-auto mb-8" />
      <h1 className="text-xl font-semibold text-rio-green uppercase tracking-wide">
        Sitio en mantenimiento
      </h1>
      <p className="text-rio-taupe mt-3 max-w-sm">
        Estamos actualizando nuestro catálogo. Volvé a visitarnos en un rato.
      </p>
      <a
        href="https://wa.me/5492613380337"
        className="mt-6 px-6 py-3 rounded-lg bg-rio-green text-rio-cream text-sm font-medium hover:bg-rio-greenLight transition"
      >
        Consultar por WhatsApp
      </a>
    </div>
  )
}

export default Maintenance