import globals from "globals";
import tseslint from "typescript-eslint";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-namespace": "off",
    }
  }
];