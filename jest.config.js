const { defaults } = require( 'jest-config' );

module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: [ ...defaults.moduleFileExtensions, 'ts', 'tsx' ],
  setupFilesAfterEnv:   [
    '<rootDir>/src/setupTests.ts',
  ],
  moduleNameMapper:     {
    'modulePaths':        [ 'src' ],
    '^@assets(.*)$':      '<rootDir>/src/assets$1',
    '^@images(.*)$':      '<rootDir>/src/assets/images$1',
    '^@scss(.*)$':        '<rootDir>/src/assets/scss$1',
    '^@components(.*)$':  '<rootDir>/src/components$1',
    '^@pages(.*)$':  '<rootDir>/src/pages$1',
    '^@utils(.*)$':       '<rootDir>/src/utils$1',
		'^@helpers(.*)$': 		'<rootDir>/src/helpers$1',
  },
  transform: {
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '^.+\\.(spec\\.ts|tsx)$':       'ts-jest',
  },
  'transformIgnorePatterns': [
    'node_modules/(?!variables/.*)',
  ],

  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};
