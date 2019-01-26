// Exports WebSocket initilization function
module.exports = (server, apis) => {

  apis.forEach( wss => {
    try {
      require(`./wss/${wss}`)(server);
      console.log(`WSS [ ${wss} ] is loaded.`);
		} catch (error) {
			console.warn(`Failed to load WSS [ ${wss} ].`);
		}
  });

}
