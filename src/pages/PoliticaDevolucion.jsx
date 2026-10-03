import { Link } from 'react-router-dom'

function PoliticaDevolucion() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/" className="text-sm text-rio-taupe hover:text-rio-green transition">
        ← Volver al catálogo
      </Link>

      <h1 className="text-2xl font-semibold text-rio-green mt-4 mb-6">
        Política de devolución
      </h1>

      <div className="space-y-5 text-sm text-rio-taupe leading-relaxed">
        <p>
          En Río Anteojos queremos que estés completamente conforme con tu compra. Si por
          algún motivo no es lo que esperabas, podés solicitar un cambio o devolución
          siguiendo estas condiciones.
        </p>

        <div>
          <h2 className="text-base font-semibold text-rio-green mb-1">Plazo</h2>
          <p>
            Tenés hasta 10 días corridos desde que recibís tu pedido para solicitar un
            cambio o devolución.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-rio-green mb-1">Condiciones del producto</h2>
          <p>
            El armazón debe estar sin uso, en perfecto estado, con su estuche y embalaje
            original. No se aceptan devoluciones de productos con signos de uso o daños.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-rio-green mb-1">Cómo solicitarlo</h2>
          <p>
            Escribinos por WhatsApp contándonos el motivo de la devolución y el número de
            pedido. Te vamos a confirmar los próximos pasos y, de corresponder, coordinar
            el envío o cambio.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-rio-green mb-1">Costos de envío</h2>
          <p>
            Los costos de envío de la devolución corren por cuenta del comprador, salvo que
            el motivo sea un error nuestro (producto equivocado o defectuoso).
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-rio-green mb-1">Reintegro</h2>
          <p>
            Una vez que recibimos y verificamos el producto, procesamos el reintegro o
            cambio dentro de las 48 horas hábiles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PoliticaDevolucion