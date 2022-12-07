import * as cheerio from 'cheerio';

const getDataCherio = (data) => {
  const $ = cheerio.load(data);

  const dolarCompraSelector =
    'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(1) > div > div > div > div:nth-child(2) > span';

  const dolarVentaSelector =
    'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(1) > div > div > div > div:nth-child(1) > span';

  const euroCompraSelector =
    'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(2) > div > div > div > div:nth-child(1) > span';

  const euroVentaSelector =
    'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(2) > div > div > div > div:nth-child(2) > span';

  const libraCompraSlector =
    'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(3) > div > div > div > div:nth-child(1) > span';

  const libraVentaSelector =
    'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(3) > div > div > div > div:nth-child(2) > span';

  const yenCompraSelector =
    'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(13) > div > div > div > div:nth-child(1) > span';

  const yenVentaSelector =
    'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(13) > div > div > div > div:nth-child(2) > span';

  const dolarCompra = $(dolarCompraSelector).text().trim() ?? 'No data';
  const dolarVenta = $(dolarVentaSelector).text().trim() ?? 'No data';
  const euroCompra = $(euroCompraSelector).text().trim() ?? 'No data';
  const euroVenta = $(euroVentaSelector).text().trim() ?? 'No data';
  const LibraCompra = $(libraCompraSlector).text().trim() ?? 'No data';
  const libraVenta = $(libraVentaSelector).text().trim() ?? 'No data';
  const yenCompra = $(yenCompraSelector).text().trim() ?? 'No data';
  const yenVenta = $(yenVentaSelector).text().trim() ?? 'No data';

  return [
    {
      nombre: 'Dolar',
      simbolo: '$',
      compra: dolarCompra,
      venta: dolarVenta,
    },
    {
      nombre: 'Euro',
      simbolo: '€',
      compra: euroCompra,
      venta: euroVenta,
    },
    {
      nombre: 'Libra Esterlina',
      simbolo: '£',
      compra: LibraCompra,
      venta: libraVenta,
    },
    {
      nombre: 'Yen',
      simbolo: '¥',
      compra: yenCompra,
      venta: yenVenta,
    },
  ];
};

export { getDataCherio };
