module.exports = {
  "env": {
    "browser": true,
    "commonjs": true
  },
  "plugins": [
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "0.14.0"
    }
  },
  "parser": "babel-eslint",
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",
    "indent": [ "error", 2, { "SwitchCase": 1 } ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
    "no-console": "off",
    "no-unused-vars": [ "error", { "args": "none" } ]
  },
};
