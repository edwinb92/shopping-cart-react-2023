// jest.config.js
export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	globals: {
	  'ts-jest': {
		tsconfig: 'tsconfig.json',
	  },
	},
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleNameMapper: {
	  '\\.(css|less|scss)$': 'identity-obj-proxy',
	  '^@/(.*)$': '<rootDir>/src/$1',
	},
	testMatch: ['<rootDir>/src/**/*.test.{js,ts,tsx}'],
  };