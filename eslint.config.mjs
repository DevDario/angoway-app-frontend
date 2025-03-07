import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

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
];
