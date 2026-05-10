const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./out.js').default;

try {
  console.log("Rendering...");
  ReactDOMServer.renderToString(React.createElement(App));
  console.log("Success");
} catch(e) {
  console.error("Runtime Error:");
  console.error(e);
}
