module.exports = {
  start ({ port, api }) {
    // Create Websocket Server
    const server = new (require('ws')).Server({ port: port });
    // Load API
    try {
      require(`./websocket/${api}`)(server);
      console.log(`Websocket API [ ${api} ] is loaded.`);
    } catch (error) {
      console.warn(`Failed to load Websocket API [ ${api} ].`);
    }
    console.log(`Websocket server is up and listening on port : ${port}.`);
  }
};
