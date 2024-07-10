const { override, useBabelRc } = require("customize-cra");
const path = require("path");

// config-overrides.js
module.exports = override(
    useBabelRc()
);

