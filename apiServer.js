module.exports = {
  start (apiConfig) {
    // Get Express Server
    const apiServer = require('express')();

    // Init APIs
    const initializeAllAPI = require('./src/api-initializer');
    initializeAllAPI(apiServer, apiConfig.list);

    // Start HTTP Server on the specified port
    apiServer.listen(apiConfig.port, () => {
      console.log(`API server is up on port : ${apiConfig.port}.`);
    });
  }
};
