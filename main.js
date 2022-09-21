"use strict"
const express = require( 'express');
const bodyParser = require( 'body-parser');
const supplierRoutes = require( "./routes/supplier.js");

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



