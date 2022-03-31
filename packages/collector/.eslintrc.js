module.exports = {
    ...require("config/eslint-package"),
    rules: {
        "@typescript-eslint/default-param-last": ["error"],
        "no-console": ["error"],
        "simple-import-sort/imports": ["error"],
        "simple-import-sort/exports": ["error"],
    },
};
