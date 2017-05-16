const test = require('ava');
const sinon = require('sinon');
const createGOTMiddleware = require('../src/createGOTMiddleware');

test('should have awesomes', (t) => {
  t.notThrows(createGOTMiddleware);
});

test('should invoke getCharacters() & next()', (t) => {
  const mockOptions = {
    getCharacters: sinon.stub().returns(Promise.resolve([]))
  }
  const mockContext = {
    path: '/got-characters'
  };
  const nextStub = sinon.stub().returns(Promise.resolve());

  const invokeMiddleware = createGOTMiddleware(mockOptions);
  invokeMiddleware(mockContext, nextStub);

  t.true(mockOptions.getCharacters.calledOnce);
  t.true(nextStub.calledOnce);
  t.not(mockContext.characters, undefined);
  t.is(mockContext.characters.length, 0);
});

