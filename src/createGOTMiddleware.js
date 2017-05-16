const request = require('request-promise');

module.exports = function createAwesomeMiddleware(options = { getCharacters: requestCharacters }) {
  return async (ctx, next) => {
    if (ctx.path.indexOf('/got-characters') > -1) {
      ctx.characters = await options.getCharacters();
    }

    await next();
  }
};

function requestCharacters() {
  return request('https://www.anapioficeandfire.com/api/characters');
}
