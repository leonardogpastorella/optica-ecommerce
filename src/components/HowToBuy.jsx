const PASOS = [
  {
    numero: 1,
    icono: '🔍',
    titulo: 'Explorá',
    texto: 'Recorré el catálogo y elegí tus armazones favoritos.',
  },
  {
    numero: 2,
    icono: '🛒',
    titulo: 'Agregá al carrito',
    texto: 'Seleccioná el modelo y la cantidad que quieras.',
  },
  {
    numero: 3,
    icono: '💬',
    titulo: 'Enviá tu pedido',
    texto: 'Completá el carrito y enviálo por WhatsApp. Te confirmamos disponibilidad y pago.',
  },
]

function HowToBuy() {
  return (
    <section className="bg-rio-arena border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-stone-800 mb-10">
          ¿Cómo comprar?
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {PASOS.map(paso => (
            <div key={paso.numero} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-semibold mb-3">
                {paso.numero}
              </div>
              <span className="text-2xl mb-2">{paso.icono}</span>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-800">
                {paso.titulo}
              </h3>
              <p className="text-sm text-stone-500 mt-1 max-w-[220px]">{paso.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="text-lg">🚚</span>
          <p className="text-sm text-stone-700">
            <span className="font-semibold">Envíos en Gran Mendoza:</span> $6.000
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowToBuy