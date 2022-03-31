module.exports = {
    ...require('config/jest-package'),
    rootDir: '.',
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
    }
};
