
const productsController = require('../../../src/controllers/products.controller');
const productsServices = require('../../../src/services/products.services');
const sinonChai = require('sinon-chai');

const chai = require('chai');
const sinon = require('sinon'); //simula as funcoes
const { expect } = chai;

chai.use(sinonChai);

const resolvedValue = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

describe('testes de products.controller', function () {
  afterEach(sinon.restore);
  it('teste se os produtos são retornados', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, "getAllProducts").resolves({ message: resolvedValue });
    await productsController.getAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resolvedValue);
  });
  it('teste se o produto é retornados', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, "getProductById").resolves({ message: resolvedValue[0] });
    await productsController.getProductById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resolvedValue[0]);
  });
  it('teste se controla exclusao de produtos', async function () {
    const res = {};
    const req = { params: { id: 4 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, "deleteProductById").resolves({ message: "Product not found" });
    await productsController.deleteProductById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Product not found" });
  });

})