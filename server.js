// Get the list of arguments
const args = process.argv.slice(2);
// Set server port value
const port = 8081;
// Get Express Server
const server = require('express')();
// Get API initializer
const initialize = require('./src/api-initializer');

if (args.length>0) {

  // Init Dev APIs
  for (let i=0 ; i<args.length ; i++) {
    initialize(server, args[i]);
  }

} else {

  // Load Default API if none specified
  console.log('No API specified, loading Default API.');
  initialize(server, 'default-api');

}

// Start Server on the specified port
server.listen(port, () => {
  console.log(`The server is up on port : ${port}.`);
});
