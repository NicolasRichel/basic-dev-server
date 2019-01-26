// Exports API initialization function
module.exports = (server, apis)  => {

	apis.forEach( api => {
		try {
			// Try to load the given API
			require(`./api/${api}`)(server);
			console.log(`API [ ${api} ] is loaded.`);
		} catch (error) {
			console.warn(`Failed to load API [ ${api} ].`);
		}
	});

};
