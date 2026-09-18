function Hero() {
  return (
    <section className="grid sm:grid-cols-2 min-h-[320px] sm:min-h-[420px]">
      <div className="bg-stone-900 text-white flex flex-col justify-center px-6 sm:px-12 py-10 sm:py-0">
        <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide leading-tight">
          Mirá la vida<br />de otra manera
        </h2>
        <p className="mt-4 text-sm text-stone-300 max-w-[280px]">
          Armazones pensados para acompañarte todos los días.
        </p>
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