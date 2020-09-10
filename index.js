// Load & Check configuration
const configFile = process.argv.splice(2)[0];
const config = require(`./conf/${configFile ? configFile : 'default-conf'}`);
const v = require('./config-validator').validate(config);

if (v.ok) {
  if (config.http) {
    require('./src/http-server').start( config.http );
  }
  if (config.websocket) {
    require('./src/websocket-server').start( config.websocket );
  }
} else {
  console.error(`Config Error: ${v.message}`);
}
