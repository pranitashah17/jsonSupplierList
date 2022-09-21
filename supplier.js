"use strict"
const express = require( "express");
const {connectionNew} = require('../connection.js');
const router = express.Router();
  

const supplierList = (loc, grdNo, data) => {
    let finalarray = []; 
    let array = [];
    for(let i=0; i < data.length; i++) {
        if(data[i].location === loc) {
            for(let j=0; j < data[i].listingsData.length; j++) {
                if(data[i].listingsData[j].gradeNumber === grdNo){
                array.push({name: data[i].name, price: data[i].listingsData[j].price});
                }
            }
        }      
    finalarray = array.sort((x, y) => x.price - y.price)
    }
    return finalarray
}

router.get('/', async(req, res) => { 

    const getData = await connectionNew();
    const db = getData.db('jsonData')
    const data = await db        
        .collection("supplierList")
        .find({})
        .toArray()
  

    let loc = req.query.loc;
    let grdNo = req.query.grdNo
     
    
    
    res.send(supplierList(loc, grdNo, data))


})




module.exports = router 
module.exports = {supplierList}