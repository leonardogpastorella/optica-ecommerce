import Papa from 'papaparse'
import { useState, useEffect } from 'react'

const CONFIG_URL = 'PEGAR_ACA_LA_URL_DEL_CSV_DE_CONFIG'

export function useConfig() {
  const [mantenimiento, setMantenimiento] = useState(false)
  const [loadingConfig, setLoadingConfig] = useState(true)

  useEffect(() => {
    fetch(CONFIG_URL)
      .then(res => res.text())
      .then(csv => {
        const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true })
        const fila = data.find(r => r['Clave']?.toLowerCase().trim() === 'mantenimiento')
        const valor = fila?.['Valor']?.toUpperCase().trim()
        setMantenimiento(valor === 'SI' || valor === 'SÍ')
        setLoadingConfig(false)
      })
      .catch(() => setLoadingConfig(false))
  }, [])

  return { mantenimiento, loadingConfig }
}