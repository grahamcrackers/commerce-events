module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        tsconfigRootDir: ['./tsconfig.json'],
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['simple-import-sort'],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    overrides: [
        {
            env: {
                jest: true,
            },
            files: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
            extends: ['plugin:jest/recommended'],
        },
    ],
    ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
};
