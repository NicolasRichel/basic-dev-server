module.exports = () => {
  const assert = require('assert').strict;

  console.log('START TEST : check-config.js');
  const checkConfig = require('../check-config');

  (() => {
    console.log('Should check that the config exist');
    let result = checkConfig(undefined);
    assert( !result.isOk );
    assert.equal(result.message, 'No configuration found!');
    result = checkConfig(null);
    assert( !result.isOk );
    assert.equal(result.message, 'No configuration found!');
  })();

  (() => {
    console.log('Should check that a config is defined');
    let result = checkConfig({});
    assert( !result.isOk );
    assert.equal(result.message, 'No configuration is defined.');
  })();

  (() => {
    console.log('Should check that a port value is given for API config');
    let result = checkConfig({
      api: {
        list: ['hello-world-api']
      }
    });
    assert( !result.isOk );
    assert.equal(result.message, 'No port specified for API configuration.');
    result = checkConfig({
      api: {
        port: null,
        list: ['hello-world-api']
      }
    });
    assert( !result.isOk );
    assert.equal(result.message, 'No port specified for API configuration.');
  })();

  (() => {
    console.log('Should check that the given port is a number');
    let result = checkConfig({
      api: {
        port: '8080',
        list: ['hello-world-api']
      }
    });
    assert( !result.isOk );
    assert.equal(result.message, 'The API port must be a number.');
  })();

  (() => {
    console.log('Should check that at least one API is given in the API config');
    let result = checkConfig({
      api: {
        port: 8080
      }
    });
    assert( !result.isOk );
    assert.equal(result.message, 'No API specified for API configuration.');
    result = checkConfig({
      api: {
        port: 8080,
        list: []
      }
    });
    assert( !result.isOk );
    assert.equal(result.message, 'No API specified for API configuration.');
  })();

  console.log('END TEST : check-config.js\n');
};
