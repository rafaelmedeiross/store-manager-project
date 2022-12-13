const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model');

const { expect } = require('chai');
const sinon = require('sinon'); //simula as funcoes
const sinonChai = require('sinon-chai');

const resolvedValue = [
  [
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
  ],
  []
];

describe('Testes de sales.model', function () {
  afterEach(sinon.restore);
  it('teste se as vendas sao retornadas', async function () {
    sinon.stub(connection, 'execute').resolves(resolvedValue);
    const getSales = await salesModel.getAllSales();
    expect(getSales).to.be.deep.equal(resolvedValue[0]);
  });
  it('teste se a venda selecionada é retornada', async function () {
    sinon.stub(connection, "execute").resolves(resolvedValue);
    const getSelectedSale = await salesModel.getSaleById(1);
    expect(getSelectedSale).to.be.deep.equal(resolvedValue[0]);
  });
  it('teste se a venda selecionada é deletada', async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
    const getSelectedSale = await salesModel.deleteSaleById(1);
    expect(getSelectedSale).to.be.equal(1);
  });


})
