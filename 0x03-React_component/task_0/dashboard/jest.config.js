module.exports = {
    setupFilesAfterEnv: ['./config/setupTests.js'],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
};