const salesServices = require('../../../src/services/sales.services');
const salesModel = require('../../../src/models/sales.model');

const { expect } = require('chai');
const sinon = require('sinon'); //simula as funcoes
const sinonChai = require('sinon-chai');

const resolvedValue = [
    {
      "saleId": 1,
      "date": "2022-12-13T12:25:27.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "saleId": 1,
      "date": "2022-12-13T12:25:27.000Z",
      "productId": 2,
      "quantity": 10
    },
    {
      "saleId": 2,
      "date": "2022-12-13T12:25:27.000Z",
      "productId": 3,
      "quantity": 15
    }
];
  
const resolvedValue2 = [
  {
    sale_id: 1,
    date: '2022-12-13T12:25:27.000Z',
    product_id: 1,
    quantity: 5
  },
  {
    sale_id: 1,
    date: '2022-12-13T12:25:27.000Z',
    product_id: 2,
    quantity: 10
  },
  {
    sale_id: 2,
    date: '2022-12-13T12:25:27.000Z',
    product_id: 3,
    quantity: 15
  }
];

describe('Testes de sales.services', function () {
  afterEach(sinon.restore);
  it('teste se as vendas sao retornadas', async function () {
    sinon.stub(salesModel, "getAllSales").resolves(resolvedValue2);
    const getSales = await salesServices.getAllSales();
    expect(getSales.message).to.be.deep.equal(resolvedValue);
  });
})
