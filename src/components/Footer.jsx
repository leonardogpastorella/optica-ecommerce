import { Link } from 'react-router-dom'

const CATEGORIAS = ['Lentes de Sol', 'Receta Premium', 'Receta Eco', 'Clip-on']

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-rio-green">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center">
            <img src="/logo-crema.svg" alt="Río Anteojos" className="h-12 w-auto" />
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {CATEGORIAS.map(cat => (
              <span
                key={cat}
                className="text-xs uppercase tracking-wide text-rio-cream/80 hover:text-rio-cream transition cursor-default"
              >
                {cat}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="invert opacity-80 hover:opacity-100 transition">
              <img src="/social-facebook.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="invert opacity-80 hover:opacity-100 transition">
              <img src="/social-instagram.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="TikTok" className="invert opacity-80 hover:opacity-100 transition">
              <img src="/social-tiktok.png" alt="TikTok" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-rio-cream/60 mt-8">
          © {new Date().getFullYear()} Río Anteojos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer