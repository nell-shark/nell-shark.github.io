module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 120,
  arrowParens: 'avoid',
  bracketSpacing: true,
  insertPragma: false,
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  requirePragma: false,
  trailingComma: 'none',
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderSeparation: true,
  importOrder: ['^react', '^@mui/(.*)$', '^@/(.*)$', '^[./]']
};
