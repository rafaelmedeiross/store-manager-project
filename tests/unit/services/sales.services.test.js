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

const resolvedValue3 = [
  {
    date: '2022-12-13T12:25:27.000Z',
    product_id: 1,
    quantity: 5
  },
  {
    date: '2022-12-13T12:25:27.000Z',
    product_id: 2,
    quantity: 10
  }
];

const resolvedValue4 = [
  { date: '2022-12-13T12:25:27.000Z', productId: 1, quantity: 5 },
  { date: '2022-12-13T12:25:27.000Z', productId: 2, quantity: 10 }
];


describe('Testes de sales.services', function () {
  afterEach(sinon.restore);
  it('teste se as vendas sao retornadas', async function () {
    sinon.stub(salesModel, "getAllSales").resolves(resolvedValue2);
    const getSales = await salesServices.getAllSales();
    expect(getSales.message).to.be.deep.equal(resolvedValue);
  });
  it('teste se uma venda especifica é encontrado', async function () {
    sinon.stub(salesModel, "getSaleById").resolves(resolvedValue3);
    const getSale = await salesServices.getSaleById(2);
    expect(getSale.message).to.be.deep.equal(resolvedValue4);
  });
  it('teste se uma venda especifica é deletada', async function () {
    sinon.stub(salesModel, "getSaleById").resolves(resolvedValue3);
    sinon.stub(salesModel, "deleteSaleById").resolves(1);
    const getDeletedSale = await salesServices.deleteSaleById(1);
    expect(getDeletedSale.message).to.be.equal(undefined);
  });

})
