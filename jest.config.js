module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    ".vue$": "./index.js",
    "^.+\\.vue$": "vue-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!vuetify)"],
};
