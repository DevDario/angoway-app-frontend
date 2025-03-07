import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: Object.fromEntries(
        Object.entries({ ...globals.browser, ...globals.node }).map(([key, value]) => [
          key.trim(), // Trim any whitespace from keys
          value,
        ])
      ),
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettier.configs.recommended, // Enables Prettier rules
  configPrettier, // Disables conflicting ESLint rules
  {
    rules: {
      "prettier/prettier": "error", // Enforce Prettier formatting
    },
  },
];
