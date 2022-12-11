const productsServices = require('../../../src/services/products.services');
const productsModel = require('../../../src/models/products.model');

const { expect } = require('chai');
const sinon = require('sinon'); //simula as funcoes

const resolvedValue = [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
];

describe('testes de product.services', function () {
  afterEach(sinon.restore);
  it('teste se os produtos são retornados', async function () {
    sinon.stub(productsModel, "getAllProducts").resolves(resolvedValue);
    const getProducts = await productsServices.getAllProducts();
    expect(getProducts.message).to.be.deep.equal(resolvedValue);
  });
  it('teste se um produto especifico é encontrado', async function () {
    sinon.stub(productsModel, "getProductById").resolves(resolvedValue[1]);
    const getProduct = await productsServices.getProductById(2);
    expect(getProduct.message).to.be.deep.equal(resolvedValue[1]);
  });
  it('teste se um produto especifico não é encontrado', async function () {
    sinon.stub(productsModel, "getProductById").resolves(undefined);
    const getProduct = await productsServices.getProductById(4);
    expect(getProduct).to.be.deep.equal({ message: 'Product not found' });
  })
});