const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');

const { expect } = require('chai'); 
const sinon = require('sinon'); //simula as funcoes

const resolvedValue = [
  [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
  ]
];

describe('testes de product.model', function () {
  afterEach(sinon.restore);
  it('teste se os produtos são retornados', async function () {
    sinon.stub(connection, "execute").resolves(resolvedValue);
    const getProducts = await productsModel.getAllProducts();
    expect(getProducts).to.be.deep.equal(resolvedValue[0]);
  });
  it('teste se o produto selecionado é retornado', async function () {
    sinon.stub(connection, "execute").resolves(resolvedValue);
    const getSelectedProduct = await productsModel.getProductById(1);
    expect(getSelectedProduct).to.be.deep.equal(resolvedValue[0][0]);
  });
  it('teste se o produto selecionado é deletado', async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
    const getDeletedProduct = await productsModel.deleteProductById(1);
    expect(getDeletedProduct).to.be.equal(1);
  });
  it('teste se o produto selecionado é atualizado', async function () {
    sinon.stub(connection, "execute").resolves([{ changedRows: 1 }]);
    const getSelectedProduct = await productsModel.updateProductById(1, 'carro');
    expect(getSelectedProduct).to.be.equal(1);
  });
});