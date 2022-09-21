const { supplierList } = require("./route/supplier.js");

const fs = require( 'fs');
let rawdata = fs.readFileSync('jsonData.json');
let data = JSON.parse(rawdata);

describe("supplier name according to location and grade number", () => {
    it('supplier list', () => {
        let loc = '5c08cb6f54851e2170a044f4';
        let grdNo = 'SRM100NC';
        let initalizeFunc = supplierList(loc, grdNo, data);
        expect(initalizeFunc).toStrictEqual(
            [
                { name: 'RAHUL (KALPESH PLASTICS)', price: '11650' },
                { name: 'GAURAV SACHDEVA', price: '11700' },
                { name: 'ABHISHEK SINDHU', price: '11750' }
            ]
          )
    })
})

describe("supplier name according to location and grade number", () => {
    it('supplier list', () => {
        let loc = '5c77bdb9222ac21701102d22';
        let grdNo = '582E';
        let initalizeFunc = supplierList(loc, grdNo, data);
        expect(initalizeFunc).toStrictEqual(
            [ { name: 'MILAN SHAH (ANAND TRADELINK)', price: '11900' } ]
          )
    })
})

describe("supplier name according to location and grade number", () => {
    it('supplier list', () => {
        let loc = '5d50f89f4546871a15b7e461';
        let grdNo = 'H110MA';
        let initalizeFunc = supplierList(loc, grdNo, data);
        expect(initalizeFunc).toStrictEqual(
            [ { name: 'SURYA PRAKASH', price: '10750' } ]
          )
    })
})

        // let loc = '5c08cb6f54851e2170a044f4';
        // const parse = require('node-html-parser');
        // let grdNo = 'SRM100NC';
        // console.log(supplierList(loc, grdNo, data))
        // console.log(data)
