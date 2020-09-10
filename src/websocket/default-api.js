module.exports = (server) => {
  server.on('connection', (ws) => {
    console.log('New ws connection.');
    ws.on('message', (msg) => {
      ws.send(`Message received: ${msg}`);
      ws.close();
    });
  });
}
