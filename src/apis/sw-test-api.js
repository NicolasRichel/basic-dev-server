// Dev API to test Service Worker features
module.exports = (server) => {
  server.get('/api', (req, res, next) => {
    res.send('<h1>Service Worker Test API</h1>');
  });
  server.get('/sw-test-api/obj', (req, res, next) => {
    res.json({a: 1, b: 2, c: 3});
  });
	server.get('/sw-test-api/array', (req, res, next) => {
		res.json([ {name: 'ugh'}, {name: 'toto'}, {name: 'ark'} ]);
	});
	server.get('/sw-test-api/img', (req, res, next) => {
		res.sendFile('../repository/test-tubes.jpg', {root: __dirname});
	});
};
