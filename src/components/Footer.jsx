import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-rio-green">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <img src="/logo-crema.svg" alt="Río Anteojos" className="h-10 w-auto" />
          </Link>

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

        <div className="mt-4 pt-4 border-t border-rio-cream/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-rio-cream/60">
          <p>© {new Date().getFullYear()} Río Anteojos. Todos los derechos reservados.</p>
          <Link
            to="/politica-de-devolucion"
            className="text-rio-cream/70 hover:text-rio-cream underline transition"
          >
            Política de devolución
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer