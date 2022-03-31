module.exports = {
    ...require('./jest-common'),
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    coverageProvider: 'v8', // do we need this???
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}'],
    moduleFileExtensions: ['js','jsx','json','ts','tsx'],
    transform: {
        '^.+\\.ts$': 'esbuild-jest',
        '^.+\\.js$': 'esbuild-jest',
    },
    coveragePathIgnorePatterns: [],
    coverageThreshold: null,
}
