// A basic API for development purpose
module.exports = (server) => {
	server.get('/api', (req, res, next) => {
		res.send('<h1>Default API</h1>');
	});
	server.get('/:name', (req, res, next) => {
		res.send(`<h1>Hello ${req.param.name} !</h1>`);
	});
};
