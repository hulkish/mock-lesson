const test = require('ava');
const sinon = require('sinon');
const createAwesomeMiddleware = require('../src/createAwesomeMiddleware');

test('should have awesomes', (t) => {
  t.notThrows(createAwesomeMiddleware);
});

test.skip('should invoke getAwesomes() & next()', (t) => {
  const mockOptions = {
    getAwesomes: sinon.stub().returns([])
  }
  const mockContext = {
    path: '/awesome'
  };
  const nextStub = sinon.stub().returns(Promise.resolve());
  const invokeMiddleware = createAwesomeMiddleware(mockOptions);

  invokeMiddleware(mockContext, nextStub);

  t.true(mockOptions.getAwesomes.calledOnce);
  t.true(nextStub.calledOnce);
  t.is(mockContext.awesomes.length, 0);
});

