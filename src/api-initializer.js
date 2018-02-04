// Exports API initialization function
module.exports = (server, api)  => {

	try {
		// Try to load the given API
		require(`./apis/${api}`)(server);
		console.log(`API [ ${api} ] is loaded.`);
	} catch (error) {
		console.log(`Failed to load API [ ${api} ].`);
	}

};
