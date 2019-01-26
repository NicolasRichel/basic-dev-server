// Load & Check configuration
const configFile = process.argv.splice(2)[0];
const config = require(`./${configFile ? configFile : 'config'}`);
const checkUp = require('./check-config')(config);

if (checkUp.isOk) {
  if (config.api) {
    require('./apiServer').start(config.api);
  }
  if (config.wss) {
    require('./wssServer').start(config.wss);
  }
} else {
  console.error(`Config Error: ${checkUp.message}`);
}
