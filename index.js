import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const app = express();

app.get('/', async (req, res) => {
  console.log('entrando');
  try {
    const { data } = await axios.get('https://www.dolarhoy.co/otrasmonedas/');

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

    res.json({
      fecha: new Date().toLocaleDateString(),
      monedas: [
        {
          nombre: 'Dolar',
          compra: dolarCompra,
          venta: dolarVenta,
        },
        {
          nombre: 'Euro',
          compra: euroCompra,
          venta: euroVenta,
        },
        {
          nombre: 'Libra Esterlina',
          compra: LibraCompra,
          venta: libraVenta,
        },
        {
          nombre: 'Yen',
          compra: yenCompra,
          venta: yenVenta,
        },
      ],
    });
  } catch (error) {
    res.json({ error });
  }
});

const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`🔥live on Port: ${port}🔥`));
