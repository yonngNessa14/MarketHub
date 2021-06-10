const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@auth": "src/pages/Auth",
    "@components": "src/components",
  })(config);

  return config;
};
