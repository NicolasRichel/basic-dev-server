module.exports = (config) => {
  let checkUp = { isOk: true, message: '' };
  if (!config) {
    checkUp.isOk = false;
    checkUp.message = 'No configuration found!';
    return checkUp;
  }
  if (!config.api && !config.wss) {
    checkUp.isOk = false;
    checkUp.message = 'No configuration is defined.';
    return checkUp;
  }
  if (config.api) {
    if (!config.api.port) {
      checkUp.isOk = false;
      checkUp.message = 'No port specified for API configuration.';
      return checkUp;
    }
    if (!config.api.list || config.api.list.length===0) {
      checkUp.isOk = false;
      checkUp.message = 'No API specified for API configuration.';
      return checkUp;
    }
  }
  if (config.wss) {
    if (!config.wss.port) {
      checkUp.isOk = false;
      checkUp.message = 'No port specified for WSS configuration.';
      return checkUp;
    }
    if (!config.wss.list || config.wss.list.length===0) {
      checkUp.isOk = false;
      checkUp.message = 'No API specified for WSS configuration.';
      return checkUp;
    }
  }
  return checkUp;
};
