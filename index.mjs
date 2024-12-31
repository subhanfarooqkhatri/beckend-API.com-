import express from 'express';
import { products } from './products.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Subhan Khatri');
});

app.get('/products', (req, res) => {
  res.json(products); 
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.products[Number(id) - 1];
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("product not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

