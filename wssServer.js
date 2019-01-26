module.exports = {
  start (wssConfig) {
    // Get Web Socket Server
    const wssServer = new (require('ws')).Server({ port: wssConfig.port });

    // Init WS Services
    const initializeAllWSS = require('./src/wss-initializer');
    initializeAllWSS(wssServer, wssConfig.list);

    console.log(`WSS server is up on port : ${wssConfig.port}.`);
  }
};
