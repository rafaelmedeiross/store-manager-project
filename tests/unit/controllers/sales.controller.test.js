const salesController = require('../../../src/controllers/sales.controller');
const salesServices = require('../../../src/services/sales.services');
const sinonChai = require('sinon-chai');

const chai = require('chai');
const sinon = require('sinon'); //simula as funcoes
const { expect } = chai;
chai.use(sinonChai);

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

describe('Testes de sales.controller', function () {
  afterEach(sinon.restore);
  it('teste se as vendas são retornados', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesServices, "getAllSales").resolves({ message: resolvedValue });
    await salesController.getAllSales(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resolvedValue);
  });
})