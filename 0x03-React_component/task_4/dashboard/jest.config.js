module.exports = {
  // The root of your source code, typically 'src'
  roots: ['../src'],

  // File extensions to look for when resolving modules
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // Setup files to run before each test
  setupFiles: ['../config/setupTests.js'],

  // Jest transform to process JS and JSX files
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },

  // Test environment
  testEnvironment: 'jsdom',

  // Test match patterns
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // Ignore specific folders
  testPathIgnorePatterns: ['/node_modules/', '/build/'],

  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: '../coverage',
  collectCoverageFrom: ['../src/**/*.js?(x)'],
};
