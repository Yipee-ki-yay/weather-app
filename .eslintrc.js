module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@react-native-community",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "never"],
    "coma-dangle": [2, "never"],
    "react/jsx-filename-extantion": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: false },
    ],
  },
};
