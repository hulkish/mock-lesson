'use strict';

const Koa = require('koa');
const createAwesomeMiddleware = require('./createAwesomeMiddleware');
const createGOTMiddleware = require('./createGOTMiddleware');

const app = new Koa();

app.use(createAwesomeMiddleware());
app.use(createGOTMiddleware());
app.use(async (ctx, next) => {
  if (ctx.awesomes) {
    console.log('awesomes', ctx.awesomes);
    ctx.status = 200;
    ctx.body = ctx.awesomes;
  }

  if (ctx.characters) {
    console.log('characters', ctx.characters);
    ctx.status = 200;
    ctx.body = ctx.characters;
  }

  await next();
});

app.listen(3000, function() {
  const { address, port, family } = this.address();
  console.log(`Listening on ${address}:${port} (${family})`);
});
