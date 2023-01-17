const express = require("express");
const app = express();
const fs = require("fs");
let products = [
  { id: 1, name: "Alma", price: 0.80, count: 20 },
  { id: 2, name: "Armud", price: 1.50, count: 7 },
  { id: 3, name: "Nar", price: 0.60, count: 12 },
  { id: 4, name: "Heyva", price: 1.20, count: 10 },
  { id: 5, name: "Banan", price: 2.50, count: 15 },
  { id: 6, name: "Kivi", price: 2.00, count: 4 },
  { id: 7, name: "Shaftali", price: 1.80, count: 6 },
  { id: 8, name: "Ananas", price: 3.40, count: 2 },
  { id: 9, name: "Gilas", price: 2.20, count: 0 },
  { id: 10, name: "Portagal", price: 1.60, count: 17 },
];

// app.get("/products", (req, res) => {
//   res.json(products)
// });

// app.get("/products/:id", (req, res) => {
//   const idOfProduct = +req.params.id;
//   const product = products.find((product) => product.id === idOfProduct);
//   if (!product) {
//     res.status(404).send();
//   }
//   res.status(200).json(product);
// });

app.get("/products", (req, res) => {
  const count = +req.query.count;
  const offset = +req.query.offset;

  res.json(products.splice(offset, count))
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
