var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

router.get('/cssBook', function *(next) {
  yield this.render('cssBook', {
    title: 'Hello World foo!'
  });
});



module.exports = router;
