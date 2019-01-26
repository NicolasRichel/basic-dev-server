# Basic Development Server
**Current Version : 2.0.0**

This project aims at providing a very (very (very)) basic development server with
minimal configuration and maximum ease of use in order to make the setup of a
simple develpoment environment deadly fast and easy.

The project is built with the [Express](https://expressjs.com/) framework and is
intended to be modular and adaptable.


## Installation

To use this dev server you need to have [Node.js](https://nodejs.org/en/download/)
installed on your machine.  
Then clone this repository in the directory of your choice and launch : `npm install`
in that directory.  

To run the server launch : `npm start`.  
The server should now be up on localhost and listening on port `8081` (default).

You can stop the server by typing `Ctrl+C`.


## Usage

This little dev server was first developed in order to mock basic REST APIs.
The idea is to provide a simple way to build a fake API that will be used to
test another app that use this API. By extension it allows you to prototype
your API and test some aspects of its behavior before you start a project.

### Create an API

To create a new API, just create a new JS file in the `/src/apis` directory.  
This file will contain your API implemention, it must exports a function that
take a `server` parameter and that defines your API as in an Express app.  
Below is an example for `default-api.js` :

```js
// A basic API for development purpose
module.exports = (server) => {
  server.get('/api', (req, res, next) => {
    res.send('Default API');
  });
  server.get('/', (req, res, next) => {
    res.send('<h1>Hello World !</h1>');
  });
  server.get('/:name', (req, res, next) => {
    res.send(`<h1>Hello ${req.params.name} !</h1>`);
  });
};
```

**Note :** the `basic-dev-server` use the [`nodemon`](https://nodemon.io/) server
to provide an even easier development experience, once the server is started you
can start editing your API code and it will be automatically reloaded when saving,
so that you can immediately test it (e.g in your favorite browser).

### Create a Configuration

You control the port on which the server is listening as well as the APIs that are 
loaded by providing a configuration file.  
Here is an example of such a configuration (see [config.js](./config.js)) :

```js
// Default Config
module.exports = {
  api: {
    port: 8081,
    list: ['default-api']
  }
};
```

 - `api.port`: port on which the server will be listening for incoming requests
 - `api.list`: list of APIs to load

For example if I just defined my new awesome API in a file named `my-awesome-api.js`
and put it in the `/src/api` directory, then I would load this API by adding the
string `'my-awesome-api'` to the `api.list` array.

### Use a Configuration

Once you created your configuration you can tell the server to use it at startup
with the following command : `npm start <my-config>`.

Here `<my-config>` is the name of the configuration file.  
**Note :**
 - if no configuration file is specified the default configuration defined in
  [config.js](./config.js) is loaded
 - only one configuration can be loaded at a time


## Contributing

This `basic-dev-server` is published under the GPLv3 so feel free to use, copy,
redistribute and/or improve it as you like !

(see [LICENSE](./LICENSE.txt) for more details).
