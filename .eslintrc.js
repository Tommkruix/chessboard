module.exports = {
  "extends": [
    "airbnb-typescript", 
    "plugin:react/recommended",
    "plugin:import/typescript",
  ],
  "plugins": ["prettier", "react", "@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true
    },
    project: ["./tsconfig.json"],
  },
  "settings": {
    react: {
      version: "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "typescript": {}
    }
  },
  "rules": {
		"react/state-in-constructor": 0,
		"react/jsx-pascal-case": [2, { "allowAllCaps": false }],
		"react/jsx-fragments": 0,
		"react/no-array-index-key": 0,
		"react/jsx-curly-spacing": [2, "always", {"allowMultiline": false}],
		"react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
    "react/no-find-dom-node": 0,
		"react/no-unescaped-entities": 0,
		"react/jsx-one-expression-per-line": 0,
    "react/button-has-type": 0,
    "react/no-access-state-in-setstate": 0,
		"react/destructuring-assignment": 0,
		"react/jsx-curly-spacing": ["error", "always"],
    "react/jsx-tag-spacing": 0,
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [".ts", ".tsx"]
      }
    ],
    "react/jsx-indent": [2, 2],
    "react/react-in-jsx-scope": 0,
		"react/jsx-indent-props": [2, 2],
		"react/require-default-props": 0,
		"react/sort-comp": 0,
		"react/jsx-no-undef": 0,
		"jsx-quotes": [2, "prefer-single"],
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/interactive-supports-focus": 0,
		"jsx-a11y/media-has-caption": 0,
		"jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
		"no-tabs": 0,
		"quote-props": 0,
    "no-prototype-builtins": 0,
    "import/no-unresolved": [
      2, 
      { "caseSensitive": true }
    ],
		"no-unused-vars": "warn",
		"import/order": 0,
		"arrow-body-style": 0,
    "implicit-arrow-linebreak": 0,
    "import/prefer-default-export": 0,
		"no-undef": 0,
    "@typescript-eslint/no-use-before-define": [
      2,
      {
        "functions": false
      }
    ],
    "no-use-before-define": 0,
    "global-require": 1,
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "no-console": 1,
    "eol-last": 2,
		"space-in-parens": ["error", "always"],
		"computed-property-spacing": ["error", "always"],
    "arrow-parens": [2, "always"],
    "max-len": [2, 140],
		"no-plusplus": 0,
    "key-spacing": [
      2,
      {
        "align": {
          "beforeColon": false,
          "afterColon": true,
          "on": "value",
          "mode": "minimum"
        }
      }
    ],
    "object-shorthand": 2,
    "space-before-function-paren": ["error", "always"],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "multiline": true
        }
      }
		],
		"padded-blocks": ["error", "never"],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": {
          "let": 2,
          "const": 3
        },
        "MemberExpression": 1,
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "CallExpression": {
          "arguments": "first"
        },
        "ArrayExpression": "first",
        "ObjectExpression": "first",
        "ImportDeclaration": "first",
        "flatTernaryExpressions": false
      }
    ],
    "camelcase": 1,
    "function-paren-newline": [2, "consistent"],
		"linebreak-style": 0,	
    "no-confusing-arrow": 0,
    "no-nested-ternary": 0,
    "one-var": 0,
    "no-alert": 0,
    "array-bracket-spacing": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "import/no-extraneous-dependencies": [
      0,
      {
        "devDependencies": true,
        "optionalDependencies": true,
        "peerDependencies": false
      }
    ],
    "import/no-cycle": 0,
    "array-callback-return": 0,
  },
}
