const validations = [
  { test: (c) => !!c,
    msg: 'No configuration found!'
  },
  { test: (c) => !!c.http || !!c.websocket || !!c.sse,
    msg: 'No configuration is defined.' },
  { test: ({ http }) => !http || !!http.port,
    msg: 'No port specified for HTTP configuration.'
  },
  { test: ({ http }) => !http || !!http.api,
    msg: 'No API specified for HTTP configuration.'
  },
  { test: ({ websocket }) => !websocket || !!websocket.port,
    msg: 'No port specified for Websocket configuration.'
  },
  { test: ({ websocket }) => !websocket || !!websocket.api,
    msg: 'No API specified for Websocket configuration.'
  },
  { test: ({ sse }) => !sse || !!sse.port,
    msg: 'No port specified for SSE configuration.'
  },
  { test: ({ sse }) => !sse || !!sse.api,
    msg: 'No API specified for SSE configuration.'
  }
];

module.exports = {
  validate (config) {
    let result = { ok: true, msg: '' };
    for (const v of validations) {
      if (!v.test(config)) {
        result.ok = false;
        result.msg = v.msg;
        break;
      }
    }
    return result;
  }
};
