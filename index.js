import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { getDataCherio } from './helpers/getDataCherio.js';

const app = express();

const corsOptions = {
  origin: '*',
};

app.get('/', cors(corsOptions), async (req, res) => {
  console.log('entrando');
  try {
    const { data } = await axios.get('https://www.dolarhoy.co/otrasmonedas/');

    const dataCherio = getDataCherio(data);

    res.json({
      fecha: new Date().toLocaleDateString(),
      monedas: dataCherio,
    });
  } catch (error) {
    res.json({ error });
  }
});

const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`🔥live on Port: ${port}🔥`));
