import Papa from 'papaparse'
import { useState, useEffect } from 'react'

const CONFIG_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfQf_Jr00GFKne9hpz41ijTwCLGHfY4IpeO_clJfUcg1nYaYkj_OPF6HJXNURH4eMfh5wtWRPzFF0R/pub?gid=653873281&single=true&output=csv'

function normalizar(texto) {
  return (texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // saca acentos
    .trim()
    .toUpperCase()
}

export function useConfig() {
  const [mantenimiento, setMantenimiento] = useState(false)
  const [loadingConfig, setLoadingConfig] = useState(true)

  useEffect(() => {
    fetch(CONFIG_URL)
      .then(res => res.text())
      .then(csv => {
        const { data } = Papa.parse(csv, { header: false, skipEmptyLines: true })
        const fila = data.find(r => normalizar(r[0]) === 'MANTENIMIENTO')
        setMantenimiento(normalizar(fila?.[1]) === 'SI')
        setLoadingConfig(false)
      })
      .catch(() => setLoadingConfig(false))
  }, [])

  return { mantenimiento, loadingConfig }
}