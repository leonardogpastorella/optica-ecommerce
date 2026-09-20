function Hero() {
  return (
    <section className="grid sm:grid-cols-2 min-h-[320px] sm:min-h-[420px]">
      <div className="bg-rio-verde">
        <img
          src="/hero-izquierda.jpg"
          alt="Río Anteojos - Somos de Mendoza"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-stone-200">
        <img
          src="/hero-placeholder.jpg"
          alt="Armazón destacado"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default Hero