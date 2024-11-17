import unusedImports from "eslint-plugin-unused-imports"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import checkFile from 'eslint-plugin-check-file'
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [...compat.extends("next/core-web-vitals"), {
  plugins: {
    "check-file": checkFile,
    "unused-imports": unusedImports,
    "simple-import-sort": simpleImportSort,
  },

  languageOptions: {
    globals: {},
    ecmaVersion: 5,
    sourceType: "module",
  },

  rules: {
    "no-unused-vars": 1,
    "no-console": 1,
    "jsx-a11y/alt-text": 2,
    "react/react-in-jsx-scope": 0,
    "react-hooks/exhaustive-deps": 0,

    "padding-line-between-statements": ["error", {
      blankLine: "always",
      prev: "import",
      next: "function",
    }],

    "react/display-name": [0, {
      ignoreTranspilerName: false,
    }],

    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{ts,tsx,js,jsx}": "KEBAB_CASE"
      },
      {
        ignoreMiddleExtensions: true
      }
    ],

    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/*": "KEBAB_CASE"
      }
    ],

    "unused-imports/no-unused-imports": "warn",

    "import/newline-after-import": ["error", {
      count: 1,
    }],

    "simple-import-sort/imports": "warn",
  },
}]