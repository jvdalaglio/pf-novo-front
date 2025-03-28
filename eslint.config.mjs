import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      js,
      react: pluginReact,
    },
    extends: [
      "js/recommended",
      pluginReact.configs.recommended, // Certifique-se de que o plugin React esteja sendo estendido corretamente
    ],
  },
  {
    rules: {
      "no-unused-vars": "warn", // Emitir warning para variáveis não utilizadas
      "no-undef": "warn", // Emitir warning para variáveis indefinidas
      "react/react-in-jsx-scope": "off", // Desativa a regra do React
      "react/jsx-uses-react": "off", // Desativa a regra no JSX
      "no-console": [
        "warn",
        {
          allow: [], // Não permite nenhum uso do console (pode remover console.log, console.warn e console.error)
        },
      ],
      indent: ["error", 2],
      "react/jsx-indent": ["error", 2],
    },
  },
  tseslint.configs.recommended, // Mantém as regras recomendadas do TypeScript
]);
