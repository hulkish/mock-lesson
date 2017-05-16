const awesomes = require('./awesomes.json');

module.exports = function createAwesomeMiddleware(options = { getAwesomes: loadAwesomes }) {
  return async (ctx, next) => {
    if (ctx.path.indexOf('/awesomes') > -1) {
      ctx.awesomes = options.getAwesomes();
    }
  }
};

function loadAwesomes() {
  return awesomes;
}
