import express from "express";
import { products } from "./data.js";


const app = express();

app.get("/",(req,res) => {
    res.send("<h1>Hello from Express </h1>");
});

app.get("/api/products",(req,res) => {
    const {id} = req.params;
    const product = products.find((item) => item.id == id);

    if (!product) {
        res.status(400
 });
res.json(filterProducts);
res.json({count:filterProducts.length, products: filterProducts});
});

app.listen(3333, () => {
    console.log("Server is running at 3333");
}); 