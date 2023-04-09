// -•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•-
// WARNING: Setting "type": "module" in the root package.json will cause esbenp.prettier-vscode fail to load prettier.config.js
// type: "module" - forces all javascript files to be treated as ES Modules, which esbenp.prettier-vscode cannot handle.
// -•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•-
module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  // editorconfig: true, // CLI says this is an unknown option
  printWidth: 120,
  bracketSameLine: true,
  arrowParens: "always",
};
