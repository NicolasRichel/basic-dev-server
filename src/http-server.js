module.exports = {
  start ({ port, api }) {
    // Create HTTP Server
    const server = require('express')();
    // Load API
    try {
      require(`./http/${config.api}`)(server);
      console.log(`HTTP API [ ${api} ] is loaded.`);
    } catch (error) {
      console.warn(`Failed to load HTTP API [ ${api} ].`);
    }
    // Start HTTP Server
    server.listen(port, () => {
      console.log(`HTTP server is up and listening on port : ${port}.`);
    });
  }
};
