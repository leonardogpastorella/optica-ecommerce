function HowToBuy() {
  return (
    <section className="bg-rio-arena border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-stone-800 mb-8">
          ¿Cómo comprar?
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <img
            src="/como-comprar-1.png"
            alt="Paso 1: Explorá el catálogo"
            className="w-full h-full object-cover rounded-2xl"
          />
          <img
            src="/como-comprar-2.png"
            alt="Paso 2: Agregá al carrito"
            className="w-full h-full object-cover rounded-2xl"
          />
          <img
            src="/como-comprar-3.png"
            alt="Paso 3: Enviá tu pedido"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <img
          src="/como-comprar-4.png"
          alt="Envíos en Gran Mendoza"
          className="w-full h-auto object-cover rounded-2xl mt-4"
        />
      </div>
    </section>
  )
}

export default HowToBuy