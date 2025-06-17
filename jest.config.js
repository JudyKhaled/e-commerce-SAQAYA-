module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.[tj]s$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(vue)$': 'identity-obj-proxy'
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.(js|ts)',
    '<rootDir>/src/**/*.test.(js|ts)'
  ],
};
