import fs from 'fs';
import Papa from 'papaparse';

const csvCrudo = fs.readFileSync('./scripts/catalogo-tiendanube.csv', 'latin1');

const { data } = Papa.parse(csvCrudo, {
  header: true,
  delimiter: ';',
  skipEmptyLines: true,
});

const visibles = data.filter(p => p['Visibilidad'] === 'Visible');
console.log('Visibles - muestra:', visibles.slice(0, 3).map(p => ({
  id: p['Identificador de URL'],
  precio: p['Precio'],
  visibilidad: p['Visibilidad']
})));

function limpiarHTML(texto) {
  if (!texto) return '';
  return texto
    .replace(/<[^>]+>/g, ' ')      // saca tags HTML
    .replace(/&oacute;/g, 'ó')
    .replace(/&aacute;/g, 'á')
    .replace(/&eacute;/g, 'é')
    .replace(/&iacute;/g, 'í')
    .replace(/&uacute;/g, 'ú')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&Ntilde;/g, 'Ñ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function limpiarPrecio(precio) {
  if (!precio) return 0;
  return parseFloat(precio.replace(/,/g, ''));
}

const productos = data
  .filter(p => p['Visibilidad'] === 'Visible')
  .map(p => ({
    id: p['Identificador de URL'],
    nombre: p['Nombre'],
    categoria: p['Categorías']?.split(',')[0]?.trim() || '',
    precio: limpiarPrecio(p['Precio']),
    sku: p['SKU'],
    descripcion: limpiarHTML(p['Descripción']),
    marca: p['Marca'] || '',
    imagen: '/placeholder-armazon.jpg', // por ahora, hasta tener las fotos reales
  }));

fs.writeFileSync(
  './src/data/catalogo.json',
  JSON.stringify(productos, null, 2)
);

console.log(`✅ Se generaron ${productos.length} productos en src/data/catalogo.json`);