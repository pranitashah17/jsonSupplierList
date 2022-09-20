"use strict"
import express from 'express';
import bodyParser from 'body-parser';
import supplierRoutes from "./routes/supplier.js";

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use("/supplier", supplierRoutes);

app.get("/", (req, res) => {
    res.send('hello homepage')
})

app.listen(port, err => {
    if(err) {
        return console.log('ERROR', err)
    }
    console.log(`Listening on port http://localhost:${port}`)
})



