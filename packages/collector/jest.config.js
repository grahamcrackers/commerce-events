module.exports = {
    ...require('config/jest-package'),
    rootDir: '.',
    // be sure to not overwrite the setupFilesAfterEnv from config/jest-package
    setupFilesAfterEnv: ["@testing-library/jest-dom","<rootDir>/tests/utils/setup.ts"],
};
