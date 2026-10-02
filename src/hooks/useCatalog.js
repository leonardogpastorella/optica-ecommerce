import Papa from 'papaparse';
import { useState, useEffect } from 'react';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfQf_Jr00GFKne9hpz41ijTwCLGHfY4IpeO_clJfUcg1nYaYkj_OPF6HJXNURH4eMfh5wtWRPzFF0R/pub?gid=1516243478&single=true&output=csv';

function limpiarPrecio(precio) {
  if (!precio) return 0;
  // "25.000" -> sacamos los puntos de miles, y si hubiera coma decimal la convertimos a punto
  const limpio = precio.replace(/\./g, '').replace(',', '.');
  return parseFloat(limpio) || 0;
}

export function useCatalog() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then(res => res.text())
      .then(csv => {
        const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });

        const normalizados = data
          .filter(p => p['Disponible'] === 'Sí')
          .map(p => ({
  id: p['SKU / Código'],
  sku: p['SKU / Código'],
  marca: p['Marca'],
  nombre: p['Modelo'],
  color: p['Color'],
  talle : p['Talle'],
  categoria: p['Categoría'],
  descripcion: p['Descripción'],
  imagen: p['Imagen 1 (link)'],
  imagen2: p['Imagen 2 (link)'] || null,
  imagen3: p['Imagen 3 (link)'] || null,
  precio: limpiarPrecio(p['Precio']),
  stock: parseInt(p['Stock'], 10) || 0,
  disponible : p['Disponible'] === 'Sí',
  
}));

        setProductos(normalizados);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { productos, loading, error };
}