import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const app = express();

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://www.dolarhoy.co/otrasmonedas/');

    const $ = cheerio.load(data);

    const dolarCompraSelector =
      'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(1) > div > div > div > div:nth-child(2) > span';

    const dolarVentaSelector =
      'body > div.container-fluid > div > main > div.row.mb-4 > div:nth-child(1) > div > div > div > div:nth-child(1) > span';

    const dolarCompra = $(dolarCompraSelector).text().trim() ?? 'No data';
    const dolarVenta = $(dolarVentaSelector).text().trim() ?? 'No data';

    res.json({
      dolar: {
        compra: dolarCompra,
        venta: dolarVenta,
      },
    });
  } catch (error) {
    res.json({ error });
  }
});

const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`🔥live on Port: ${port}🔥`));
